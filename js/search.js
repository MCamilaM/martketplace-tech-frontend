const phones = [
    { id: 1, name: 'Tecno Camon 20', year: 2023, category: ['64 MP RGB Camara Trasera', ' 6,67 AMOLED', ' 32 MP Selfie', ' 5000mAh', ' 8+8 RAM', ' 256 ROM'], score: 4.8, duration: '2H ', image: 'img/phone1/Tecno Camon 20.jpg', price: 2000000, html: 'phones/phone1.html' },
    { id: 2, name: 'Redmi Note 11s', year: 2022, category: ['108 MP Camara Trasera', ' 6,43 AMOLED', ' 16 MP Selfie', ' 5000mAh', ' 6 RAM', ' 128 GB ROM'], score: 4.2, duration: '1H 36min', image: 'img/phone2/Redmi Note 11s.jpeg', price: 890000, html: 'phones/phone2.html' },
    { id: 3, name: 'Iphone 14', year: 2023, category: ['12 MP Camara Trasera', ' 6,01 OLED', ' 12 MP Selfie', ' 3279mAh', ' 6 RAM', ' 64/128/256 GB ROM'], score: 5.0, duration: '1H 30min', image: 'img/phone3/IPHONE 14.jpg', price: 6000000, html: 'phones/phone3.html' },
    { id: 4, name: 'Huawei P60 pro', year: 2023, category: ['13 MP Camara Trasera', ' 6,67 OLED', ' 13 MP Selfie', ' 4815mAh', ' 8/12 RAM', ' 256/512 GB ROM'], score: 4.3, duration: '2H 49min', image: 'img/phone4/Huawei P60 pro.jpg', price: 5000000, html: 'phones/phone4.html' },
    { id: 5, name: 'Xiaomi 13', year: 2023, category: ['50 MP Camara Trasera', ' 6,36 OLED', ' 32 MP Selfie', ' 4500mAh', ' 8/12 RAM', ' 256 GB ROM'], score: 4.7, duration: '3h 12min', image: 'img/phone5/Xiaomi 13.jpg', price: 4500000, html: 'phones/phone5.html' },
    { id: 6, name: 'Iphone 11', year: 2019, category: ['108 MP Camara Trasera', ' 6,81 OLED', ' 20 MP Selfie', ' 4600mAh', ' 8 RAM', ' 128/256 GB ROM'], score: 4.8, duration: '2h 28min', image: 'img/phone6/IPHONE 11.png', price: 1500000, html: 'phones/phone6.html' },
    { id: 7, name: 'Redmi Note 12s', year: 2023, category: ['108 MP Camara Trasera', ' 6,43 AMOLED', ' 16 MP Selfie', ' 5000mAh', ' 6/8 RAM', ' 128/256 GB ROM'], score: 4.1, duration: '2h 22min', image: 'img/phone7/Redmi note 12s.jpg', price: 989000, html: 'phones/phone7.html' },
    { id: 8, name: 'Oppo Reno 7', year: 2022, category: ['64 MP Camara Trasera', ' 6,43 AMOLED', ' 32 MP Selfie', ' 4500mAh', ' 8/12 RAM', ' 128/256 GB ROM'], score: 3.9, duration: '2h 22min', image: 'img/phone8/reno 7.png', price: 1200000, html: 'phones/phone8.html' },
    { id: 9, name: 'Infinix Hot 30', year: 2023, category: ['50 MP Camara Trasera', ' 6,78 AMOLED', ' 32 MP Selfie', ' 5000mAh', ' 8+8 RAM', ' 128/256 GB ROM'], score: 4.8, duration: 'En espera', image: 'img/phone9/Infinix hot 30.jpg', price: 899000, html: 'phones/phone9.html' },
    { id: 10, name: 'Samsung S22', year: 2022, category: ['50 MP Camara Trasera', ' 6,1 AMOLED', ' 10 MP Selfie', ' 3700mAh', ' 8 RAM', ' 128/256 GB ROM'], score: 4.7, duration: '1h 20min', image: 'img/phone10/SAMSUNG GALAXY S22.png', price: 4000000, html: 'phones/phone10.html' }
]

const boxSearch = document.querySelector('#box-search');
const buttonSearch = document.querySelector('#button-search');
const resultSearch = document.querySelector('#movie-catalog');

const filter = () => {

    resultSearch.innerHTML = '';

    const textToSearch = boxSearch.value.toLowerCase();
    for (let phone of phones) {
        let name = phone.name.toLowerCase();
        if (name.indexOf(textToSearch) !== -1) {
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
                        <p class="card-text">⭐Opinión del Cliente: ${phone.score}</p>
                        <p class="card-text" >📽Fecha de Salida: ${phone.year}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span style="font-weight:bold">Información Basica:</span> ${phone.category}</li>
                    </ul>
                    <div class="card-body">
                        <a href="${phone.html}" class="card-link"><button type="button" class="btn btn-primary">Ver detalle</button></a>
                    </div>
                </div>
            `

        }
    }
}

boxSearch.addEventListener('keyup', filter)

filter()

