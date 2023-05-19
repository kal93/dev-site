"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <>
      <h1>Contact</h1>

      <Link href="/">Home</Link>
      <Link href={`blog/1234`}>Post</Link>

      <button onClick={() => router.push("/")}>Go Home</button>
    </>
  );
}
