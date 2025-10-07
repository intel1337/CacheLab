import { hashmap } from '../main.js';

export default class DeleteController {
  remove(req, res) {
    const start = performance.now();

    const searchKey = req.params.key;


    const value = hashmap.get(searchKey);
    if (value === null) {
        const end = performance.now();
        console.log(`Requete Delete: ${(end - start).toFixed(4)} ms`);
      return res.status(404).json({ error: 'Clé non trouvée' });
    }
    hashmap.delete(searchKey);

    const end = performance.now();
    console.log(`Requete Delete: ${(end - start).toFixed(4)} ms`);
    
    return res.json({
      message: 'Clé supprimée avec succes',
      deleted: { key: searchKey, value }
    });

  }
}
