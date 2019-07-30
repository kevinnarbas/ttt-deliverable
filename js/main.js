// js file
/*-----Contstants-----*/
const MARKERS = {
    '0': 'transparent',
    '1': 'pink',
    '-1': 'grey',
}

/*-----Apps state(variables)-----*/
let board, turn, winner;

/*-----Cached elements reference-----*/
const msgEl = document.getElementById('msg');

/*-----Event listeners-----*/
document.querySelector('section.board').addEventListener('click', handleClick);

document.querySelector('button').addEventListener('click', resetGame)



/*-----Functions-----*/

init(); //runs the init function 

//this function will initialize the apps state
function init() { 
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    turn = 1;
    winner = null;
    // console.log(board);
    render();

}

function render() {
    board.forEach(function(tile, tileIdx) {
        if (tile === 1)
            document.getElementById(tileIdx).style.background = 'lightpink';
        if (tile === -1)
            document.getElementById(tileIdx).style.backgroundColor = 'grey';
        if (tile === 0)
            document.getElementById(tileIdx).style.backgroundColor = 'transparent';
        // tile.forEach(function(tIdx) {
        //     let div = document.getElementById(tileIdx);
        //     if (tIdx === 0) 
        //     div.style.backgroundColor = MARKERS[turn];
        //     if (tIdx === 1) 
        //     div.style.backgroundColor = MARKERS[turn];
        //     if (tIdx === -1) 
        //     div.style.backgroundColor = MARKERS[turn];
        // });
        
        // console.log(tile);
        // colArr.forEach(function(){
        //     let div = document.getElementById(`pos${idx}`);
        //     div.style.backgroundColor = MARKERS[cell]
        // });
        
    });
    msgEl.textContent = (`${MARKERS[turn]}'s turn`).toLocaleUpperCase()
}


function handleClick(evt) {
    let idx = evt.target.id;
    if (board[idx] != 0) return;
    board[idx] = turn;
    turn *= -1;
    
    render();
}

function resetGame() {
    init();
}

