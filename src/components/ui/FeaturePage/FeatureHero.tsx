import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import cards from "../../../../public/cards.png";
import { Button } from "@/components/ui/button";
export default function FeatureHero() {
  return (
    <div className="bg-[#e8f2ee] dark:bg-background">
      <div className=" CustomContainer flex flex-col  items-center text-center justify-center pt-[60px] pb-[100px] lg:pb-[152px] lg:pt-[128px] ">
        <h2 className="heading2">All in one card.</h2>
        <h4 className="heading4 mt-4">
          Senectus et netus et malesuada fames ac turpis. <br /> Sagittis vitae
          et leo duis ut diam.
        </h4>
        <div className="flex items-center gap-2 md:gap-6 mt-8   ">
          <Button className="px-4 py-2 text-white bg-[#5BB5A2] hover:bg-[#53A191] rounded-lg">
            Open Account
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-[#5BB5A2] hover:text-[#4ca18f] hover:bg-transparent"
          >
            Compare Cards <IoMdArrowForward />
          </Button>
        </div>
      </div>
      <Image
        src={cards}
        alt="card-image"
        placeholder="blur"
        layout="responsive"
        width={16}
        height={9}
        className="max-w-full object-cover"
      />
    </div>
  );
}
