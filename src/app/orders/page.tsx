"use client";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Order } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdModeEdit } from "react-icons/md";
import { toast } from "react-toastify";

function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/orders`);
      if (!response.ok) throw new Error("Failed to fetch orders");
      return await response.json();
    },
    enabled: false, // disable by default, enable manually later
  });
}

// Mutation function
const updateOrder = async ({
  orderId,
  status,
}: {
  orderId: string;
  status: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/orders/${orderId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to update order");
  }
  return await response.json();
};

const OrdersPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data: session, status: authStatus } = useSession();

  const { data, error, refetch, status: queryStatus } = useOrders();

  const mutation = useMutation({
    mutationFn: updateOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (
    e: React.FormEvent<HTMLFormElement>,
    orderId: string
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("status") as HTMLInputElement;
    const status = input.value;
    mutation.mutate({ orderId, status });
    toast.success("Order has been updated");
  };

  React.useEffect(() => {
    if (authStatus === "unauthenticated") {
      router.push("/login");
    } else if (authStatus === "authenticated") {
      refetch(); // fetch orders after authentication
    }
  }, [authStatus]);

  if (authStatus === "loading" || queryStatus === "pending") {
    return <>Loading...</>;
  }

  if (queryStatus === "error") {
    return <>{(error as Error)?.message}</>;
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 text-gray-700">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden lg:block px-1 py-6">Order ID</th>
            <th className="px-1 py-6">Date</th>
            <th className="px-1 py-6">Price</th>
            <th className="hidden lg:block px-1 py-6">Product</th>
            <th className="px-1 py-6">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm md:text-base">
          {data?.map((order: Order) => (
            <tr
              className={`${
                order.status !== "delivered" ? "bg-red-100" : "bg-white"
              }`}
              key={order.id}
            >
              <td className="hidden lg:block px-1 py-6">{order.id}</td>
              <td className="px-1 py-6">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="px-1 py-6">${order.price}</td>
              <td className="hidden lg:block px-1 py-6">
                {order.products?.map((p) => p.title).join(", ") || ""}
              </td>
              <td className="px-1 py-6 text-red-500 font-bold">
                {session?.user?.role === "admin" ? (
                  <form
                    onSubmit={(e) => handleUpdate(e, order.id)}
                    className="flex gap-4 items-center justify-center"
                  >
                    <input
                      name="status"
                      className="px-1 py-2 font-bold rounded border"
                      type="text"
                      defaultValue={order.status}
                    />
                    <button
                      type="submit"
                      className="bg-red-500 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                      <MdModeEdit className="size-5 text-white" />
                    </button>
                  </form>
                ) : (
                  <span>{order.status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
