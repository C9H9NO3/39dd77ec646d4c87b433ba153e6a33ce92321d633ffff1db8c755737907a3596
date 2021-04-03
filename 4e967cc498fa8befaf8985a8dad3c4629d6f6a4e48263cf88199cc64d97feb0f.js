//Render
const fs = require('fs');

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

let actions = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\actions.txt`, 'utf8').split('\n');
let adjectives = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\adjectives.txt`, 'utf8').split('\n');
let animals = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\animals.txt`, 'utf8').split('\n');
let celebrities = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\celebrities.txt`, 'utf8').split('\n');
let characters = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\characters.txt`, 'utf8').split('\n');
let clothes = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\clothes.txt`, 'utf8').split('\n');
let countries = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\countries.txt`, 'utf8').split('\n');
let customPacks = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\customPacks.txt`, 'utf8').split('\n');
let diseases = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\diseases.txt`, 'utf8').split('\n');
let floridaman = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\floridaman.txt`, 'utf8').split('\n');
let household = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\household.txt`, 'utf8').split('\n');
let insects = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\insects.txt`, 'utf8').split('\n');
let names = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\names.txt`, 'utf8').split('\n');
let objects = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs\\objects.txt`, 'utf8').split('\n');
let restaurants = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\docs/restaurants.txt`, 'utf8').split('\n');
let things_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\things.txt`, 'utf8').split('\n');
let animals_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\animals.txt`, 'utf8').split('\n');
let brands_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\brands.txt`, 'utf8').split('\n');
let cartoon_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\cartoon.txt`, 'utf8').split('\n');
let celebrities_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\celebrities.txt`, 'utf8').split('\n');
let clothes_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\clothes.txt`, 'utf8').split('\n');
let countries_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\countries.txt`, 'utf8').split('\n');
let dieases_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\dieases.txt`, 'utf8').split('\n');
let food_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\food.txt`, 'utf8').split('\n');
let games_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\games.txt`, 'utf8').split('\n');
let instrument_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\instrument.txt`, 'utf8').split('\n');
let names_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\names.txt`, 'utf8').split('\n');
let restaurants_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\restaurants.txt`, 'utf8').split('\n');
let states_ =  fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\states.txt`, 'utf8').split('\n');
let animes_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\ideas\\animes.txt`, 'utf8').split('\n');
let ideas_effect_audio = new Audio(`${__dirname.substring(0, __dirname.length - 8)}\\assets\\idea.mp3`)


const data_ = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\assets\\settings.json`, 'utf8');

const data = JSON.parse(data_);
if (data.hasOwnProperty('first_time')) {
    if(data['first_time'] == true){
        console.log("first time")

        var data__ = JSON.stringify({first_time : false});

        fs.writeFile('./assets/settings.json', data__, 'utf8', (err) => {

            if (err) {
                console.log(`Error writing file: ${err}`);
            } else {
                console.log(`File is written successfully!`);
            }

        });


        new Audio('./assets/intro.mp3').play();


    } else{
        console.log("not first time")
    }
}

document.getElementsByTagName("body")[0].onload = function(){
    console.log('tsetsetet')
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
	// var red = document.getElementById("switch").checked ? 'fe0000' : 'dddddd';
	// var blue = document.getElementById("switch").checked ? '01fff4' : 'dddddd';
	// var green = document.getElementById("switch").checked ? '7cff00' : 'dddddd';

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

    let packs = fs.readFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\assets\\created_packs.txt`, 'utf8').split('\n');



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
            hire_write_box.insertAdjacentHTML( 'beforeend', `<span> </span>`)
            var text = make_text()
            hire_h2_elem.innerHTML = text;
            fs.appendFileSync(`${__dirname.substring(0, __dirname.length - 8)}\\assets\\created_packs.txt`, `${text}\n`);
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

///////////////////////////////////////////////////////
