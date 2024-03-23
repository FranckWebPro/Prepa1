const titleH1 = document.getElementsByTagName('h1');
const subtitles = document.getElementsByClassName('subtitles');
const projects = document.getElementsByTagName('article');
const projectLists = document.getElementsByClassName('projectList');
const projectButtons = document.getElementsByClassName('projectButton');

let i = 0;

for (let title of titleH1) {
    title.addEventListener('click', () => {
        if (i < 1) {
            const newTitle = prompt('Entrez un nouveau titre :');
            title.innerText = newTitle;
            i++
        }
    });
}

const hexCharacters = 'ABCDEF0123456789';

function generateHexColor() {
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += hexCharacters.charAt(Math.floor(Math.random() * hexCharacters.length));
    }
    return result;
};

for (let subtitle of subtitles) {
    subtitle.addEventListener('click', () => {
        const newColor = generateHexColor();
        for (let eachtitle of subtitles) {
            eachtitle.style.color = `#${newColor}`;
        }
    });
}

const createAddSkillHtml = (element) => {
    const newLabel = document.createElement('label');
    const newInput = document.createElement('input');
    const newButton = document.createElement('button');
    const newUl = document.createElement('ul');
    element.appendChild(newLabel);
    newLabel.innerText = 'Lister les compétences utilisées';
    element.appendChild(newInput);
    newInput.classList.add('inputProjectSkill')
    element.appendChild(newButton);
    newButton.classList.add('projectButton');
    newButton.type = "button";
    newButton.innerText = "Ajouter";
    element.appendChild(newUl);
    newUl.classList.add('projectList');
    newButton.addEventListener('click', () => {
        if (newInput.value !== "") {
            const newLi = document.createElement('li');
            newLi.innerText = newInput.value;
            newUl.appendChild(newLi)
            newInput.value = "";
        }
    });
}

for (let project of projects) {
    createAddSkillHtml(project);
}

const jokes = ["Pourquoi les canards sont toujours à l'heure ? \n Parce qu’ils sont dans l’étang.",
    "Avec quoi ramasse-t-on la papaye ? \n Avec une foufourche.",
    "Qu'est ce qui n'est pas un steak ? \n Une pastèque."];

const popUpAppear = () => {
    const popUpContainer = document.createElement('div');
    popUpContainer.classList.add('popUp');
    const joke = document.createElement('p');
    const randomJoke= jokes[(Math.floor(Math.random() * jokes.length))];
     joke.innerText = randomJoke;
    console.log(joke);
    popUpContainer.appendChild(joke);
    document.body.appendChild(popUpContainer);
    popUpContainer.style.display = "flex";
    setTimeout(() => {
        popUpContainer.style.display = "none";
        document.body.removeChild(popUpContainer);
    }, 3000);
}

setInterval(popUpAppear, 13000);