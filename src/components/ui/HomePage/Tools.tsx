import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import tool from "../../../../public/tools.png";

export default function Tools() {
  return (
    <>
      <section className="CustomContainer flex flex-col gap-16 my-40  ">
        <Image
          src={tool}
          alt="tools icon"
          width={723}
          height={137}
          sizes="(min-width: 820px) 723px, calc(94.2vw - 31px)"
        />
        <div className=" flex flex-col items-start gap-5 md:flex-row justify-between md:items-end ">
          <div className="flex flex-1 flex-col items-start justify-center">
            <h4 className="heading4 mb-2">Tools</h4>
            <h3 className="heading3 mb-4">
              Seemless <br />
              integration
            </h3>
            <p className="paragraph mb-8 lg:mb-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do{" "}
              <br />
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          {/* FaCheck */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex  flex-col items-start justify-center gap-4 ">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] dark:bg-background flex items-center justify-center">
                  <FaCheck className="h-4 w-4 text-[#4ECDC4]" />
                </div>
                <span className="text-gray-800 dark:text-foreground font-medium">
                  Malesuada Ipsum
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] dark:bg-background flex items-center justify-center">
                  <FaCheck className="h-4 w-4 text-[#4ECDC4]" />
                </div>
                <span className="text-gray-800 dark:text-foreground font-medium">
                  Vestibulum
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] dark:bg-background  flex items-center justify-center">
                  <FaCheck className="h-4 w-4 text-[#4ECDC4]" />
                </div>
                <span className="text-gray-800 dark:text-foreground font-medium">
                  Parturient Lorem
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
