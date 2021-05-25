let API_URL = fetch('https://rickandmortyapi.com/api/character')
let html = document.getElementById('contenido')
let cards = document.getElementById('cards')
let page = document.getElementById('paginar')
API_URL.then(res => res.json())
    .then(data => {        
        for (const datos of data.results) {
            console.log(datos)
            cards.innerHTML += `<div class='card ml-5 mt-5' style='width: 20%;'>
                                <img src='${datos.image}' class='card-img-top' alt='...'>
                                <div class='card-body'>
                                    <h5 class='card-title'>${datos.name}</h5>               
                                </div>
                                <ul class='list-group list-group-flush'>
                                    <li class='list-group-item'>Gender: ${datos.gender}</li>
                                    <li class='list-group-item'>Status: ${datos.status} </li>
                                    <li class='list-group-item'>Origin: ${datos.origin.name}</li>
                                </ul>                
                            </div>`                            
            page.innerHTML += `<li class='page-item'><a class='page-link' href='${data.info.next+1}'>2</a></li>`
            console.log(data.info.next)
        }
    }).catch(error => console.log(error))