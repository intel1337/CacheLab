import { kv } from '../main.js'

export default class GetController {
    getOne(req, res) {
        const searchKey = req.params.key;
        let foundKey = null;
        
        for (let i = 0; i < kv.length; i++) {
            if (kv[i].key === searchKey) {
                foundKey = kv[i];
                break;
            }
        }
        
        if (foundKey) {
            res.json(foundKey);
        } else {
            res.status(404).json({ error: 'Clé non trouvée' });
        }
    }

    getAll(req, res) {
        const start = performance.now();
        res.json(kv);
        const end = performance.now();
        console.log(`Requete : ${(end - start).toFixed(4)} ms`);

    }
}


