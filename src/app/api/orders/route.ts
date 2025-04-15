import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// Fetch all Orders
export const GET = async () => {
  const session = await auth();

  if (session) {
    let orders;
    try {
      if (session.user.role === "admin") {
        orders = await prisma.order.findMany();
      } else {
        orders = await prisma.order.findMany({
          where: { userEmail: session.user.email },
        });
      }
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You're not authenticated!" }),
      { status: 401 }
    );
  }
};
