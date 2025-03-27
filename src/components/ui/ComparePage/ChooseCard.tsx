import fontText from "@/../public/FontText.png";
import mastercard from "@/../public/mastercard.png";
import visa from "@/../public/visa.png";
import wifi from "@/../public/wifi.png";
import Image from "next/image";

export default function ChooseCard() {
  return (
    <section className="max-w-[1400px] px-3 overflow-hidden mx-auto  flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-end my-24">
      <div className="flex flex-col items-center justify-center  gap-6">
        <div className="flex items-center gap-2">
          <h4 className="heading4">Basic</h4>
          <h6 className="text-[#5BB5A2] bg-[#E8F2EE] px-[6px] py-1 rounded-sm text-[12px]">
            Popular
          </h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-[25px] md:text-[35px] lg:text-[40px] font-medium ">
            Free
          </h3>
          <p className="text-[#1A191E80]  text-center text-[14px]">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className=" p-6 text-white bg-gradient-to-r from-[#5BB5A2] to-[#53A191] rounded-xl">
          <div className="flex items-center justify-between mb-20">
            <h6 className="text-[18px]">banquee.</h6>
            <Image src={wifi} alt="wifi icon" width={18} height={18}></Image>
          </div>
          <div className=" mb-[22px]">
            <Image
              src={fontText}
              alt=" text image"
              width={241}
              height={13.9}
            ></Image>
          </div>
          <div className="flex items-start gap-28">
            <div className="flex items-start gap-9">
              <div className="flex flex-col gap-[2.5px] items-start">
                <h6 className="text-[7px] text-[#FFFFFF]">Card Holder</h6>
                <h6 className="text-[10.46px] ">John Doe</h6>
              </div>
              <div className="flex flex-col gap-[2.5px] items-start">
                <h6 className="text-[7px] text-[#FFFFFF]">Expiry Date</h6>
                <h6 className="text-[10.46px] ">09/28</h6>
              </div>
            </div>
            <div>
              <Image
                src={mastercard}
                alt="mastercard"
                width={47.34}
                height={14.5}
              ></Image>
            </div>
          </div>
        </div>

        <button className="w-full py-3 px-4 rounded-sm text-white bg-[#5BB5A2]">
          Get Started
        </button>
      </div>
      {/* 2nd */}
      <div className="flex flex-col items-center justify-between gap-6">
        <div className="flex items-center justify-center gap-2">
          <h4 className="heading4">Premium</h4>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-end gap-2">
            <h3 className="text-[25px] md:text-[35px] lg:text-[40px] font-medium">
              $5
            </h3>
            <h6 className="text-[14px] text-[#1A191E80] ">per month</h6>
          </div>

          <p className="text-[#1A191E80]  text-center text-[14px]">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className=" p-6 text-white bg-gradient-to-r from-[#485563] to-[#29323C] rounded-xl">
          <div className="flex items-center justify-between mb-20">
            <h6 className="text-[18px]">banquee.</h6>
            <Image src={wifi} alt="wifi icon" width={18} height={18}></Image>
          </div>
          <div className=" mb-[22px]">
            <Image
              src={fontText}
              alt=" text image"
              width={241}
              height={13.9}
            ></Image>
          </div>
          <div className="flex items-start gap-28">
            <div className="flex items-start gap-9">
              <div className="flex flex-col gap-[2.5px] items-start">
                <h6 className="text-[7px] text-[#FFFFFF]">Card Holder</h6>
                <h6 className="text-[10.46px] ">John Doe</h6>
              </div>
              <div className="flex flex-col gap-[2.5px] items-start">
                <h6 className="text-[7px] text-[#FFFFFF]">Expiry Date</h6>
                <h6 className="text-[10.46px] ">09/28</h6>
              </div>
            </div>
            <div>
              <Image
                src={visa}
                alt="mastercard"
                width={47.34}
                height={14.5}
              ></Image>
            </div>
          </div>
        </div>

        <button className="w-full py-3 px-4 rounded-sm text-white bg-[#5BB5A2]">
          Get Started
        </button>
      </div>
      {/* 3rd */}
      <div className="flex flex-col items-center justify-between gap-6">
        <div className="flex items-center justify-center gap-2">
          <h4 className="heading4">Gold</h4>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-end gap-2">
            <h3 className="text-[25px] md:text-[35px] lg:text-[40px] font-medium">
              $10
            </h3>
            <h6 className="text-[14px] text-[#1A191E80] ">per month</h6>
          </div>

          <p className="text-[#1A191E80]   text-center text-[14px]">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className=" p-6 text-white bg-gradient-to-r from-[#E3C79E] to-[#E3C79E] rounded-xl">
          <div className="flex items-center justify-between mb-20">
            <h6 className="text-[18px]">banquee.</h6>
            <Image src={wifi} alt="wifi icon" width={18} height={18}></Image>
          </div>
          <div className=" mb-[22px]">
            <Image
              src={fontText}
              alt=" text image"
              width={241}
              height={13.9}
            ></Image>
          </div>
          <div className="flex items-start gap-28">
            <div className="flex items-start gap-9">
              <div className="flex flex-col gap-[2.5px] items-start">
                <h6 className="text-[7px] text-[#FFFFFF]">Card Holder</h6>
                <h6 className="text-[10.46px] ">John Doe</h6>
              </div>
              <div className="flex flex-col gap-[2.5px] items-start">
                <h6 className="text-[7px] text-[#FFFFFF]">Expiry Date</h6>
                <h6 className="text-[10.46px] ">09/28</h6>
              </div>
            </div>
            <div>
              <Image
                src={mastercard}
                alt="mastercard"
                width={47.34}
                height={14.5}
              />
            </div>
          </div>
        </div>

        <button className="w-full py-3 px-4 rounded-sm text-white bg-[#5BB5A2]">
          Get Started
        </button>
      </div>
    </section>
  );
}
