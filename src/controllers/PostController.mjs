import { hashmap } from '../main.js';
import { Key } from '../model/model.mjs';

export default class PostController {
  async create(req, res) {
    const data = req.body;

    if (!data.key || !data.value) {
      return res.status(400).json({ error: 'Champs manquants' });
    }
    try {
        const newKey = new Key(data.key, data.value);
        hashmap.set(newKey.key, newKey.value);
        const savedValue = hashmap.get(newKey.key);

        res.status(201).json({
        message: 'Clé ajoutée avec succes',
        data: { key: newKey.key, value: savedValue },
        });
        
    } catch (error) {
        res.status(500).json({
            status: "Internal Error"
        })
        
    }

  

   
  }
}
