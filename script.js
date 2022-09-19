//scipts.js

let i = 0;
let j = 0;
let size = window.prompt("di che dimensioni vuoi la griglia?" , "16");
let color = "white";

creaGriglia();

//creo le 16 colonne in formato div e in seguito riempo i div con 16 celle

function creaGriglia(){
    const griglia = document.querySelector('#main');

    for(i=0; i<size; i++){
        
        const colonna = document.createElement('div');
        colonna.setAttribute('id', 'colonna-' + i);
        colonna.classList.add('col');

        griglia.appendChild(colonna);
        
    }

    for(i=0; i<size; i++){
        const col = document.querySelector('#colonna-'+i);
        for(j=0; j<size; j++){
            
            const cella = document.createElement('div');
            cella.classList.add('cel');
            cella.addEventListener('mouseover', ()=> {
                cella.style.backgroundColor = color;
            })

            col.appendChild(cella);
        }
    }
}

const eraser = document.querySelector('#eraser');

eraser.addEventListener('click', ()=>{
    eraser.style.backgroundColor = "mediumturquoise";
    colore.style.backgroundColor = "white"
    color = "white";
    
});

const colore = document.querySelector('#colore');

colore.addEventListener('click', ()=>{
    colore.style.backgroundColor = "mediumturquoise";
    eraser.style.backgroundColor = "white"
    color = "black";
    
});





