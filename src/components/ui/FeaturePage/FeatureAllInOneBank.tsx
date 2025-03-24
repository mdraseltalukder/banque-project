import Image from "next/image";
import card1 from "../../../../public/card1.png";
import card2 from "../../../../public/card2.png";
import card3 from "../../../../public/card3.png";
import card4 from "../../../../public/card4.png";
import card5 from "../../../../public/card5.png";

export default function FeatureAllInOneBank() {
  return (
    <>
      <hr />
      <div className="flex flex-col CustomContainer items-center gap-24 mt-[160px]">
        <div className="flex flex-col gap-4 items-center ">
          <h3 className="heading3">All in one bank. Really.</h3>
          <p className="paragraph">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <Image
              src={card1}
              alt="card-Image"
              placeholder="blur"
              layout="responsive"
              width={16}
              height={9}
              className="max-w-full object-cover"
            ></Image>
            <Image
              src={card2}
              alt="card-Image"
              placeholder="blur"
              layout="responsive"
              width={16}
              height={9}
              className="max-w-full object-cover"
            ></Image>{" "}
          </div>
          <div className="grid grid-cols-3 gap-8">
            <Image
              src={card3}
              alt="card-Image"
              placeholder="blur"
              layout="responsive"
              width={16}
              height={9}
              className="max-w-full object-cover"
            ></Image>
            <Image
              src={card4}
              alt="card-Image"
              placeholder="blur"
              layout="responsive"
              width={16}
              height={9}
              className="max-w-full object-cover"
            ></Image>
            <Image
              src={card5}
              alt="card-Image"
              placeholder="blur"
              layout="responsive"
              width={16}
              height={9}
              className="max-w-full object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
