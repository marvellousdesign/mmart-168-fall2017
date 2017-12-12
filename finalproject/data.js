var PAGES = [
	{
		img: 'img/npc.jpg',
		keywords: ['adventures', 'world'],
		text: 'Welcome to Choose Your Own Adventure!',
		target: 0,
		type: 'choice',
		choices: [
			// {
			// 	text: 'Continue',
			// 	target: 1
			// },
			{
				text: 'New Game',
				target: 3
			}
		]
	},
	{
		// unused for now, but will break the chain if I delete them
		// text: 'Continue',
		// keywords: ['Continue', 'adventure'],
		// target: 3,
		// type: 'choice',
		// choices: [
		// 	{
		// 		text: 'World, Dungeon Save',
		// 		target: 4
		// 	}
		// ]
	},
	{
		// text: 'Character Creation',
		// keywords: ['new', 'Character', 'adventure'],
		// target: 2,
		// type: 'choice',
		// choices: [
		// 	{
		// 		text: 'Starting Game',
		// 		target: 3
		// 	}
		// ]
	},
	{
		text: 'You\'ve been mysterously transported to a island unbeknownst to you, and you have lost all of your memories.',
		keywords: ['Shipwreck', 'boat'],
		target: 3,
		type: 'choice',
		choices: [
			{
				text: 'You wander around the new world.',
				target: 5
			}
		]
	},
	{
		text: 'World, Dungeon Save',
		keywords: ['Explore', 'world'],
		target: 4,
		type: 'choice',
		choices: [
			{
				text: 'Dungeons',
				target: 6
			},
			{
				text: 'Explore World',
				target: 5
			}
		]
	},
	{
		img: 'img/world.jpg',
		text: 'Choose your destination.',
		keywords: ['land', 'map', 'forest', 'Explore'],
		target: 5,
		type: 'choice',
		choices: [
			{
				text: 'Towns',
				target: 11
			},
			{
				text: 'Castles',
				target: 15
			},
			{
				text: 'Towers',
				target: 16
			},
			{
				text: 'Dungeons',
				target: 6
			}
		]
	},
	{
		text: 'Dungeons',
		keywords: ['dungeon', 'cave'],
		target: 6,
		type: 'choice',
		choices: [
			{
				text: 'Explore Dungeon',
				target: 20
			}
		]
	},
	{
		text: 'The local inhabitants have found you!',
		keywords: ['enemies', 'monsters'],
		target: 7,
		type: 'choice',
		choices: [
			{
				text: 'Fight',
				type: 'battle',
				battles: [
					{
						target: 12,
						text: 'You won the fight!'
				}, {
						target: 28,
						text: 'You lost the fight!'
					}
				]
			}
		]
	},
	{
		text: 'You looted their treasures.',
		keywords: ['gold','treasures'],
		target: 8,
		type: 'choice',
		choices: [
			{
				text: 'Continue Exploring',
				target: 20
			},
			{
				text: 'Explore World',
				target: 5
			}
		]
	},
	{
		text: 'The Boss is mad!',
		keywords: ['mid boss', 'boss'],
		target: 9,
		type: 'choice',
		choices: [
			{
				text: 'Fight',
				type: 'boss',
				battles: [
					{
						target: 12,
						text: 'You won the fight!'
				}, {
						target: 10,
						text: 'You lost the fight!'
					}
				]
			}
		]
	},
	{
		text: 'Bad Ending: The Boss defeated you!',
		keywords: ['Game Over: You have been defeated!'],
		img: 'img/gameover.jpg',
		target: 10,
		type: 'choice',
		choices: [
			{
				text: 'Game Over',
				target: 0
			}
		]
	},
	{
		img: 'img/town.jpg',
		keywords: ['Town', 'village', 'city'],
		text: 'You arrived at a nearby town',
		target: 11,
		type: 'choice',
		choices: [
			{
				text: 'Pub, Inn',
				target: 21
			},
			{
				text: 'Markets',
				target: 19
			},
			{
				text: 'Castle',
				target: 15
			},
			{
				text: 'Explore World',
				target: 5
			}
		]
	},
	{
		img: 'img/winner.jpg',
		text: 'You won the fight!',
		target: 12,
		type: 'choice',
		choices: [
			{
				text: 'Loot, Treasures',
				target: 8
			}
		]
	},
	{
		text: 'Level 2',
		keywords: ['dungeon', 'cave'],
		target: 13,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				target: 7
			},
			{
				text: 'Level 3, etc',
				target: 14
			}
		]
	},
	{
		text: 'Level 3, etc',
		keywords: ['dungeon', 'cave'],
		target: 14,
		type: 'choice',
		choices: [
			{
				text: 'Dramatic Boss Cutscene',
				target: 17
			}
		]
	},
	{
		img: 'img/castle.jpg',
		keywords: ['castle', 'england'],
		text: 'Castles',
		target: 15,
		type: 'choice',
		choices: [
			{
				text: 'NPC Quests',
				target: 18
			},
			{
				text: 'Town',
				target: 11
			},
			{
				text: 'Explore World',
				target: 5
			}
		]
	},
	{
		text: 'Towers',
		keywords: ['mid evil', 'tower'],
		target: 16,
		type: 'choice',
		choices: [
			{
				text: 'Explore',
				target: 20
			}
		]
	},
	{
		text: 'Dramatic Boss Cutscene',
		keywords: ['cutscene', 'boss'],
		target: 17,
		type: 'choice',
		choices: [
			{
				text: 'Mid Boss, Boss',
				target: 9
			}
		]
	},
	{
		img: 'img/npcQuests.jpg',
		text: 'Meow seeks you to rid the world of monsters seeking havok on the world',
		target: 18,
		type: 'choice',
		choices: [
			{
				text: 'Dungeons',
				target: 6
			}
		]
	},
	{
		text: 'Markets',
		keywords: ['Markets', 'shops'],
		target: 19,
		type: 'choice',
		choices: [
			{
				text: 'NPC Quests',
				target: 18
			},
			{
				text: 'Town',
				target: 11
			}
		]
	},
	{
		text: 'You wander around in a dark and dingy dungeon.',
		keywords: ['cave', 'dungeon'],
		target: 20,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				target: 7
			},
			{
				text: 'Level 2',
				target: 13
			}
		]
	},
	{
		img: 'img/npc.jpg',
		text: 'Welcome! How may I help you?',
		target: 21,
		type: 'choice',
		choices: [
			{
				text: 'Talk',
				target: 22
			},
			{
				text: 'NPC Quests',
				target: 18
			},
			{
				text: 'Town',
				target: 11
			}
		]
	},
	{
		img: 'img/npc.jpg',
		target: 22,
		text: 'From whence do you come, young one?',
		type: 'choice',
		choices: [
			{
				text: 'I wander around the earth, seeking fame and adventure.',
				target: 23
			},
			{
				text: 'I was a farmer, but I seek a new purpose.',
				target: 24
			},
			{
				text: 'I hail from a wealthy merchant family, and I seek new riches.',
				target: 25
			},
			{
				text: 'You don\'t need to know that.',
				target: 26
			},
			{
				text: 'I don\'t remember who I am.',
				target: 27
			}

		]
	},
	{
		img: 'img/npc.jpg',
		target: 23,
		keywords: ['traveler', 'bard'],
		text: 'Ah, a traveler? Fascinating!',
		type: 'choice',
		choices: [
			{
				text: 'Yes. Ask me that again.',
				target: 22
			},
			{
				text: 'Back',
				target: 21
			}
		]
	},
	{
		img: 'img/npc.jpg',
		target: 24,
		keywords: ['farmer', 'rural', 'Agriculture'],
		text: 'Ah, the rural farm life has got you down?',
		type: 'choice',
		choices: [
			{
				text: 'Yes. Ask me that again.',
				target: 22
			},
			{
				text: 'Back',
				target: 21
			}
		]
	},
	{
		img: 'img/npc.jpg',
		target: 25,
		keywords: ['jewelry', 'shop', 'merchant'],
		text:	'You\'re quite the snappy aristocrat, aren\'t you?',
		type: 'choice',
		choices: [
			{
				text: 'Yes. Ask me that again.',
				target: 22
			},
			{
				text: 'Back',
				target: 21
			}
		]
	},
	{
		img: 'img/npc.jpg',
		target: 26,
		keywords: ['thief', 'rogue'],
		text: 'Ah, a shady type. Fine, you don\'t have to tell me, but I\'m watching you..',
		type: 'choice',
		choices: [
			{
				text: 'Good. Ask me that again.',
				target: 22
			},
			{
				text: 'Back',
				target: 21
			}
		]
	},
	{
		img: 'img/npc.jpg',
		target: 27,
		keywords: ['unkhown'],
		text: 'Ah, well that\'s a shame and I hope you remember in time.',
		type: 'choice',
		choices: [
			{
				text: 'Good. Ask me that again.',
				target: 22
			},
			{
				text: 'Back',
				target: 21
			}
		]
	},
	{
		keywords: ['comfy bed', 'sleep'],
		text: 'You were knock out cold and mysteriously woke up at the Inn.',
		target: 28,
		type: 'choice',
		choices: [
			{
				text: 'Pub, Inn',
				target: 21
			},
			{
				text: 'Town',
				target: 11
			}
		]
	},

]
