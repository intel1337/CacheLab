import { kv } from '../main.js'

export default class DeleteController {
    remove(req, res) {
        const searchKey = req.params.key;
        
        for (let i = 0; i < kv.length; i++) {
            if (kv[i].key === searchKey) {
                kv.splice(i, 1)
                return res.json({ status: 'Clé supprimée' })
            }
        }
        
        res.status(404).json({ error: 'Clé non trouvée' });
    }
}


