import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export default function FeatureHelp() {
  return (
    <div className="CustomContainer  flex-col sm:flex-row  flex items-start justify-between mt-40">
      <div className="flex flex-1 flex-col items-start gap-12">
        <h3 className="heading3">Need help?</h3>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <FaPhoneAlt className="h-7 w-7 text-[#5BB5A2]" />
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px]">+49 176 123 456</h5>
              <h6 className="text-[#1A191E80] text-[14px]">Support Hotline</h6>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <MdOutlineMarkEmailUnread className="h-7 w-7 text-[#5BB5A2]" />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-[18px]">help@banquee.com Support Email</h5>
              <h6 className="text-[#1A191E80] text-[14px]">Support Email</h6>
            </div>
          </div>
        </div>
        <div>
          <button className="flex items-center gap-2 text-[#5BB5A2]">
            Support <FaArrowRight />
          </button>
        </div>
      </div>
      {/* accordian */}
      <Accordion
        type="single"
        collapsible
        className="w-full flex-1 divide-y rounded divide-slate-200 "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[20px] transition-colors">
            {" "}
            How do I open an Banko account?
          </AccordionTrigger>
          <AccordionContent className="text-[#1A191E80] dark:text-foreground/60 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[20px] transition-colors">
            {" "}
            How to change my account limits?
          </AccordionTrigger>
          <AccordionContent className="text-[#1A191E80] dark:text-foreground/60 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[20px] transition-colors">
            Can I have two Banko accounts?
          </AccordionTrigger>
          <AccordionContent className="text-[#1A191E80] dark:text-foreground/60 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-[20px] transition-colors">
            How do I order a new card?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
