import { Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { Button } from "../button";

export default function Questions() {
  return (
    <section className="CustomContainer my-24 bg-[#5BB5A2] py-5 lg:py-8 flex items-center justify-between rounded-xl">
      <div>
        <h3 className="text-[20px] sm:text-2xl lg:text-[28px] text-white">
          Still have questions?
        </h3>
        <p className="paragraph text-[#ffffff7e]">We are here to help.</p>
      </div>
      {/* phone */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFFFFF33] dark:bg-background flex items-center justify-center">
          <Phone className="h-5.5 w-5.5 text-white" />
        </div>
        <div className="flex flex-col items-start">
          <p className="paragraph text-white">+49 176 123 456</p>
          <p className="text-[14px] font-medium text-[#ffffff7e]">
            We are here to help.
          </p>
        </div>
      </div>
      {/* email */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFFFFF33] dark:bg-background flex items-center justify-center">
          <MdEmail className="h-5.5 w-5.5 text-white" />
        </div>
        <div className="flex flex-col items-start">
          <p className="paragraph text-white">help@bank.com</p>
          <p className="text-[14px] font-medium text-[#ffffff7e]">
            Support Email
          </p>
        </div>
      </div>
      <Button className="px-6 py-4 rounded-lg">Chat with us</Button>
    </section>
  );
}
