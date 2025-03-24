import { Button } from "@/components/ui/button";
import Image from "next/image";
import perfectCard from "../../../../public/perfectCard.png";

export default function PerfectCard() {
  return (
    <section className="CustomContainer mt-40">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h4 className="heading4">Account</h4>
          <h2 className="heading2">
            Perfect card <br /> for your needs.
          </h2>
          <p className="heading4 mt-2">
            Senectus et netus et malesuada fames ac turpis. <br />
            Sagittis vitae et leo duis ut diam.
          </p>
        </div>
        <Image
          src={perfectCard}
          alt="card"
          height={500}
          width={500}
          sizes="max-w-full"
        />
        {/* button */}
        <div className="flex items-start gap-2 md:gap-6  px-3">
          <Button className="px-4 py-2 text-white bg-[#5BB5A2] hover:bg-[#53A191] rounded-lg">
            Open Account
          </Button>
          <Button
            variant="ghost"
            className="py-4 px-6 border border-[#E8E8E8] "
          >
            Compare Cards
          </Button>
        </div>
      </div>
    </section>
  );
}
