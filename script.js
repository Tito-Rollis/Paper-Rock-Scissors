// CLASSES
class Hands{
    constructor(id){
        this.id = document.querySelectorAll(`[id|=${id}]`);
    }  
}
class Rslt{
    constructor(id){
        this.id = document.querySelectorAll(`.${id}`);
    }

    dis(hands,randomNumber,fnDisplay){
        // randomNumber === hands ? fnDisplay(this.id[0]) : fnDisplay(this.id[1])
        console.log(fnDisplay)
    }
}

// INSTANTIATION
let player = new Hands('player');
let computer = new Hands('com');
let display = new Rslt('result');
let vs = new Rslt('vs');

// PLAYER'S TARGET'
player.id.forEach((n,index)=> n.addEventListener('click', () => 
{

    // GET THE NAME OF HANDS FOR LOGGING
    let target = n.id;
    let getId = document.getElementById(`${target}`);

    // DISPLAY USER'S CHOICE LOG IN TERMINAL
    console.log(`user is choosing ${n.querySelector('img').id}`)

    // DISPLAY THE BG-COLOR FOR PLAYER'S HAND
    getId.classList.add('winner-color');
    vs.id[0].classList.add('d-none');

    // DISPLAY
    let noneRemover = n =>display.id.forEach( val =>
                    {
                        if(val === n) val.classList.remove('d-none')
                    })

    // SET RANDOM NUMBER FOR ACCESS COMPUTER'S HAND
    let com = Math.floor(Math.random()*3);
    let getStatus = computer.id[com];

    // DISPLAY THE BG-COLOR FOR PLAYER'S HAND
    getStatus.classList.add('winner-color');

    if(index === com) return noneRemover(display.id[2]);
    if(index === 0) return display.dis(2,com,display);
    if(index === 1) return display.dis(0,com,display);
    if(index === 2) return display.dis(1,com,display);
}))

// REFRESH
let refresh = document.querySelector('.refresh').addEventListener('click',()=>
{
    if(vs.id[0].classList.contains('d-none')) vs.id[0].classList.remove('d-none');
    display.id.forEach((n)=>n.classList.add('d-none'));
    player.id.forEach((n)=>n.classList.remove('winner-color'));
    computer.id.forEach((n)=>n.classList.remove('winner-color'))
})
