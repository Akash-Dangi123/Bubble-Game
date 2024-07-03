
    // make bubble

function makeBubble(){
   var clutter = "";
  for(let i = 1;i<=90;i++){
      var randNo = Math.floor(Math.random()*10);
      clutter += `<div id="bubble">${randNo}</div>`;
  }
  
    const buubble = document.querySelector("#pannbtm");
    buubble.innerHTML = clutter;
}

//   statr timer
var timer = 15;
function runTimer(){
    var timeintroval = setInterval(function (){
      if(timer>0){
        timer-- ;
        var currentTime = document.querySelector("#myTime");
        currentTime.textContent = timer;
      } else{
        clearInterval(timer);
        var stopgame = document.querySelector("#pannbtm");
        stopgame.innerHTML = `<h1><br><br><br><br><br>Game Over</h1>`;
      }
     
    },1000);
}


        //  hit
      var hitrandom = 0
    function getNewHit(){
      hitrandom = Math.floor(Math.random()*10);
      var newHit = document.querySelector("#hit");
       newHit.textContent = hitrandom ;
    }
    var score = 0;
    function increaseScore(){
      score += 10 ;
      var myScore = document.querySelector("#myScore");
      myScore.textContent = score;
    }

    document.querySelector("#pannbtm")
    .addEventListener("click",function (dets){
      var clickedNo = Number(dets.target.textContent);

      if(clickedNo === hitrandom){
        increaseScore();
        makeBubble();
        getNewHit();
      }
    })

          //  function calls 
runTimer();
makeBubble();
getNewHit();
