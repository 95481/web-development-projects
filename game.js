let gameseq = [];
let userseq = [];
let start= false;
let level = 0; 
let btns = ["red","yellow","green","purple"]
document.addEventListener("keypress" , function (){
    if(start==false){
        console.log("button was pressed");
        start=true;
        levelup();
    }});
    h2 = document.querySelector("h2");
    function gameflash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash")} ,250);
    } 
    function userflash(btn){

     btn.classList.add("userflash");
     setTimeout(function(){
        btn.classList.remove("userflash")
     } , 250);
    }
    function levelup(){
        userseq=[];
     level++;
     h2.innerText = `level${level}`;
     let randind= Math.floor(Math.random() *4);
      let randcolor = btns[randind];
      let randbtn = document.querySelector(`.${randcolor}`);
      console.log(randcolor);
      gameseq.push(randcolor);
     gameflash(randbtn);
    }
    function checkAns(ind){
        if(userseq[ind]==gameseq[ind]){
            if(userseq.length==gameseq.length){
            setTimeout(levelup, 1000);
            }
        
        }
        else{
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white"; }, 500 );
            h2.innerHTML = `game over! your score was <b>${level} </b><br> press any key to start `;
            reset();
        }
        }
    let allbtns = document.querySelectorAll(".btn");
    for(btn of allbtns)
    {
        btn.addEventListener("click",buttonpress);
    }
    function buttonpress(){
        console.log(this);
        btn = this;
       userflash(btn);
        usercolor = btn.getAttribute("id");
        userseq.push(usercolor);
        checkAns(userseq.length-1);
    }
    function reset() {
        gameseq=[];
        userseq=[];
        start=false;
        level = 0;
    }    