import phone4 from "@/../public/phone4.png";
import { Check } from "lucide-react";
import Image from "next/image";

export default function FeatureSavings() {
  return (
    <div className="CustomContainer flex-col sm:flex-row  flex gap-10 lg:gap-[170px] mt-[160px] items-center justify-between mb-[160px]">
      <div className="flex flex-col items-start   ">
        <h4 className="heading4">Saving Accounts</h4>
        <h3 className="pt-[8px] py-[16px] heading3">
          Lorem et <br />
          ipsum dolor
        </h3>
        <p className="paragraph">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />{" "}
          amet sint. Velit officia consequat duis enim velit mollit. <br />{" "}
          Exercitation veniam consequat sunt nostrud amet.
        </p>

        <div className="pt-[32px] ">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] dark:bg-background flex items-center justify-center">
              <Check className="h-4 w-4 text-[#4ECDC4]" />
            </div>
            <span className="text-gray-800 dark:text-foreground font-medium">
              Malesuada Ipsum
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] dark:bg-background flex items-center justify-center">
              <Check className="h-4 w-4 text-[#4ECDC4]" />
            </div>
            <span className="text-gray-800 dark:text-foreground font-medium">
              Vestibulum
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] dark:bg-background flex items-center justify-center">
              <Check className="h-4 w-4 text-[#4ECDC4]" />
            </div>
            <span className="text-gray-800 dark:text-foreground font-medium">
              Parturient Lorem
            </span>
          </div>
        </div>
      </div>
      <Image
        src={phone4}
        alt="phonecard-image"
        className=" lg:mr-[111px] max-h-full object-cover  px-10 sm:px-0"
        width={379}
        height={550}
        sizes="(min-width: 1280px) 353px, (min-width: 1040px) 28.18vw, (min-width: 800px) calc(39.55vw - 25px), (min-width: 760px) calc(-320vw + 2779px), (min-width: 640px) 50vw, (min-width: 440px) 299px, calc(85.83vw - 62px)"
      />
    </div>
  );
}
