const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "IBM"],
    answer: "Netscape"
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    options: ["//", "symbol", "comments", "comm"],
    answer: "//"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: "React"
  }
];

let current = 0;

function showQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = `Q${current + 1}: ${q.question}`;
  const optionsHTML = q.options.map(opt =>
    `<li><button onclick="checkAnswer('${opt}')">${opt}</button></li>`
  ).join("");
  document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected) {
  const correct = quiz[current].answer;
  alert(selected === correct ? "Your Answer is Correct" : `Your Answer is Wrong. Correct: ${correct}`);
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h2>Quiz Completed</h2>
      <p>You've finished the quiz.</p>
    `;
  }
}

// Weather API function
async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "1ddfe6d3b7f014a1bf35d2b1ccf87d39"; // ✅ Your real API key
  
    if (!city) {
      document.getElementById("Weather").textContent = "Please enter a city name.";
      return;
    }
  
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!res.ok) throw new Error("City not found");
  
      const data = await res.json();
      const weatherInfo = `Weather in ${data.name}: ${data.weather[0].description}, Temp: ${data.main.temp}°C`;
      document.getElementById("Weather").textContent = weatherInfo;
    } catch (err) {
      document.getElementById("Weather").textContent = "Couldn't fetch weather. Please check the city name!";
    }
  }
  
  // Init
  showQuestion();
  