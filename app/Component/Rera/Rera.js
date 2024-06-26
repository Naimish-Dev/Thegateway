import Link from 'next/link';
import React from 'react'

const Rera = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-2 font-semibold">Rera Number</h2>
        <p className="font-semibold mt-2">The Gateway – P51900054969</p>
        <img
          src="/assets/docs/RERA-P51900054969-The-Gateway.webp"
          className="w-[200px] h-auto"
          alt="imges"
        />
        <Link href="/Privacy-Policy" className="text-sm font-semibold mt-2">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default Rera