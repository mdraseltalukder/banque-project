import Image from "next/image";
import icon1 from "../../../../public/icon1.png";
import icon2 from "../../../../public/icon2.png";
import icon3 from "../../../../public/icon3.png";
import icon4 from "../../../../public/icon4.png";
import icon5 from "../../../../public/icon5.png";
import icon6 from "../../../../public/icon6.png";
import phone1 from "../../../../public/phone1.png";
export default function OneApp() {
  const features = [
    {
      src: icon1,
      title: "Instant transactions",
      description: (
        <>
          Odio euismod lacinia at quis. <br /> Amet purus gravida quis <br />{" "}
          blandit turpis.
        </>
      ),
    },
    {
      src: icon2,
      title: "Saving accounts",
      description: (
        <>
          Odio euismod lacinia at quis. <br /> Amet purus gravida quis <br />{" "}
          blandit turpis.
        </>
      ),
    },
    {
      src: icon3,
      title: "Mobile banking",
      description: (
        <>
          Odio euismod lacinia at quis. <br /> Amet purus gravida quis <br />{" "}
          blandit turpis.
        </>
      ),
    },
    {
      src: icon4,
      title: "Advanced statistics",
      description: (
        <>
          Odio euismod lacinia at quis. <br /> Amet purus gravida quis <br />{" "}
          blandit turpis.
        </>
      ),
    },
    {
      src: icon5,
      title: "Virtual cards",
      description: (
        <>
          Odio euismod lacinia at quis. <br /> Amet purus gravida quis <br />{" "}
          blandit turpis.
        </>
      ),
    },
    {
      src: icon6,
      title: "Contactless payments",
      description: (
        <>
          Odio euismod lacinia at quis. <br /> Amet purus gravida quis <br />{" "}
          blandit turpis.
        </>
      ),
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center lg:flex-row  lg:items-start lg:justify-between CustomContainer my-40 gap-10">
      <div className="flex flex-col items-center lg:text-left text-center justify-center  lg:items-start lg:justify-start gap-16 flex-1">
        <h2 className="heading2">
          One app. <br /> One banking.
        </h2>
        {/* features */}
        <div className="grid grid-cols-2  gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4   p-[11px] rounded-full bg-[#E8F2EE] size-[39px]">
                <Image
                  src={feature.src}
                  alt="icon"
                  width={28}
                  height={28}
                ></Image>
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* img */}
      <Image
        src={phone1}
        alt="phonecard-image"
        className=" lg:mr-[111px] max-w-full object-cover px-10 sm:px-0"
        width={379}
        height={550}
        sizes="(min-width: 1280px) 353px, (min-width: 1040px) 28.18vw, (min-width: 800px) calc(39.55vw - 25px), (min-width: 760px) calc(-320vw + 2779px), (min-width: 640px) 20vw, (min-width: 440px) 290px, calc(85.83vw - 62px)"
      />
    </section>
  );
}
