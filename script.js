const quizDB = [
	{
		question: "Q1: What is my favourite food?",
		a: "Pizza",
		b: "Panipuri",
		c: "Chinese",
		d: "All of the above",
		ans: "ans4"
	},
	{
		question: "Q2: What is my favourite colour for clothes?",
		a: "Black",
		b: "White",
		c: "Pink",
		d: "All colours",
		ans: "ans4"
	},
	{
		question: "Q3: What is my favourite things to do?",
		a: "Exploring new places",
		b: "Shopping",
		c: "Talk with you",
		d: "Reading the stories",
		ans: "ans3"
	},
	{
		question: "Q4: What is my favourite place ?",
		a: "Udaipur",
		b: "Dubai",
		c: "Goa",
		d: "Maldives",
		ans: "ans1"
	},
	{
		question: "Q5: What is my favourite character from childhood?",
		a: "Chotta Bheem",
		b: "Mickey Mouse",
		c: "Tom and Jerry",
		d: "Sinchan",
		ans: "ans2"
	},
	{
		question: "Q6: What is my favourite movie?",
		a: "Yeh Jawani He Diwani",
		b: "Vivah",
		c: "Chhichhore",
		d: "M.S.Dhoni:The untold Story",
		ans: "ans1"
	},
	{
		question: "Q7: What is my favourite perfume?",
		a: "Calvin Klein",
		b: "Bath & Body Works",
		c: "Victoria Scerets",
		d: "Zara",
		ans: "ans3"
	},
	{
		question: "Q8: What is my favourite chocolate?",
		a: "Oreo slik",
		b: "Reese's",
		c: "Kit-kat",
		d: "Bounty",
		ans: "ans2"
	},
	{
		question: "Q9: What is my favourite T-shirt's Brand?",
		a: "Calvin Klein",
		b: "Aeropostale",
		c: "CoverStory",
		d: "AND",
		ans: "ans2"
	},
	{
		question: "Q10: What is my favourite watch company?",
		a: "Fossil",
		b: "Rolex",
		c: "Rado",
		d: "Michael kors",
		ans: "ans1"
	},
	{
		question: "Q11: What type of footwear I like?",
		a: "Heels",
		b: "Flats",
		c: "Casual Shoes",
		d: "Boots",
		ans: "ans3"
	},
	{
		question: "Q12: What is my favourite Brand for Handbags?",
		a: "Caprese",
		b: "ALDO",
		c: "Michael Kors",
		d: "Coach",
		ans: "ans2"
	},
	{
		question: "Q13: What is my favourite Outfit?",
		a: "Traditional",
		b: "Jeans and Tshirt",
		c: "Shorts",
		d: "Dresses",
		ans: "ans1"
	},
	{
		question: "Q14: What is my favourite singer?",
		a: "Atif Aslam",
		b: "Darshan Raval",
		c: "Armaan Malik",
		d: "Arjit Singh",
		ans: "ans2"
	},
	{
		question: "Q15: Who was my first crush?",
		a: "Darshan Raval",
		b: "Sumedh Mudgalkar",
		c: "Varun Dhavan",
		d: "Parth Samthaan",
		ans: "ans2"
	}

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#op1');
const option2 = document.querySelector('#op2');
const option3 = document.querySelector('#op3');
const option4 = document.querySelector('#op4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.ans');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
	const questionList = quizDB[questionCount];
	question.innerText = questionList.question;
	option1.innerText = questionList.a;
	option2.innerText = questionList.b;
	option3.innerText = questionList.c;
	option4.innerText = questionList.d;
}

loadQuestion();

function pageRedirect(){
	window.location.replace("index1.html")
}
const getCheckAnswer = () => {
	let answer;
	answers.forEach((curAnsEle) => {
		if(curAnsEle.checked){
			answer = curAnsEle.id;
		}
	});
	return answer;
};
const deselectAll = () => {
	answers.forEach((curAnsEle) => curAnsEle.checked = false);
}
submit.addEventListener('click', () => {
	const checkedanswer = getCheckAnswer();
	console.log(checkedanswer);

	if(checkedanswer == quizDB[questionCount].ans){
		score++;
	}
	questionCount++;
	deselectAll();

	if(questionCount < quizDB.length){
		loadQuestion();
	}else{
		var x = document.getElementById('inner-div');
  if(x.style.display == "none"){
    x.style.display="block";
  
  }
  else{
    x.style.display="none";
     
  }
		showScore.innerHTML = `
			<h3> YOU SCORED ${score}/${quizDB.length} &#9996;</h3>
			<button class="btn" onclick = "pageRedirect()">View the answers</button>
	
		`;
		
		showScore.classList.remove('scoreArea');
		
	}
});