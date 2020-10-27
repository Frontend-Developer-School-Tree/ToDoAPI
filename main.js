//  <div class="card col-4 m-3">
// <div class="card-body">
//   <h5 class="card-title">Title</h5>
//   <p class="card-text">Description</p>
//   <p class="card-text"><small class="text-muted">ID</small></p>
// </div>
// </div> 



//dichiaro elementi 
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const postElement = document.querySelector('.mainPost');
const btn = document.querySelector('.start');
const clear = document.querySelector('.clear');

// funzione che in maniera asincrona prende file JSON  e mi renderizza l'output sulla pagina

async function getTodo() {
    const response = await fetch(API_URL)
    const todo = await response.json();
    // itero elementi dell'array
    todo.forEach(element => {
        //creo elementi html con classi 
        const card = document.createElement('div')
        card.classList.add("card", "col-3", "m-3", "pt-3");
        
        
        const cardBody = document.createElement('div')
        cardBody.classList.add('cardBody'); 

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent= "Titolo: "+element.title;
        
        const description = document.createElement('p');
        description.classList.add('card-text');
        element.completed==true ? description.textContent = "Completato" : description.textContent = "Non completato"; //controllo
        
        const id = document.createElement('p');
        id.classList.add('card-text');

        const idSpecifico = document.createElement('small');
        idSpecifico.classList.add("text-muted");
        idSpecifico.textContent= "ID "+ element.id ;


        //appendo lo small al p
        id.appendChild(idSpecifico);
        

        cardBody.appendChild(title)
        cardBody.appendChild(description)
        cardBody.appendChild(id)

        card.appendChild(cardBody);
        
        postElement.appendChild(card);
        
    });

}


//attiva la funzione al click
btn.addEventListener('click', getTodo);



//elimina i nodi figli di postElement
clear.addEventListener('click', ()=>{
    postElement.querySelectorAll('*').forEach(card => card.remove());
})

