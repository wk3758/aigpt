import { NextRequest, NextResponse } from "next/server";
import { requestOpenai } from "../common";

// 用于存储每个 IP 地址的请求计数
const requestCounts: Record<string, number> = {};

async function makeRequest(req: NextRequest) {
  // 从请求中获取 IP 地址
  const ipAddress = req.headers.get("x-real-ip") || req.socket.remoteAddress;

  // 如果 IP 地址不存在于 requestCounts 对象中，将其添加并设置计数为 1
  if (!requestCounts[ipAddress]) {
    requestCounts[ipAddress] = 1;
  } else {
    // 否则，增加 IP 地址的请求计数
    requestCounts[ipAddress]++;
  }

  // 如果 IP 地址的请求次数超过 20 次，返回错误信息
  if (requestCounts[ipAddress] > 20) {
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
