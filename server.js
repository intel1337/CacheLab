import express from "express";
import Key from "./model.mjs";

const app = express()

app.use(express.json(), cors())

const kv = []

app.get('/key/:key', (req, res) => {
    const searchKey = req.params.key;
    let foundKey = null;
    
    kv.forEach(key => {
        if (key.key === searchKey) {
            foundKey = key;
        }
    });
    
    if (foundKey) {
        res.json(foundKey);
    } else {
        res.status(404).json({ error: 'Clé non trouvée' });
    }
})

  app.get('/keys', (req, res) => {
    res.json(kv);
  })


app.post('/keys', (req, res)=>{
    const data = req.body;
    
    if (!data.key || !data.value) {
        return res.status(400).json({ error: 'Champs Manquants' });
    }
    
    const newKey = new Key(data.key, data.value);
    
    kv.push(newKey);
    
    res.status(201).json({ message: 'Clé ajoutée avec succès', data: newKey });
})

app.put('/keys/:key', (req, res)=> {
    const searchKey = req.params.key;
    const newValue = req.body.value;
    
    if (!newValue) {
        return res.status(400).json({ error: 'Valeur manquante' });
    }
    
    for (let i = 0; i < kv.length; i++) {
        if (kv[i].key === searchKey) {
            kv[i].value = newValue;
            return res.json({ message: 'Clé mise à jour', data: kv[i] });
        }
    }
    
    res.status(404).json({ error: 'Clé non trouvée' });
})

app.delete('/keys/:key', (req, res)=> {
    const searchKey = req.params.key;
    
   for(i = 0; i < kv.length; i++){
    try{
        if(kv[i].key === searchKey){
            kv.splice(i, 1)
        }
        res.send().json({status: 'Clé supprimée'})
    }catch{
        res.status(404).json({ error: 'Clé non trouvée' });


    }
   
   }
    
    
})
  

app.listen(6379) // Port de Redis