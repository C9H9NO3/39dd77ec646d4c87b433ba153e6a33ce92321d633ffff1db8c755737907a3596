function c(b){return b.raw=b}
var aa=c(["Ya "," built like "," with "," on ",""]),ba=c(["You built like a "," with "," ",""]),ca=c(["Yo "," built like a "," with ",""]),da=c(["You built like a "," "," ",""]),ea=c(["Yo "," look like a "," ",""]),fa=c(["You dont got "," in house ",""]),ha=c(["You look like a "," "," ",""]),ia=c(["Yo "," ",""]),ja=c(["You "," like a "," ",""]),ka=c(["","\u2002"]),la=c(["Yo "," had sex with ",""]),ma=c(["Was that before or after i caught you "," a ",""]),na=c(["Nigga yo "," found you "," a ",""]);
function k(){this.m=!1;this.i=null;this.g=void 0;this.j=1;this.u=this.v=0;this.l=null}function l(b){if(b.m)throw new TypeError("Generator is already running");b.m=!0}k.prototype.o=function(b){this.g=b};k.prototype.s=function(b){this.l={A:b,B:!0};this.j=this.v||this.u};k.prototype["return"]=function(b){this.l={"return":b};this.j=this.u};function n(b,a,d){b.j=d;return{value:a}}function p(b){this.h=new k;this.C=b}
p.prototype.o=function(b){l(this.h);if(this.h.i)return t(this,this.h.i.next,b,this.h.o);this.h.o(b);return u(this)};function oa(b,a){l(b.h);var d=b.h.i;if(d)return t(b,"return"in d?d["return"]:function(e){return{value:e,done:!0}},a,b.h["return"]);b.h["return"](a);return u(b)}p.prototype.s=function(b){l(this.h);if(this.h.i)return t(this,this.h.i["throw"],b,this.h.o);this.h.s(b);return u(this)};
function t(b,a,d,e){try{var f=a.call(b.h.i,d);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return b.h.m=!1,f;var g=f.value}catch(h){return b.h.i=null,b.h.s(h),u(b)}b.h.i=null;e.call(b.h,g);return u(b)}function u(b){for(;b.h.j;)try{var a=b.C(b.h);if(a)return b.h.m=!1,{value:a.value,done:!1}}catch(d){b.h.g=void 0,b.h.s(d)}b.h.m=!1;if(b.h.l){a=b.h.l;b.h.l=null;if(a.B)throw a.A;return{value:a["return"],done:!0}}return{value:void 0,done:!0}}
function pa(b){this.next=function(a){return b.o(a)};this["throw"]=function(a){return b.s(a)};this["return"]=function(a){return oa(b,a)};this[Symbol.iterator]=function(){return this}}function qa(b){function a(e){return b.next(e)}function d(e){return b["throw"](e)}return new Promise(function(e,f){function g(h){h.done?e(h.value):Promise.resolve(h.value).then(a,d).then(g,f)}g(b.next())})}var ra=require("fs"),sa=require("electron").U,v;v=__dirname.slice(0,-8);console.log("render");
setInterval(function(){console.log("sent");sa.send("my_channel","hi")},1E3);var w,x,y,z,A,B,C,D,E,F,G,H,I,J,O,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea,Fa,P=[],Q=20,Ga=!1,R=!1,S=document.getElementsByClassName("btn")[0],Ha=document.getElementById("pack_speed_slider");new Audio("./assets/idea.mp3");
function Ia(){var b=Ja(),a=document.getElementById("pack_count"),d=Number(a.innerHTML);a.innerHTML=d+=1;d=document.getElementById("pack_box");var e=Math.floor(1E19*Math.random()).toString();document.getElementById("switch").checked?b.includes("\u2002")?clas="text_red_pc":clas="text_blue_pc":clas="text_white_pc";d.insertAdjacentHTML("beforeend",'<p class="'+clas+'" id="'+e+'">'+b+"</p>");a=document.getElementById(e);P.unshift(a);a.style.opacity=0;d.scrollTop=d.scrollHeight;var f=0,g=setInterval(function(){f++;
a.style.opacity=.1*f;20<=f&&(clearInterval(g),g=void 0)},50)}
function Ja(){var b=w[Math.floor(Math.random()*w.length)],a=x[Math.floor(Math.random()*x.length)],d=y[Math.floor(Math.random()*y.length)],e=z[Math.floor(Math.random()*z.length)],f=A[Math.floor(Math.random()*A.length)],g=B[Math.floor(Math.random()*B.length)],h=C[Math.floor(Math.random()*C.length)],q=D[Math.floor(Math.random()*D.length-1)],K=E[Math.floor(Math.random()*E.length)],L=(F[Math.floor(Math.random()*F.length)],G[Math.floor(Math.random()*G.length)]),M=H[Math.floor(Math.random()*H.length)],m=
I[Math.floor(Math.random()*I.length)],r=J[Math.floor(Math.random()*J.length)],N=(Math.floor(3*Math.random()),"fat nigga;come on now son;come on now bruh;Your dirty;like shit boi;nigga stop talking to me".split(";")[Math.floor(5*Math.random())]),ta=(Math.floor(12*Math.random()).toString(),Math.round(Math.random()),[M,d][Math.round(Math.random())]);f=[e,f][Math.round(Math.random())];var Ra=(Math.floor(3*Math.random()),["built","look"][Math.round(Math.random())]),Sa=["body built ass","built ass","looking ass",
"dumbass nigga"][Math.floor(3*Math.random())];m=[["pet "+r+" named "+m,"pet "+r][Math.round(Math.random())],"momma","dad","sister","lil sister","lil brotha","auntie","uncle","grandma","grandpa"][Math.floor(9*Math.random())];b=[String.raw(aa,m,M,g,N),String.raw(ba,d,K,N),String.raw(ca,m,d,K),String.raw(da,h,ta,N),String.raw(ea,m,h,ta),String.raw(fa,L,N),String.raw(ha,h,e,N),String.raw(ia,f,Sa),String.raw(ja,Ra,a,r),String.raw(ka,q),String.raw(la,m,f),String.raw(ma,b,r),String.raw(na,m,b,r)];return b[Math.floor(Math.random()*
b.length)]}function Ka(){var b=document.getElementById("introbannerh1"),a=setInterval(function(){if(b.style.opacity||(b.style.opacity=1),0<b.style.opacity?b.style.opacity-=.1:clearInterval(a),0==b.style.opacity)try{b.remove()}catch(d){}},40)}function La(){function b(){R&&(40==P.length&&(P[P.length-1].remove(),P.pop()),Ia(),setTimeout(b,6*Q))}setTimeout(b,6*Q)}
function Ma(){var b=document.getElementById("pack_show"),a=0,d=setInterval(function(){1>a?(a+=.1,b.style.opacity=a):clearInterval(d)},200)}(new Audio("./assets/intro.mp3")).play();
(function(){var b;return qa(new pa(new p(function(a){switch(a.j){case 1:return n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/actions.txt"),2);case 2:return b=a.g,n(a,b.text(),3);case 3:return text=a.g,w=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/adjectives.txt"),4);case 4:return b=a.g,n(a,b.text(),5);case 5:return text=a.g,x=
text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animals.txt"),6);case 6:return b=a.g,n(a,b.text(),7);case 7:return text=a.g,y=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/celebrities.txt"),8);case 8:return b=a.g,n(a,b.text(),9);case 9:return text=a.g,z=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/characters.txt"),
10);case 10:return b=a.g,n(a,b.text(),11);case 11:return text=a.g,A=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/clothes.txt"),12);case 12:return b=a.g,n(a,b.text(),13);case 13:return text=a.g,B=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/countries.txt"),14);case 14:return b=a.g,n(a,b.text(),15);case 15:return text=
a.g,C=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/customPacks.txt"),16);case 16:return b=a.g,n(a,b.text(),17);case 17:return text=a.g,D=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/diseases.txt"),18);case 18:return b=a.g,n(a,b.text(),19);case 19:return text=a.g,E=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/floridaman.txt"),
20);case 20:return b=a.g,n(a,b.text(),21);case 21:return text=a.g,F=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/household.txt"),22);case 22:return b=a.g,n(a,b.text(),23);case 23:return text=a.g,G=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/insects.txt"),24);case 24:return b=a.g,n(a,b.text(),25);case 25:return text=
a.g,H=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/names.txt"),26);case 26:return b=a.g,n(a,b.text(),27);case 27:return text=a.g,I=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/objects.txt"),28);case 28:return b=a.g,n(a,b.text(),29);case 29:return text=a.g,J=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/restaurants.txt"),
30);case 30:return b=a.g,n(a,b.text(),31);case 31:return text=a.g,O=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/things.txt"),32);case 32:return b=a.g,n(a,b.text(),33);case 33:return text=a.g,ua=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animals.txt"),34);case 34:return b=a.g,n(a,b.text(),35);case 35:return text=
a.g,va=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/brands.txt"),36);case 36:return b=a.g,n(a,b.text(),37);case 37:return text=a.g,wa=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/cartoon.txt"),38);case 38:return b=a.g,n(a,b.text(),39);case 39:return text=a.g,xa=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/celebrities.txt"),
40);case 40:return b=a.g,n(a,b.text(),41);case 41:return text=a.g,ya=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/clothes.txt"),42);case 42:return b=a.g,n(a,b.text(),43);case 43:return text=a.g,za=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/countries.txt"),44);case 44:return b=a.g,n(a,b.text(),45);case 45:return text=
a.g,Aa=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/diseases.txt"),46);case 46:return b=a.g,n(a,b.text(),47);case 47:return text=a.g,Ba=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/food.txt"),48);case 48:return b=a.g,n(a,b.text(),49);case 49:return text=a.g,Ca=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/games.txt"),
50);case 50:return b=a.g,n(a,b.text(),51);case 51:return text=a.g,Da=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/instrument.txt"),52);case 52:return b=a.g,n(a,b.text(),53);case 53:return text=a.g,Ea=text.split("\n"),n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/names.txt"),54);case 54:return b=a.g,n(a,b.text(),55);case 55:return text=
a.g,n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/restaurants.txt"),56);case 56:return b=a.g,n(a,b.text(),57);case 57:return text=a.g,n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/states.txt"),58);case 58:return b=a.g,n(a,b.text(),59);case 59:return text=a.g,n(a,fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animes.txt"),
60);case 60:return b=a.g,n(a,b.text(),61);case 61:text=a.g,Fa=text.split("\n"),a.j=0}})))})();document.getElementsByTagName("body")[0].onload=function(){document.getElementById("xyxyyxyyxyyxyy").classList.add("section--is-active");document.body.style.opacity="1"};document.getElementById("generate_button").addEventListener("click",function(){Ga||(Ga=!0,R=!0,La(),document.getElementById("generate_button").remove(),Ka(),Ma())});
S.addEventListener("click",function(){this.getAttribute("data-myattribute");S.classList.contains("play")?(S.classList.remove("play"),S.classList.add("pause"),R=!1):(S.classList.remove("pause"),S.classList.add("play"),R=!0,La())},!0);Ha.oninput=function(){Q=Ha.value};
function T(b){var a=document.getElementById("ideas_box");document.getElementById("idp_left").animate([{height:"0%",opacity:0},{height:"100%",opacity:1,offset:.7},{height:"100%",opacity:0}],{duration:1E3});document.getElementById("idp_right").animate([{height:"0%",opacity:0},{height:"100%",opacity:1,offset:.7},{height:"100%",opacity:0}],{duration:1E3});document.getElementById("idp_top").animate([{width:"0%",opacity:0},{width:"100%",opacity:1,offset:.7},{width:"100%",opacity:0}],{duration:1E3});document.getElementById("idp_bottom").animate([{width:"0%",
opacity:0},{width:"100%",opacity:1,offset:.7},{width:"100%",opacity:0}],{duration:1E3});if(a.hasChildNodes())for(;a.firstChild;)a.removeChild(a.lastChild);!function(d){for(i=0;12>i;i++)a.insertAdjacentHTML("beforeend","<span>"+d[i]+"<br></span>")}(function(){var d=[];for(i=0;100>i&&12!=d.length;i++){var e=b[Math.floor(Math.random()*b.length)];!d.includes(e)&&e&&d.push(e)}return d}())}document.getElementById("switch").addEventListener("change",function(){this.checked?filters=!0:filters=!1});
var Na=document.getElementById("options1");for(i=0;i<Na.children.length;i++)Na.children[i].addEventListener("click",function(){(new Audio("./assets/pulse.mp3")).play();var b,a=Array.from(Na.children);for(i=0;i<a.length;i++)a[i]==this&&(b=i);switch(b){case 0:T(ua);break;case 1:T(va);break;case 2:T(wa);break;case 3:T(xa);break;case 4:T(ya);break;case 5:T(za);break;case 6:T(Aa);break;case 7:T(Ba);break;case 8:T(Ca);break;case 9:T(Da);break;case 10:T(Ea);break;case 11:T(Fa)}});
function Oa(){var b=document.getElementsByClassName("pc_help")[0];b.innerHTML="";var a=ra.W(v+"created_packs.txt","utf8").split("\n");console.log(a);for(var d=0;d<a.length;d++)b.insertAdjacentHTML("beforeend","<a>"+a[d]+"<br></a>");console.log("Done")}
function Pa(b){"1"==b?document.getElementsByClassName("pc_help")[0].innerHTML='\n      <h1>Whats this?</h1>\n      <p>This page is used to create your own packs with the pack generators diverse library of words. Any <br>pack generated will be saved in the app and can be accessed later in the note section.</p>\n      <p class="gastgregsaergawr">Input: Yo mom built like a <span id="animal" class="red">$animal</span> with a <span id="clothes" class="red">$clothes</span><br>Output: Yo mom built like a <span class="red">bullshark</span> with a <span class="red">french pantyhose</span></p>\n      <div class="pc_help_line"></div>\n    ':"2"==
b?document.getElementsByClassName("pc_help")[0].innerHTML="\n        <h1>How to</h1>\n        <p>$adjective = Random adjective</p>\n        <p>$animal = Random animal</p>\n        <p>$celebrity = Random celebrity</p>\n        <p>$character = Random character</p>\n        <p>$clothes = Random name of clothing</p>\n        <p>$country = Random country</p>\n        <p>$disease = Random disease</p>\n        <p>$household_item = Random household item</p>\n        <p>$insect = Random insect</p>\n        <p>$name = Random name</p>\n        <p>$object = Random object</p>\n        <p>$restaurant = Random restaurant</p>\n        <p>$sub_pronoun = Random sub_pronoun</p>\n        <p>$end_finish = End of a pack</p>\n        <p>$timeAM = Random A.M time</p>\n        <p>$time_or_place = Random time or place</p>\n        <p>$animal_or_insect = Random animal or insect</p>\n        <p>$character_or_celebrities = Random character or celebrities</p>\n        <p>$maletarget = Random male noun name</p>\n        <p>$extra1 = The word 'built' or 'look'</p>\n        <p>$extra2 = Random filler pack</p>\n        <p>$extra3 = Random pet packs</p>\n        <p>$target = Random name noun</p>\n    ":
"3"==b&&Oa()}
document.getElementById("pc_options_1").addEventListener("click",function(){document.getElementById("pc_options_1").classList.contains("pc_option_checked")||(this.classList.toggle("pc_option_checked"),document.getElementById("pc_options_2").classList.contains("pc_option_checked")&&document.getElementById("pc_options_2").classList.remove("pc_option_checked"),document.getElementById("pc_options_3").classList.contains("pc_option_checked")&&document.getElementById("pc_options_3").classList.remove("pc_option_checked"),Pa("1"))});
document.getElementById("pc_options_2").addEventListener("click",function(){document.getElementById("pc_options_2").classList.contains("pc_option_checked")||(this.classList.toggle("pc_option_checked"),document.getElementById("pc_options_1").classList.contains("pc_option_checked")&&document.getElementById("pc_options_1").classList.remove("pc_option_checked"),document.getElementById("pc_options_3").classList.contains("pc_option_checked")&&document.getElementById("pc_options_3").classList.remove("pc_option_checked"),
Pa("2"))});
document.getElementById("pc_options_3").addEventListener("click",function(){document.getElementById("pc_options_3").classList.contains("pc_option_checked")||(this.classList.toggle("pc_option_checked"),document.getElementById("pc_options_2").classList.contains("pc_option_checked")&&document.getElementById("pc_options_2").classList.remove("pc_option_checked"),document.getElementById("pc_options_1").classList.contains("pc_option_checked")&&document.getElementById("pc_options_1").classList.remove("pc_option_checked"),Pa("3"))});
var U=!1;
document.addEventListener("keydown",function(b){if(document.getElementById("pack_creator_section").classList.contains("section--is-active")){var a=document.getElementById("pc_h1"),d=document.getElementById("pc_input_box");if(13==b.keyCode){console.log("Enter");var e=[];for(var f=document.getElementById("pc_input_box").children,g=0;g<f.length;g++)e.push(f[g].innerHTML);e=e.join("");f=y[Math.floor(Math.random()*y.length)];g=z[Math.floor(Math.random()*z.length)];var h=A[Math.floor(Math.random()*A.length)],
q=H[Math.floor(Math.random()*H.length)],K=I[Math.floor(Math.random()*I.length)],L=J[Math.floor(Math.random()*J.length)],M=O[Math.floor(Math.random()*O.length)],m=Math.floor(12*Math.random()).toString()+"AM",r=["pet "+L+" named "+K,"pet "+L][Math.round(Math.random())];f={action:w[Math.floor(Math.random()*w.length)],D:x[Math.floor(Math.random()*x.length)],F:f,I:g,J:h,L:B[Math.floor(Math.random()*B.length)],country:C[Math.floor(Math.random()*C.length)],M:E[Math.floor(Math.random()*E.length)],S:G[Math.floor(Math.random()*
G.length)],T:q,name:K,object:L,X:M,Y:["you","he","she","they"][Math.floor(3*Math.random())],N:"fat nigga;come on now son;come on now bruh;Your dirty;like shit boi;nigga stop talking to me".split(";")[Math.floor(5*Math.random())],Z:m,$:[m,M][Math.round(Math.random())],G:[q,f][Math.round(Math.random())],K:[g,h][Math.round(Math.random())],V:["dad","lil brother","uncle","grandpa"][Math.floor(3*Math.random())],O:["built","look"][Math.round(Math.random())],P:["body built ass","built ass","looking ass",
"dumbass nigga"][Math.floor(3*Math.random())],R:r,target:[r,"momma","dad","sister","lil sister","lil brotha","auntie","uncle","grandma","grandpa"][Math.floor(9*Math.random())]};e=(e.match(/(\$[\w]*)/g),e.split(" "));g=[];for(h=0;h<e.length;h++)q=e[h].includes("$")?e[h].replace("$",""):e[h],Object.keys(f).includes(q)?g.push(f[q]):g.push(q);e=g.join(" ");a.innerHTML=e;ra.H(v+"created_packs.txt",e+"\n");Oa()}if(U&&0==d.children.length&&(U=!1),"$"==b.key&&(U=!0),64<b.keyCode&&91>b.keyCode||47<b.keyCode&&
91>b.keyCode||32<b.keyCode&&64>b.keyCode&&1==b.key.length){if(U?d.insertAdjacentHTML("beforeend","<span class='pc_text_red_2'>"+b.key+"</span>"):d.insertAdjacentHTML("beforeend","<span>"+b.key+"</span>"),!U){e="";for(i=0;i<d.children.length;i++)e+=d.children[i].innerHTML;a.style.color="#1de044";a.innerHTML=e}U&&48==b.keyCode&&(U=!1)}if(8==b.keyCode&&d.hasChildNodes()&&((d.removeChild(d.lastChild),d.hasChildNodes())||(console.log("=============================="),a.innerHTML="Pack Creator"),!U)){e=
"";for(i=0;i<d.children.length;i++)e+=d.children[i].innerHTML;a.style.color="#1de044";a.innerHTML=e}32==b.keyCode&&(d.insertAdjacentHTML("beforeend","<span> </span>"),U=!1)}});var V=document.getElementById("text1"),W=document.getElementById("text2"),X=["Coming","soon.","Stay","tuned."],Y=X.length-1,Qa=new Date,Ta=0,Z=.25;
function Ua(){requestAnimationFrame(Ua);var b=new Date,a=0<Z,d=(b-Qa)/1E3;Qa=b;0>=(Z-=d)?(a&&Y++,Ta-=Z,Z=0,b=Ta/1,1<b&&(Z=.25,b=1),W.style.filter="blur("+Math.min(8/b-8,100)+"px)",W.style.opacity=100*Math.pow(b,.4)+"%",b=1-b,V.style.filter="blur("+Math.min(8/b-8,100)+"px)",V.style.opacity=100*Math.pow(b,.4)+"%",V.textContent=X[Y%X.length],W.textContent=X[(Y+1)%X.length]):(Ta=0,W.style.filter="",W.style.opacity="100%",V.style.filter="",V.style.opacity="0%")}V.textContent=X[Y%X.length];
W.textContent=X[(Y+1)%X.length];Ua();
