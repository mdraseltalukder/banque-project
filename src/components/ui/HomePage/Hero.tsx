import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import card from "../../../../public/homeCard.png";

export default function Hero() {
  return (
    <>
      <section className="bg-[#E8F2EE]">
        <div className="CustomContainer flex items-center justify-between py-[60px] lg:py-[128px] overflow-hidden lg:gap-[164px]">
          <div className="flex flex-col items-start justify-start ">
            <h1 className="heading1 mb-4">
              Banking <br /> starts here.
            </h1>
            <p className="text-[24px]  font-[500] leading-tight tracking-[-0.03em] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            {/* check */}
            <div className="flex items-start gap-20 mb-16">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB5A2] dark:bg-background flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#ffffff]" />
                  </div>
                  <span className="text-gray-800 dark:text-foreground font-medium">
                    Instant Transfer
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB5A2] dark:bg-background flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#ffffff]" />
                  </div>
                  <span className="text-gray-800 dark:text-foreground font-medium">
                    Saving accounts
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB5A2] dark:bg-background flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#ffffff]" />
                  </div>
                  <span className="text-gray-800 dark:text-foreground font-medium">
                    Payments worldwide
                  </span>
                </div>{" "}
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB5A2] dark:bg-background flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#ffffff]" />
                  </div>
                  <span className="text-gray-800 dark:text-foreground font-medium">
                    100% mobile banking
                  </span>
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className="flex items-start gap-2 md:gap-6  px-3">
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
          {/* img */}

          <Image
            src={card}
            alt="card-image"
            width={400}
            height={578}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
