// Random question data
const quizData = {
  Question: [
    {
      question: "Which of the following is NOT a primary color?",
      options: ["Red", "Green", "Yellow", "Blue"],
      ans: "b",
    },
    {
      question: "Which continent is the largest in terms of land area?",
      options: ["Europe", "Asia", "Afria", "North Americal"],
      ans: "b",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Cu", "Fe"],
      ans: "a",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Gabba", "Canberra", "Melborne"],
      ans: "c",
    },
    {
      question: "What is the author of the Harry Potter?",
      options: ["Ruskin Bonk", "JK Rowling", "Percy Jackson", "Franz Kafka"],
      ans: "b",
    },
  ],
};

//CODE
var btn1 = document.createElement("BUTTON");
var btn2 = document.createElement("BUTTON");
var btn3 = document.createElement("BUTTON");
var btn4 = document.createElement("BUTTON");
var state = 0; //To know whether name is entered or not
function saveName() {
  var person = document.getElementById("myInput").value;
  if (person != null) {
    document.getElementById("demo").innerHTML =
      "Hello " + person + ", Lets begin with the quiz";
    state++;
  }
}
function checkAns(uans, num) {
  if (uans == quizData.Question[num].ans) {
    alert("HOORAAYYY!!");
  }
}
function editButton(btn, num, option) {
  btn.innerHTML =
    option + ")" + quizData.Question[num].options[option.charCodeAt(0) - 97];
  btn.class = "op_class";
  btn.onclick = () => {
    checkAns(option, num);
  };
  return btn;
}
function randQuiz() {
  if (state == 1) {
    var num = Math.floor(Math.random() * 5);
    document.getElementById("ques").innerHTML =
      "Q." + quizData.Question[num].question;
    document.getElementById("qdiv").appendChild(editButton(btn1, num, "a"));
    document.getElementById("qdiv").appendChild(editButton(btn2, num, "b"));
    document.getElementById("qdiv").appendChild(editButton(btn3, num, "c"));
    document.getElementById("qdiv").appendChild(editButton(btn4, num, "d"));
  }
}
