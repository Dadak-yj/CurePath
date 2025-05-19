// 다국어 지원을 위한 번역 데이터
const translations = {
    ko: {
        pageTitle: "증상으로 병원 찾기",
        symptomTitle: "증상 선택",
        searchButton: "병원 검색",
        hospitalInfoTitle: "선택한 병원 정보",
        selectHospital: "병원을 선택하세요.",
        myLocation: "내 위치",
        phoneNumber: "전화번호: ",
        noHospitals: "검색된 병원이 없습니다.",
        selectSymptoms: "증상을 선택해주세요.",
        findRoute: "길찾기"
    },
    en: {
        pageTitle: "Find Hospital by Symptoms",
        symptomTitle: "Select Symptoms",
        searchButton: "Search Hospitals",
        hospitalInfoTitle: "Selected Hospital Information",
        selectHospital: "Please select a hospital.",
        myLocation: "My Location",
        phoneNumber: "Phone: ",
        noHospitals: "No hospitals found.",
        selectSymptoms: "Please select symptoms.",
        findRoute: "Get Directions"
    },
    zh: {
        pageTitle: "按症状查找医院",
        symptomTitle: "选择症状",
        searchButton: "搜索医院",
        hospitalInfoTitle: "所选医院信息",
        selectHospital: "请选择一家医院。",
        myLocation: "我的位置",
        phoneNumber: "电话号码: ",
        noHospitals: "未找到医院。",
        selectSymptoms: "请选择症状。",
        findRoute: "获取路线"
    }
};

// symptomTranslations, symptoms, currentLanguage, selectedSymptoms 등은 서버에서 렌더링하거나 별도 js 파일로 분리
// 아래는 Flask 템플릿에서 렌더링되는 부분 예시
// 예시: 실제 증상 번역 데이터를 여기에 입력하세요.
const symptomTranslations = {
    "기침": { en: "Cough", zh: "咳嗽" },
            "인후통": { en: "Sore throat", zh: "喉咙痛" },
            "발열": { en: "Fever", zh: "发热" },
            "복통": { en: "Abdominal pain", zh: "腹痛" },
            "피로감": { en: "Fatigue", zh: "疲劳" },
            "두통": { en: "Headache", zh: "头痛" },
            "소화불량": { en: "Indigestion", zh: "消化不良" },
            "콧물": { en: "Runny nose", zh: "流鼻涕" },
            "만성 통증": { en: "Chronic pain", zh: "慢性疼痛" },
            "관절 통증": { en: "Joint pain", zh: "关节痛" },
            "신경 통증": { en: "Nerve pain", zh: "神经痛" },
            "수술 후 통증 관리": { en: "Post-operative pain management", zh: "术后疼痛管理" },
            "예방 접종": { en: "Vaccination", zh: "预防接种" },
            "건강 상담": { en: "Health consultation", zh: "健康咨询" },
            "성인병 관리": { en: "Adult disease management", zh: "成人病管理" },
            "감염병 관리": { en: "Infectious disease management", zh: "传染病管理" },
            "생리통": { en: "Menstrual pain", zh: "经痛" },
            "임신 확인": { en: "Pregnancy confirmation", zh: "确认怀孕" },
            "분만": { en: "Delivery", zh: "分娩" },
            "여성 건강 검진": { en: "Women's health checkup", zh: "女性健康检查" },
            "피부 미용 시술": { en: "Skin beauty procedures", zh: "皮肤美容手术" },
            "성형 수술 상담": { en: "Plastic surgery consultation", zh: "整形手术咨询" },
            "흉터 치료": { en: "Scar treatment", zh: "疤痕治疗" },
            "레이저 시술": { en: "Laser procedures", zh: "激光手术" },
            "영유아 검진": { en: "Infant checkup", zh: "婴幼儿检查" },
            "성장 상담": { en: "Growth consultation", zh: "成长咨询" },
            "어린이 발열": { en: "Child fever", zh: "儿童发热" },
            "어지럼증": { en: "Dizziness", zh: "眩晕" },
            "마비": { en: "Paralysis", zh: "麻痹" },
            "떨림": { en: "Tremor", zh: "颤抖" },
            "상처 치료": { en: "Wound treatment", zh: "伤口治疗" },
            "탈장 수술": { en: "Hernia surgery", zh: "疝气手术" },
            "맹장 수술": { en: "Appendectomy", zh: "阑尾手术" },
            "종양 제거 수술": { en: "Tumor removal surgery", zh: "肿瘤切除手术" },
            "장기 요양": { en: "Long-term care", zh: "长期护理" },
            "재활 치료": { en: "Rehabilitation", zh: "康复治疗" },
            "만성 질환 관리": { en: "Chronic disease management", zh: "慢性疾病管理" },
            "임종 간호": { en: "End-of-life care", zh: "临终关怀" },
            "코막힘": { en: "Nasal congestion", zh: "鼻塞" },
            "목 통증": { en: "Neck pain", zh: "颈部疼痛" },
            "귀 통증": { en: "Ear pain", zh: "耳痛" },
            "물리 치료": { en: "Physical therapy", zh: "物理治疗" },
            "작업 치료": { en: "Occupational therapy", zh: "职业治疗" },
            "운동 치료": { en: "Exercise therapy", zh: "运动治疗" },
            "통증 재활": { en: "Pain rehabilitation", zh: "疼痛康复" },
            "우울감": { en: "Depression", zh: "抑郁" },
            "불안": { en: "Anxiety", zh: "焦虑" },
            "불면": { en: "Insomnia", zh: "失眠" },
            "스트레스": { en: "Stress", zh: "压力" },
            "골절 치료": { en: "Fracture treatment", zh: "骨折治疗" },
            "인대 손상": { en: "Ligament injury", zh: "韧带损伤" },
            "척추 질환": { en: "Spine disease", zh: "脊椎疾病" },
            "(다양한 증상)": { en: "(Various symptoms)", zh: "(各种症状)" },
            "충치": { en: "Cavity", zh: "蛀牙" },
            "잇몸 통증": { en: "Gum pain", zh: "牙龈痛" },
            "치아 교정 상담": { en: "Dental correction consultation", zh: "牙齿矫正咨询" },
            "구강 검진": { en: "Oral examination", zh: "口腔检查" },
            "피부 발진": { en: "Skin rash", zh: "皮疹" },
            "가려움": { en: "Itching", zh: "瘙痒" },
            "습진": { en: "Eczema", zh: "湿疹" },
            "알레르기": { en: "Allergy", zh: "过敏" },
            "피로": { en: "Fatigue", zh: "疲劳" },
            "근육통": { en: "Muscle pain", zh: "肌肉疼痛" },
            "수면 장애": { en: "Sleep disorder", zh: "睡眠障碍" },
            "소변 불편": { en: "Urinary discomfort", zh: "排尿不适" },
            "옆구리 통증": { en: "Flank pain", zh: "腰部疼痛" },
            "빈뇨": { en: "Frequent urination", zh: "尿频" },
            "잔뇨감": { en: "Residual urine sensation", zh: "残尿感" },
            "(한의원과 유사)": { en: "(Similar to Korean medicine clinic)", zh: "(与韩医院相似)" }
}; // 기존 코드 복사

// 현재 언어 설정
let currentLanguage = "ko";

// 선택된 증상들을 저장할 배열
let selectedSymptoms = [];

// 언어 변경 함수
function changeLanguage() {
    currentLanguage = document.getElementById("languageSelect").value;
    updateUILanguage();
    renderSymptomButtons();
}

// UI 언어 업데이트 함수
function updateUILanguage() {
    const lang = translations[currentLanguage];

    document.getElementById("pageTitle").textContent = lang.pageTitle;
    document.getElementById("symptomTitle").textContent = lang.symptomTitle;
    document.getElementById("searchButton").textContent = lang.searchButton;
    document.getElementById("hospitalInfoTitle").textContent = lang.hospitalInfoTitle;

    const hospitalName = document.getElementById("selected-hospital-name");
    if (hospitalName.textContent === translations.ko.selectHospital) {
        hospitalName.textContent = lang.selectHospital;
    }

    if (userMarker) {
        userMarker.getPopup().setContent(lang.myLocation);
    }
}

// 증상 버튼 렌더링 함수
function renderSymptomButtons() {
    const buttonGroup = document.getElementById("symptomButtons");
    buttonGroup.innerHTML = '';

    symptoms.forEach(symptom => {
        const button = document.createElement("button");
        button.className = "symptom-button";
        button.setAttribute("data-ko", symptom);

        if (currentLanguage === "ko") {
            button.textContent = symptom;
        } else if (currentLanguage === "en" && symptomTranslations[symptom] && symptomTranslations[symptom].en) {
            button.textContent = symptomTranslations[symptom].en;
        } else if (currentLanguage === "zh" && symptomTranslations[symptom] && symptomTranslations[symptom].zh) {
            button.textContent = symptomTranslations[symptom].zh;
        } else {
            button.textContent = symptom;
        }

        if (selectedSymptoms.includes(symptom)) {
            button.classList.add("active");
        }

        button.addEventListener("click", function() {
            this.classList.toggle("active");

            const koreanSymptom = this.getAttribute("data-ko");
            if (this.classList.contains("active")) {
                if (!selectedSymptoms.includes(koreanSymptom)) {
                    selectedSymptoms.push(koreanSymptom);
                }
            } else {
                const index = selectedSymptoms.indexOf(koreanSymptom);
                if (index > -1) {
                    selectedSymptoms.splice(index, 1);
                }
            }

            if (selectedSymptoms.length > 0) {
                const symptomList = selectedSymptoms.join(', ');
                document.getElementById('my-symptom-desc').textContent = `내가 ${symptomList}이(가) 있어서 왔어요`;
            } else {
                document.getElementById('my-symptom-desc').textContent = '';
            }
        });

        buttonGroup.appendChild(button);
    });
}

// 지도 초기화
var map = L.map('map').setView([36.8, 127.15], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var userMarker = null;
var hospitalMarkers = L.layerGroup().addTo(map);

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                map.setView([latitude, longitude], 13);

                if (userMarker) {
                    map.removeLayer(userMarker);
                }

                userMarker = L.marker([latitude, longitude], {icon: redIcon}).addTo(map)
                    .bindPopup(translations[currentLanguage].myLocation).openPopup();
            },
            function(error) {
                console.error("위치 정보를 가져오는데 실패했습니다:", error);
                alert("위치 정보를 가져오는데 실패했습니다. 브라우저 설정에서 위치 접근 권한을 확인해주세요.");
            }
        );
    } else {
        alert("이 브라우저에서는 위치 정보를 지원하지 않습니다.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderSymptomButtons();
    getUserLocation();
    updateUILanguage();

    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
});

document.getElementById('searchButton').addEventListener('click', function() {
    if (selectedSymptoms.length === 0) {
        alert(translations[currentLanguage].selectSymptoms);
        return;
    }

    fetch('/api/get_hospitals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: selectedSymptoms }),
    })
    .then(response => response.json())
    .then(data => {
        hospitalMarkers.clearLayers();
        data.hospitals.forEach(hospital => {
            var marker = L.marker([hospital.Latitude, hospital.Longitude]).addTo(hospitalMarkers)
                .bindPopup(`
                    ${hospital.병원명}<br>
                    <button onclick="findDirections(${hospital.Latitude}, ${hospital.Longitude}, '${hospital.병원명}')">${translations[currentLanguage].findRoute}</button>
                `);

            marker.on('click', function() {
                document.getElementById('selected-hospital-name').textContent = hospital.병원명;
                document.getElementById('selected-hospital-phone').textContent =
                    translations[currentLanguage].phoneNumber + hospital.전화번호;
            });
        });
        if (data.hospitals.length === 0) {
            alert(translations[currentLanguage].noHospitals);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('병원 검색 중 오류가 발생했습니다.');
    });
});

function findDirections(hospitalLat, hospitalLng, hospitalName) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        fetch('/api/find_directions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                originLat: userLat,
                originLng: userLng,
                destLat: hospitalLat,
                destLng: hospitalLng,
                destinationName: hospitalName
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.directions_url) {
                window.open(data.directions_url, '_blank');
            } else if (data.message) {
                alert(data.message);
            } else if (data.error) {
                alert(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('길찾기 정보를 가져오는 중 오류가 발생했습니다.');
        });
    }, function(error) {
        alert('현재 위치를 가져올 수 없습니다.');
    });
}