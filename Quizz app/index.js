const quizDb = [
  {
    question: "An athlete runs 200 metres race in 24 seconds. His speed is:",
    a: "20 km/hr",
    b: "24 km/hr",
    c: "28.5 km/hr",
    d: "30 km/hr",
    ans: "ans2"
  },
  {
    question: "Which of the following trains is the fastest?",
    a: "25 m / sec",
    b: "1500 m / min",
    c: "90 km / hr",
    d: "None of these",
    ans: "ans3"
  },
  {
    question: "A car is running at a speed of 108 kmph. What distance will it cover in 15 seconds?",
    a: "45 metres",
    b: "55 metres",
    c: "450 metres",
    d: "Cannot be determined",
    e: "None of these",
    ans: "ans4"
  },
  {
    question: "A truck covers a distance of 550 metres in 1 minute whereas a bus covers a distance of 33 kms in 45 minutes. The ratio of their speeds is:",
    a: "3 : 4",
    b: "4 : 3",
    c: "3 : 5",
    d: "50 : 3",
    ans: "ans2"
  },
  {
    question: "An express train travelled at an average speed of 100 km / hr, stopping for 3 minutes after every 75 km. How long did it take to reach its destination 600 km from the starting point?",
    a: "6 hrs 21 min",
    b: "6 hrs 24 min",
    c: "6 hrs 27 min",
    d: "6 hrs 30 min",
    ans: "ans2"
  },
  {
    question: "A certain distance is covered by a cyclist at a certain speed. If a jogger covers half the distance in double the time, the ratio of the speed of the jogger to that of the cyclist is:",
    a: "1 : 2",
    b: "2 : 1",
    c: "1 : 4",
    d: "4 : 1",
    ans: "ans1"
  },
  {
    question: "A person has to cover a distance of 6 km in minutes. If he covers one-half of the distance in two-thirds of the total time; to cover the remaining distance in the remaining time, his speed (in km / hr) must be:",
    a: "6",
    b: "8",
    c: "12",
    d: "15",
    ans: "ans2"
  },
  {
    question: "A is faster than B. A and B each walk 24 km. The sum of their speeds is 7 km / hr and the sum of times taken by them is 14 hours. Then, A's speed is equal to:",
    a: "3 km / hr",
    b: "4 km / hr",
    c: "5 km / hr",
    d: "7 km / hr",
    ans: "ans3"
  },
  {
    question: "The average speed of a train in the onward journey is 25% more than that in the return journey. The train halts for one hour on reaching the destination. The total time taken for the complete to and fro journey is 17 hours, covering a distance of 800 km. The speed of the train in the onward journey is:",
    a: "45 km / hr",
    b: "47.5 km / hr",
    c: "52 km / hr",
    d: "56.25 km / hr",
    ans: "ans2"
  },
  {
    question: "A man on tour travels first 160 km at 64 km / hr and the next 160 km / hr at 80 km / hr. the average speed for the first 320 km of the tour is:",
    a: "35.55 km / hr",
    b: "36 km / hr",
    c: "71.11 km / hr",
    d: "71 km / hr",
    ans: "ans3"
  },
  {
    question: "Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10 kmph; he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?",
    a: "8 kmph",
    b: "11 kmph",
    c: "12 kmph",
    d: "14 kmph",
    ans: "ans2"
  },
  {
    question: "If a train runs at 40 kmph, it reaches its destination late by 11 minutes but if it runs at 50 kmph, it is late by 5 minutes only. The correct time for the train to complete its journey is:",
    a: "13 min.",
    b: "15 min.",
    c: "19 min.",
    d: "21 min.",
    ans: "ans3"
  },
  {
    question: "A car travels from P to Q at a constant speed. If its speed were increased by 10 km / hr, it would have taken one hour lesser to cover the distance. It would have taken further 45 minutes lesser if the speed was further increased by 10 km / hr. What is the distance between the two cities?",
    a: "420 km",
    b: "540 km",
    c: "600 km",
    d: "650 km",
    ans: "ans3"
  },
  {
    question: "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
    a: "9",
    b: "10",
    c: "12",
    d: "20",
    ans: "ans3"
  }
];

// ,
//   {
//     question: "If a person walks at 14 km / hr instead of 10 km / hr, he would have walked 20 km more. The actual distance travelled by him is:",
//     a: "50 km",
//     b: "56 km",
//     c: "70 km",
//     d: "80 km",
//     ans: "ans2"
//   },
//   {
//     question: "It takes eight hours for a 600 km journey, if 120 km is done by train and the rest by car. The ratio of the speed of the train to that of the car is:",
//     a: "2 : 3",
//     b: "3 : 2",
//     c: "3 : 4",
//     d: "4 : 3",
//     ans: "ans2"
//   },
//   {
//     question: "Two men starting from the same place walk at the rate of 5 kmph and 5.5 kmph respectively. What time will they take to be 8.5 km apart, if they walk in the same direction?",
//     a: "4 hrs 15 min",
//     b: "8 hrs 30 min",
//     c: "16 hrs",
//     d: "17 hrs",
//     ans: "ans1"
//   },
//   {
//     question: "A walks at 4 kmph and 4 hours after his start, B cycles after him at 10 kmph. How far from the start does B catch up with A?",
//     a: "16.7 km",
//     b: "18.6 km",
//     c: "21.5 km",
//     d: "26.7 km",
//     ans: "ans2"
//   },
//   {
//     question: "The jogging track in a sports complex is 726 metres in circumference. Deepak and his wife start from the same point and walk in opposite directions at 4.5 km/hr and 3.75 km/hr respectively. They will meet for the first time in:",
//     a: "4.9 min",
//     b: "5.28 min",
//     c: "5.5 min",
//     d: "6 min",
//     ans: "ans3"
//   },
//   {
//     question: "A and B walk around a circular track. They start at 8 a.m. from the same point in the opposite directions. A and B walk at a speed of 2 rounds per hour and 3 rounds per hour respectively. How many times shall they cross each other before 9.30 a.m.?",
//     a: "5",
//     b: "6",
//     c: "7",
//     d: "8",
//     ans: "ans2"
//   },
//   {
//     question: "Two cars P and Q start at the same time from A and B which are 120 km apart. If the two cars travel in opposite directions, they meet after one hour and if they travel in the same direction (from A towards B), then P meets Q after 6 hours. What is the speed of car P?",
//     a: "60 kmph",
//     b: "70 kmph",
//     c: "120 kmph",
//     d: "Data inadequate",
//     ans: "ans2"
//   },
//   {
//     question: "A train M leaves Meerut at 5 a.m. and reaches Delhi at 9 a.m. Another train leaves Delhi at 7 a.m. and reaches Meerut at 10.30 a.m. At what time do the two trains cross each other?",
//     a: "7.36 a.m.",
//     b: "7.56 a.m.",
//     c: "8 a.m.",
//     d: "8.26 a.m.",
//     ans: "ans2"
//   },

//   {
//     question: "One of the two buses completes a journey of 300 km in hours and the other a journey of 450 km in 9 hours. The ratio of their average speeds is:",
//     a: "2 : 3",
//     b: "3 : 4",
//     c: "4 : 5",
//     d: "8 : 9",
//     ans: "ans1"
//   },
//   {
//     question: "A train travels at an average of 50 miles per hour for hours and then travels at a speed of 70 miles per hour for hours. How far did the train travel in the entire 4 hours?",
//     a: "120 miles",
//     b: "150 miles",
//     c: "200 miles",
//     d: "230 miles",
//     ans: "ans3"
//   },
//   {
//     question: "A motor car starts with the speed of 70 km/hr with its speed increasing every two hours by 10 kmph. In how many hours will it cover 345 kms?",
//     a: "4.5 hrs",
//     b: "4 hrs 5 min",
//     c: "5 hrs",
//     d: "Cannot be determined",
//     e: "None of these",
//     ans: "ans1"
//   },
//   {
//     question: "I started on my bicycle at 7 a.m. to reach a certain place. After going a certain distance, my bicycle went out of order. Consequently, I rested for 35 minutes and came back to my house walking all the way. I reached my house at 1 p.m. If my cycling speed is 10 kmph and my walking speed is 1 kmph, then the distance covered by my bicycle is:",
//     a: "30 km",
//     b: "35 km",
//     c: "40 km",
//     d: "45 km",
//     ans: "ans2"
//   },
//   {
//     question: "Starting from his house one day, a student walks at a speed of kmph and reaches his school 6 minutes late. The next day he increases his speed by 1 kmph and reaches the school 6 minutes early. How far is the school from his house?",
//     a: "1 km",
//     b: "2 km",
//     c: "3 km",
//     d: "4 km",
//     ans: "ans2"
//   },
//   {
//     question: "In covering a certain distance, the speeds of A and B are in the ratio of 3 : 4. A takes 30 minutes more than B to reach the destination. The time taken by A to reach the destination is:",
//     a: "1 hour",
//     b: "1.5 hours",
//     c: "2 hours",
//     d: "2.5 hours",
//     ans: "ans4"
//   },
//   {
//     question: "With a uniform speed, a car covers the distance in 8 hours. Had the speed been increased by 4 km/hr, the same distance could have been covered in 6 hours. What is the distance covered?",
//     a: "420 km",
//     b: "480 km",
//     c: "640 km",
//     d: "Cannot be determined",
//     e: "None of these",
//     ans: "ans3"
//   }

const questn=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const suBtn=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showscore")

let score=0;
let qCount=0;
const loadQuestion=()=>{

  // console.log(quizDb[0].question);
  // console.log(quizDb[0].ans)
  const qList=quizDb[qCount];
  // console.log(qList.ans)
  questn.innerText=qList.question;
  option1.innerText=qList.a;
  option2.innerText=qList.b;
  option3.innerText=qList.c;
  option4.innerText=qList.d;
}
loadQuestion();

const getCheckAnswer=()=>{
  let ans;
  answers.forEach((curr)=>{
    if(curr.checked){
      ans=curr.id;
    }
  });
  return ans;
};
deselectAll=()=>{
  answers.forEach((e)=>e.checked=false);

}
suBtn.addEventListener("click",()=>{
  const checkAns=getCheckAnswer();
  console.log(checkAns);

  if(checkAns===quizDb[qCount].ans){
    score++;
  }
  qCount++;
  deselectAll();
  if(qCount<quizDb.length){
    loadQuestion();
  }else{
    showScore.innerHTML=`<h3>You Scored ${score}/${quizDb.length}</h3>
    <button class="btn" onclick="location.reload()">Reset </button>`;
    showScore.classList.remove('score');


  }
});


