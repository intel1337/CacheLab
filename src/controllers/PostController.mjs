import { hashmap } from '../main.js'
import { Key } from '../model/model.mjs';

export default class PostController {
    create(req, res) {
        const data = req.body;
        
        if (!data.key || !data.value) {
            return res.status(400).json({ error: 'Champs Manquants' });
        }
        
        const newKey = new Key(data.key, data.value);
        kv.push(newKey);
        
        res.status(201).json({ message: 'Clé ajoutée avec succès', data: newKey });
    }
}


