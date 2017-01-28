var questions=[
    {
        question:"1.The major language of world wide web is ? ",
        option1:"HTML",
        option2:"PHP",
        option3:"JAVA",
        option4:"None of these",
    },
    {
        question:"2.LAN is an abbreviation for ?",
        option1:"Local area network ",
        option2:"Large area network",
        option3:"Local access network",
        option4:"None of these",
    },
    {
        question:"3.URL is an abbreviation for ?",
        option1:"Universal Resource Locator",
        option2:"Uniform Resource Locator",
        option3:"Universal Resource Location",
        option4:"None of these",
    },
    {
        question:"4.FTP is an abbreviation for ?",
        option1:"File transfer position",
        option2:"File transfer protocol",
        option3:"File transfer possibility",
        option4:"None of these",
    },
    {
        question:"5.A virus that replicates itself is ?",
        option1:"Bug",
        option2:"Worm",
        option3:"Hoax",
        option4:"None of these",
    },
    {
        question:"6.SQL stands for ?",
        option1:"Structured query language",
        option2:"Sequential query language",
        option3:"Simple query language",
        option4:"None of these",
    },
    {
        question:"7.Another name for free software is ?",
        option1:"Public domain software ",
        option2:"Shareware",
        option3:"Encrypated software",
        option4:"None of these",
    },
    {
        question:"8.A small high speed memory inside the CPU is ?",
        option1:"RAM",
        option2:"ROM",
        option3:"Register",
        option4:"None of these",
    },
    {
        question:"9.GPS stands for ?",
        option1:"Global pointing system",
        option2:"Global positioning system",
        option3:"Google positioning system",
        option4:"None of these",
    },
    {
        question:"10.Caps lock is a ?",
        option1:"Toggle Key",
        option2:"Modifier Key",
        option3:"Window Key",
        option4:"None of these",
    }
]

var correctAnswers=["option1","option1","option2","option2","option2","option1","option1","option3","option2","option1"];
var start=document.getElementById("startquiz");
var timer=document.getElementById("timer");
var quiz=document.getElementById("quiz");
var choice=quiz.getElementsByClassName("answer");
var scoresheet=document.getElementById("scoresheet");
var index=document.getElementById("index");
var answers=document.getElementsByClassName("answer");
var text=document.createElement("h2");
var pscore=document.createElement("h2");
var button=document.getElementById("btn");
var percentage=document.createElement("h2");
var index=0,score=0,total=0,ans=0;
var min=4;
var sec=59;
var interval;
function about(){
    document.getElementById("index").className="hide";
    document.getElementById("abt").className="show";
}
function startQuiz(){
    document.getElementById("index").className="hide";
    document.getElementById("quiz").className="show";
    document.getElementById("scoresheet").className="hide";
     index=0,score=0,total=0,ans=0,min=1,sec=59;
    interval=setInterval(time,1000);
    mainquiz();
}
function mainquiz() {    
    document.getElementById("ques").innerHTML=questions[index].question;
    for(j=0;j<choice.length;j++){
        choice[j].checked=false;
    }
    next.disabled="true";
            choice[0].nextSibling.textContent = questions[index].option1;
            choice[1].nextSibling.textContent = questions[index].option2;
            choice[2].nextSibling.textContent = questions[index].option3;
            choice[3].nextSibling.textContent = questions[index].option4;
}
function nextQuestion() {
    for(var i=0;i<choice.length;i++){
        if(choice[i].checked){
            if(choice[i].value===correctAnswers[ans]){
                score++;
            }
        }
    }
        index++;
        ans++;
        if(index===questions.length){
        mainresult();
        }
        mainquiz();
}    
    
function mainresult(){
    clearInterval(interval);
    quiz.className="hide"
    total=(score/questions.length)*100;
    if(total>=60){
    text.innerHTML="Congratulations! You have Passed.";
    pscore.innerHTML="Correct Answers: "+score+" Out Of "+correctAnswers.length;
    percentage.innerHTML="Score: "+total+" %";
    scoresheet.appendChild(text);
    scoresheet.appendChild(pscore);
    scoresheet.appendChild(percentage);
    scoresheet.appendChild(button);
    }
    else{  
    text.innerHTML="Failed! Better Luck Next Time.";
    pscore.innerHTML="Correct Answers: "+score+" Out Of "+correctAnswers.length;
    percentage.innerHTML="Score: "+total+" %";
    scoresheet.appendChild(text);
    scoresheet.appendChild(pscore);
    scoresheet.appendChild(percentage);   
    scoresheet.appendChild(button);
    }
    scoresheet.className="show";
}

function  enable() {
    next.disabled=false;
}
    function time(){
        timer.innerHTML=min+":"+sec;
        sec--;
        if(sec<0){
            min--;
            sec=59;
            if(min<0){
                alert("Time is up.");
                mainresult();
            }
        }
    }