window.addEventListener('load', function () {
    var loader = document.querySelector('.loading-data');
    var container = document.querySelector('.container');
    setTimeout(function() {
        loader.style.display = 'none';
        container.style.display = 'flex';
    }, 3700); 
});

const presentation = document.querySelector('.test2 p');
let textToDisplay = `Bonjour,
Je m appelle Romain Esquerra,  `;
let index1 = 0;

function displayLetterByLetter() {
    if (index1 < textToDisplay.length) {
        presentation.innerHTML += textToDisplay[index1];
        index1++;
        setTimeout(displayLetterByLetter, 150);
    }
}




let transforms = ['translateY(35%)', 'translateX(35%)', 'translateX(-35%)', 'translateY(-35%)'];
let currentEllipse = null; // pour controler le status de l'animation ellipse. 

for (let i = 1; i <= 4; i++) {
    const box = document.querySelector(`.box${i}`);
    const svg = box.querySelector('svg');
    const ellipse = svg.querySelector('ellipse');

    svg.addEventListener('mouseenter', () => {
        document.querySelector('.box-container').style.transform = transforms[i - 1];

        if (currentEllipse && currentEllipse !== ellipse) { // currentEllipse le douanier. pour lock l'animation de l'ellipse
            currentEllipse.style.animation = 'none';
            currentEllipse.offsetHeight; 
            currentEllipse.style.animation = '';
        } 
        const allBlocks = document.querySelectorAll('.test');
        for (let block of allBlocks) {

            block.style.display = 'none';
        }
        
        document.querySelector('.test' + i).style.display = 'flex';

        ellipse.style.animation = 'ellipse 1s forwards';
        currentEllipse = ellipse;

        if(i===2){
        displayLetterByLetter();
        }
    });

  
}







