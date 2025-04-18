import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
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

// Delete Single Product

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) => {
  const { productId } = await params;
  const session = await auth();
  if (session?.user.role === "admin") {
    try {
      await prisma.product.delete({
        where: { id: productId },
      });
      return new NextResponse(JSON.stringify("Product has been deleted"), {
        status: 200,
      });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(JSON.stringify({ message: "You're not allowed!" }), {
    status: 403,
  });
};
