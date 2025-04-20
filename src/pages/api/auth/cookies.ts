import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  message: string;
  success: boolean;
  data: Record<string, any>;
}
export default function getCookies(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed', success: false, data: null });
    return;
  }

  const cookies = req.cookies;

  res.status(200).json({ message: 'Cookies Get Successfully', success: true, data: cookies });
}
