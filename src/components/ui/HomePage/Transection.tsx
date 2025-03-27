import transection from "@/../public/transactions.png";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Transection() {
  return (
    <section className="bg-[#E8F2EE]">
      <div className="CustomContainer mx-auto flex flex-col gap-10 sm:flex-row lg:gap-[170px] mt-[160px] items-end justify-between ">
        <div className="flex flex-col items-start py-[128px] flex-1  ">
          <h3 className=" pb-[16px]  heading3">
            Send & receive <br /> money instantly
          </h3>
          <p className="text-[20px] font-medium text-[#1A191E]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>

          <div className="pt-[32px] flex flex-col items-start gap-3 ">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB5A2] dark:bg-background flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="dark:text-foreground font-medium text-[#1A191E]">
                Malesuada Ipsum
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB5A2] dark:bg-background flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-[#1A191E] dark:text-foreground font-medium">
                Vestibulum
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB5A2] dark:bg-background  flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-[#1A191E]dark:text-foreground font-medium">
                Parturient Lorem
              </span>
            </div>
          </div>
        </div>
        <Image
          src={transection}
          alt="transection-image"
          className=" lg:mr-[111px] max-w-full object-cover px-10 sm:px-0 "
          width={379}
          height={550}
          sizes="(min-width: 1280px) 353px, (min-width: 1040px) 28.18vw, (min-width: 800px) calc(39.55vw - 25px), (min-width: 760px) calc(-320vw + 2779px), (min-width: 640px) 50vw, (min-width: 440px) 299px, calc(85.83vw - 62px)"
        />
      </div>
    </section>
  );
}
