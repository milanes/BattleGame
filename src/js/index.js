import { Champion } from "./champion.js";

const annie = new Champion('Annie', 100, 25 );
const ammumu = new Champion('Ammumu', 100, 20);

const dom = {
   btnLaunch: document.querySelector('#btnLaunch'),
   btnFight: document.querySelector('#btnFight'),
   btnReset: document.querySelector('#btnreset'),

   player: document.querySelector('#player'),
   playerimg: document.querySelector('.imgplayer'),
   playerName: document.querySelector('#player .name'),
   playerLife: document.querySelector('#player .life'),
   playerPower: document.querySelector('#player .power'),
   cpuimg: document.querySelector('.imgcpu'),
   cpuName: document.querySelector('#cpu .name'),
   cpuLife: document.querySelector('#cpu .life'),
   cpuPower: document.querySelector('#cpu .power'),
   cpu: document.querySelector('#cpu'),

   cpuProg: document.querySelector('#cpuProg'),
   playerProg: document.querySelector('#playerProg'),
   progress: document.querySelectorAll('.progress'),
}

dom.btnLaunch.addEventListener('click', start);

do {
   dom.btnFight.addEventListener('click', fight);
} while(dom.progress.value > 0);

//Fight, va restando la vida de cada campión
function fight () {
   dom.cpuProg.value = dom.cpuProg.value - ammumu.power; 
   dom.playerProg.value = dom.playerProg.value - annie.power;
}

//Random
function getRandom () {
   min=15, max=25;
   return Math.random() * (max - min) +min;
}

/**Función para asignar los atributos a los personajes:
 * Name/Life/Power
 * */
function start () {
   //Impresión de datos personaje player 
   dom.playerimg.setAttribute("src", "https://ddragon.leagueoflegends.com/cdn/9.11.1/img/champion/Amumu.png");
   dom.playerName.textContent += ammumu.name;
   dom.playerLife.textContent += "Life: "+ammumu.life;
   dom.playerPower.textContent += "Power: "+ammumu.power;
   playerProg.max = 100;
   playerProg.value = ammumu.life;

   //Impresión de datos personaje cpu
   dom.cpuimg.setAttribute("src", "https://ddragon.leagueoflegends.com/cdn/9.11.1/img/champion/Annie.png");
   dom.cpuName.textContent += annie.name;
   dom.cpuLife.textContent += "Life: "+annie.life;
   dom.cpuPower.textContent += "Power: "+annie.power;
   dom.cpuProg.max = 100;
   dom.cpuProg.value = annie.life;
}