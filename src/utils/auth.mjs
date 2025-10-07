import { CachelabConfig } from '../config.mjs';

export function verifyBearer(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token invalide' });
  }

  const token = authHeader.split(' ')[1];

  if (token !== CachelabConfig.bearer) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  next();
}
