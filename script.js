console.log("Stone-Papper-Scissor");
const buttons = document.querySelectorAll(".choice");

buttons.forEach((button) => {
	button.addEventListener("click",() =>{
		const playerChoice =button.getAttribute("data-choice");
		console.log(playerChoice + "clicked");
		
		const choices = ["stone","papper","scissors"];
		const randomIndex = Math.floor((Math.random()*3));
		const ComputerChoice = choices[randomIndex];
		
		let result = "";
		
		if(playerChoice === ComputerChoice){
		   result = "draw";
		}
		else if((playerChoice === "stone" && ComputerChoice === "scissors") ||
			(playerChoice === "papper" && ComputerChoice === "stone") ||
			(playerChoice === "scissors" && ComputerChoice === "papper")
		       ){
			result = "yhh Winner";
		}
		else{
			result = "computer win";
		}

		alert(result);
	});
});