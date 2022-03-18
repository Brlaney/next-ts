import { publications } from '@/lib/data/bpr';

export default function handler(req, res) {
  const { id } = req.query;
  const publication = publications.find(
    (publication) => publication.id == Number(id)
  );
  
  res.status(200).json(publication);
};
