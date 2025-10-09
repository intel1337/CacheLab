import { hashmap } from '../main.js';

export default class GetController {
  
  async getOne(req, res) {

    const searchKey = req.params.key;
    const value = hashmap.get(searchKey); 

    try {
        if (value) {
        res.json({ key: searchKey, value });
        }
    } 
    catch (error) {
            res.status(404).json({ error: 'Clé non trouvée' });
        }    
    }

  getAll(req, res) {

    const start = performance.now();
    try {
        const all = [];
    for (let bucket of hashmap.table) {
      for (let [key, value] of bucket) {
        all.push({ key, value });
      }
    }
    res.json(all);
        
    const end = performance.now();
    console.log(`Requête : ${(end - start).toFixed(4)} ms`);
    } catch (error) {
        res.send(404).json({status: "No Keys found"})
    }

    


  }
}
