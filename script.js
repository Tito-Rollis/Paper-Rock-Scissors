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
        this.id = document.querySelectorAll(`.${id}`);
    }
}

let p = new Hands('player');
let c = new Hands('com');
let d = new Rslt('result');
console.log(c)

// ARRAYS
let status = [draw, player_win, com_win];
let computer = ['rock','paper','scissors']

// PLAYER'S TARGET'
p.id.forEach((n,index)=> n.addEventListener('click', () => 
{
    // GET THE NAME OF HANDS
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
    let com = Math.floor(Math.random()*3);
    console.log(com,index)
    let getStatus = c.id[com];
    getStatus.classList.add('winner-color');

    if(index === com) return display(draw);
    if(index === 0) return com === 2 ? display(player_win) : display(com_win);
    if(index === 1) return com === 0 ? display(player_win) : display(com_win);
    if(index === 2) return com === 1 ? display(player_win) : display(com_win);
}))

// REFRESH
let refresh = document.querySelector('.refresh').addEventListener('click',()=>
{
    if(vs.classList.contains('d-none')) vs.classList.remove('d-none');
    result.forEach((n)=>n.classList.add('d-none'));
    p.id.forEach((n)=>n.classList.remove('winner-color'));
    c.id.forEach((n)=>n.classList.remove('winner-color'))
})
