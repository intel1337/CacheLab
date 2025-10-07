import { hashmap } from '../main.js';

export default class DeleteController {
  remove(req, res) {
    const searchKey = req.params.key;


    const value = hashmap.get(searchKey);
    if (value === null) {
      return res.status(404).json({ error: 'Clé non trouvée' });
    }
    hashmap.delete(searchKey);

    return res.json({
      message: 'Clé supprimée avec succes',
      deleted: { key: searchKey, value }
    });
  }
}
