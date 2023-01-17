const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');
let player = 1;
let player1Dice, player2Dice;
img1.addEventListener('click', ()=>{
	if (player === 1)
	{
		let randomNumber = Math.floor(Math.random() * 6) + 1;
		player1Dice = randomNumber;
		img1.setAttribute("src", `images/dice${randomNumber}.png`);
		player = 2;
	}
	else{
		alert(`It is Player ${player} turn`);
	}
})

img2.addEventListener('click', ()=>{
	if (player === 2)
	{
		let randomNumber = Math.floor(Math.random() * 6) + 1;
		player2Dice = randomNumber;
		img2.setAttribute("src", `images/dice${randomNumber}.png`);
		player = 1;
		if (player1Dice > player2Dice){
			h1.innerHTML = "Player 1 Wins!";
		}
		else if(player2Dice > player1Dice){
			h1.innerHTML = "Player 2 Wins!";
		}
		else{
			h1.innerHTML = "Draw!";
		}
		window.setTimeout(()=>{
			h1.innerHTML = "Dice Game";
		}, 1000);
	}
	else{
		alert(`It is Player ${player} turn`);
	}
})
