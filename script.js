// DOM
let vs = document.querySelector('.vs');
let draw = document.querySelector('.draw');
let player_win = document.querySelector('.player-win');
let com_win = document.querySelector('.com-win');
// ARRAYS
let status = [draw, player_win, com_win];
let computer = ['rock','paper','scissors']

// PLAYER'S TARGET'
let player_target = document.addEventListener('click', n => 
{
    // GET CURRENT ELEMENT
    let target = n.target.id;
    console.log(`user is choosing ${target}`)
    let getId = document.getElementById(`player-${target}`);
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

    if(target === com) return display(draw);
    if(target === 'rock') return com === 'scissors' ? display(player_win) : display(com_win);
    if(target === 'paper') return com === 'rock' ? display(player_win) : display(com_win);
    if(target === 'scissors') return com === 'paper' ? display(player_win) : display(com_win);
});

// REFRESH
let refresh = document.querySelector('.refresh').addEventListener('click',()=>
{
    status.map((n)=>{
        n.classList.contains('')
    })
})
