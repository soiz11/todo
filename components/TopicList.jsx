import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicList = () => {
  return (
    <div className="border border-slate-900 p-4 mt-3  mx-8 flex justify-between items-start gap-5 rounded">
      <div>
        <div className="font-bold text-2xl">topic title</div>
        <div>topic description</div>
      </div>

      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
};

export default TopicList;
