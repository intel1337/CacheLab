import { hashmap } from '../main.js';

export default class GetController {
  
  getOne(req, res) {
    const searchKey = req.params.key;
    const value = hashmap.get(searchKey); 

    if (value) {
      res.json({ key: searchKey, value });
    } else {
      res.status(404).json({ error: 'Clé non trouvée' });
    }
  }

  getAll(req, res) {
    const start = performance.now();

    const all = [];
    for (let bucket of hashmap.table) {
      for (let [key, value] of bucket) {
        all.push({ key, value });
      }
    }

    res.json(all);

    const end = performance.now();
    console.log(`Requête : ${(end - start).toFixed(4)} ms`);
  }
}
