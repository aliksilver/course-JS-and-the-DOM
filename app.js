console.log('hello1 word');
console.log(window.innerHeight);
//document.body.style.background = "white";
console.log(navigator.platform);

//udacity
const nanodegreeCard = document.querySelector('.card');
let cardd = nanodegreeCard.textContent;
let incard = nanodegreeCard.innerHTML;
console.log(incard);
console.log(cardd);
//nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";
//nanodegreeCard.innerHTML = "<p>ll</p>"
console.log(nanodegreeCard);

nanodegreeCard.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors'; 
// doesn't work as expected

nanodegreeCard.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';  
// works as expected

//2.3 udacity
let cont = document.createElement('span');
cont.innerText = 'now+';
let mainH = document.querySelector('h1');
mainH.appendChild(cont);

const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');
myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);
const myDiv = document.createElement('div');
myDiv.textContent = 'My DIV';
document.body.appendChild(myDiv);

let cont2 = document.createElement('span');
document.body.appendChild(cont2);
cont2.innerText = 'Hiii';
document.body.appendChild(cont);

const mainHeading = document.querySelector('#ga-a9c3f5');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterbegin', htmlTextToAdd);
