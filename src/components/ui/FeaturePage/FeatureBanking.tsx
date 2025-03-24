import { Check } from "lucide-react";
import Image from "next/image";
import apple from "../../../../public/apple.png";
import card6 from "../../../../public/card6.png";

export default function FeatureBanking() {
  return (
    <div className="CustomContainer flex flex-col px-3 lg:px-0 sm:flex-row  items-center justify-center md:items-end md:justify-evenly text-white bg-[#5BB5A2] mt-40 rounded-2xl">
      <div className="flex flex-col items-start justify-start gap-4 my-24">
        <div className="flex flex-col items-start gap-4">
          <h2 className="heading3">
            One app. <br />
            One banking.
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{" "}
            do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="flex justify-between items-start gap-16 mt-4 mb-8">
          <div className="flex flex-col items-start  gap-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFFFFF33] flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className=" font-medium">Instant transactions</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFFFFF33] flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className=" font-medium">Saving accounts</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFFFFF33] flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className=" font-medium">Payments worldwide</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFFFFF33] flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className=" font-medium">100% mobile banking</span>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start">
          <Image
            src={apple}
            alt="apple and google icon"
            layout="responsive"
            width={16}
            height={9}
            className="max-w-full object-cover"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end">
        <Image
          src={card6}
          alt="mobile icon"
          layout="responsive"
          width={16}
          height={9}
          className="max-w-full object-cover"
        ></Image>
      </div>
    </div>
  );
}
