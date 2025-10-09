import { hashmap } from '../main.js';

export default class PutController {
    async update(req, res) {
        const searchKey = req.params.key;
        const newValue = req.body.value;
        if (!newValue) {
            return res.status(400).json({ error: 'Valeur manquante' });
        }
        try {
            const existingValue = hashmap.get(searchKey);
            if (existingValue === null) {
                return res.status(404).json({ error: 'Clé non trouvée' });
            }
            hashmap.set(searchKey, newValue);
            return res.json({ 
                message: 'Clé mise à jour', 
                data: { key: searchKey, value: newValue } 
            });
            
        } catch (error) {
            res.status(500).json({ error: 'Erreur interne' });
        }        
        
        
        
        
    }
}


