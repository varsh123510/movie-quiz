let questions = [
  {
    question: "🎬 Which movie gave Vikram the title 'Chiyaan'?",
    options: ["Sethu", "Saamy", "Anniyan", "Raavanan"],
    answer: "Sethu"
  },
  {
    question: "🤖 In which movie did Rajinikanth play a dual role of scientist and robot?",
    options: ["Kabali", "Robot", "2.0", "Shivaji"],
    answer: "Robot"
  },
  {
    question: "🔫 What is the name of the character played by Vijay in 'Thuppakki'?",
    options: ["Jeeva", "Vetri", "Jagadish", "Suriya"],
    answer: "Jagadish"
  },
  {
    question: "🏆 Which Tamil movie was India's official entry to Oscars in 1997?",
    options: ["Minsara Kanavu", "Jeans", "Indian", "Kuruthipunal"],
    answer: "Kuruthipunal"
  },
  {
    question: "🧠 Who played the role of Bodhi Dharman in '7aum Arivu'?",
    options: ["Vijay", "Dhanush", "Suriya", "Vikram"],
    answer: "Suriya"
  }
];

// 🎲 Shuffle questions
questions = questions.sort(() => Math.random() - 0.5);

let currentQ = 0;
let score = 0;

// 🎬 Start the quiz
function startQuiz() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

// 📄 Display the current question
function showQuestion() {
  const q = questions[currentQ];
  document.getElementById("question").innerText = q.question;
  const optBox = document.getElementById("options");
  optBox.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(option, q.answer);
    optBox.appendChild(btn);
  });
}

// ✅ Check answer
function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    alert("✅ Correct answer! 🥳");
  } else {
    alert(`❌ Oops! The correct answer is: ${correct}`);
  }
}

// 👉 Move to next question
function nextQuestion() {
  currentQ++;
  if (currentQ < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score-container").innerText =
      `✨ You scored ${score} out of ${questions.length}!`;
  }
}