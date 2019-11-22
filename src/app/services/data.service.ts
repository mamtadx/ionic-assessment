import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loginUser ={'last_name': 	'Sharma' ,'first_name': 'Tapan' ,'middle_name': 	'N' ,
            'mobile_1': 	'9835452525','gender': 	'M' ,'dob': 	'12-Jun-2000',
            'age': 	19 ,'marital_status': 	'Single' ,'address': 	'Bal Vihar Road' ,'area': 	'Pashan',
            'country_code': 	'IN' ,'state_code': 	'MH' ,'city': 	'Pune' ,'locality': 	'Near Pashan Lake' ,'pincode': 	'450067'
            }
;
  countryCodes = [{"key": "IN", "value": "India"}];
  genderList = [{ "key": "F", "value": "Female" }, { "key": "M", "value": "Male" }, { "key": "O", "value": "Others" }];
  maritalList = [{ "key": "Married", "value": "Married" }, { "key": "Single", "value": "Single" },
  { "key": "Widowed", "value": "Widowed" }, { "key": "Separated", "value": "Separated" }];

  physics_questions = [
    {
      "Q"  : "A sound wave of 42.0-cm wavelength enters the tube shown in the below figure. What must be the smallest radius r such that a minimum will be heard at the detector?",
      "img" : "/assets/question-imgs/physics/sound-q-1.png",
      "choices" : ["18.4×10-2 m", "18.4×100-2 m", "18.4 m", "20.4×10-2 m"],
      "correct" : 0
    },
    {
      "Q"  : "Which part of human ear converts sound vibrations into electrical signals",
      "img" : "",
      "choices" : ["Hammer","Stirrup","Tympanic membrane","Cochlea"],
      "correct" : 1
    },
    {
      "Q"  : "What do dolphins, bats and porpoise use",
      "img" : "",
      "choices" : ["Ultrasound", "Infrasound", "Both a and b", "None of them"],
      "correct" : 2
    }
  ]


constructor() { }
setLoggedInUser(user) {
  this.loginUser = user;
}
getLogggedInUser() {
  return this.loginUser;
}
getGenders() {
  return this.genderList;
}
getCountries() {
  return this.countryCodes
}
getStates() {
  return this.stateCodes;
}
getmaritalStatuses() {
  return this.maritalList;
}
getItemsPerPage() {
  return 10;
}

getItemsPerPage2() {
  return 13;
}
subject;
setSubject( input) {
  this.subject = input;
}
getSubject() {
  return this.subject;
}
getQuestions() {
  if(this.subject == 'physics') {
    return this.physics_questions;
  }else{
    return this.maths_question;
  }
}
testResults;
setTestResults(answers) {
  this.testResults = answers;
}
getTestResults() {
  return this.testResults;
}
startTime;
endTime;
startRecording(){
  console.log('startRecording');
  this.startTime = new Date()
}
finishRecording() {
  this.endTime = new Date()
}
calculateTimeInterval() {
  console.log("startTime", this.startTime);
  console.log("endTime", this.endTime);
  var duration =  this.endTime.getTime().valueOf() - this.startTime.getTime().valueOf();
  duration = Math.floor((duration / 1000)/60);
  return duration;
  // return 10;
}

  stateCodes = [{ "key": "AP", "value": "Andhra Pradesh" },
  { "key": "AR", "value": "Arunachal Pradesh" },
  { "key": "AS", "value": "Assam" },
  { "key": "BR", "value": "Bihar" },
  { "key": "CG", "value": "Chhattisgarh" },
  { "key": "GA", "value": "Goa" },
  { "key": "GJ", "value": "Gujarat" },
  { "key": "HR", "value": "Haryana" },
  { "key": "HP", "value": "Himachal Pradesh" },
  { "key": "JK", "value": "Jammu and Kashmir" },
  { "key": "JH", "value": "Jharkhand" },
  { "key": "KA", "value": "Karnataka" },
  { "key": "KL", "value": "Kerala" },
  { "key": "MP", "value": "Madhya Pradesh" },
  { "key": "MH", "value": "Maharashtra" },
  { "key": "MN", "value": "Manipur" },
  { "key": "ML", "value": "Meghalaya" },
  { "key": "MZ", "value": "Mizoram" },
  { "key": "NL", "value": "Nagaland" },
  { "key": "OR", "value": "Orissa" },
  { "key": "PB", "value": "Punjab" },
  { "key": "RJ", "value": "Rajasthan" },
  { "key": "SK", "value": "Sikkim" },
  { "key": "TN", "value": "Tamil Nadu" },
  { "key": "TR", "value": "Tripura" },
  { "key": "UK", "value": "Uttarakhand" },
  { "key": "UP", "value": "Uttar Pradesh" },
  { "key": "WB", "value": "West Bengal" },
  { "key": "TN", "value": "Tamil Nadu" },
  { "key": "TR", "value": "Tripura" },
  { "key": "AN", "value": "Andaman and Nicobar Islands" },
  { "key": "CH", "value": "Chandigarh" },
  { "key": "DH", "value": "Dadra and Nagar Haveli" },
  { "key": "DD", "value": "Daman and Diu" },
  { "key": "DL", "value": "Delhi" },
  { "key": "LD", "value": "Lakshadweep" },
  { "key": "PY", "value": "Pondicherry" }];

  maths_question = [
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "2D Shapes",
    "Q": "Find the area enclosed between two concentric circles of radii 4 cm and 3 cm.",
    "img": "/assets/question-imgs/maths/q1-math.png",
	"choices" : [
     "24.6 sq cm",
    "21.98 sq cm",
     "54 sq cm",
     "32.4 sq cm"
	 ],
    "correct": "2",
    "difficulty": "Easy",
    "tags": "Area, Circles",
    "multiple_answers": "N",
    "analysis_option1": "Calculation",
    "analysis_option2": "",
    "analysis_option3": "Area Concepts",
    "analysis_option4": "Area Concepts",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "The diameter of a garden roller is 1.4 m and it is 2 m long. How much area will it cover in 5 revolutions?",
    "img": "",
	"choices" : [
     "60 sq m",
    "42 sq m",
     "44 sq m",
     "50 sq m"],
    "correct": "2",
    "difficulty": "Easy",
    "tags": "Area, Cylinder",
    "multiple_answers": "N",
    "analysis_option1": "Calculation",
    "analysis_option2": "",
    "analysis_option3": "Area Concepts",
    "analysis_option4": "Area Concepts",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "A cuboid has total surface area of 40 sq m and its lateral surface area is 26 sq m. Find the area of base.",
    "img": "",
	"choices" : [
     "5 sq m",
    "7 sq m",
     "10 sq m",
     "14 sq m"],
    "correct": "2",
    "difficulty": "Medium",
    "tags": "Cuboid, Area",
    "multiple_answers": "N",
    "analysis_option1": "Calculation",
    "analysis_option2": "",
    "analysis_option3": "Calculation",
    "analysis_option4": "Area Concepts",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "Three metal cubes whose edges measure 3 cm; 4 cm and 5 cm respectively are melted to form a single cube. Find the edge of the new cube. Also find the surface area of the new cube.",
    "img": "",
	"choices" : [
     "5.5 cm",
    "4.5 cm",
     "7 cm",
     "6 cm"],
    "correct": "4",
    "difficulty": "Easy",
    "tags": "Cubes, Area",
    "multiple_answers": "N",
    "analysis_option1": "Cude Concepts",
    "analysis_option2": "Area Concepts",
    "analysis_option3": "Calculation",
    "analysis_option4": "",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "An iron pipe 20 cm long has exterior diameter equal to 50 cm. If the thickness of the pipe is 1cm; find the whole surface area of the pipe.",
    "img": "",
	"choices" : [
     "7000 sq cm",
    "6468 sq cm",
     "6452 sq cm",
     "6314 sq cm"],
    "correct": "2",
    "difficulty": "Medium",
    "tags": "Cylinder, Area",
    "multiple_answers": "N",
    "analysis_option1": "Area Concepts",
    "analysis_option2": "",
    "analysis_option3": "Cylinder Concepts",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "The lateral surface of a cylinder is equal to the curved surface of a cone. If the radius is the same; find the ratio of the height of the cylinder and slant height of the cone.",
    "img": "",
	"choices" : [
     "01:02",
    "01:04",
     "02:01",
     "03:04"],
    "correct": "1",
    "difficulty": "Medium",
    "tags": "Cylinder, Area",
    "multiple_answers": "N",
    "analysis_option1": "Cylinder Concepts",
    "analysis_option2": "",
    "analysis_option3": "Calculation",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "The diameter of a sphere is decreased by 50%. What is the ratio between initial and final curved surface areas?",
    "img": "",
	"choices" : [
     "02:05",
    "04:01",
     "01:04",
     "03:04"],
    "correct": "2",
    "difficulty": "Hard",
    "tags": "Sphere, Area",
    "multiple_answers": "N",
    "analysis_option1": "Sphere Concepts",
    "analysis_option2": "",
    "analysis_option3": "Calculation",
    "analysis_option4": "Area Concepts",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "A godown is in the form of a cuboid measuring 60 m x 40 m x 20 m. How many cuboidal boxes can be stored in it if the volume of one box 0.8 m3 ?",
    "img": "",
	"choices" : [
     12000,
    60000,
     70000,
     80000],
    "correct": "2",
    "difficulty": "Medium",
    "tags": "Cuboid, Volume",
    "multiple_answers": "N",
    "analysis_option1": "Calculation",
    "analysis_option2": "",
    "analysis_option3": "",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "The radius and slant height of a cone are in the ratio 4 : 7. If its curved surface area is 792 sq cm; find its radius.",
    "img": "",
	"choices" : [
     "28 cm",
    "14 cm",
     "21 cm",
     "12 cm"],
    "correct": "4",
    "difficulty": "Medium",
    "tags": "Cone, Area",
    "multiple_answers": "N",
    "analysis_option1": "",
    "analysis_option2": "Calculation",
    "analysis_option3": "",
    "analysis_option4": "",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "Find the volume of the largest right circular cone that can be fitted in a cube whose edge is 14 cm.",
    "img": "",
	"choices" : [
     "718.6 cu cm",
    "345.5 cu cm",
     "500 cu cm",
     "624.8 cu cm"],
    "correct": "1",
    "difficulty": "Medium",
    "tags": "Cone, Volume",
    "multiple_answers": "N",
    "analysis_option1": "",
    "analysis_option2": "",
    "analysis_option3": "Calculation",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "Three equal cubes are placed adjacently in a row. Find the ratio of total surface area of the new cuboid to that of sum of the surface areas of the three cubes.",
    "img": "",
	"choices" : [
     "09:07",
    "12:18",
     "07:09",
     "03:04"],
    "correct": "3",
    "difficulty": "Medium",
    "tags": "Cubes, Volume",
    "multiple_answers": "N",
    "analysis_option1": "",
    "analysis_option2": "Calculation",
    "analysis_option3": "",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "2D Shapes",
    "Q": "The perimeter of a square is 80. What is the area of the square?",
    "img": "",
	"choices" : [
     1600,
    400,
     600,
     200],
    "correct": "2",
    "difficulty": "Easy",
    "tags": "Square, Perimeter, Area",
    "multiple_answers": "N",
    "analysis_option1": "",
    "analysis_option2": "",
    "analysis_option3": "Calculation",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "2D Shapes",
    "Q": "The diagonals of a rhombus are 10 and 24. Find the perimeter of the rhombus.",
    "img": "",
	"choices" : [
     75,
    24,
     60,
     52],
    "correct": "4",
    "difficulty": "Medium",
    "tags": "Rhombus, Perimeter",
    "multiple_answers": "N",
    "analysis_option1": "",
    "analysis_option2": "Calculation",
    "analysis_option3": "",
    "analysis_option4": "",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "2D Shapes",
    "Q": "Which statements describe the properties of a trapezoid/trapezium",
    "img": "",
	"choices" : [
     "The bases are parallel",
    "The diagonals are congruent",
     "The base angles are congruent",
     "The opposite angles are congruent"],
    "correct": "1",
    "difficulty": "Easy",
    "tags": "Trapezoid, Trapezium",
    "multiple_answers": "N",
    "analysis_option1": "Calculation",
    "analysis_option2": "",
    "analysis_option3": "",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "2D Shapes",
    "Q": "The opposite sides of a parallelogram are represented by 2x + 10 and 5x - 20. Find the length of the side of the parallelogram represented by 4x - 1.",
    "img": "",
	"choices" : [
     39,
    40,
     41,
     42],
    "correct": "1",
    "difficulty": "Medium",
    "tags": "Parallelogram",
    "multiple_answers": "N",
    "analysis_option1": "",
    "analysis_option2": "Calculation",
    "analysis_option3": "",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "A right circular cone of radius 3 cm, has a curved surface area of 47.1 sq cm. Find the volume of the cone.",
    "img": "",
	"choices" : [
     37.68,
    22.43,
     33.45,
     43.87],
    "correct": "1",
    "difficulty": "Medium",
    "tags": "Cone, Area, Volume",
    "multiple_answers": "N",
    "analysis_option1": "Volume Concepts",
    "analysis_option2": "",
    "analysis_option3": "",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "In the given figure, a tent is in the shape of a cylinder surmounted by a conical top of same diameter. If the height and diameter of cylindrical part are 2.1 m and 3 m respectively, and the slant height of conical part is 2.8 m, And the cost of canvas needed to make the tent if the canvas is available at the rate of Rs 500 per sq. m.",
    "img": "",
	"choices" : [
     21200,
    16500,
     12300,
     18430],
    "correct": "2",
    "difficulty": "Hard",
    "tags": "Cylinder, Cone, Area",
    "multiple_answers": "N",
    "analysis_option1": "Cone Concepts",
    "analysis_option2": "",
    "analysis_option3": "Calculation",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "A well of diameter 4 m is dug 14 m deep. The earth taken out is spread evenly all around the well to form a 40 cm high embankment. Find the width of the embankment.",
    "img": "",
	"choices" : [
     8.6,
    "10.5M",
     "12m",
     "16M"],
    "correct": "3",
    "difficulty": "Medium",
    "tags": "Cylinder, Volume",
    "multiple_answers": "N",
    "analysis_option1": "",
    "analysis_option2": "Calculation",
    "analysis_option3": "",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "A hemispherical depression is cut from one face of a cubical block, such that diameter ' l' of hemisphere is equal to the edge of cube. Find the surface area of the remaining solid.",
    "img": "",
	"choices" : [
     "((L^2)/4)(24 + π)",
    "((L^2)/4)(14 + π)",
     "((L^2)/4)(34 + π)",
     "((L^2)/4)(12 + π)"],
    "correct": "1",
    "difficulty": "Hard",
    "tags": "Sphere, Area, Cube",
    "multiple_answers": "N",
    "analysis_option1": "Calculation",
    "analysis_option2": "",
    "analysis_option3": "Sphere Concepts",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  },
  {
    "subject": "Math",
    "topic": "Mensuration",
    "subtopic": "3D Shapes",
    "Q": "Water in a canal 6 m wide and 1.5 m deep is flowing with a speed of 10 km/h. How much area in hectare will it irrigate in 30 minutes if 8 cm of standing water is needed?",
    "img": "",
	"choices" : [
     51.25,
    58.25,
     56.25,
     58.75],
    "correct": "3",
    "difficulty": "Hard",
    "tags": "Volume",
    "multiple_answers": "N",
    "analysis_option1": "Calculation",
    "analysis_option2": "",
    "analysis_option3": "",
    "analysis_option4": "Calculation",
    "analysis_option5": ""
  }
];

}
