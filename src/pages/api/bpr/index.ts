import { publications } from '@/lib/data/bpr';

export default function handler(req, res) {
  res.status(200).json(publications);
};
