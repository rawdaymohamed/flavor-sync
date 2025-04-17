import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Get Single Product

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) => {
  const { productId } = await params;

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    return new NextResponse(JSON.stringify(product), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
