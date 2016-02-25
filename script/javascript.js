// $(document).ready(function() { commented out for now so that i can access these variables in inspector.

		// Character objects
	var starfox = {
		name: "Star Fox",
		picture: "../images/starfox.png",
		health: 150,
		currentAttack: 0,
		attack: function(){
			this.currentAttack += 4;
		},
		counter: 24
	};

	var mario = {
		name: "Mario",
		picture: "../images/mario.png",
		health: 120,
		currentAttack: 0,
		attack: function(){
			this.currentAttack += 6;
		},
		counter: 30
	};

	var link = {
		name: "Link",
		picture: "../images/link.png",
		health: 150,
		currentAttack: 0,
		attack: function(){
			this.currentAttack += 5;
		},
		counter: 20
	};

	var donkeyKong = {
		name: "Donkey Kong",
		picture: "../images/donkeykong.png",
		health: 190,
		currentAttack: 0,
		attack: function(){
			this.currentAttack += 3;
		},
		counter: 35,
	};


	//Global
	// var player = //INSERT CODE THAT HAS THE PLAYER CHOOSE A CHARACTER BY CLICKING ON THE ASSOCIATED DIV;
	// var enemies = //ARRAY THAT HOLDS ALL OTHER ENEMIES
	// var defender = //CODE THAT HOLDS THE CURRENT BATTLING ENEMY

	//Initial environment code
	function startGame(){
		if (arguments[0] == 'reset') {
			//INSERT CODE THAT WILL RESET ALL PARAMETERS OF THE GAME
		}

		



	startGame();
	}



// }); commented out for now so that i can access these variables in inspector.