import { NextApiRequest, NextApiResponse } from 'next';
import { publications } from '@/lib/data/bpr';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(publications);
};
