import { OutgoingHttpHeaders } from "http2";
import type { NextApiRequest, NextApiResponse } from "next";
import { captureMessage } from "@sentry/nextjs";

type Data = {
  name: string;
  res_headers: OutgoingHttpHeaders;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  captureMessage("Hello from work.js");

  res.status(200).json({
    name: "John Doe",
    res_headers: res.getHeaders(),
  });
}
