var PAGES = [
	{
		img: 'img/npc.jpg',
		text: 'Welcome to Choose Your Own Adventure!',
		keywords: ['adventures', 'world'],
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
		text: 'You arrived at a nearby town',
		keywords: ['Town', 'village', 'city'],
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
		text: 'You take a quick stroll around the Castle.',
		keywords: ['castle', 'england'],
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
        text: 'You look at what the markets has to offer.',
        keywords: ['Markets', 'shops'],
        target: 5,
        type: 'choice',
        choices: [
            {
                text: 'NPC Quests',
                target: 14
            },
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
        text: 'From whence do you come, young one?',
		target: 7,
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
        text: 'Ah, a traveler? Fascinating!',
		keywords: ['traveler', 'bard'],
		target: 8,
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
		text: 'Ah, the rural farm life has got you down?',
        keywords: ['farmer', 'rural', 'Agriculture'],
        target: 9,
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
		text:	'You\'re quite the snappy aristocrat, aren\'t you?',
        keywords: ['jewelry', 'shop', 'merchant'],
		target: 10,
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
        text: 'Ah, a shady type. Fine, you don\'t have to tell me, but I\'m watching you..',
		keywords: ['thief', 'rogue'],
		target: 11,
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
		text: 'Ah, well that\'s a shame and I hope you remember in time.',
		keywords: ['unkhown'],
        target: 12,
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
        text: 'You were knock out cold and mysteriously woke up at the Inn.',
		keywords: ['comfy bed', 'sleep'],
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
        text: 'Meow seeks you to rid the world of monsters wreaking havok on the world',
        target: 14,
        type: 'choice',
        choices: [
            {
                text: 'Dungeons',
                target: 15
            },
			{
				text: 'Towers',
				target: 16
			},
        ]
    },

    //--------------------------------------------------------------------------

	{
		text: 'You\'re at the entrance of a dungeon.',
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
        text: 'The Towers are very vast around here.',
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
		text: 'You wander around the dark and dingy..',
		keywords: ['cave', 'dungeon'],
		target: 17,
		type: 'choice',
		choices: [
			{
				text: 'You\'ve bump into a monster.',
				color: 'orangered',
				target: 20
			},
			{
				text: 'You\'ve been ambushed!',
				color: 'orangered',
				target: 20
			},
			{
				text: 'Go up a Level',
				target: 17
			},
			{
				text: 'Go up a Level',
				target: 18
			}
		]
	},
    {
        text: 'You\'re carefully descending..',
        keywords: ['dungeon', 'cave'],
        target: 18,
        type: 'choice',
        choices: [
            {
                text: 'It\'s a trap!',
				color: 'orangered',
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
				text: 'You\'ve found treasures!',
				color: 'yellow',
				target: 22
			}
        ]
    },
    {
        text: 'You\'re going deeper..',
        keywords: ['dungeon', 'cave'],
        target: 19,
        type: 'choice',
        choices: [
            {
                text: 'You\'ve been cornered!',
				color: 'orange',
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
				color: 'red',
				type: 'battle',
				battles: [
					{
						text: 'You won the fight!',
						color: 'green',
						target: 21
					}, {
						text: 'You lost the fight!',
						color: 'black',
						target: 13
					}, {
						text: 'You ran away!',
						color: 'lightblue',
						target: 2
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
                text: 'Loot',
				color: 'yellow',
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
        text: 'The Boss makes a dramatic entrance!',
        keywords: ['cutscene', 'boss'],
        target: 23,
        type: 'choice',
        choices: [
            {
                text: 'You\'ve got no choice..',
				color: 'orangered',
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
				color: 'red',
				type: 'boss',
				battles: [
					{
						text: 'You won the fight!',
						color: 'green',
						target: 21
					}, {
						text: 'You\'ve been defeated!',
						color: 'black',
						target: 25
					}
				]
			}
		]
	},
	{
		img: 'img/gameover.jpg',
		text: 'Bad Ending: The Boss defeated you!',
		keywords: ['Game Over: You have been defeated!'],
		target: 25,
		type: 'choice',
		choices: [
			{
				text: 'Game Over',
				color: 'black',
				target: 0
			}
		]
	},
]
