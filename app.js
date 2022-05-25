
const kompijuterBiraDisplay = document.getElementById('njegov_odabir');
const mojOdabirDisplay = document.getElementById('moj_odabir');
const finallEnding = document.getElementById('rezultat_krajnji');
const sviDugmici = document.querySelectorAll('button');


let mojOdabir
let odabirKompa
let rezultat

sviDugmici.forEach(svaDugmad => svaDugmad.addEventListener('click', (e) => {
mojOdabir = e.target.id
mojOdabirDisplay.innerHTML = mojOdabir
kompijuterskiOdabir()
najkrajnjijiIshod()
}))

function kompijuterskiOdabir() {
const randomNumber = Math.floor(Math.random() * sviDugmici.length) + 1;

if(randomNumber === 1){
    odabirKompa = 'kamen'
}
if(randomNumber === 2){
    odabirKompa = 'papir'
}
if(randomNumber === 3){
    odabirKompa = 'makaze'
}

kompijuterBiraDisplay.innerHTML = odabirKompa;
}

function najkrajnjijiIshod(){
    if (mojOdabir === odabirKompa){
        rezultat = 'Nereseno!'
    }
    
    if (mojOdabir === 'kamen' && odabirKompa === 'kamen'){
        rezultat = 'Nereseno!'
    }

    if (mojOdabir === 'papir' && odabirKompa === 'papir'){
        rezultat = 'Nereseno!'
    }
    
    if (mojOdabir === 'makaze' && odabirKompa === 'makaze'){
        rezultat = 'Nereseno!'
    }

    if (mojOdabir === 'kamen' && odabirKompa === 'papir'){
        rezultat = '  Los si!'
    }

    if (mojOdabir === 'kamen' && odabirKompa === 'makaze'){
        rezultat = 'Usralo te!'
    }

    if (mojOdabir === 'papir' && odabirKompa === 'kamen'){
        rezultat = 'Usralo te!'
    }

    if (mojOdabir === 'papir' && odabirKompa === 'makaze'){
        rezultat = '  Los si!'
    }

    if (mojOdabir === 'makaze' && odabirKompa === 'kamen'){
        rezultat = '  Los si!'
    }

    if (mojOdabir === 'makaze' && odabirKompa === 'papir'){
        rezultat = 'Usralo te!'
    }

    finallEnding.innerHTML = rezultat;
}