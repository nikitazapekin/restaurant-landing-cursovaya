console.log("rendeeeeerrr");












function addDishElement(title, about, price, url, type) {



    console.log("AB" +about, "PR" +price)
    var dishElement = document.createElement('div');
    dishElement.className = 'dish__element';


    var imgElement = document.createElement('img');
    // imgElement.src = './static/dishes/dish1.png';
    imgElement.src = url
    imgElement.className = 'dish__element__image';
    imgElement.alt = 'dish';


    var contentElement = document.createElement('div');
    contentElement.className = 'dish__element__content';


    var titleElement = document.createElement('p');
    titleElement.className = 'dish__element__title lng-dish__element__title';
    //titleElement.textContent = 'Raw Scallops from Erquy';
    titleElement.textContent = title
    var infoElement = document.createElement('div');
    infoElement.className = 'dish__element__info';


    var aboutElement = document.createElement('p');
    aboutElement.className = 'dish__element__about lng-dish__element__about';
    var boldElement = document.createElement('b');
    // boldElement.textContent = 'Shuck the scallop to that used for oysters';
    boldElement.textContent = about;
    aboutElement.appendChild(boldElement);


    var lineElement = document.createElement('hr');
    lineElement.className = 'dish__element__line';


    var priceElement = document.createElement('p');
    priceElement.className = 'dish__element__price';
    priceElement.textContent =  price;


    infoElement.appendChild(aboutElement);
    infoElement.appendChild(lineElement);
    contentElement.appendChild(titleElement);
    contentElement.appendChild(infoElement);

    infoElement.appendChild(priceElement);
    dishElement.appendChild(imgElement);
    dishElement.appendChild(contentElement);


    if (type == "main") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[1].appendChild(dishElement);
    }


    if (type == "starters") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[0].appendChild(dishElement);
    }



    if (type == "desert") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[2].appendChild(dishElement);
    }
}

 




 



 

function createPopularCard(title, price, about, imagePath) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("popular__card", "animated-card");

    var image = document.createElement("img");
    image.src = imagePath;
    image.alt = "dish";
    image.classList.add("popular__card__image");

    var headerDiv = document.createElement("div");
    headerDiv.classList.add("popular__card__header");

    var titleP = document.createElement("p");
    titleP.textContent = title;
    titleP.classList.add("popular__card__title", "lng-popular__card__title");

    var priceP = document.createElement("p");
    priceP.textContent = price;
    priceP.classList.add("popular__card__price");

    var lineHr = document.createElement("hr");
    lineHr.classList.add("popular__card__line");

    var aboutP = document.createElement("p");
    aboutP.textContent = about;
    aboutP.classList.add("popular__card__about", "lng-popular__card__about");
 
    headerDiv.appendChild(titleP);
    headerDiv.appendChild(priceP);

    cardDiv.appendChild(image);
    cardDiv.appendChild(headerDiv);
    cardDiv.appendChild(lineHr);
    cardDiv.appendChild(aboutP);


    var popularContainer = document.querySelector(".popular__cards"); 
    popularContainer.appendChild(cardDiv);
}

//createPopularCard("Chicken Manjoori", "$15", "Dish relished by all age groups as a starter dish at parties.", "./static/popular/IMAGE.png");
















function appendCustomerRateCard(title, about, location, url) {
    // Создаем новый элемент div
    var customerRateCard = document.createElement("div");
    customerRateCard.classList.add("customer__rate__card");
    customerRateCard.classList.add("slide");
    // Создаем вложенные элементы
    var bioDiv = document.createElement("div");
    bioDiv.classList.add("customer__rate__card__bio");

    var logoDiv = document.createElement("div");
    logoDiv.classList.add("customer__card__bio__logo");

    var logoImg = document.createElement("img");
    var logZapatie = document.createElement("img");
   // logoImg.src = "./static/Avatar.png";
   //     <img src="./static/Frame.png" class="zapatie" alt="zapatie">
   logoImg.src = url;
    logoImg.alt = "logo";

    logZapatie.src= "./static/Frame.png"
    logZapatie.alt="zapatie"
    logZapatie.classList.add("zapatie");
    logoImg.classList.add("customer__card__bio__logo__image");

    var textDiv = document.createElement("div");
    textDiv.classList.add("customer__rate__card__bio__text");

    var titleP = document.createElement("p");
    titleP.classList.add("customer__rate__card__bio__title");
  //  titleP.textContent = "Natasha D";
  titleP.textContent = title
    var locationP = document.createElement("p");
    locationP.classList.add("customer__rate__card__bio__location");
 //   locationP.textContent = "Newyork";
 locationP.textContent = location;
    textDiv.appendChild(titleP);
    textDiv.appendChild(locationP);
    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(logZapatie);
    bioDiv.appendChild(logoDiv);
    bioDiv.appendChild(textDiv);

    var contentDiv = document.createElement("div");
    contentDiv.classList.add("customer__rate__card__content");

    var hr = document.createElement("hr");
    hr.classList.add("customer__rate__card__line");

    var commentP = document.createElement("p");
    commentP.classList.add("customer__rate__card__comment");
   commentP.textContent = about
    contentDiv.appendChild(hr);
    contentDiv.appendChild(commentP);

    customerRateCard.appendChild(bioDiv);
    customerRateCard.appendChild(contentDiv);


  const parent = document.querySelector('.slider-track');
  parent.appendChild(customerRateCard);
}








var xhr = new XMLHttpRequest();
xhr.open('GET', './data.json', false);  // `false` makes the request synchronous
xhr.send();

if (xhr.status === 200) {
  var jsonData = JSON.parse(xhr.responseText);
  //console.log(json, 'the json obj');



















  jsonData.dishes__main.forEach((item, index) => {
    addDishElement(item.title, item.price, item.about, item.url, "main");
})
jsonData.dishes__starters.forEach((item, index) => {
    addDishElement(item.title, item.price, item.about, item.url, "starters");
})
jsonData.dishes__desert.forEach((item, index) => {
    addDishElement(item.title, item.price, item.about, item.url, "desert");
})




jsonData.customers.forEach((item, index) => {

console.log("CUSTOMERRRRRRRRRRRRRRRRR"+JSON.stringify(item))

 appendCustomerRateCard(item.title, item.about, item.location, item.url);

})


jsonData.popular.forEach((item, index) => {

    
  createPopularCard(item.title, item.price , item.about, item.url);
})
 

//test()
addEventsModalWindow()
//test()
  
} else {
  console.error('Failed to load JSON:', xhr.status);
}


/*

console.log("RENDER")







function addDishElement(title, about, price, url, type) {



    console.log("AB" +about, "PR" +price)
    var dishElement = document.createElement('div');
    dishElement.className = 'dish__element';


    var imgElement = document.createElement('img');
    // imgElement.src = './static/dishes/dish1.png';
    imgElement.src = url
    imgElement.className = 'dish__element__image';
    imgElement.alt = 'dish';


    var contentElement = document.createElement('div');
    contentElement.className = 'dish__element__content';


    var titleElement = document.createElement('p');
    titleElement.className = 'dish__element__title lng-dish__element__title';
    //titleElement.textContent = 'Raw Scallops from Erquy';
    titleElement.textContent = title
    var infoElement = document.createElement('div');
    infoElement.className = 'dish__element__info';


    var aboutElement = document.createElement('p');
    aboutElement.className = 'dish__element__about lng-dish__element__about';
    var boldElement = document.createElement('b');
    // boldElement.textContent = 'Shuck the scallop to that used for oysters';
    boldElement.textContent = about;
    aboutElement.appendChild(boldElement);


    var lineElement = document.createElement('hr');
    lineElement.className = 'dish__element__line';


    var priceElement = document.createElement('p');
    priceElement.className = 'dish__element__price';
    priceElement.textContent =  price;


    infoElement.appendChild(aboutElement);
    infoElement.appendChild(lineElement);
    contentElement.appendChild(titleElement);
    contentElement.appendChild(infoElement);

    infoElement.appendChild(priceElement);
    dishElement.appendChild(imgElement);
    dishElement.appendChild(contentElement);


    if (type == "main") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[1].appendChild(dishElement);
    }


    if (type == "starters") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[0].appendChild(dishElement);
    }



    if (type == "desert") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[2].appendChild(dishElement);
    }
}

 




 



 

function createPopularCard(title, price, about, imagePath) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("popular__card", "animated-card");

    var image = document.createElement("img");
    image.src = imagePath;
    image.alt = "dish";
    image.classList.add("popular__card__image");

    var headerDiv = document.createElement("div");
    headerDiv.classList.add("popular__card__header");

    var titleP = document.createElement("p");
    titleP.textContent = title;
    titleP.classList.add("popular__card__title", "lng-popular__card__title");

    var priceP = document.createElement("p");
    priceP.textContent = price;
    priceP.classList.add("popular__card__price");

    var lineHr = document.createElement("hr");
    lineHr.classList.add("popular__card__line");

    var aboutP = document.createElement("p");
    aboutP.textContent = about;
    aboutP.classList.add("popular__card__about", "lng-popular__card__about");
 
    headerDiv.appendChild(titleP);
    headerDiv.appendChild(priceP);

    cardDiv.appendChild(image);
    cardDiv.appendChild(headerDiv);
    cardDiv.appendChild(lineHr);
    cardDiv.appendChild(aboutP);


    var popularContainer = document.querySelector(".popular__cards"); 
    popularContainer.appendChild(cardDiv);
}

//createPopularCard("Chicken Manjoori", "$15", "Dish relished by all age groups as a starter dish at parties.", "./static/popular/IMAGE.png");
















function appendCustomerRateCard(title, about, location, url) {
    // Создаем новый элемент div
    var customerRateCard = document.createElement("div");
    customerRateCard.classList.add("customer__rate__card");
    customerRateCard.classList.add("slide");
    // Создаем вложенные элементы
    var bioDiv = document.createElement("div");
    bioDiv.classList.add("customer__rate__card__bio");

    var logoDiv = document.createElement("div");
    logoDiv.classList.add("customer__card__bio__logo");

    var logoImg = document.createElement("img");
    var logZapatie = document.createElement("img");
   // logoImg.src = "./static/Avatar.png";
   //     <img src="./static/Frame.png" class="zapatie" alt="zapatie">
   logoImg.src = url;
    logoImg.alt = "logo";

    logZapatie.src= "./static/Frame.png"
    logZapatie.alt="zapatie"
    logZapatie.classList.add("zapatie");
    logoImg.classList.add("customer__card__bio__logo__image");

    var textDiv = document.createElement("div");
    textDiv.classList.add("customer__rate__card__bio__text");

    var titleP = document.createElement("p");
    titleP.classList.add("customer__rate__card__bio__title");
  //  titleP.textContent = "Natasha D";
  titleP.textContent = title
    var locationP = document.createElement("p");
    locationP.classList.add("customer__rate__card__bio__location");
 //   locationP.textContent = "Newyork";
 locationP.textContent = location;
    textDiv.appendChild(titleP);
    textDiv.appendChild(locationP);
    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(logZapatie);
    bioDiv.appendChild(logoDiv);
    bioDiv.appendChild(textDiv);

    var contentDiv = document.createElement("div");
    contentDiv.classList.add("customer__rate__card__content");

    var hr = document.createElement("hr");
    hr.classList.add("customer__rate__card__line");

    var commentP = document.createElement("p");
    commentP.classList.add("customer__rate__card__comment");
   commentP.textContent = about
    contentDiv.appendChild(hr);
    contentDiv.appendChild(commentP);

    customerRateCard.appendChild(bioDiv);
    customerRateCard.appendChild(contentDiv);


  const parent = document.querySelector('.slider-track');
  parent.appendChild(customerRateCard);
}

let currentElems;
fetch('./data.json')
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);   
        console.log(jsonData);
        jsonData.dishes__main.forEach((item, index) => {
            addDishElement(item.title, item.price, item.about, item.url, "main");
        })
        jsonData.dishes__starters.forEach((item, index) => {
            addDishElement(item.title, item.price, item.about, item.url, "starters");
        })
        jsonData.dishes__desert.forEach((item, index) => {
            addDishElement(item.title, item.price, item.about, item.url, "desert");
        })



 
jsonData.customers.forEach((item, index) => {
    
    console.log("CUSTOMERRRRRRRRRRRRRRRRR"+JSON.stringify(item))

   // appendCustomerRateCard(item.title, item.about, item.location, item.url);
   
})
 

        jsonData.popular.forEach((item, index) => {

            
   //  createPopularCard(item.title, item.price , item.about, item.url);
        })
    });
*/























/*
console.log("RENDER")







function addDishElement(title, about, price, url, type) {



    console.log("AB" +about, "PR" +price)
    var dishElement = document.createElement('div');
    dishElement.className = 'dish__element';


    var imgElement = document.createElement('img');
    // imgElement.src = './static/dishes/dish1.png';
    imgElement.src = url
    imgElement.className = 'dish__element__image';
    imgElement.alt = 'dish';


    var contentElement = document.createElement('div');
    contentElement.className = 'dish__element__content';


    var titleElement = document.createElement('p');
    titleElement.className = 'dish__element__title lng-dish__element__title';
    //titleElement.textContent = 'Raw Scallops from Erquy';
    titleElement.textContent = title
    var infoElement = document.createElement('div');
    infoElement.className = 'dish__element__info';


    var aboutElement = document.createElement('p');
    aboutElement.className = 'dish__element__about lng-dish__element__about';
    var boldElement = document.createElement('b');
    // boldElement.textContent = 'Shuck the scallop to that used for oysters';
    boldElement.textContent = about;
    aboutElement.appendChild(boldElement);


    var lineElement = document.createElement('hr');
    lineElement.className = 'dish__element__line';


    var priceElement = document.createElement('p');
    priceElement.className = 'dish__element__price';
    priceElement.textContent =  price;


    infoElement.appendChild(aboutElement);
    infoElement.appendChild(lineElement);
    contentElement.appendChild(titleElement);
    contentElement.appendChild(infoElement);

    infoElement.appendChild(priceElement);
    dishElement.appendChild(imgElement);
    dishElement.appendChild(contentElement);


    if (type == "main") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[1].appendChild(dishElement);
    }


    if (type == "starters") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[0].appendChild(dishElement);
    }



    if (type == "desert") {

        const dish__elems = document.querySelectorAll(".dishes__elements");
        dish__elems[2].appendChild(dishElement);
    }
}

 




 



 

function createPopularCard(title, price, about, imagePath) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("popular__card", "animated-card");

    var image = document.createElement("img");
    image.src = imagePath;
    image.alt = "dish";
    image.classList.add("popular__card__image");

    var headerDiv = document.createElement("div");
    headerDiv.classList.add("popular__card__header");

    var titleP = document.createElement("p");
    titleP.textContent = title;
    titleP.classList.add("popular__card__title", "lng-popular__card__title");

    var priceP = document.createElement("p");
    priceP.textContent = price;
    priceP.classList.add("popular__card__price");

    var lineHr = document.createElement("hr");
    lineHr.classList.add("popular__card__line");

    var aboutP = document.createElement("p");
    aboutP.textContent = about;
    aboutP.classList.add("popular__card__about", "lng-popular__card__about");
 
    headerDiv.appendChild(titleP);
    headerDiv.appendChild(priceP);

    cardDiv.appendChild(image);
    cardDiv.appendChild(headerDiv);
    cardDiv.appendChild(lineHr);
    cardDiv.appendChild(aboutP);


    var popularContainer = document.querySelector(".popular__cards"); 
    popularContainer.appendChild(cardDiv);
}

//createPopularCard("Chicken Manjoori", "$15", "Dish relished by all age groups as a starter dish at parties.", "./static/popular/IMAGE.png");
















function appendCustomerRateCard(title, about, location, url) {
    // Создаем новый элемент div
    var customerRateCard = document.createElement("div");
    customerRateCard.classList.add("customer__rate__card");
    customerRateCard.classList.add("slide");
    // Создаем вложенные элементы
    var bioDiv = document.createElement("div");
    bioDiv.classList.add("customer__rate__card__bio");

    var logoDiv = document.createElement("div");
    logoDiv.classList.add("customer__card__bio__logo");

    var logoImg = document.createElement("img");
    var logZapatie = document.createElement("img");
   // logoImg.src = "./static/Avatar.png";
   //     <img src="./static/Frame.png" class="zapatie" alt="zapatie">
   logoImg.src = url;
    logoImg.alt = "logo";

    logZapatie.src= "./static/Frame.png"
    logZapatie.alt="zapatie"
    logZapatie.classList.add("zapatie");
    logoImg.classList.add("customer__card__bio__logo__image");

    var textDiv = document.createElement("div");
    textDiv.classList.add("customer__rate__card__bio__text");

    var titleP = document.createElement("p");
    titleP.classList.add("customer__rate__card__bio__title");
  //  titleP.textContent = "Natasha D";
  titleP.textContent = title
    var locationP = document.createElement("p");
    locationP.classList.add("customer__rate__card__bio__location");
 //   locationP.textContent = "Newyork";
 locationP.textContent = location;
    textDiv.appendChild(titleP);
    textDiv.appendChild(locationP);
    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(logZapatie);
    bioDiv.appendChild(logoDiv);
    bioDiv.appendChild(textDiv);

    var contentDiv = document.createElement("div");
    contentDiv.classList.add("customer__rate__card__content");

    var hr = document.createElement("hr");
    hr.classList.add("customer__rate__card__line");

    var commentP = document.createElement("p");
    commentP.classList.add("customer__rate__card__comment");
   commentP.textContent = about
    contentDiv.appendChild(hr);
    contentDiv.appendChild(commentP);

    customerRateCard.appendChild(bioDiv);
    customerRateCard.appendChild(contentDiv);


  const parent = document.querySelector('.slider-track');
  parent.appendChild(customerRateCard);
}



var DATA;

function getFile (fileName) {

    var request = new XMLHttpRequest();

    request.open('GET', fileName);

    request.onloadend = function() {

        parse(request.responseText);
    }

    request.send();
}

getFile('./data.json'); //путь к файлу

function parse(obj) {

   // DATA = JSON.parse(obj);

  //  console.log("JSOM"+JSON.stringify(DATA));
  let jsonData = JSON.parse(obj);














  jsonData.dishes__main.forEach((item, index) => {
    addDishElement(item.title, item.price, item.about, item.url, "main");
})
jsonData.dishes__starters.forEach((item, index) => {
    addDishElement(item.title, item.price, item.about, item.url, "starters");
})
jsonData.dishes__desert.forEach((item, index) => {
    addDishElement(item.title, item.price, item.about, item.url, "desert");
})




jsonData.customers.forEach((item, index) => {

console.log("CUSTOMERRRRRRRRRRRRRRRRR"+JSON.stringify(item))

// appendCustomerRateCard(item.title, item.about, item.location, item.url);

})


jsonData.popular.forEach((item, index) => {

    console.log("ITT" +JSON.stringify(item))
  createPopularCard(item.title, item.price , item.about, item.url);
})









}

*/






