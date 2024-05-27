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
Je m appelle Romain Esquerra, j’ai 30 ans et je suis actuellement étudiant chez O’clock, où je me spécialise en développement Full Stack JavaScript.

Au cours de ma formation, j’ai acquis une solide connaissance des technologies front-end et back-end, y compris Node.js, React, Express et MongoDB. J’ai également eu l’occasion de travailler sur plusieurs projets qui m’ont permis de mettre en pratique ces compétences et de développer ma capacité à résoudre des problèmes de manière créative.

Je suis à la recherche d’une entreprise qui pourrait m’accueillir pour un stage. Je suis particulièrement intéressé par les opportunités qui me permettraient de continuer à développer mes compétences en JavaScript tout en contribuant à des projets significatifs.

Ce stage serait ma première expérience professionnelle dans le domaine du développement web, et je suis très motivé à l’idée de faire mes preuves et d’apprendre autant que possible. Je suis convaincu que je pourrais apporter une valeur ajoutée à votre équipe grâce à ma passion pour le code, mon engagement envers la qualité et ma volonté d’apprendre.

Je serais ravi de discuter plus en détail de la manière dont je pourrais contribuer à votre entreprise. N’hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter de possibles opportunités.

Cordialement, Romain Esquerra `;
let index1 = 0;

function displayLetterByLetter() {
    if (index1 < textToDisplay.length) {
        presentation.textContent += textToDisplay[index1];
        index1++;
        setTimeout(displayLetterByLetter, 0);
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
        
        document.querySelector('.test' + i).style.display = 'block';
        if(document.querySelector('.test' + 1)){
            document.querySelector('.test' + i).style.display = 'flex';
        }

        ellipse.style.animation = 'ellipse 1s forwards';
        currentEllipse = ellipse;

        if(i===2){
        displayLetterByLetter();
        }
    });

  
}







