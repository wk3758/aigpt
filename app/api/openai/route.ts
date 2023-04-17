import { NextRequest, NextResponse } from "next/server";
import { requestOpenai } from "../common";
import { IncomingMessage } from "http";

const requestCounts: Record<string, number> = {};

async function makeRequest(req: NextRequest & { socket: IncomingMessage["socket"] }) {
  const ipAddress = req.headers.get("x-real-ip") || req.socket.remoteAddress;

if (!requestCounts[ipAddress as string]) {
  requestCounts[ipAddress as string] = 1;
} else {
  requestCounts[ipAddress as string]++;
}

const ipAddress = (req.headers.get("x-real-ip") || req.socket.remoteAddress || "0.0.0.0") as string;
    return NextResponse.json(
      {
        error: true,
        msg: "您请求对话的次数已超过限制",
      },
      {
        status: 429,
      },
    );
  }

  try {
    const res = await requestOpenai(req);
    return new Response(res.body);
  } catch (e) {
    console.error("[OpenAI] ", req.body, e);
    return NextResponse.json(
      {
        error: true,
        msg: JSON.stringify(e),
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: NextRequest) {
  return makeRequest(req);
}

export async function GET(req: NextRequest) {
  return makeRequest(req);
}
