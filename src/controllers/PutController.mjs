

export default class PutController {
    async update(req, res) {
        const searchKey = req.params.key;
        const newValue = req.body.value;
        if (!newValue) {
            return res.status(400).json({ error: 'Valeur manquante' });
        }
        try {
            for (let i = 0; i < kv.length; i++) {
                if (kv[i].key === searchKey) {
                    kv[i].value = newValue;
                    return res.json({ message: 'Clé mise à jour', data: kv[i] });
                }
             }
            
        } catch (error) {
            res.status(404).json({ error: 'Clé non trouvée' });
        }        
        
        
        
        
    }
}


