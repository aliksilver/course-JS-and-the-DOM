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


