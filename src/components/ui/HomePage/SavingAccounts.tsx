import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import frame1 from "../../../../public/Frame1.png";
import {
  default as frame2,
  default as frame3,
} from "../../../../public/Frame3.png";
import frame4 from "../../../../public/Frame4.png";
import frame5 from "../../../../public/Frame5.png";

export default function SavingAccounts() {
  const features = [
    {
      src: frame1,
      title: "New Laptop",
      doller: "400$",
    },
    {
      src: frame2,
      title: "Dream bike",
      doller: "200$",
    },
    {
      src: frame3,
      title: "Holiday",
      doller: "14000$",
    },
    {
      src: frame4,
      title: "Camera",
      doller: "10$",
    },

    {
      src: frame5,
    },
  ];
  return (
    <section className="CustomContainer flex flex-col  gap-16 mt-40">
      <div className=" flex items-end justify-between">
        <div className="flex flex-col items-start justify-center gap-4 ">
          <h4 className="heading4">Saving Accounts</h4>
          <h3 className="heading3">
            Organize your <br /> money the right way
          </h3>
          <p className="heading4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-[#5BB5A2] hover:bg-transparent hover:text-[#4ca18f] "
        >
          {" "}
          All Features
          <span>
            <FaArrowRightLong />
          </span>
        </Button>
      </div>
      <div className="grid grid-cols-3 md:flex justify-between items-star t gap-[33px]">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start">
            <Image
              src={feature.src}
              alt="feature icon"
              width={214}
              height={214}
              className="max-w-full"
            />
            <p className="heading4 mt-4 mb-1">{feature.title}</p>
            <span className="text-[#1A191E80] text-14px] font-medium">
              {feature.doller}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
