// PUNTATORI

const url = 'https://striveschool-api.herokuapp.com/api/product/';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhYTE5ZTBiM2IyNTAwMTUxYjU1YWMiLCJpYXQiOjE3MTU1NDkzNDYsImV4cCI6MTcxNjc1ODk0Nn0.7NI0yx5cqhcpXMLeumdGp53z_qXRJi-qsWIsaURr8EI';
const cardWare = document.getElementById('cardProducts');




//Funzione caricamento pagina
window.onload = async () => {
    
    await showProducts(); 
}


// Funzione Creazione articolo
function createProducts () {
    
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const brand = document.getElementById('brand').value;
    const price = document.getElementById('price').value;
    
    const newProduct = { name, description, image, brand, price};
    
        fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" ,
                "Authorization" : ` Bearer ${apiKey}`,
        },
        body: JSON.stringify(newProduct),
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Errore durante la richiesta.');
        }
        return response.json();
      })
      .then(product => {
        console.log('Dati inviati con successo:', product);
        alert('Utente creato con successo!')
        showProducts(); 
      })
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });
}



// Funzione per modificare l'articolo
 function editProducts () {
    
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const brand = document.getElementById('brand').value;
    const price = document.getElementById('price').value;
    
    const updateProduct ={ name, description, image, brand, price};

    fetch(url + id, {
        method: "PUT",
        headers: { "content-type": "application/json" ,
                "Authorization" : ` Bearer ${apiKey}`,
        },
        body: JSON.stringify(updateProduct),
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Errore durante la richiesta.');
        }
        return response.json();
      })
      .then(product => {
        console.log('Dati inviati con successo:', product);
        alert('Utente creato con successo!')
        showProducts(); 
      })
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });
}



// Funzione per eliminare l'articolo
 function deleteProducts () {
    
    
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const brand = document.getElementById('brand').value;
    const price = document.getElementById('price').value;
    const id = document.getElementById('id').value;
    
    const deleteProduct ={ name, description, image, brand, price};
    fetch(url + id, {
        method: "DELETE",
        headers: { "content-type": "application/json" ,
                    "Authorization" : ` Bearer ${apiKey}`,
                },
                body: JSON.stringify(deleteProduct),
     })
    .then(response => {
        if (!response.ok) {
          throw new Error('Errore durante la richiesta.');
        }
        return response.json();
      })
      .then(product => {
        console.log('Dati inviati con successo:', product);
        alert('Utente eliminato con successo!')
        showProducts(); 
      })
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });
}


// Funzione per ottenere i prodotti e visualizzarli 
const showProducts = async () => {
    const res = await fetch(url,{
        headers: { 
                "Authorization" : ` Bearer ${apiKey}`,
                },
         });
     const products = await res.json();

    if (cardWare) {
        cardWare.innerHTML = products.map((product) => `
            <div class='col-12'>
                <span>${product.name}</span> / 
                <span>${product.description}</span> / 
                <img src="${product.image}" alt="${user.name}"> / 
                <span>${product.brand}</span> / 
                <span>${product.price}</span> / 
            </div>
        `).join('');
    }
}


































































// window.onload = () => {
    
//    getProducts(); 
// };




// // Inserimento nuovo articolo
// function insertWare(){
    
//     const nameWare = document.getElementById('name').value;
//     const imageWare = document.getElementById('image').value;
//     const descriptionWare = document.getElementById('description').value;
//     const brandWare = document.getElementById('brand').value;
//     const priceWare = document.getElementById('price').value;
//     // Crea un nuovo oggetto utente
//     const newProduct = { nameWare, imageWare, descriptionWare, brandWare, priceWare };
    
//     fetch(url, { //chiamata fetch
//         method: "POST", 
//         headers: {
//                     "Content-Type": "application/json", 
//                     "Authorization" : ` Bearer ${apikey}`,
//                 },
//         body: JSON.stringify(newProduct), 
//         })  // Chiusura fetch 
//         .then((response) => response.json()) // Risposta fetch,conversione in JSON
//         .then((newProduct) => {
//           cardProducts(newProduct);
//           alert("Articolo aggiunto con successo!"); 
//           console.log("Articolo aggiunto con successo!");
//         })
//         .catch((error) => {
//           console.error("Errore:", error);
//           alert("Errore nell'aggiunta dell'articolo.");
          
//         });
//     }
    
    
    
// //Funzione che crea una nuova CARD
//     function cardProducts(product) {
//         // Creo un nuovo div per la card utente
//         const card = document.createElement("div");
//         card.className = "productCard"; // Applico CSS // da verificare
      
//         // Creo i tag per la card
//         const nameWare = creaElementoConTesto("h3", product.name);
//         const imageWare = creaElementoConTesto("img", product.image);
//         const descriptionWare = creaElementoConTesto("p", "Description: " + product.description);
//         const brandWare = creaElementoConTesto("p", "Brand: " + product.brand);
//         const priceWare = creaElementoConTesto("p", "Price: " + product.price);
//         const detailsWare = creaElementoConTesto("a", "Details")
        
      
//         // Aggiungo gli elementi alla scheda utente
//         card.appendChild(nameWare);
//         card.appendChild(imageWare);
//         card.appendChild(descriptionWare);
//         card.appendChild(brandWare); 
//         card.appendChild(priceWare); 
//         card.appendChild(detailsWare);
//         // Aggiungo la scheda al contenitore delle schede
//         cardWare.appendChild(card);
//       }
      

// // Funzione per ottenere i dati e visualizzazione card
//     function getProducts() {
// // Invia una richiesta GET per ottenere gli articoli
//             fetch( url , { //chiamata fetch
//                     headers: {
//                     "Content-Type": "application/json", 
//                     "Authorization" : ` Bearer ${apikey}`,
//                 },
//                     body: JSON.stringify(product), 
//             })  // Chiusura fetch 
//             .then((response) => response.json()) // Risposta fetch e conversione in JSON
//             .then((products) => {
//       // Iterazione prodotti e creazione card per ognuno
//             products.forEach((product) => cardProducts(product));
//             })
//             .catch((error) => console.error("Errore:", error));
// }

// // Funzione che crea gli elementi della card
// function creaElementoConTesto(typeTag, text) {
//     const tag = document.createElement(typeTag);
//     tag.textContent = text;
//     return tag;
// }
  


// function editWareWare(){
    
//     const id = document.getElementById('id').value;
//     const nameWare = document.getElementById('name').value;
//     const imageWare = document.getElementById('image').value;
//     const descriptionWare = document.getElementById('description').value;
//     const brandWare = document.getElementById('brand').value;
//     const priceWare = document.getElementById('price').value;
//     // Crea un nuovo oggetto utente
//     const editProduct = { nameWare, imageWare, descriptionWare, brandWare, priceWare };
    
//     fetch(url + id, { //chiamata fetch
//         method: "PUT", 
//         headers: {
//                     "Content-Type": "application/json", 
//                     "Authorization" : ` Bearer ${apikey}`,
//                 },
//         body: JSON.stringify(editProduct), 
//         })  // Chiusura fetch 
//         .then((response) => response.json()) // Risposta fetch,conversione in JSON
//         .then((newProduct) => {
//         getProducts(newProduct);
//         alert("Articolo modificato con successo!"); 
//         console.log("Articolo modificato con successo!");
//         })
//         .catch((error) => {
//         console.error("Errore:", error);
//         alert("Errore nella modifica dell'articolo.");
//         });
//     }






//     function deleteWareWareWare(){
//     const id = document.getElementById('id').value;

    
//     fetch(url + id, { //chiamata fetch
//         method: "DELETE", 
//         headers: {
//                     "Content-Type": "application/json", 
//                     "Authorization" : ` Bearer ${apikey}`,
//                 },
//         }) // Chiusura fetch 
//         .then((response) => response.json()) // Risposta fetch,conversione in JSON
//         .then((deleteProduct) => {
//           getProducts(deleteProduct);
//           alert("Articolo eliminato con successo!"); 
//           console.log("Articolo eliminato con successo!");
//         })
//         .catch((error) => {
//           console.error("Errore:", error);
//           alert("Errore nell'eliminazione dell'articolo.");
          
//         });
//     }
    








































































// // FUNZIONE PER OTTENERE GLI ARTICOLI
// function getProducts() {
//         fetch(url, {
//         headers: {  "content-type": "application/json",
//                     "Authorization": apiKey
//                     },
// //     })
//     .then((response) => response.json()) // Converto la risposta del server in JSON
//     .then((products) => {
//       // Iterazione dei prodotti restituiti con aggiunta di una scheda per ognuno
//     products.forEach((product) => showProducts(product));
//     })
   
//     .catch((error) => console.error("Errore:", error));
// }

// // FUNCTION PER INSERIRE UN NUOVO ARTICOLO
// function insertWare(product) {
//             fetch(url, {
//             method: "POST",
//             headers: {  "content-type": "application/json",
//                         "Authorization": apiKey
//                     },
//             body: JSON.stringify(product),
//             })
//             .then((response) => response.json())
//             .then((newProduct) => {
//             showProducts(newProduct);
//             alert('Product created correctly!');
//             })
//             .catch ((error) => {
//             console.error("Errore:", error)
//             alert('Product created incorrectly!');
//             });
// }


// //  FUNCTION CHE AGGIUNGE UNA NUOVA CARD DEI PRODOTTI
// function showProducts(product) {
//     //  CREAZIONE CARD
//      const card = document.createElement('div');
//      card.classList.add('card');
//     // CREAZIONE TAG
//      const image = createObjectKey('img',product.image);
//      const name = createObjectKey('h3',"Name: " + product.name);
//      const description = createObjectKey('p',"Description: "+ product.description);
//      const brand = createObjectKey('span',"Brand: " + product.brand);
//      const price = createObjectKey('span',"Price: " + product.price);
    
//      const productDetail = document.createElement("a");
//      productDetail.classList.add("edit");
//      productDetail.textContent = "View Details";
//      productDetail.onclick = () => modificaUser(product.id, card);    // DA MODIFICARE

//    // AGGIUNGO GLI ELEMENTI ALLA SCHEDA
//      card.appendChild(image);
//      card.appendChild(name);
//      card.appendChild(description);
//      card.appendChild(brand); 
//      card.appendChild(price); 
//      card.appendChild(productDetail); 

//      // AGGIUNGO LA SCHEDA AL CONTENITORE
//      cardWare.appendChild(card);
// }

// // AL CARICAMENTO DELLA PAGINA
// document.addEventListener("DOMContentLoaded", function () {
      
//     // Ottengo i dati del nuovo utente dai campi del modulo
//         const nameValue = document.getElementById('name').value;
//         const descriptionValue = document.getElementById('description').value;
//         const brandValue = document.getElementById('brand').value;
//         const imageValue = document.getElementById('image').value;
//         const priceValue = document.getElementById('price').value;
  
//         const product = {name: nameValue,
//             description: descriptionValue,
//             brand: brandValue,
//             image: imageValue,
//             price: priceValue
//         };
  
//       // Invio i dati dell'utente al server
//         insertWare(product);

  
//     // Chiamo la funzione per ottenere gli utenti e visualizzarli
//     getProducts();
// });
  

// // FUNCTION CHE CREA GLI ELEMENTI DELLA CARD
// const createObjectKey = (tagType, text) => {
//   const tag = document.createElement(tagType);
//   tag.textContent = text;
//   return tag;
// }

