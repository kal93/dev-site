"use client";

export default function PostError({ error }) {

  return (
    <>
      <div>{error.message}</div>
    </>
  );
}
