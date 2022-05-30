import { OutgoingHttpHeaders } from "http2";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  res_headers: OutgoingHttpHeaders;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  throw new Error("Error from API throw.js");

  res.status(200).json({
    name: "John Doe",
    res_headers: res.getHeaders(),
  });
}
