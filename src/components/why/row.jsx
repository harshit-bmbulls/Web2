"use client";

import Image from "next/image";
const Rows = () => {
  return (
    <div className="w-full md:h-[343px] md:max-w-xl border-l border-r border-b border-[#f87a09]">
      <Image src="/hero.png" alt={""} width={1200} height={690} className="object-cover" />
    </div>
  );
};

export default (Rows);
