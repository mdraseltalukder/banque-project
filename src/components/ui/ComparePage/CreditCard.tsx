import {
  Contact as ContactlessPayment,
  CreditCard,
  Smartphone,
  Wallet,
} from "lucide-react";
import { FaCheck } from "react-icons/fa6";
export default function CreditCardSection() {
  const features = [
    {
      name: "Physical Card",
      description: "Lorem in arcu cursus euismod",
      icon: CreditCard,
      basic: "Optional",
      pro: (
        <>
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
            <FaCheck className="h-2.5 w-3.5 text-[#5BB5A2]" />
          </div>
        </>
      ),
      enterprise: (
        <>
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
            <FaCheck className="h-2.5 w-3.5 text-[#5BB5A2]" />
          </div>
        </>
      ),
    },
    {
      name: "Virtual Card",
      description: "Lorem in arcu cursus euismod",
      icon: Wallet,
      basic: "-",
      pro: "Up to 2",
      enterprise: "Unlimited",
    },
    {
      name: "Contactless Payments",
      description: "Lorem in arcu cursus euismod",
      icon: ContactlessPayment,
      basic: (
        <>
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
            <FaCheck className="h-2.5 w-3.5 text-[#5BB5A2]" />
          </div>
        </>
      ),
      pro: (
        <>
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
            <FaCheck className="h-2.5 w-3.5 text-[#5BB5A2]" />
          </div>
        </>
      ),
      enterprise: (
        <>
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
            <FaCheck className="h-2.5 w-3.5 text-[#5BB5A2]" />
          </div>
        </>
      ),
    },
    {
      name: "Mobile Payments",
      description: "Lorem in arcu cursus euismod",
      icon: Smartphone,
      basic: (
        <>
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
            <FaCheck className="h-2.5 w-3.5 text-[#5BB5A2]" />
          </div>
        </>
      ),
      pro: (
        <>
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
            <FaCheck className="h-2.5 w-3.5 text-[#5BB5A2]" />
          </div>
        </>
      ),
      enterprise: (
        <>
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
            <FaCheck className="h-2.5 w-3.5 text-[#5BB5A2]" />
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <section className="max-w-[1400px] px-3 overflow-hidden mx-auto   my-24 ">
        <div className=" mx-auto">
          <h4 className="heading4 mb-8">Bank Account</h4>

          <div className=" rounded-xl  overflow-hidden">
            <div className="flex flex-col  ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex justify-between gap-4 border-t border-gray-200 py-8   `}
                >
                  <div className=" flex items-start gap-4">
                    <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#E8F2EE] dark:bg-background flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-[#5BB5A2]" />
                    </div>

                    <div>
                      <p className="paragraph ">{feature.name}</p>
                      <p className="text-[14px] font-medium text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    <span className="text-[16px] font-medium ">
                      {feature.basic}
                    </span>
                  </div>

                  <div className="col-span-2 text-center">
                    <span className="text-sm ">{feature.pro}</span>
                  </div>

                  <div className="col-span-3 text-center">
                    <span className="text-sm ">{feature.enterprise}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
