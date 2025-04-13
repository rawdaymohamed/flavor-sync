import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import { auth, signIn } from "@/auth";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
const LoginPage = async () => {
  const session = await auth();
  if (session?.user) redirect("/");
  return (
    <div className="flex justify-center items-center h-[calc(100vh-9rem)] md:h-[calc(100vh-11rem)] w-screen p-4 lg:px-20 xl:px-40">
      <div className="flex flex-col md:flex-row md:shadow-2xl h-full  md:h-auto md:max-h-[90vh]  w-full md:w-[850px] rounded-xl ">
        {/* Image container */}
        <div className="relative w-full md:w-1/2 ">
          <Image
            src="/loginBg.png"
            alt="login background"
            fill
            className="object-cover"
          />
        </div>
        {/* Form container */}
        <div className="w-full md:w-1/2 flex flex-col p-8 gap-8 justify-center text-gray-700">
          <h1 className="font-bold text-2xl">Welcome</h1>
          <p> Login into your account or create a new one</p>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="flex gap-5 items-center p-2 rounded-sm ring-1 ring-gray-300">
              <FaGoogle />
              <span>Sign in with Google</span>
            </button>
          </form>
          <button className="flex gap-5 items-center p-2 rounded-sm ring-1 ring-gray-300">
            <FaFacebookF />
            <span>Sign in with Google</span>
          </button>
          <div className="flex gap-2">
            <span>Have a problem?</span>
            <Link href="/" className="underline">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
