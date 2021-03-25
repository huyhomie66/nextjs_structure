import type { NextApiRequest, NextApiResponse } from "next";

export interface next {
  req: NextApiRequest;
  res: NextApiResponse;
}
