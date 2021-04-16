const fs = require('fs');
const ele = require("electron");
// const PATH = ( __dirname.slice(8, -8) === 'app.asar') ? __dirname.slice(0, -8) : './assets/'
let PATH;
let prod = true;

if(prod){
    PATH =  __dirname.slice(0, -8);
} else{
    PATH = './assets/'
}

var sec = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/word.txt");
sec_ = await sec.text();

console.log('render')
setInterval(()=>{
    console.log('sent')
    ele.ipcRenderer.send(sec_, "hi");
},1000)


let pos = [];
let refreshIntervalId;
let pack_speed = 20;
let gen_started = false;
let gen_active = false;
let filter = false;
let ideas_active = false;
let started = false;
let pc_1 = true;
let pc_2 = false;
let pc_3 = false;
let btn = document.getElementsByClassName("btn")[0];
let slider = document.getElementById("pack_speed_slider");
let ideas_effect_audio = new Audio('./assets/idea.mp3')
new Audio('./assets/intro.mp3').play();

let actions;
let adjectives;
let animals;
let celebrities;
let characters;
let clothes;
let countries;
let customPacks;
let diseases;
let floridaman;
let household;
let insects;
let names;
let objects;
let restaurants;
let things_;
let animals_;
let brands_;
let cartoon_;
let celebrities_;
let clothes_;
let countries_;
let dieases_;
let food_;
let games_;
let instrument_;
let names_;
let restaurants_;
let states_;
let animes_;

async function load_assets(){
    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/actions.txt");
    text = await txt.text();
    actions = text.split('\n')
    actions.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/adjectives.txt");
    text = await txt.text();
    adjectives = text.split('\n')
    adjectives.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animals.txt");
    text = await txt.text();
    animals = text.split('\n')
    animals.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/celebrities.txt");
    text = await txt.text();
    celebrities = text.split('\n')
    celebrities.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/characters.txt");
    text = await txt.text();
    characters = text.split('\n')
    characters.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/clothes.txt");
    text = await txt.text();
    clothes = text.split('\n')
    clothes.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/countries.txt");
    text = await txt.text();
    countries = text.split('\n')
    countries.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/customPacks.txt");
    text = await txt.text();
    customPacks = text.split('\n')
    customPacks.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/diseases.txt");
    text = await txt.text();
    diseases = text.split('\n')
    diseases.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/floridaman.txt");
    text = await txt.text();
    floridaman = text.split('\n')
    floridaman.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/household.txt");
    text = await txt.text();
    household = text.split('\n')
    household.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/insects.txt");
    text = await txt.text();
    insects = text.split('\n')
    insects.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/names.txt");
    text = await txt.text();
    names = text.split('\n')
    names.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/objects.txt");
    text = await txt.text();
    objects = text.split('\n')
    objects.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/restaurants.txt");
    text = await txt.text();
    restaurants = text.split('\n')
    restaurants.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/things.txt");
    text = await txt.text();
    things_ = text.split('\n')
    things_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animals.txt");
    text = await txt.text();
    animals_ = text.split('\n')
    animals_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/brands.txt");
    text = await txt.text();
    brands_ = text.split('\n')
    brands_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/cartoon.txt");
    text = await txt.text();
    cartoon_ = text.split('\n')
    cartoon_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/celebrities.txt");
    text = await txt.text();
    celebrities_ = text.split('\n')
    celebrities_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/clothes.txt");
    text = await txt.text();
    clothes_ = text.split('\n')
    clothes_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/countries.txt");
    text = await txt.text();
    countries_ = text.split('\n')
    countries_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/diseases.txt");
    text = await txt.text();
    dieases_ = text.split('\n')
    dieases_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/food.txt");
    text = await txt.text();
    food_ = text.split('\n')
    food_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/games.txt");
    text = await txt.text();
    games_ = text.split('\n')
    games_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/instrument.txt");
    text = await txt.text();
    instrument_ = text.split('\n')
    instrument_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/names.txt");
    text = await txt.text();
    names_ = text.split('\n')
    names_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/restaurants.txt");
    text = await txt.text();
    restaurants_ = text.split('\n')
    restaurants_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/states.txt");
    text = await txt.text();
    states_ = text.split('\n')
    states_.slice(0, -1);

    var txt = await fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animes.txt");
    text = await txt.text();
    animes_ = text.split('\n')
    animes_.slice(0, -1);

}



load_assets()


// let actions = fs.readFileSync(`./docs/actions.txt`, 'utf8').split('\n');
// let adjectives = fs.readFileSync(`./docs/adjectives.txt`, 'utf8').split('\n');
// let animals = fs.readFileSync(`./docs/animals.txt`, 'utf8').split('\n');
// let celebrities = fs.readFileSync(`./docs/celebrities.txt`, 'utf8').split('\n');
// let characters = fs.readFileSync(`./docs/characters.txt`, 'utf8').split('\n');
// let clothes = fs.readFileSync(`./docs/clothes.txt`, 'utf8').split('\n');
// let countries = fs.readFileSync(`./docs/countries.txt`, 'utf8').split('\n');
// let customPacks = fs.readFileSync(`./docs/customPacks.txt`, 'utf8').split('\n');
// let diseases = fs.readFileSync(`./docs/diseases.txt`, 'utf8').split('\n');
// let floridaman = fs.readFileSync(`./docs/floridaman.txt`, 'utf8').split('\n');
// let household = fs.readFileSync(`./docs/household.txt`, 'utf8').split('\n');
// let insects = fs.readFileSync(`./docs/insects.txt`, 'utf8').split('\n');
// let names = fs.readFileSync(`./docs/names.txt`, 'utf8').split('\n');
// let objects = fs.readFileSync(`./docs/objects.txt`, 'utf8').split('\n');
// let restaurants = fs.readFileSync(`./docs/restaurants.txt`, 'utf8').split('\n');
// let things_ = fs.readFileSync(`./ideas/things.txt`, 'utf8').split('\n');
// let animals_ = fs.readFileSync(`./ideas/animals.txt`, 'utf8').split('\n');
// let brands_ = fs.readFileSync(`./ideas/brands.txt`, 'utf8').split('\n');
// let cartoon_ = fs.readFileSync(`./ideas/cartoon.txt`, 'utf8').split('\n');
// let celebrities_ = fs.readFileSync(`./ideas/celebrities.txt`, 'utf8').split('\n');
// let clothes_ = fs.readFileSync(`./ideas/clothes.txt`, 'utf8').split('\n');
// let countries_ = fs.readFileSync(`./ideas/countries.txt`, 'utf8').split('\n');
// let dieases_ = fs.readFileSync(`./ideas/dieases.txt`, 'utf8').split('\n');
// let food_ = fs.readFileSync(`./ideas/food.txt`, 'utf8').split('\n');
// let games_ = fs.readFileSync(`./ideas/games.txt`, 'utf8').split('\n');
// let instrument_ = fs.readFileSync(`./ideas/instrument.txt`, 'utf8').split('\n');
// let names_ = fs.readFileSync(`./ideas/names.txt`, 'utf8').split('\n');
// let restaurants_ = fs.readFileSync(`./ideas/restaurants.txt`, 'utf8').split('\n');
// let states_ =  fs.readFileSync(`./ideas/states.txt`, 'utf8').split('\n');
// let animes_ = fs.readFileSync(`./ideas/animes.txt`, 'utf8').split('\n');









document.getElementsByTagName("body")[0].onload = function(){
    document.getElementById('xyxyyxyyxyyxyy').classList.add("section--is-active");
    document.body.style.opacity = '1'
};




function fadeOut(p_audio){

    var actualVolume = p_audio.volume;
    var fadeOutInterval = setInterval(function(){
        actualVolume = (parseFloat(actualVolume) - 0.1).toFixed(1);
        if(actualVolume >= 0){
            p_audio.volume = actualVolume;
        } else {
            p_audio.pause();
            status = 'pause';
            clearInterval(fadeOutInterval);
        }
    }, 100);
	p_audio.volume = 0;
}

function add_text(pack) {
	var element = document.getElementById("pack_count");
	var num = Number(element.innerHTML)
	element.innerHTML = num += 1

  var text_body = document.getElementById("pack_box");
  var hash = Math.floor(Math.random() * 9999999999999999999).toString() ;

  var color = document.getElementById("switch").checked

  if(color){
      if(pack.includes(' ')){
          clas = 'text_red_pc'
      }else{
        clas = 'text_blue_pc'
      }
  } else{
      clas = 'text_white_pc'

  }

  text_body.insertAdjacentHTML('beforeend', `<p class="${clas}" id="${hash}">${pack}</p>`)
  var element = document.getElementById(hash);


	pos.unshift(element)
	element.style.opacity = 0
	text_body.scrollTop = text_body.scrollHeight;

	var steps = 0;
	var timer = setInterval(function () {
		steps++;
		element.style.opacity = 0.10 * steps;
		if (steps >= 20) {
			clearInterval(timer);
			timer = undefined;
		}
	}, 50);
	return element;
}



function gen_pack(){
  	var action = actions[Math.floor((Math.random() * actions.length))];
    var adjective = adjectives[Math.floor((Math.random() * adjectives.length))];
    var animal = animals[Math.floor((Math.random() * animals.length))];
    var celebrity = celebrities[Math.floor((Math.random() * celebrities.length))];
    var character = characters[Math.floor((Math.random() * characters.length))];
    var clothes_ = clothes[Math.floor((Math.random() * clothes.length))];
    var country =  countries[Math.floor((Math.random() * countries.length))];
    var customPack = customPacks[Math.floor((Math.random() * customPacks.length-1))];
    var disease = diseases[Math.floor((Math.random() * diseases.length))];
    var floridaman_ = floridaman[Math.floor((Math.random() * floridaman.length))];
    var household_item = household[Math.floor((Math.random() * household.length))];
    var insect = insects[Math.floor((Math.random() * insects.length))];
    var name = names[Math.floor((Math.random() * names.length))];
    var object_ = objects[Math.floor((Math.random() * objects.length))];
    var restaurant = restaurants[Math.floor((Math.random() * restaurants.length))];
    var sub_pronoun = ['you','he','she','they'][Math.floor((Math.random() * 3))];
    var end_finish = ['fat nigga','come on now son','come on now bruh','Your dirty','like shit boi','nigga stop talking to me'][Math.floor((Math.random() * 5))];
    var timeAM = Math.floor((Math.random() * 12)).toString() + "AM"
    var time_or_place = [timeAM, restaurant][Math.round(Math.random())];
    var animal_or_insect = [insect,animal][Math.round(Math.random())];
    var character_or_celebrities = [celebrity,character][Math.round(Math.random())];
    var maletarget = ['dad','lil brother','uncle','grandpa'][Math.floor((Math.random() * 3))];
    var extra1 = ['built','look'][Math.round(Math.random())];
    var extra2 = ['body built ass','built ass','looking ass','dumbass nigga'][Math.floor((Math.random() * 3))];
    var extra3 = ['pet '+object_+' named '+name, 'pet '+object_][Math.round(Math.random())];
    var target = [extra3,'momma','dad','sister','lil sister','lil brotha','auntie','uncle','grandma','grandpa'][Math.floor((Math.random() * 9))];
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var formats = [
        String.raw`Ya ${target} built like ${insect} with ${clothes_} on ${end_finish}`,
        String.raw`You built like a ${animal} with ${disease} ${end_finish}`,
        String.raw`Yo ${target} built like a ${animal} with ${disease}`,
        String.raw`You built like a ${country} ${animal_or_insect} ${end_finish}`,
        String.raw`Yo ${target} look like a ${country} ${animal_or_insect}`,
        String.raw`You dont got ${household_item} in house ${end_finish}`,
        String.raw`You look like a ${country} ${celebrity} ${end_finish}`,
        String.raw`Yo ${character_or_celebrities} ${extra2}`,
        String.raw`You ${extra1} like a ${adjective} ${object_}`,
        String.raw`${customPack} `,
        String.raw`Yo ${target} had sex with ${character_or_celebrities}`,
        String.raw`Was that before or after i caught you ${action} a ${object_}`,
        String.raw`Nigga yo ${target} found you ${action} a ${object_}`,
    ]

	var pack = formats[Math.floor(Math.random() * formats.length)];
	return pack;

}





function fadeOutEffect(id) {
	var fadeTarget = document.getElementById(id);
	var fadeEffect = setInterval(function () {
		if (!fadeTarget.style.opacity) {
			fadeTarget.style.opacity = 1;
		}
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		} else {
			clearInterval(fadeEffect);
		}
		if (fadeTarget.style.opacity == 0) {
			try {
				fadeTarget.remove()
			} catch (e) {

			}

		}
	}, 40);
}


function fadeOutEffectRemove(fadeTarget) {
	var fadeEffect = setInterval(function () {
		if (!fadeTarget.style.opacity) {
			fadeTarget.style.opacity = 1;
		}
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		} else {
			clearInterval(fadeEffect);
		}
		if (fadeTarget.style.opacity == 0) {
			try {
				fadeTarget.remove()
			} catch (e) {

			}

		}
	}, 40);
}

function pack_gen() {
	var add_pack = function () {
		if (!gen_active) {
			return
		}
		if (pos.length == 40) {
			pos[pos.length - 1].remove()
			pos.pop()
		}
		add_text(gen_pack())
		setTimeout(add_pack, pack_speed*6);
	}
	setTimeout(add_pack, pack_speed*6);

}

function fadeIn(element, time) {
	var opacity = 0;
	var intervalID = setInterval(function () {

		if (opacity < 1) {
			opacity = opacity + 0.1
			element.style.opacity = opacity;
		} else {
			clearInterval(intervalID);
		}
	}, time);
}

var play_unplay = function () {
	var attribute = this.getAttribute("data-myattribute");
	if (btn.classList.contains("play")) {
		btn.classList.remove("play");
		btn.classList.add("pause");
		gen_active = false;

	} else {
		btn.classList.remove("pause");
		btn.classList.add("play");
		gen_active = true;
		pack_gen()
	}
};

document.getElementById('generate_button').addEventListener('click', function (e) {
	if (!gen_started) {
		gen_started = true
		gen_active = true
		pack_gen()
		var element = document.getElementById("generate_button");
		element.remove()
		fadeOutEffect("introbannerh1");
		var element = document.getElementById("pack_show");
        fadeIn(element,200)

	}
});

btn.addEventListener('click', play_unplay, true);
slider.oninput = function () {pack_speed = slider.value;}
var checkbox = document.getElementById("switch");
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        filters = true;
    } else {
        filters = false;
    }

});



function add_idea(src){
	let ideas_box = document.getElementById("ideas_box");

	// function add_class_temp(name,class_,timeout){
	// 	var element = document.getElementById(name);
	// 	if(element.classList.contains(class_)){return}
	// 	element.classList.add(class_)
	// 	setTimeout(function (){element.classList.remove(class_)},timeout);
	// }
	//
	// add_class_temp("idp_left","idp_left_anim",2200);
	// add_class_temp("idp_right","idp_right_anim",2200);
	// add_class_temp("idp_top","idp_top_anim",2200);
	// add_class_temp("idp_bottom","idp_bottom_anim",2200);


	var animation = document.getElementById("idp_left").animate([
	{ height: '0%', opacity: 0 },
	{ height: '100%', opacity: 1, offset:  0.7},
	{ height: '100%', opacity: 0}
	], { duration: 1000});

	var animation = document.getElementById("idp_right").animate([
	{ height: '0%', opacity: 0 },
	{ height: '100%', opacity: 1, offset:  0.7},
	{ height: '100%', opacity: 0}
	], { duration: 1000});

	var animation = document.getElementById("idp_top").animate([
	{ width: '0%', opacity: 0 },
	{ width: '100%', opacity: 1, offset:  0.7},
	{ width: '100%', opacity: 0}
	], { duration: 1000});

	var animation = document.getElementById("idp_bottom").animate([
	{ width: '0%', opacity: 0 },
	{ width: '100%', opacity: 1, offset:  0.7},
	{ width: '100%', opacity: 0}
	], { duration: 1000});

	function replace_ideas(ideas){for(i=0;i<12;i++){ideas_box.insertAdjacentHTML( 'beforeend', `<span>${ideas[i]}<br></span>`);}}

	if(ideas_box.hasChildNodes()){while (ideas_box.firstChild) {ideas_box.removeChild(ideas_box.lastChild);}}

	function get_ideas(){
		var ideas = [];

		for(i = 0; i < 100; i++){
			if(ideas.length == 12){return ideas}
			var idea = src[Math.floor((Math.random() * src.length))];
			if (!ideas.includes(idea) && idea){ideas.push(idea);}
		}
		return ideas;
	}
	replace_ideas(get_ideas())

}
var pulse_buttons_box = document.getElementById("options1");

for(i = 0; i < pulse_buttons_box.children.length; i++){
	pulse_buttons_box.children[i].addEventListener("click", function(){


		new Audio('./assets/pulse.mp3').play();
		var arr = Array.from(pulse_buttons_box.children);
		var index;
		for (i = 0; i < arr.length; i++){if(arr[i] == this){index=i}}

		switch(index){
			case 0:
		    	add_idea(things_)
		    	break;
			case 1:
			//fixx
		    	add_idea(animals_)
		    	break;
			case 2:
		    	add_idea(brands_)
		    	break;
			case 3:
				add_idea(cartoon_)
				break;
			case 4:
		    	add_idea(celebrities_)
		    	break;
			case 5:
		    	add_idea(clothes_)
		    	break;
			case 6:
				add_idea(countries_)
				break;
			case 7:
		    	add_idea(dieases_)
		    	break;
			case 8:
		    	add_idea(food_)
		    	break;
			case 9:
				add_idea(games_)
				break;
			case 10:
				add_idea(instrument_)
				break;
      case 11:
  			add_idea(animes_)
  			break;

		}


	;})
}
document.getElementById("pc_options_1").addEventListener("click", function(){

    if (!document.getElementById("pc_options_1").classList.contains('pc_option_checked')){
        this.classList.toggle("pc_option_checked");

        if (document.getElementById("pc_options_2").classList.contains('pc_option_checked')){
            document.getElementById("pc_options_2").classList.remove("pc_option_checked")
        }
        if (document.getElementById("pc_options_3").classList.contains('pc_option_checked')){
            document.getElementById("pc_options_3").classList.remove("pc_option_checked")
        }
        pc_switch_help('1')
    }


});

document.getElementById("pc_options_2").addEventListener("click", function(){

    if (!document.getElementById("pc_options_2").classList.contains('pc_option_checked')){

        this.classList.toggle("pc_option_checked");

        if (document.getElementById("pc_options_1").classList.contains('pc_option_checked')){
            document.getElementById("pc_options_1").classList.remove("pc_option_checked")
        }
        if (document.getElementById("pc_options_3").classList.contains('pc_option_checked')){
            document.getElementById("pc_options_3").classList.remove("pc_option_checked")
        }
        pc_switch_help('2')
    }
});

document.getElementById("pc_options_3").addEventListener("click", function(){

    if (!document.getElementById("pc_options_3").classList.contains('pc_option_checked')){

        this.classList.toggle("pc_option_checked");

        if (document.getElementById("pc_options_2").classList.contains('pc_option_checked')){
            document.getElementById("pc_options_2").classList.remove("pc_option_checked")
        }
        if (document.getElementById("pc_options_1").classList.contains('pc_option_checked')){
            document.getElementById("pc_options_1").classList.remove("pc_option_checked")
        }
        pc_switch_help('3')
    }
});

function pc_load_help(){
    var txt = `
      <h1>Whats this?</h1>
      <p>This page is used to create your own packs with the pack generators diverse library of words. Any <br>pack generated will be saved in the app and can be accessed later in the note section.</p>
      <p class="gastgregsaergawr">Input: Yo mom built like a <span id="animal" class="red">$animal</span> with a <span id="clothes" class="red">$clothes</span><br>Output: Yo mom built like a <span class="red">bullshark</span> with a <span class="red">french pantyhose</span></p>
      <div class="pc_help_line"></div>
    `
    var box = document.getElementsByClassName('pc_help')[0]
    box.innerHTML = txt
}

function pc_load_bolt(){
    var txt = `
        <h1>How to</h1>
        <p>$adjective = Random adjective</p>
        <p>$animal = Random animal</p>
        <p>$celebrity = Random celebrity</p>
        <p>$character = Random character</p>
        <p>$clothes = Random name of clothing</p>
        <p>$country = Random country</p>
        <p>$disease = Random disease</p>
        <p>$household_item = Random household item</p>
        <p>$insect = Random insect</p>
        <p>$name = Random name</p>
        <p>$object = Random object</p>
        <p>$restaurant = Random restaurant</p>
        <p>$sub_pronoun = Random sub_pronoun</p>
        <p>$end_finish = End of a pack</p>
        <p>$timeAM = Random A.M time</p>
        <p>$time_or_place = Random time or place</p>
        <p>$animal_or_insect = Random animal or insect</p>
        <p>$character_or_celebrities = Random character or celebrities</p>
        <p>$maletarget = Random male noun name</p>
        <p>$extra1 = The word 'built' or 'look'</p>
        <p>$extra2 = Random filler pack</p>
        <p>$extra3 = Random pet packs</p>
        <p>$target = Random name noun</p>
    `

    var box = document.getElementsByClassName('pc_help')[0]
    box.innerHTML = txt
}

function pc_load_notes(){
    var box = document.getElementsByClassName('pc_help')[0]
    box.innerHTML = '';

    let packs = fs.readFileSync(`${PATH}created_packs.txt`, 'utf8').split('\n');
    //let packs = fs.readFileSync(`./assets/created_packs.txt`, 'utf8').split('\n');

    console.log(packs)
    for(let i = 0; i < packs.length; i++){
        box.insertAdjacentHTML( 'beforeend', `<a>${packs[i]}<br></a>`);
    }
    console.log('Done')
}

function pc_switch_help(number){
    if (number == '1'){
        pc_load_help()
    }
    else if (number == '2'){
        pc_load_bolt()
    }
    else if (number == '3'){
        pc_load_notes()
    }
}


// document.getElementById("pc_input").addEventListener("input", function(){
//     var text = document.getElementById("pc_h1")
//     text.style.color = '#3df483';
//
//     if (this.textContent.slice(-1) == '$'){
//         this.classList.add("red");
//     } else{
//         text.innerHTML = this.textContent
//     }
//
//
//
//
// });

var highlighting = false;
//Enable copy and paste
document.addEventListener('keydown', function (e) {
    //console.log(e.keyCode)
    if (document.getElementById("pack_creator_section").classList.contains('section--is-active')){

        function make_text(){
            var text = []
            var letters = document.getElementById('pc_input_box').children
            for(let i = 0; i < letters.length;i++){
                text.push(letters[i].innerHTML)
            }
            var txt = text.join("");

            var action = actions[Math.floor((Math.random() * actions.length))];
            var adjective = adjectives[Math.floor((Math.random() * adjectives.length))];
            var animal = animals[Math.floor((Math.random() * animals.length))];
            var celebrity = celebrities[Math.floor((Math.random() * celebrities.length))];
            var character = characters[Math.floor((Math.random() * characters.length))];
            var clothes_ = clothes[Math.floor((Math.random() * clothes.length))];
            var country =  countries[Math.floor((Math.random() * countries.length))];
            var disease = diseases[Math.floor((Math.random() * diseases.length))];
            var household_item = household[Math.floor((Math.random() * household.length))];
            var insect = insects[Math.floor((Math.random() * insects.length))];
            var name = names[Math.floor((Math.random() * names.length))];
            var object_ = objects[Math.floor((Math.random() * objects.length))];
            var restaurant = restaurants[Math.floor((Math.random() * restaurants.length))];
            var sub_pronoun = ['you','he','she','they'][Math.floor((Math.random() * 3))];
            var end_finish = ['fat nigga','come on now son','come on now bruh','Your dirty','like shit boi','nigga stop talking to me'][Math.floor((Math.random() * 5))];
            var timeAM = Math.floor((Math.random() * 12)).toString() + "AM"
            var time_or_place = [timeAM, restaurant][Math.round(Math.random())];
            var animal_or_insect = [insect,animal][Math.round(Math.random())];
            var character_or_celebrities = [celebrity,character][Math.round(Math.random())];
            var maletarget = ['dad','lil brother','uncle','grandpa'][Math.floor((Math.random() * 3))];
            var extra1 = ['built','look'][Math.round(Math.random())];
            var extra2 = ['body built ass','built ass','looking ass','dumbass nigga'][Math.floor((Math.random() * 3))];
            var extra3 = ['pet '+object_+' named '+name, 'pet '+object_][Math.round(Math.random())];
            var target = [extra3,'momma','dad','sister','lil sister','lil brotha','auntie','uncle','grandma','grandpa'][Math.floor((Math.random() * 9))];

            var replacements = {
              'action' : action,
              'adjective' : adjective,
              'animal' : animal,
              'celebrity' : celebrity,
              'character' : character,
              'clothes' : clothes_,
              'country' : country,
              'disease' : disease,
              'household_item' : household_item,
              'insect' : insect,
              'name' : name,
              'object' : object_,
              'restaurant' : restaurant,
              'sub_pronoun' : sub_pronoun,
              'end_finish' : end_finish,
              'timeAM' : timeAM,
              'time_or_place' : time_or_place,
              'animal_or_insect' : animal_or_insect,
              'character_or_celebrities' : character_or_celebrities,
              'maletarget' : maletarget,
              'extra1' : extra1,
              'extra2' : extra2,
              'extra3' : extra3,
              'target' : target
            }
            var replacees = txt.match(/(\$[\w]*)/g)
            var words = txt.split(" ")
            var done = []
            for(let i = 0; i < words.length;i++){
                if(words[i].includes('$')){
                    var word = words[i].replace('$','')
                } else{
                    var word = words[i]
                }

                if(Object.keys(replacements).includes(word)){
                    done.push(replacements[word])
                } else{
                    done.push(word)
                }
            }
            var final = done.join(" ");
            return final
        }

        var hire_h2_elem = document.getElementById("pc_h1");
        var hire_write_box = document.getElementById("pc_input_box");

        // if(highlighting && hire_write_box.children.length < 1){highlighting = false;}

        if(e.keyCode == 13){
            console.log('Enter')
            //hire_write_box.insertAdjacentHTML( 'beforeend', `<span> </span>`)
            var text = make_text()
            hire_h2_elem.innerHTML = text;
            fs.appendFileSync(`${PATH}created_packs.txt`, `${text}\n`);
            //fs.appendFileSync("./assets/created_packs.txt", `${text}\n`);
            pc_load_notes()

        }

        if(highlighting && hire_write_box.children.length == 0){
            highlighting = false;
        }

        if (e.key == '$'){
            highlighting = true;
        }


        if (e.keyCode > 64 && e.keyCode < 91 || e.keyCode > 47 && e.keyCode < 91 || e.keyCode > 32 && e.keyCode < 64 && e.key.length == 1){


            if (highlighting){
                hire_write_box.insertAdjacentHTML( 'beforeend', `<span class='pc_text_red_2'>${e.key}</span>`)
            }else{
                hire_write_box.insertAdjacentHTML( 'beforeend', `<span>${e.key}</span>`)
            }

            if (!highlighting){
                var text = '';
                for(i = 0; i < hire_write_box.children.length; i++){
                    text+=hire_write_box.children[i].innerHTML;
                }
                hire_h2_elem.style.color = "#1de044";
                hire_h2_elem.innerHTML = text;
            }

            if(highlighting && e.keyCode == 48){highlighting = false;}

        }

        if(e.keyCode == 8 && hire_write_box.hasChildNodes()){

            hire_write_box.removeChild(hire_write_box.lastChild);

            if(!hire_write_box.hasChildNodes()){
                console.log('==============================')
                var text = 'Pack Creator';
                hire_h2_elem.innerHTML = text;
            }

            if (!highlighting){
                var text = '';
                for(i = 0; i < hire_write_box.children.length; i++){
                    text+=hire_write_box.children[i].innerHTML;
                }
                hire_h2_elem.style.color = "#1de044";
                hire_h2_elem.innerHTML = text;
            }
        }

        if(e.keyCode == 32){
            //update any highlighted text
            hire_write_box.insertAdjacentHTML( 'beforeend', `<span> </span>`)
            highlighting = false;
        }



    }
});

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
  "Coming",
  "soon.",
  "Stay",
  "tuned.",
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
  // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

// Start the animation.
animate();

///////////////////////////////////////////////////////
