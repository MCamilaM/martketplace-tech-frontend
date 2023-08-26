function ShowSelected() {
    /* Para obtener el valor */
    var cod = document.getElementById("dropdownMenuButton2").value;
    console.log("cod" + cod);

    switch (cod) {
        case "value0":
            console.log(cod);
            showPhones(getPhones())
            break;
        case "recientes":
            console.log(cod);
            mostRecentFilter()
            break;
        case "antiguas":
            console.log(cod);
            oldestFilter()
            break;
        case "puntaje":
            console.log(cod);
            scoreFilter()
            break;
        case "a-z":
            console.log(cod);
            alphabeticalOrderFilter();
            break;
        default:
            console.log("No tengo mascota");
            break;
    }

}

function getPhones() {

    const phones = [
    { id: 1, name: 'Tecno Camon 20', year: 2023, category: ['64 MP RGB Camara Trasera', ' 6,67 AMOLED',' 32 MP Selfie',' 5000mAh',' 8+8 RAM', ' 256 ROM'], score: 4.8, duration:'2H ', image: 'img/phone1/Tecno Camon 20.jpg', sipnosis: 'Un solitario profesor de inglés que tiene obesidad mórbida y vive recluido intenta reconectar' , html:'phones/phone1.html'},
    { id: 2, name: 'Redmi Note 11s', year: 2022, category: ['108 MP Camara Trasera', ' 6,43 AMOLED',' 16 MP Selfie',' 5000mAh',' 6 RAM', ' 128 GB ROM'], score: 4.2, duration:'1H 36min', image: 'img/phone2/Redmi Note 11s.jpeg', sipnosis: 'Beth visita a su hermana mayor, Ella, que está criando a 3 niños en un pequeño apartamento en Los Ángeles. Su reunión es muy corta cuando encuentran un libro demoníaco, The Necronomicon Ex-Mortis.' , html:'phones/phone2.html'},
    { id: 3, name: 'Iphone 14', year: 2023, category: ['12 MP Camara Trasera', ' 6,01 OLED',' 12 MP Selfie',' 3279mAh',' 6 RAM', ' 64/128/256 GB ROM'], score: 5.0, duration:'1H 30min', image: 'img/phone3/IPHONE 14.jpg', sipnosis: 'Un fontanero llamado Mario viaja a través de un laberinto subterráneo con su hermano, Luigi, tratando de salvar a una princesa capturada.' , html:'phones/phone3.html'},
    { id: 4, name: 'Huawei P60 pro', year: 2023, category: ['13 MP Camara Trasera', ' 6,67 OLED',' 13 MP Selfie',' 4815mAh',' 8/12 RAM', ' 256/512 GB ROM'], score: 4.3, duration:'2H 49min', image: 'img/phone4/Huawei P60 pro.jpg', sipnosis: 'John Wick descubre un camino para derrotar a La Mesa, pero, antes de que pueda ganar su libertad, Wick debe enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en enemigos.' , html:'phones/phone4.html'},
    { id: 5, name: 'Xiaomi 13', year: 2023, category: ['50 MP Camara Trasera', ' 6,36 OLED',' 32 MP Selfie',' 4500mAh',' 8/12 RAM', ' 256 GB ROM'], score: 4.7, duration:'3h 12min', image: 'img/phone5/Xiaomi 13.jpg', sipnosis: 'Jake Sully vive con su nueva familia en el planeta de Pandora. Cuando una amenaza conocida regresa, Jake debe trabajar con Neytiri y el ejército de la raza navi para proteger su planeta.' , html:'phones/phone5.html'},
    { id: 6, name: 'Iphone 11', year: 2019, category: ['108 MP Camara Trasera', ' 6,81 OLED',' 20 MP Selfie',' 4600mAh',' 8 RAM', ' 128/256 GB ROM'], score: 4.8, duration:'2h 28min', image: 'img/phone6/IPHONE 11.png', sipnosis: 'Las aterradoras experiencias y la angustia de un joven soldado alemán en el frente occidental durante la Primera Guerra Mundial.' , html:'phones/phone6.html'},
    { id: 7, name: 'Redmi Note 12s', year: 2023, category: ['108 MP Camara Trasera', ' 6,43 AMOLED',' 16 MP Selfie',' 5000mAh',' 6/8 RAM', ' 128/256 GB ROM'], score: 4.1, duration:'2h 22min', image: 'img/phone7/Redmi note 12s.jpg', sipnosis: 'Andy Dufresne es encarcelado por matar a su esposa y al amante de esta. Tras una dura adaptación, intenta mejorar las condiciones de la prisión y dar esperanza a sus compañeros.' , html:'phones/phone7.html'},
    { id: 8, name: 'Oppo Reno 7', year: 2022, category: ['64 MP Camara Trasera', ' 6,43 AMOLED',' 32 MP Selfie',' 4500mAh',' 8/12 RAM', ' 128/256 GB ROM'], score: 3.9, duration:'2h 22min', image: 'img/phone8/reno 7.png', sipnosis: 'Harry Potter, Ron y Hermione regresan al Colesin-novedad-frentegio Hogwarts de Magia y Hechicería para cursar su tercer año de estudios, donde se adentran en el misterio que rodea a un preso fugado que supone una peligrosa amenaza para el joven mago.' , html:'phones/phone8.html'},
    { id: 9, name: 'Infinix Hot 30', year: 2023, category: ['50 MP Camara Trasera', ' 6,78 AMOLED',' 32 MP Selfie',' 5000mAh',' 8+8 RAM', ' 128/256 GB ROM'], score: 4.8, duration:'En espera', image: 'img/phone9/Infinix hot 30.jpg', sipnosis: 'Los Lambert 10 años después de la última entrega, cuando Dalton comienza la universidad.' , html:'phones/phone9.html'},
    { id: 10, name: 'Samsung S22', year: 2022, category: ['50 MP Camara Trasera', ' 6,1 AMOLED',' 10 MP Selfie',' 3700mAh',' 8 RAM', ' 128/256 GB ROM'], score: 4.7, duration:'1h 20min', image: 'img/phone10/SAMSUNG GALAXY S22.png', sipnosis: 'Jon Arbuckle compra una segunda mascota, un perro llamado Odie. Sin embargo, Odie es secuestrado y depende del gato de Jon, Garfield, encontrar y rescatar al perro.', html:'phones/phone10.html' }
    ]
    

    return phones
}

function showPhones(phones) {

    resultSearch.innerHTML = '';

    for (let phone of phones) {
        // altGr + } (dos veces) para hacer backticks
        resultSearch.innerHTML += `
 
        <div class="card m-5 shadow p-3 mb-5 bg-white rounded mask flex-center " style="width: 23rem;">
        <div class="banner d-flex">
            <img src="img/Logo.png" class="imagen-banner" width="45" alt="...">
            <p class="card-title">Marketplace Technology</p>
        </div>
        <img src="${phone.image}" class="card-img-top hover-zoom" alt="...">
        <div class="card-body">
            <h5 class="card-title" style="font-weight:bold">${phone.name}</h5>
            <p class="card-text">⭐Calificación: ${phone.score}</p>
            <p class="card-text" >📽Estreno: ${phone.year}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span style="font-weight:bold">Categoria:</span> ${phone.category}</li>
        </ul>
        <div class="card-body">
            <a href="${phone.html}" class="card-link"><button type="button" class="btn btn-primary">Ver detalle</button></a>
        </div>
    </div>
            `

    }
}

function mostRecentFilter() {

    const phones = getPhones()

    phones.sort(function (phone1, phone2) {
        if (phone1.year > phone2.year) { return -1; }
        if (phone1.year < phone2.year) { return 1; }
        // phone1.year must be equal to phone2.year
        return 0;
    });

    showPhones(phones)
}

function oldestFilter() {

    const phones = getPhones()

    phones.sort(function (phone1, phone2) {
        if (phone1.year > phone2.year) { return 1; }
        if (phone1.year < phone2.year) { return -1; }
        // phone1.year must be equal to phone2.year
        return 0;
    });

    showPhones(phones)
}

function scoreFilter() {

    const phones = getPhones()

    phones.sort(function (phone1, phone2) {
        if (phone1.score > phone2.score) { return -1 }
        if (phone1.score < phone2.score) { return 1 }
        // phone1.score must be equal to phone2.score
        return 0;
    });

    showPhones(phones)
}

function alphabeticalOrderFilter() {

    const phones = getPhones()

    phones.sort(function (phone1, phone2) {
        var phone1Name = phone1.name.toLowerCase();
        var phone2Name = phone2.name.toLowerCase();

        if (phone1Name < phone2Name) { return -1 }
        if (phone1Name > phone2Name) { return 1 }
        // phone1.score must be equal to phone2.score
        return 0;
    });

    showPhones(phones)

}
