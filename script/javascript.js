// $(document).ready(function() { commented out for now so that i can access these variables in inspector.

		// Character objects
	var starfox = {
		name: "Star Fox",
		indexNum: 0,
		picture: "images/starfox.png",
		health: 150,
		baseAttack: 4,
		currentAttack: 0,
		attack: function(){
			this.currentAttack += 4;
		},
		counter: 24,
	};

	var mario = {
		name: "Mario",
		indexNum: 1,
		picture: "images/mario.png",
		health: 120,
		baseAttack: 6,
		currentAttack: 0,
		attack: function(){
			this.currentAttack += 6;
		},
		counter: 30,
	};

	var link = {
		name: "Link",
		indexNum: 2,
		picture: "images/link.png",
		health: 150,
		baseAttack: 5,
		currentAttack: 0,
		attack: function(){
			this.currentAttack += 5;
		},
		counter: 20,
	};

	var donkeyKong = {
		name: "Donkey Kong",
		indexNum: 3,
		picture: "images/donkeyKong.png",
		health: 190,
		baseAttack: 3,	
		currentAttack: 0,
		attack: function(){
			this.currentAttack += 3;
		},
		counter: 35, 
	};


	var charArray = [starfox, mario, link, donkeyKong];

	for (var i = 0; i < charArray.length; i++) {
		var choiceView = function(){
		return "<h1>" + this.name + "</h1><img src='" + this.picture + "' /><h2>Health Points: <br/>" + this.health + "</h2><h3>Base Attack: " + this.baseAttack + "</h3>"
		};
		charArray[i].choiceCode = choiceView;

		var battleView = function(){
		return "<div class='headBar'><h1>" + this.name + "</h1><h2>" + this.health + "HP</h2><div class='clearfix'></div></div><img src='" + this.picture + "' />" 
		};	
		charArray[i].battleCode = battleView;

		var newDiv = $('<div>');
		$(newDiv).addClass("characterBlock");
		$(newDiv).html(charArray[i].choiceCode());
		$(newDiv).attr('data-index', charArray[i].indexNum);
		$('#characters').append(newDiv);
	}

	//Global
	var player = undefined;
	var defender = undefined;
	// var defender = //code THAT HOLDS THE CURRENT BATTLING ENEMY
	

		

	$('.characterBlock').on('click', function(){
		var index = $(this).data('index');
		player = charArray[index];					//the variable player is equal to the OBJECT that corresponds to the div that the user clicked on
		$('#characters').empty();

		var playerDiv = $('<div class="character" id="player">');
		(playerDiv).html(player.battleCode())
		$('#environment').append(playerDiv);
		charArray.splice(index, 1)					//Removes the player character from the OBJECT character array

		for (var i = 0; i < charArray.length; i++) {
			charArray[i].indexNum = i;				//updates indexNum key to correspond to charArray index
			
			var enemyDiv = $('<div class="character active enemy">');	//Creates a new enemy div for each enemy
			$(enemyDiv).attr('id', 'num' + charArray[i].indexNum);	//Gives each enemyDiv a unique id so that they can be placed accurately
			$(enemyDiv).attr('data-index', charArray[i].indexNum);
			$(enemyDiv).html(charArray[i].battleCode());		//Adds corresponding enemy code to div
			$('#enemyEnvironment').append(enemyDiv);
		}
		
		active();
	});

function isDead(){
	if (defender.health < 0) {
		return true;
	} 
	return false;
};

function active(){ $('.active').on('click', function(){
			$('#enemyEnvironment').empty()
			var index = $(this).data('index');
			defender = charArray[index];
			var defenderDiv = $('<div class="character defender">');
			$(defenderDiv).attr('id', 'num'+ index);
			$(defenderDiv).html(defender.battleCode());
			var attackButton = $('<button class="attack-button">Attack</button>');
			$(defenderDiv).append(attackButton);
			$('#enemyEnvironment').append(defenderDiv);

			$('body .main #enemyEnvironment').on('click', function(){
				defender.health = defender.health - player.currentAttack;
				player.attack();
				$(defenderDiv).html(defender.battleCode());
				$(defenderDiv).append(attackButton);
				if (isDead()) {
					defender.health = 0;
					$(defenderDiv).html(defender.battleCode());
					active();
				}
			})
		});
		}
// }); commented out for now so that i can access these variables in inspector.