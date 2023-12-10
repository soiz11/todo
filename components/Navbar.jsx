import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-900 py-3 px-8">
      <Link
        className="text-white font-bold flex text-[24px] tracking-[2px]"
        href={"/"}
      >
        Notify
      </Link>
      <Link
        className="text-slate-900 bg-white py-1 px-2 rounded flex"
        href={"/newTopic"}
      >
        New Note
      </Link>
    </div>
  );
};

export default Navbar;
