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

	var choiceView = function(){
		return "<h1>" + this.name + "</h1><img src='" + this.picture + "' /><h2>Health Points: <br/>" + this.health + "</h2><h3>Base Attack: " + this.baseAttack + "</h3>"
	};

	starfox.choiceCode = choiceView;
	mario.choiceCode = choiceView;
	link.choiceCode = choiceView;
	donkeyKong.choiceCode = choiceView;

	var battleView = function(){
		return "<div class='headBar'><h1>" + this.name + "</h1><h2>" + this.health + "HP</h2><div class='clearfix'></div></div><img src='" + this.picture + "' />" 
	};

	starfox.battleCode = battleView;
	mario.battleCode = battleView;
	link.battleCode = battleView;
	donkeyKong.battleCode = battleView;
	//Global
	var player = undefined;
	// var enemies = //ARRAY THAT HOLDS ALL OTHER ENEMIES
	// var defender = //code THAT HOLDS THE CURRENT BATTLING ENEMY
	
		// Character Builds for choice Menu
	var starfoxDiv = $('<div>');
	$(starfoxDiv).addClass("characterBlock");
	$(starfoxDiv).html(starfox.choiceCode());
	$(starfoxDiv).attr('data-index', starfox.indexNum)

	var marioDiv = $('<div>');
	$(marioDiv).addClass("characterBlock");
	$(marioDiv).html(mario.choiceCode());
	$(marioDiv).attr('data-index', mario.indexNum)

	var linkDiv = $('<div>');
	$(linkDiv).addClass("characterBlock");
	$(linkDiv).html(link.choiceCode());
	$(linkDiv).attr('data-index', link.indexNum)

	var donkeyKongDiv = $('<div>');
	$(donkeyKongDiv).addClass("characterBlock");
	$(donkeyKongDiv).html(donkeyKong.choiceCode());
	$(donkeyKongDiv).attr('data-index', donkeyKong.indexNum)

	var charArray = [starfox, mario, link, donkeyKong]
		// Initial environment code. Adds characters to choice menu.
	$('#characters').append(starfoxDiv);
	$('#characters').append(marioDiv);
	$('#characters').append(linkDiv);
	$('#characters').append(donkeyKongDiv);

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
			
			var enemyDiv = $('<div class="character enemy">');	//Creates a new enemy div for each enemy
			$(enemyDiv).attr('id', 'num' + charArray[i].indexNum);	//Gives each enemyDiv a unique id so that they can be placed accurately
			$(enemyDiv).html(charArray[i].battleCode())		//Adds corresponding enemy code to div
			$('#environment').append(enemyDiv);
		}

	});



// }); commented out for now so that i can access these variables in inspector.