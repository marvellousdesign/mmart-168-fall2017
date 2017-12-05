// org https://jsfiddle.net/crmardix/zjWaj/
// Page data
var PAGES = [
	{
		img: 'img/npc.jpg',
		text: 'Welcome!',
		target: 0,
		type: 'choice',
		choices: [
			{
				text: 'Continue',
				link: 'Continue',
				target: 1
			},
			{
				text: 'New Game',
				link: 'New Game',
				target: 2
			}
		]
	},
	{
		text: 'Continue',
		target: 3,
		type: 'choice',
		choices: [
			{
				text: 'World, Dungeon Save',
				link: 'World, Dungeon Save',
				target: 4
			}
		]
	},
	{
		text: 'Character Creation',
		target: 2,
		type: 'choice',
		choices: [
			{
				text: 'Starting Cave',
				link: 'Character Creation',
				target: 3
			}
		]
	},
	{
		text: 'Starting Cave',
		target: 3,
		type: 'choice',
		choices: [
			{
				text: 'Explore World',
				link: 'Explore World',
				target: 5
			}
		]
	},
	{
		text: 'World, Dungeon Save',
		target: 4,
		type: 'choice',
		choices: [
			{
				text: 'Dungeons',
				link: 'Dungeons',
				target: 6
			},
			{
				text: 'Explore World',
				link: 'Explore World',
				target: 5
			}
		]
	},
	{
        img: 'img/world.jpg',
		text: 'Explore World',
		target: 5,
		type: 'choice',
		choices: [
			{
				text: 'Towns',
				link: 'Towns',
				target: 11
			},
			{
				text: 'Castles',
				link: 'Castles',
				target: 15
			},
			{
				text: 'Towers',
				link: 'Towers',
				target: 16
			},
			{
				text: 'Dungeons',
				link: 'Dungeons',
				target: 6
			},
			{
				text: 'Enemies, Monsters',
				link: 'Enemies, Monsters',
				target: 7
			}
		]
	},
	{
		text: 'Dungeons',
		target: 6,
		type: 'choice',
		choices: [
			{
				text: 'Explore',
				link: 'Explore',
				target: 20
			}
		]
	},
	{
		text: 'Enemies, Monsters',
		target: 7,
		type: 'choice',
		choices: [
			{
				text: 'Fight|Win',
				link: 'Fight|Win',
				target: 12
			},
			{
				text: 'Lose|Towns',
				link: 'Lose|Towns',
				target: 21
			}
		]
	},
	{
		text: 'Loot, Treasures',
		target: 8,
		type: 'choice',
		choices: [
			{
				text: 'Dungeons',
				link: 'Dungeons',
				target: 6
			},
			{
				text: 'Explore World',
				link: 'Explore World',
				target: 5
			}
		]
	},
	{
		text: 'Mid Boss, Boss',
		target: 9,
		type: 'choice',
		choices: [
			{
				text: 'Win',
				link: 'Win',
				target: 12
			},
			{
				text: 'Defeat, Bad Ending Scene',
				link: 'Defeat, Bad Ending Scene',
				target: 10
			}
		]
	},
	{
		text: 'Defeat, Bad Ending Scene',
		target: 10,
		type: 'choice',
		choices: [
			{
				text: 'Game Over|Title Menu',
				link: 'Game Over|Title Menu',
                target: 0
			}
		]
	},
	{
        img: 'img/town.jpg',
		text: 'Towns',
		target: 11,
		type: 'choice',
		choices: [
			{
				text: 'Explore World',
				link: 'Explore World',
				target: 5
			},
			{
				text: 'Pub, Inn',
				link: 'Pub, Inn',
				target: 21
			},
			{
				text: 'Markets',
				link: 'Markets',
				target: 19
			}
		]
	},
	{
		text: 'Win',
		target: 12,
		type: 'choice',
		choices: [
			{
				text: 'Loot, Treasures',
				link: 'Loot, Treasures',
				target: 8
			},
			{
				text: 'Explore',
				link: 'Explore',
				target: 20
			}
		]
	},
	{
		text: 'Level 2',
		target: 13,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				link: 'Enemies, Monsters',
				target: 7
			},
			{
				text: 'Loot, Treasures',
				link: 'Loot, Treasures',
				target: 8
			},
			{
				text: 'Level 3, etc',
				link: 'Level 3, etc',
				target: 14
			}
		]
	},
	{
		text: 'Level 3, etc',
		target: 14,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				link: 'Enemies, Monsters',
				target: 7
			},
			{
				text: 'Loot, Treasures',
				link: 'Loot, Treasures',
				target: 8
			},
			{
				text: 'Dramatic Boss Cutscene',
				link: 'Dramatic Boss Cutscene',
				target: 17
			}
		]
	},
	{
        img: 'img/castle.jpg',
		text: 'Castles',
		target: 15,
		type: 'choice',
		choices: [
			{
				text: 'Explore World',
				link: 'Explore World',
				target: 5
			},
			{
				text: 'NPC Quests',
				link: 'NPC Quests',
				target: 18
			}
		]
	},
	{
		text: 'Towers',
		target: 16,
		type: 'choice',
		choices: [
			{
				text: 'Explore',
				link: 'Explore',
				target: 20
			}
		]
	},
	{
		text: 'Dramatic Boss Cutscene',
		target: 17,
		type: 'choice',
		choices: [
			{
				text: 'Mid Boss, Boss',
				link: 'Mid Boss, Boss',
				target: 9
			}
		]
	},
	{
        img: 'img/npcQuests.jpg',
		text: 'NPC Quests',
		target: 18,
		type: 'choice',
		choices: [
			{
				text: 'Explore World',
				link: 'Explore World',
				target: 5
			},
			{
				text: 'Castles',
				link: 'Castles',
				target: 15
			},
			{
				text: 'Towns',
				link: 'Towns',
				target: 11
			},
			{
				text: 'Pub, Inn',
				link: 'Pub, Inn',
				target: 21
			},
			{
				text: 'Markets',
				link: 'Markets',
				target: 19
			}
		]
	},
	{
		text: 'Markets',
		target: 19,
		type: 'choice',
		choices: [
			{
				text: 'Towns',
				link: 'Towns',
				target: 11
			},
			{
				text: 'NPC Quests',
				link: 'NPC Quests',
				target: 18
			}
		]
	},
	{
		text: 'Explore',
		target: 20,
		type: 'choice',
		choices: [
			{
				text: 'Enemies, Monsters',
				link: 'Enemies, Monsters',
				target: 7
			},
			{
				text: 'Loot, Treasures',
				link: 'Loot, Treasures',
				target: 8
			},
			{
				text: 'Level 2',
				link: 'Level 2',
				target: 13
			},
			{
				text: 'Explore World',
				link: 'Explore World',
				target: 5
			}
		]
	},
	{
        img: 'img/npc.jpg',
		text: 'Welcome!',
		target: 21,
		type: 'choice',
		choices: [
			{
				text: 'Towns',
				link: 'Towns',
				target: 11
			},
            {
                text: 'Talk',
                target: 22
            },
			{
				text: 'NPC Quests',
				link: 'NPC Quests',
				target: 18
			}
		]

	},
    {
        'img': 'img/npc.jpg',
        target: 22,
        'text': 'From whence do you come, young one?',
            'type': 'choice',
            'choices': [{
            'text': 'I am a traveler exploring the world.',
                'target': 23
        }, {
            'text': 'I come from a farm on the outskirts of town.',
                'target': 24
        }, {
            'text': 'I hail from a wealthy family. My father is a renowned merchant.',
                'target': 25
        }, {
            'text': 'You don\'t need to know that.',
                'target': 26
        }]
    },
    {
       'img': 'img/npc.jpg',
       target: 23,
       'text': 'Ah, a traveler? Fascinating!',
           'type': 'choice',
           'choices': [{
           'text': 'Yes. Ask me that again.',
               'target': 22
       }, {
       'text': 'Back',
           'target': 21
   }]
   }, {
       'img': 'img/npc.jpg',
       target: 24,
       'text': 'Ah, the rural life on the farm?',
           'type': 'choice',
           'choices': [{
           'text': 'Yes. Ask me that again.',
               'target': 22
       }, {
       'text': 'Back',
           'target': 21
   }]
   }, {
       'img': 'img/npc.jpg',
       target: 25,
       'text': 'A merchant\'s child? You\'re quite the young aristocrat, aren\'t you?',
           'type': 'choice',
           'choices': [{
           'text': 'Yes. Ask me that again.',
               'target': 22
       }, {
       'text': 'Back',
           'target': 21
   }]
   }, {
       'img': 'img/npc.jpg',
       target: 26,
       'text': 'Ah, a shady type. Fine, you don\'t have to tell me.',
           'type': 'choice',
           'choices': [{
           'text': 'Good. Ask me that again.',
               'target': 22
       }, {
       'text': 'Back',
           'target': 21
   }]
   }
]

const clear_page = () => {
	document.getElementById('page_img').innerHTML = ''
	document.getElementById('page_text').innerHTML = ''
	document.getElementById('response').innerHTML = ''
}

const set_page_text = (text) => {
	document.getElementById('page_text').innerHTML = `<p> ${text} </p>`
}

const set_page_img = (img) => {
	// const img = document.createElement('img')
	// img.src = PAGES[arr].pic
	// img.classList.add('avatar')
	document.getElementById('page_img').innerHTML += `<img src=${img} />`
}

const add_choice = (text, target) => {
	document.getElementById('response').innerHTML +=
        `<button class=choice data-target= ${target} onClick="toggle(this)"> ${text} </button>`
}

const load_page = (id) => {
	// Fetch JSON for page data associated with given ID
	const page_data = PAGES[id]
	console.log(PAGES[id])

	clear_page()
	set_page_text(page_data.text)
	set_page_img(page_data.img)
	console.log(page_data.text)
	if (page_data.type === 'choice') {
		for (let choice in page_data.choices) {
			const choice_data = page_data.choices[choice]
			add_choice(choice_data.text, choice_data.target)
		}
	}
}

let current_page = 0

//document.addEventListener('DOMContentLoaded', () => {
load_page(0)
//let response = document.getElementById('response')
//document.querySelectorAll('.choice').forEach((choice) => {
const toggle = choice => {
	choice.classList.toggle('choice')
	//choice.addEventListener('click', () => {
	const target = choice.getAttribute('data-target')
	//var target = $(this).data('target')
	load_page(target)
	console.log(target)
	//}, false);
}
//})
