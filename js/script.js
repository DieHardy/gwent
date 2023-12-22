let heroes = [["Керис", "Скеллиге", "character1.webp"],["Хьялмар", "Скеллиге", "character2.webp"],
                ["Мышовур", "Скеллиге", "character3.webp"],["Хеймдалль", "Скеллиге", "character4.webp"],
                ["Мардрём", "Скеллиге", "character5.webp"],['Лето из Гулеты', 'Нильфгаард', "character5.webp"],
                ['Морвран Воорхис', 'Нильфгаард',"character6.webp"]
];
// количество героев локального массива
const localCount = heroes.length;


let nameInput = document.getElementById('heroName');
let deckInput = document.getElementById('heroDeck');
let imageInput = document.getElementById('heroImage');
let addButton = document.getElementById('addButton');
addButton.addEventListener('click', addHero);

let musicButton = document.getElementById('musicButton');
musicButton.addEventListener('click', playSound);

function displayHeroes(){
    let heroContainer = document.getElementById('heroesContainer');
    heroContainer.innerHTML = '';
    for(let i = 0; i< heroes.length; i++){
        // добавляем элемент карточки
        let heroItem = document.createElement('div');
        heroItem.className="heroItem";
        heroContainer.appendChild(heroItem);
        // добавляем изображение
        let deckImage = document.createElement('img');
        deckImage.className='deck-image';
        if(localCount <= i){
            deckImage.src = heroes[i][2]; 
        }
        else{
            deckImage.src = './img/' + heroes[i][2];
        }
        
        deckImage.alt = '';
        heroItem.appendChild(deckImage);
        // добавляем блок текстовых данных
        let deckInfo = document.createElement('div');
        deckInfo.className = 'deck__info';
        heroItem.appendChild(deckInfo);
        // добавляем текстовые данные
        let heroName = document.createElement('div');
        heroName.className = 'heroName';
        heroName.innerHTML = `${heroes[i][0]}`;
        let heroDeck = document.createElement('div');
        heroDeck.className = 'heroDeck';
        heroDeck.innerHTML = `${heroes[i][1]}`;
        deckInfo.appendChild(heroName);
        deckInfo.appendChild(heroDeck);
    }
}

function addHero(){
    if(nameInput.value == '' || deckInput.value == ''){
        alert('Введите значения!');
    }
    else{
        if(imageInput.value){
            let file = imageInput.files[0];

            let reader = new FileReader();
            reader.onload = function(event){
                let imageDataUrl = event.target.result;
                let newHero = [nameInput.value, deckInput.value, imageDataUrl];
                nameInput.value = ''; deckInput.value = ''; imageInput.value = '';
                heroes.push(newHero);
                displayHeroes();
                alert("Герой добавлен!");
            }


            reader.readAsDataURL(file);
            
        } else{
            alert("Прикрепите изображение!");
        }

    }
}
let audio;
function playSound(){
if(audio && !audio.paused) 
{
    musicButton.innerHTML = "Включить музыку";
    audio.pause();        
    audio.currentTime = 0;
    audio = null;
} else {
    audio = new Audio('audio/gwent.mp3');
    if(audio){
        audio.play();
        musicButton.innerHTML = "Выключить музыку";
    }
}
}


displayHeroes();

