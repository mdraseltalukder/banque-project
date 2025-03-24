import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import notification from "../../../../public/notification.png";

import { IoMdArrowForward } from "react-icons/io";

export default function Notification() {
  return (
    <section className="CustomContainer flex flex-col gap-10 md:flex-row items-center justify-between md:items-end mt-40">
      <div className="flex flex-col items-start justify-center">
        <h4 className="heading4 mb-2">Notifications</h4>
        <h3 className="heading3 mb-4">Stay notified</h3>
        <p className="paragraph mb-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />{" "}
          amet sint. Velit officia consequat duis enim velit mollit. <br />{" "}
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        {/* check */}
        <div className="flex flex-col items-start gap-3 ">
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
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] dark:bg-background  flex items-center justify-center">
              <Check className="h-4 w-4 text-[#4ECDC4]" />
            </div>
            <span className="text-gray-800 dark:text-foreground font-medium">
              Parturient Lorem
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-[#5BB5A2] hover:bg-transparent hover:text-[#4ca18f] mt-12 mb-6"
        >
          Compare Cards <IoMdArrowForward />
        </Button>
      </div>
      <Image
        src={notification}
        alt="notifications "
        width={499}
        height={475}
        sizes="(min-width: 1180px) 499px, (min-width: 780px) 42.11vw, (min-width: 580px) 499px, calc(95vw - 33px)"
      />
    </section>
  );
}
