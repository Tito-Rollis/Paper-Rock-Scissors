// DOM
let vs = document.querySelector('.vs');
let draw = document.querySelector('.draw');
let player_win = document.querySelector('.player-win');
let com_win = document.querySelector('.com-win');
let result = document.querySelectorAll('.result');
let coms = document.querySelectorAll('[id|=com]');

class Hands{
    constructor(id){
        this.id = document.querySelectorAll(`[id|=${id}]`);
    }  
}

class Rslt{
    constructor(id){
        this.id = document.querySelector(`.${id}`);
    }
}

let p = new Hands('player');
let c = new Hands('com');
let d = new Rslt('draw');
console.log(p.id)

// ARRAYS
let status = [draw, player_win, com_win];
let computer = ['rock','paper','scissors']

// PLAYER'S TARGET'
p.id.forEach((n)=>
{
    n.addEventListener('click', () => 
{
    // GET CURRENT ELEMENT
    let target = n.id;
    let getId = document.getElementById(`${target}`);
    // DISPLAY USER'S CHOICE LOG IN TERMINAL
    console.log(`user is choosing ${n.querySelector('img').id}`)
    // DISPLAY THE BG-COLOR
    getId.classList.add('winner-color');
    vs.classList.add('d-none');

    // DISPLAY
    let display = n =>status.map( val =>
                    {
                        if(val === n) val.classList.remove('d-none')
                    })
    let com = computer[Math.floor(Math.random()*3)];

    let getStatus = document.getElementById(`com-${com}`)
    getStatus.classList.add('winner-color');

    if(target === `player-${com}`) return display(draw);
    if(target === `player-rock`) return com === 'scissors' ? display(player_win) : display(com_win);
    if(target === `player-paper`) return com === 'rock' ? display(player_win) : display(com_win);
    if(target === `player-scissors`) return com === 'paper' ? display(player_win) : display(com_win);
});
})

// REFRESH
let refresh = document.querySelector('.refresh').addEventListener('click',()=>
{
    if(vs.classList.contains('d-none')) vs.classList.remove('d-none');
    result.forEach((n)=>n.classList.add('d-none'));
    players.forEach((n)=>n.classList.remove('winner-color'));
    coms.forEach((n)=>n.classList.remove('winner-color'))
})
