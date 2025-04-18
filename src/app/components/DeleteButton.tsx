"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify';

const DeleteButton = ({ id }: { id: string }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (status === "loading") return <p>Loading...</p>
    if (status === "unauthenticated" || session?.user.role !== "admin") return;
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${id}`, {
            method: "DELETE"
        });
        if (res.status === 200) {
            router.push("/menu");
            toast.success("Product has been deleted successfully")
        }
        else {
            const data = await res.json();
            toast.error(data.message)
        }
    }
    return (

        <button
            onClick={handleDelete}
            className='bg-red-500 p-2 rounded-full text-white absolute top-4 right-4'><MdDelete className='size-5 text-white' /></button>
    )
}

export default DeleteButton
