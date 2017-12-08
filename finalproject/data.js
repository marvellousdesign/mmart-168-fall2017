var PAGES = [
	{
		img: 'img/npc.jpg',
		keywords: ['New Adventure'],
		text: 'Welcome to Choose Your Own Adventure!',
		target: 0,
		type: 'choice',
		choices: [
			{
				text: 'Continue',
				target: 1
			},
			{
				text: 'New Game',
				target: 2
			}
		]
	},
	{
		text: 'Continue',
		keywords: ['Continue', 'Game'],
		target: 3,
		type: 'choice',
		choices: [
			{
				text: 'World, Dungeon Save',
				target: 4
			}
		]
	},
	{
		text: 'Character Creation',
		keywords: ['New Character', 'Midevil'],
		target: 2,
		type: 'choice',
		choices: [
			{
				text: 'Starting Game',
				target: 3
			}
		]
	},
	{
		text: 'You\'ve been mysterously transported to a island unbeknownst to you, and you have lost your memories.',
		keywords: ['Ship reck', 'island'],
		target: 3,
		type: 'choice',
		choices: [
			{
				text: 'Explore World',
				target: 5
			}
		]
	},
	{
		text: 'World, Dungeon Save',
		keywords: ['Explore'],
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
		text: 'Explore World',
		keywords: ['Explore', 'world'],
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
			},
			{
				text: 'Enemies, Monsters',
				target: 7
			}
		]
	},
	{
		text: 'Dungeons',
		keywords: ['dungoen'],
		target: 6,
		type: 'choice',
		choices: [
			{
				text: 'Explore',
				target: 20
			}
		]
	},
	{
		text: 'Enemies, Monsters',
		keywords: ['monsters'],
		target: 7,
		type: 'choice',
		choices: [
			{
				text: 'Fight|Win',
				target: 12
			},
			{
				text: 'Lose|Towns',
				target: 21
			}
		]
	},
	{
		text: 'Loot, Treasures',
		keywords: ['gold', 'money'],
		target: 8,
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
		text: 'Mid Boss, Boss',
		keywords: ['mid boss'],
		target: 9,
		type: 'choice',
		choices: [
			{
				text: 'Win',
				target: 12
			},
			{
				text: 'Defeat, Bad Ending Scene',
				target: 10
			}
		]
	},
	{
		text: 'Defeat, Bad Ending Scene',
		keywords: ['game over'],
		target: 10,
		type: 'choice',
		choices: [
			{
				text: 'Game Over|Title Menu',
				target: 0
			}
		]
	},
	{
		img: 'img/town.jpg',
		keywords: ['Towns'],
		text: 'Towns',
		target: 11,
		type: 'choice',
		choices: [
			{
				text: 'Explore World',
				target: 5
			},
			{
				text: 'Pub, Inn',
				target: 21
			},
			{
				text: 'Markets',
				target: 19
			}
		]
	},
	{
		text: 'Win',
		keywords: ['winner'],
		target: 12,
		type: 'choice',
		choices: [
			{
				text: 'Loot, Treasures',
				target: 8
			},
			{
				text: 'Explore',
				target: 20
			}
		]
	},
	{
		text: 'Level 2',
		keywords: ['dungoen'],
		target: 13,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				target: 7
			},
			{
				text: 'Loot, Treasures',
				target: 8
			},
			{
				text: 'Level 3, etc',
				target: 14
			}
		]
	},
	{
		text: 'Level 3, etc',
		keywords: ['dungoen'],
		target: 14,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				target: 7
			},
			{
				text: 'Loot, Treasures',
				target: 8
			},
			{
				text: 'Dramatic Boss Cutscene',
				target: 17
			}
		]
	},
	{
		img: 'img/castle.jpg',
		keywords: ['castle'],
		text: 'Castles',
		target: 15,
		type: 'choice',
		choices: [
			{
				text: 'Explore World',
				target: 5
			},
			{
				text: 'NPC Quests',
				target: 18
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
				text: 'Explore World',
				target: 5
			},
			{
				text: 'Castles',
				target: 15
			},
			{
				text: 'Towns',
				target: 11
			},
			{
				text: 'Pub, Inn',
				target: 21
			},
			{
				text: 'Markets',
				target: 19
			}
		]
	},
	{
		text: 'Markets',
		keywords: ['item shops', 'midevil'],
		target: 19,
		type: 'choice',
		choices: [
			{
				text: 'Towns',
				target: 11
			},
			{
				text: 'NPC Quests',
				target: 18
			}
		]
	},
	{
		text: 'Explore',
		keywords: ['Explore'],
		target: 20,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				target: 7
			},
			{
				text: 'Loot, Treasures',
				target: 8
			},
			{
				text: 'Level 2',
				target: 13
			},
			{
				text: 'Explore World',
				target: 5
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
				text: 'Towns',
				target: 11
			},
			{
				text: 'Talk',
				target: 22
			},
			{
				text: 'NPC Quests',
				target: 18
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
				text: 'I am a traveler exploring the world.',
				target: 23
			},
			{
				text: 'I come from a farm on the outskirts of town.',
				target: 24
			},
			{
				text: 'I hail from a wealthy family. My father is a renowned merchant.',
				target: 25
			},
			{
				text: "You don't need to know that.",
				target: 26
			},
			{
				text: "I don't remember who I am.",
				target: 27
			}

		]
	},
	{
		img: 'img/npc.jpg',
		target: 23,
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
		text: 'Ah, the rural life on the farm?',
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
		text:
			"A merchant's child? You're quite the young aristocrat, aren't you?",
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
		text: "Ah, a shady type. Fine, you don't have to tell me.",
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
		text: "Ah, well that's a shame and I hope you remember in time.",
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
	}
]
