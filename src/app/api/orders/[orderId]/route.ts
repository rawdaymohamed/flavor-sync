import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) => {
  const { orderId } = await params;
  const body = await req.json();
  const { status } = body;
  try {
    await prisma.order.update({
      where: { id: orderId },
      data: {
        status: status,
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
