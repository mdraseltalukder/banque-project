import Image from "next/image";
import fontText from "../../../../public/FontText.png";
import mastercard from "../../../../public/mastercard.png";
import visa from "../../../../public/visa.png";
import wifi from "../../../../public/wifi.png";

export default function FeatureChoose() {
  return (
    <div className="CustomContainer overflow-hidden flex flex-col gap-24 items-center">
      <div className="mt-40  flex flex-col items-center gap-2">
        <h4>Accounts</h4>
        <h3 className="heading3">Choose your card.</h3>
        <p className="pt-2 paragraph">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between">
        <div className="flex flex-col items-center justify-center  gap-6">
          <div className="flex items-center gap-2">
            <h4>Basic</h4>
            <h6 className="text-[#5BB5A2] bg-[#E8F2EE] px-[6px] py-1 rounded-sm text-[12px]">
              Popular
            </h6>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="heading3">Free</h3>
            <p className="text-[#1A191E80]  text-center paragraph">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
          </div>
          <div className=" p-7 text-white bg-gradient-to-r from-[#5BB5A2] to-[#53A191] rounded-xl">
            <div className="flex items-center justify-between mb-20">
              <h6 className="text-[22px]">banquee.</h6>
              <Image src={wifi} alt="wifi icon" width={24} height={24}></Image>
            </div>
            <div className=" mb-[22px]">
              <Image
                src={fontText}
                alt=" text image"
                width={294}
                height={17}
              ></Image>
            </div>
            <div className="flex items-center gap-28">
              <div className="flex items-start gap-9">
                <div className="flex flex-col gap-[2.5px] items-start">
                  <h6 className="text-[8.5px] text-[#FFFFFF]">
                    Card&nbsp;Holder
                  </h6>
                  <h6 className="text-[12.8px] ">John&nbsp;Doe</h6>
                </div>
                <div className="flex flex-col gap-[2.5px] items-start">
                  <h6 className="text-[8.5px] text-[#FFFFFF]">
                    Expiry&nbsp;Date
                  </h6>
                  <h6 className="text-[12.8px] ">09/28</h6>
                </div>
              </div>

              <Image
                src={mastercard}
                alt="mastercard"
                width={52}
                height={35.5}
              />
            </div>
          </div>

          <button className="w-full py-3 px-4 rounded-sm text-white bg-[#5BB5A2]">
            Get Started
          </button>
        </div>
        {/* 2nd */}
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="flex items-center justify-center gap-2">
            <h4>Premium</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-end gap-2">
              <h3 className="heading3">$5</h3>
              <h6 className="text-[16px] text-[#1A191E80] ">per month</h6>
            </div>

            <p className="text-[#1A191E80]  text-center paragraph">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </p>
          </div>
          <div className=" p-7 text-white bg-gradient-to-r from-[#485563] to-[#29323C] rounded-xl">
            <div className="flex items-center justify-between mb-20">
              <h6 className="text-[22px]">banquee.</h6>
              <Image src={wifi} alt="wifi icon" width={24} height={24}></Image>
            </div>
            <div className=" mb-[22px]">
              <Image
                src={fontText}
                alt=" text image"
                width={294}
                height={17}
              ></Image>
            </div>
            <div className="flex items-center gap-28">
              <div className="flex items-start gap-9">
                <div className="flex flex-col gap-[2.5px] items-start">
                  <h6 className="text-[8.5px] text-[#FFFFFF]">
                    Card&nbsp;Holder
                  </h6>
                  <h6 className="text-[12.8px] ">John&nbsp;Doe</h6>
                </div>
                <div className="flex flex-col gap-[2.5px] items-start">
                  <h6 className="text-[8.5px] text-[#FFFFFF]">
                    Expiry&nbsp;Date
                  </h6>
                  <h6 className="text-[12.8px] ">09/28</h6>
                </div>
              </div>

              <Image src={visa} alt="mastercard" width={52} height={35.5} />
            </div>
          </div>

          <button className="w-full py-3 px-4 rounded-sm text-white bg-[#5BB5A2]">
            Get Started
          </button>
        </div>
        {/* 3rd */}
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="flex items-center justify-center gap-2">
            <h4>Gold</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-end gap-2">
              <h3 className="heading3">$10</h3>
              <h6 className="text-[16px] text-[#1A191E80] ">per month</h6>
            </div>

            <p className="text-[#1A191E80]   text-center paragraph">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
          </div>
          <div className=" p-7 text-white bg-gradient-to-r from-[#E3C79E] to-[#E3C79E] rounded-xl">
            <div className="flex items-center justify-between mb-20">
              <h6 className="text-[22px]">banquee.</h6>
              <Image src={wifi} alt="wifi icon" width={24} height={24}></Image>
            </div>
            <div className=" mb-[22px]">
              <Image
                src={fontText}
                alt=" text image"
                width={294}
                height={17}
              ></Image>
            </div>
            <div className="flex items-center gap-28">
              <div className="flex items-start gap-9">
                <div className="flex flex-col gap-[2.5px] items-start">
                  <h6 className="text-[8.5px] text-[#FFFFFF]">
                    Card&nbsp;Holder
                  </h6>
                  <h6 className="text-[12.8px] ">John&nbsp;Doe</h6>
                </div>
                <div className="flex flex-col gap-[2.5px] items-start">
                  <h6 className="text-[8.5px] text-[#FFFFFF]">
                    Expiry&nbsp;Date
                  </h6>
                  <h6 className="text-[12.8px] ">09/28</h6>
                </div>
              </div>

              <Image
                src={mastercard}
                alt="mastercard"
                width={52}
                height={35.5}
              />
            </div>
          </div>

          <button className="w-full py-3 px-4 rounded-sm text-white bg-[#5BB5A2]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
