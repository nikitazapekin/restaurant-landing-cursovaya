 










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

 












function addCustomerCard(title, about, location, url) {
  

    console.log(title, url, location, about)
    var customerCard = document.createElement('div');
    customerCard.className = 'customer__card slide';

  
    var containerElement = document.createElement('div');
    containerElement.className = 'customer__card__container';
 
    var previewElement = document.createElement('div');
    previewElement.className = 'customer__preview';

 
    var avatarWrapperElement = document.createElement('div');
    avatarWrapperElement.className = 'customer__avatar__wrapper';

  
    var imageItemElement = document.createElement('div');
    imageItemElement.className = 'customer__element__image__item';

   
    var zapatieImgElement = document.createElement('img');
    zapatieImgElement.src = './static/zapatie.png';
    zapatieImgElement.alt = 'zapatie';
    zapatieImgElement.className = 'customer__element__image__item__zapatie';

 
    var avatarImgElement = document.createElement('img');
   // avatarImgElement.src = './static/Avatar.png';
   avatarImgElement.src = url
    avatarImgElement.alt = 'avatar';
    avatarImgElement.className = 'customer__avatar';

 
    var personalityElement = document.createElement('div');
    personalityElement.className = 'customer__personality';
 
    var nameElement = document.createElement('p');
    nameElement.className = 'customer__name lng-customer__name';
   // nameElement.textContent = 'Natasha D';
   nameElement.textContent = title;
    var locationElement = document.createElement('p');
    locationElement.className = 'customer__location lng-customer__location';
   // locationElement.textContent = 'Newyork';
   locationElement.textContent = location
    imageItemElement.appendChild(zapatieImgElement);
    avatarWrapperElement.appendChild(imageItemElement);
    avatarWrapperElement.appendChild(avatarImgElement);
    personalityElement.appendChild(nameElement);
    personalityElement.appendChild(locationElement);
    previewElement.appendChild(avatarWrapperElement);
    previewElement.appendChild(personalityElement);
    containerElement.appendChild(previewElement);
 
    var lineElement = document.createElement('hr');
    lineElement.className = 'customer__card__line';
 
    var aboutElement = document.createElement('p');
    aboutElement.className = 'customer__card__about lng-customer__card__about';
   // aboutElement.textContent = 'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.';

   aboutElement.textContent = about
    containerElement.appendChild(lineElement);
    containerElement.appendChild(aboutElement);

 
    customerCard.appendChild(containerElement);

 
const parent = document.querySelector(".slider-track")

 
    parent.appendChild(customerCard);
}
//addDishElement("kvf", "kkfr", "koko", "kff");
 
//addCustomerCard();
























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
            addDishElement(item.title, item.price, item.about, item.url, "main");
        })
        jsonData.dishes__desert.forEach((item, index) => {
            addDishElement(item.title, item.price, item.about, item.url, "desert");
        })


/*
        jsonData.customers.forEach((item, index) => {

            console.log(item)
            addCustomerCard(item.title, item.about, item.location, item.url);
        })
*/


        jsonData.popular.forEach((item, index) => {

            //console.log(item)
       //     addCustomerCard(item.title, item.about, item.location, item.url);
     //  createPopularCard("Chicken Manjoori", "$15", "Dish relished by all age groups as a starter dish at parties.", "./static/popular/IMAGE.png");
     createPopularCard(item.title, item.price , item.about, item.url);
        })
    });
