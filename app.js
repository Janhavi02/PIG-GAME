//GAME RULES

var scores, roundScore, activePlayer,dice, gamePlaying=true,winningScore,prev,dice1;


 initialise();
  decidewinningscore();
 

document.querySelector('.btn-roll').addEventListener('click',function () {
       if(gamePlaying){
       	  //1.generating numbers
       	  
        dice=Math.floor(Math.random()*6)+1;
        document.getElementById('current-'+ activePlayer).textContent = dice;

        dice1=Math.floor(Math.random()*6)+1;
        document.getElementById('current-'+ activePlayer).textContent = dice1;

       //2.dice display
         var diceDOM=document.querySelector('.dice');
         diceDOM.style.display='block';
         diceDOM.src='dice-'+dice+'.png';

        var diceDOM1=document.querySelector('.dice1');
         diceDOM1.style.display='block';
         diceDOM1.src='dice-'+dice1+'.png';

        // 2. if dice rolled!= 1, update the round score
     if(dice!=1&&dice1!=1){
     	//add score
     	roundScore += dice;
     	roundScore += dice1;
     	document.getElementById('current-'+ activePlayer).textContent = roundScore;
     }
     else {
     	//next player
     nextPlayer();

    }

    //3. if rolled two six  ,current score=0 
 		if (dice==6&&prev==6) {
 			scores[activePlayer]=0;
 			document.getElementById('score-'+activePlayer).textContent='0';
 			nextPlayer();
 		}
  }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
     if (gamePlaying) {
     	// add current score to score
     scores[activePlayer] += roundScore;
     document.getElementById('score-'+ activePlayer).textContent= scores[activePlayer];

      // check if the player won the game
     if(scores[activePlayer]>=winningScore){
     document.getElementById('name-'+activePlayer).innerHTML='<strong>'+'WINNER'+'<strong>'; 
     document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
     gamePlaying=false;
     } 

   //next player
     nextPlayer();
     }
   
 });

function nextPlayer(){
	   activePlayer === 0 ? activePlayer=1: activePlayer=0;
      roundScore=0;
      document.getElementById('current-1').textContent='0';
      document.getElementById('current-0').textContent='0';

      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

     document.querySelector('.dice').style.display='none';
     document.querySelector('.dice1').style.display='none';

}
document.querySelector('.btn-new').addEventListener('click',initialise);

function initialise (){
	scores=[0,0];
	roundScore=0;
	activePlayer=0;
	gamePlaying=true;
 	document.getElementById('Final-Score').innerHTML='Final Score';
	decidewinningscore();

	document.querySelector('.dice').style.display='none';
	document.querySelector('.dice1').style.display='none';

	document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';

	document.getElementById('name-0').textContent='PLAYER 1';
	document.getElementById('name-1').textContent='PLAYER 2';
}

 function decidewinningscore() {
 	document.querySelector('.btn-press').onclick=function () {
     winningScore=document.getElementById('Final-Score').value;
     document.getElementById('Final-Score').style.color='red';
  	
  }
 }
























