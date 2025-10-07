# CacheLab

# CDC
## CacheLab Projet de Cache type clé valeur (Redis, Vercel KV, etc..)

### Cas D'utilisation
- Stocker des données en cache pour améliorer les performances d'app web.
- Gestion des sessions
- Classements

### Performances
- Bootstrap du Framework : `Temps de boot: 2.5298 ms`
- Temps de réponse API : 

`Avec HashMap (en local) :`
```
Requête : 3.3947 ms
Requête : 6.4808 ms
Requête : 2.7841 ms
```
`Avec Array (en local) :`
```
Requête : 10.1234 ms
Requête : 15.6789 ms
Requête : 9.4567 ms
```
- API sécurisée via Bearer Token
- Configuration utilisateur
- Structure module (controllers, utils, config) 


### Fonctionnalités
- CRUD complet (Create, Read, Update, Delete).
- Endpoints :
    - `GET /key/:key` 
    - `GET /keys` 
    - `POST /keys`
    - `PUT /keys/:key` 
    - `DELETE /keys/:key` 


### Stack

- Langage : JavaScript 
- Framework : Express
- Structure API rest
- Structure de donnée : HashMap au lieu D'array (voir benchmark)

