import Image from "next/image";
import React from "react";
import compareCard from "../../../../public/compareherocard.png";

export default function CompareHero() {
  return (
    <section className="bg-[#E8F2EE]">
      <div className="max-w-[1400px] px-3 overflow-hidden mx-auto flex flex-col  items-center justify-between md:flex-row md:items-end">
        <div className="flex flex-col items-start justify-center gap-4 my-32">
          <h4 className="heading4">Compare Cards</h4>
          <h2 className="heading2">
            The ideal <br />
            card for you
          </h2>
        </div>
        <Image src={compareCard} alt="card" width={500} height={500} />
      </div>
    </section>
  );
}
