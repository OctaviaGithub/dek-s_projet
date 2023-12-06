# DEK'S AUTO

### Projet de : 
###     - Enzo Lahaye
###     - Dany Chaste
###     - Kayleigh Borde

============================

## Rappel de consignes principales :

##### Vous allez devoir créer un site web de E Commerce avec back end de toute pièce en full stack javascript. Le sujet des ventes est libre à vous, bien que vous devez le garder de bon goût.

##### Points à respecter : 

### [] Visuellement :
###         - [x] Avoir un header et footer sur chaque page

### [] Faire comme action :
###         - [x] Afficher des articles créés dynamiquement à partir de data dans une DB.
###         - [ ] Permettre de posté un formulaire du front jusqu’à la DB.
###         - [x] Ajouter un article dans un panier (le panier sera global à tous les utilisateurs).
###         - [x] Enlever des articles d’un panier. 

## Autres informations : 

#### 1. Impossibilité d'envoyer des informations du front au back. Source des erreurs : 
Dans le fichier route.js : 
```javascript
app.post('/buy-cart', (req, res) => {
        const { name, price } = req.body;
        db.run('INSERT INTO cart (name, price) VALUES (?, ?)', [name, price], (err) => {
          if (err) {
            return console.log(err);
          }
          console.log('Enregistrement ajouté avec succès dans la table "cart".');
          res.json({ message: 'Enregistrement ajouté avec succès dans la table "cart".' });
        });
      });
```
Dans le fichier en front : 

```javascript
buyCart(){
        const firstCar = this.peugeots[0];
        console.log(firstCar.name, firstCar.price);
        axios.post('http://localhost:3000/buy-cart', { name : firstCar.name , price : firstCar.price})
        .then(response => {
          console.log(response.data);
        })
      }
```

Avec comme erreur simple : 

ERROR
Request failed with status code 500 AxiosError: Request failed with status code 500     at settle (webpack-internal:///./node_modules/axios/lib/core/settle.js:24:12)     at XMLHttpRequest.onloadend (webpack-internal:///./node_modules/axios/lib/adapters/xhr.js:111:66)

Avec plus d'informations sur la page : "CANNOT Get /buy-cart"


#### 2. Problèmes avec le système de routeur et d'autres pages

Ce problèmes d'incompréhension des autres pages nous force à avoir des soucis avec nos router-links et leurs compréhensions.