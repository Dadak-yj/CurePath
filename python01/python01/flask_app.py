from flask import Flask, request, jsonify, render_template
import pandas as pd
from googlesearch import search  # google_search 라이브러리 임포트

app = Flask(__name__)

# CSV 파일 경로
HOSPITAL_DATA_PATH = 'data/list_hospital_with_fk.csv'
SYMPTOMS_DATA_PATH = 'data/department_symptoms.csv'

try:
    hospitals_df = pd.read_csv(HOSPITAL_DATA_PATH, encoding='utf-8')
    symptoms_df = pd.read_csv(SYMPTOMS_DATA_PATH, encoding='utf-8')
except FileNotFoundError as e:
    print(f"Error: CSV 파일 '{e.filename}'을 찾을 수 없습니다.")
    exit()
except Exception as e:
    print(f"Error: CSV 파일을 로드하는 동안 오류가 발생했습니다: {e}")
    exit()

# 컬럼명 변경 없이 원본 컬럼명 사용
if '외래키' not in hospitals_df.columns:
    print("Error: 'list_hospital_with_fk.csv' 파일에 '외래키' 컬럼이 없습니다.")
    exit()
if '증상' not in symptoms_df.columns or '외래키' not in symptoms_df.columns:
    print("Error: 'department_symptoms.csv' 파일에 '증상' 또는 '외래키' 컬럼이 없습니다.")
    exit()
if '병원명' not in hospitals_df.columns or 'Latitude' not in hospitals_df.columns or 'Longitude' not in hospitals_df.columns:
    print("Error: 'list_hospital_with_fk.csv' 파일에 '병원명', 'Latitude', 'Longitude' 컬럼이 없습니다.")
    exit()

@app.route('/')
def index():
    symptom_list = symptoms_df['증상'].unique().tolist()
    return render_template('index.html', symptoms=symptom_list)

@app.route('/api/get_hospitals', methods=['POST'])
def get_hospitals():
    data = request.get_json()
    selected_symptoms = data.get('symptoms', [])

    if not selected_symptoms:
        return jsonify({'hospitals': []})

    matching_fks = symptoms_df[symptoms_df['증상'].isin(selected_symptoms)]['외래키'].unique().tolist()
    filtered_hospitals = hospitals_df[hospitals_df['외래키'].isin(matching_fks)]
    hospitals_data = filtered_hospitals[['병원명', '전화번호', 'Latitude', 'Longitude']].to_dict(orient='records')

    return jsonify({'hospitals': hospitals_data})

@app.route('/api/find_directions', methods=['POST'])
def find_directions():
    data = request.get_json()
    origin_lat = data.get('originLat')
    origin_lng = data.get('originLng')
    dest_lat = data.get('destLat')
    dest_lng = data.get('destLng')
    destination_name = data.get('destinationName')

    if not all([origin_lat, origin_lng, dest_lat, dest_lng]):
        return jsonify({'error': 'Origin and destination coordinates are required'}), 400

    # Google 지도 URL 직접 생성 (출발지, 목적지 좌표 사용)
    directions_url = f"https://www.google.com/maps/dir/?api=1&origin={origin_lat},{origin_lng}&destination={dest_lat},{dest_lng}&travelmode=driving"  # 또는 walking, transit 등

    return jsonify({'directions_url': directions_url})

if __name__ == '__main__':
    app.run(debug=True, port=5000)