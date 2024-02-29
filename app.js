// FORTUNE WEBSITE
var quizData = {
  Question: [
    {
      question: "Which of the following is NOT a primary color?",
      a: "Red",
      b: "Green",
      c: "Yellow",
      d: "Blue",
      ans: "b",
    },
    {
      question: "Which continent is the largest in terms of land area?",
      a: "Europe",
      b: "Asia",
      c: "Afria",
      d: "North Americal",
      ans: "b",
    },
    {
      question: "What is the chemical symbol for gold?",
      a: "Au",
      b: "Ag",
      c: "Cu",
      d: "Fe",
      ans: "a",
    },
    {
      question: "What is the capital of Australia?",
      a: "Sydney",
      b: "Gabba",
      c: "Canberra",
      d: "Melborne",
      ans: "c",
    },
    {
      question: "What is the author of the Harry Potter?",
      a: "Ruskin Bonk",
      b: "JK Rowling",
      c: "Percy Jackson",
      d: "Franz Kafka",
      ans: "b",
    },
  ],
};
var state = false; //To know whether name is entered or not
function saveName() {
  let person = prompt("Enter name to play Quiz", "default");

  if (person != null) {
    document.getElementById("demo").innerHTML =
      "Hello " + person + ", Lets begin with the quiz";
    state = true;
  }
}
function checkAns(uans, num) {
  if (uans == quizData.Question[num].ans) {
    alert("HOORAAYYY!!");
  }
}
function randQuiz() {
  if (state) {
    var num = Math.floor(Math.random() * 5);
    document.getElementById("ques").innerHTML =
      "Q." + quizData.Question[num].question;
    //
    const btn1 = document.createElement("BUTTON");
    var option; //To accepts the user's answer
    btn1.innerHTML = "a)" + quizData.Question[num].a;
    btn1.class = "op_class";
    btn1.onclick = () => {
      checkAns("a", num);
    };
    //
    const btn2 = document.createElement("BUTTON");
    btn2.innerHTML = "b)" + quizData.Question[num].b;
    btn2.class = "op_class";
    btn2.onclick = () => {
      checkAns("b", num);
    };
    //
    const btn3 = document.createElement("BUTTON");
    btn3.innerHTML = "c)" + quizData.Question[num].c;
    btn3.class = "op_class";
    btn3.onclick = () => {
      checkAns("c", num);
    };
    //
    const btn4 = document.createElement("BUTTON");
    btn4.innerHTML = "d)" + quizData.Question[num].d;
    btn4.class = "op_class";
    btn4.onclick = () => {
      checkAns("d", num);
    };
    document.getElementById("qdiv").appendChild(btn1);
    document.getElementById("qdiv").appendChild(btn2);
    document.getElementById("qdiv").appendChild(btn3);
    document.getElementById("qdiv").appendChild(btn4);
  }
}
