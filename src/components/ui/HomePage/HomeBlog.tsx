import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import blog1 from "../../../../public/blog1.png";
import blog2 from "../../../../public/blog2.png";
import blog3 from "../../../../public/blog3.png";

export default function HomeBlog() {
  return (
    <div className="CustomContainer mt-40 flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <h3 className="heading3">Blog</h3>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-[#5BB5A2] hover:text-[#499786] hover:bg-transparent"
        >
          Support <FaArrowRight />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className=" flex flex-col items-start gap-6 mb-16">
          <div className="w-full">
            <Image
              src={blog1}
              alt="blog-image"
              placeholder="blur"
              className="w-full"
            ></Image>
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[28px]">
                How To Start Using Banko For Your Startup
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                esse, dolorem tempore earum soluta nam distinctio numquam quae
                inventore, atque natus sint.
              </p>
            </div>
            <div className="flex items-start gap-2 rounded-sm">
              <span className="bg-[#F8F8F8] rounded-sm text-[14px] py-1 px-2.5">
                App
              </span>
              <span className="bg-[#F8F8F8] rounded-sm text-[14px] py-1 px-2.5">
                Technology
              </span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-6 mb-16">
          <div className="w-full">
            <Image
              src={blog2}
              alt="blog-image"
              placeholder="blur"
              className="w-full"
            ></Image>
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[28px]">
                10 Things Nobody Told You About Banko
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                esse, dolorem tempore earum soluta nam distinctio numquam quae
                inventore, atque natus sint.
              </p>
            </div>
            <div className="flex items-start gap-2 rounded-sm">
              <span className="bg-[#F8F8F8] rounded-sm text-[14px] py-1 px-2.5">
                Technology
              </span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-6 mb-16">
          <div className="w-full">
            <Image
              src={blog3}
              alt="blog-image"
              placeholder="blur"
              className="w-full"
            ></Image>
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[28px]">
                How To Start Using Banko For Your Startup
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                esse, dolorem tempore earum soluta nam distinctio numquam quae
                inventore, atque natus sint.
              </p>
            </div>
            <div className="flex items-start gap-2 rounded-sm">
              <span className="bg-[#F8F8F8] rounded-sm text-[14px] py-1 px-2.5">
                App
              </span>
              <span className="bg-[#F8F8F8] rounded-sm text-[14px] py-1 px-2.5">
                Product
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
