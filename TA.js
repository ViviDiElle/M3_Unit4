window.onload= function (){
    footer ()
    offertona()
}

function footer () {
    let numeriViaggi = document.querySelectorAll ('img').length -4
    let span = document.createElement('span')
    span.innerHTML = ' Questa pagina contiene ' + numeriViaggi + ' viaggi '
    document.querySelector('.conteggio-viaggi').appendChild(span)
    }

    

    function offertona() {
        let numeriCard = document.querySelectorAll('#summer .card-body')

        for(let i = 0; i < numeriCard.length; i++){
            let badge = numeriCard[i]
            let span = '<span style= "background-color:orange; color:white; border-radius:20px; padding:2px; font-weight:bold;">Hot!</span>'
            badge.innerHTML += span
            
        }
    }

    function invisibile() {
        let card = document.querySelectorAll('.card')
        for(let i = 0; i < card.length; i++){
            let rimuoviCard = card[i] 
            rimuoviCard.remove()
    }
}