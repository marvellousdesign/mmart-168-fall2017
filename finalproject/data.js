var PAGES = [
	{
		img: 'img/npc.jpg',
		keywords: ['adventures', 'world'],
		text: 'Welcome to Choose Your Own Adventure!',
		target: 0,
		type: 'choice',
		choices: [
			{
				text: 'New Game',
				target: 1
			}
		]
	},
	{
		text: 'You\'ve been mysterously transported to a island unbeknownst to you, and you have lost all of your memories.',
		keywords: ['Shipwreck', 'boat'],
		target: 1,
		type: 'choice',
		choices: [
			{
				text: 'You wander around the new world.',
				target: 2
			}
		]
	},
	{
		img: 'img/world.jpg',
		text: 'Choose your destination.',
		keywords: ['land', 'map', 'forest', 'Explore'],
		target: 2,
		type: 'choice',
		choices: [
			{
				text: 'Towns',
				target: 3
			},
			{
				text: 'Castles',
				target: 4
			},
			{
				text: 'Towers',
				target: 16
			},
			{
				text: 'Dungeons',
				target: 15
			}
		]
	},
    {
		img: 'img/town.jpg',
		keywords: ['Town', 'village', 'city'],
		text: 'You arrived at a nearby town',
		target: 3,
		type: 'choice',
		choices: [
			{
				text: 'Pub, Inn',
				target: 6
			},
			{
				text: 'Markets',
				target: 5
			},
			{
				text: 'Castle',
				target: 4
			},
			{
				text: 'Explore World',
				target: 2
			}
		]
	},
    {
		img: 'img/castle.jpg',
		keywords: ['castle', 'england'],
		text: 'Castles',
		target: 4,
		type: 'choice',
		choices: [
			{
				text: 'NPC Quests',
				target: 14
			},
			{
				text: 'Town',
				target: 3
			},
			{
				text: 'Explore World',
				target: 2
			}
		]
	},
    {
        text: 'Markets',
        keywords: ['Markets', 'shops'],
        target: 5,
        type: 'choice',
        choices: [
            {
                text: 'NPC Quests',
                target: 14
            },
            {
                text: 'Town',
                target: 3
            }
        ]
    },
    {
        img: 'img/npc.jpg',
        text: 'Welcome! How may I help you?',
        target: 6,
        type: 'choice',
        choices: [
            {
                text: 'Talk',
                target: 7
            },
            {
                text: 'NPC Quests',
                target: 14
            },
            {
                text: 'Town',
                target: 3
            }
        ]
    },
    {
        img: 'img/npc.jpg',
        target: 7,
        text: 'From whence do you come, young one?',
        type: 'choice',
        choices: [
            {
                text: 'I wander around the earth, seeking fame and adventure.',
                target: 8
            },
            {
                text: 'I was a farmer, but I seek a new purpose.',
                target: 9
            },
            {
                text: 'I hail from a wealthy merchant family, and I seek new riches.',
                target: 10
            },
            {
                text: 'You don\'t need to know that.',
                target: 11
            },
            {
                text: 'I don\'t remember who I am.',
                target: 12
            }

        ]
    },
    {
        img: 'img/npc.jpg',
        target: 8,
        keywords: ['traveler', 'bard'],
        text: 'Ah, a traveler? Fascinating!',
        type: 'choice',
        choices: [
            {
                text: 'Yes. Ask me that again.',
                target: 7
            },
            {
                text: 'Back',
                target: 6
            }
        ]
    },
    {
        img: 'img/npc.jpg',
        target: 9,
        keywords: ['farmer', 'rural', 'Agriculture'],
        text: 'Ah, the rural farm life has got you down?',
        type: 'choice',
        choices: [
            {
                text: 'Yes. Ask me that again.',
                target: 7
            },
            {
                text: 'Back',
                target: 6
            }
        ]
    },
    {
        img: 'img/npc.jpg',
        target: 10,
        keywords: ['jewelry', 'shop', 'merchant'],
        text:	'You\'re quite the snappy aristocrat, aren\'t you?',
        type: 'choice',
        choices: [
            {
                text: 'Yes. Ask me that again.',
                target: 7
            },
            {
                text: 'Back',
                target: 6
            }
        ]
    },
    {
        img: 'img/npc.jpg',
        target: 11,
        keywords: ['thief', 'rogue'],
        text: 'Ah, a shady type. Fine, you don\'t have to tell me, but I\'m watching you..',
        type: 'choice',
        choices: [
            {
                text: 'Good. Ask me that again.',
                target: 7
            },
            {
                text: 'Back',
                target: 6
            }
        ]
    },
    {
        img: 'img/npc.jpg',
        target: 12,
        keywords: ['unkhown'],
        text: 'Ah, well that\'s a shame and I hope you remember in time.',
        type: 'choice',
        choices: [
            {
                text: 'Good. Ask me that again.',
                target: 7
            },
            {
                text: 'Back',
                target: 6
            }
        ]
    },
    {
        keywords: ['comfy bed', 'sleep'],
        text: 'You were knock out cold and mysteriously woke up at the Inn.',
        target: 13,
        type: 'choice',
        choices: [
            {
                text: 'Pub, Inn',
                target: 6
            },
            {
                text: 'Town',
                target: 3
            }
        ]
    },
    {
        img: 'img/npcQuests.jpg',
        text: 'Meow seeks you to rid the world of monsters seeking havok on the world',
        target: 14,
        type: 'choice',
        choices: [
            {
                text: 'Dungeons',
                target: 15
            }
        ]
    },

    //--------------------------------------------------------------------------

	{
		text: 'Dungeons',
		keywords: ['dungeon', 'cave'],
		target: 15,
		type: 'choice',
		choices: [
			{
				text: 'Explore Dungeon',
				target: 17
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
                target: 17
            }
        ]
    },
    {
		text: 'You wander around in a dark and dingy dungeon.',
		keywords: ['cave', 'dungeon'],
		target: 17,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				target: 20
			},
			{
				text: 'Go up a Level',
				target: 18
			}
		]
	},
    {
        text: 'Go up a Level',
        keywords: ['dungeon', 'cave'],
        target: 18,
        type: 'choice',
        choices: [
            {
                text: 'Enemies, Monsters',
                target: 20
            },
			{
				text: 'Go up a Level',
				target: 18
			},
            {
                text: 'Go up a Level',
                target: 19
            },
			{
				text: 'Loot, Treasures',
				target: 22
			}
        ]
    },
    {
        text: 'Go up a Level',
        keywords: ['dungeon', 'cave'],
        target: 19,
        type: 'choice',
        choices: [
            {
                text: 'Dramatic Boss Cutscene',
                target: 23
            }
        ]
    },
	{
		text: 'The local inhabitants have found you!',
		keywords: ['enemies', 'monsters'],
		target: 20,
		type: 'choice',
		choices: [
			{
				text: 'Fight',
				type: 'battle',
				battles: [
					{
						target: 21,
						text: 'You won the fight!'
				}, {
						target: 13,
						text: 'You lost the fight!'
					}
				]
			}
		]
	},
    {
        img: 'img/winner.jpg',
        text: 'You won the fight!',
        target: 21,
        type: 'choice',
        choices: [
            {
                text: 'Loot, Treasures',
                target: 22
            }
        ]
    },
    {
        text: 'You looted their treasures.',
        keywords: ['gold','treasures'],
        target: 22,
        type: 'choice',
        choices: [
            {
                text: 'Continue Exploring',
                target: 17
            },
            {
                text: 'Explore World',
                target: 2
            }
        ]
    },
    {
        text: 'Dramatic Boss Cutscene',
        keywords: ['cutscene', 'boss'],
        target: 23,
        type: 'choice',
        choices: [
            {
                text: 'Mid Boss, Boss',
                target: 24
            }
        ]
    },
	{
		text: 'The Boss is mad!',
		keywords: ['mid boss', 'boss'],
		target: 24,
		type: 'choice',
		choices: [
			{
				text: 'Fight',
				type: 'boss',
				battles: [
					{
						target: 21,
						text: 'You won the fight!'
				}, {
						target: 25,
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
		target: 25,
		type: 'choice',
		choices: [
			{
				text: 'Game Over',
				target: 0
			}
		]
	},
]
