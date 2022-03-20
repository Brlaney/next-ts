import { NextApiRequest, NextApiResponse } from 'next';
import { publications } from '@/lib/data/bpr';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const publication = publications.find(
    (publication) => publication.id == Number(id)
  );
  
  res.status(200).json(publication);
};
