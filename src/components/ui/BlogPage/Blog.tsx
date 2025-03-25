import blog1 from "../../../../public/blog1.png";
import blog2 from "../../../../public/blog2.png";
import blog3 from "../../../../public/blog3.png";
import blog4 from "../../../../public/blog4.png";
import blog5 from "../../../../public/blog5.png";
import blog6 from "../../../../public/blog6.png";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Blogs() {
  return (
    <div className="CustomContainer">
      <div className="flex items-center justify-center my-24">
        <h2 className="heading2">Blog</h2>
      </div>
      <div className="flex items-center justify-start gap-8 ">
        <p className="paragraph">Categories</p>
        <div className="flex items-center gap-4 text-[#1A191E] py-1 px-2.5">
          <Button className="bg-[#F8F8F8] hover:bg-[#d8d7d7] text-[#1A191E]">
            All
          </Button>
          <Button className="bg-[#F8F8F8] text-[#1A191E] hover:bg-[#d8d7d7]">
            Product
          </Button>
          <Button className="bg-[#F8F8F8] text-[#1A191E] hover:bg-[#d8d7d7]">
            Technology
          </Button>
          <Button className="bg-[#F8F8F8] text-[#1A191E] hover:bg-[#d8d7d7]">
            App
          </Button>
        </div>
      </div>
      {/* blogs */}
      <div className="container mx-auto px-4  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" flex flex-col items-start gap-6 mt-16 blog ">
            <div className="w-full blog-img relative">
              <Image
                src={blog1}
                alt="blog-image"
                width={378}
                height={378}
                placeholder="blur"
                className="w-full "
              />
              <div className="blog-overlay"></div>
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
          <div className=" flex flex-col items-start gap-6 mt-16 blog">
            <div className="w-full blog-img">
              <Image
                src={blog2}
                alt="blog-image"
                placeholder="blur"
                className="w-full "
              />{" "}
              <div className="blog-overlay"></div>
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
          <div className=" flex flex-col items-start gap-6 mt-16 blog">
            <div className="w-full blog-img">
              <Image
                src={blog3}
                alt="blog-image"
                placeholder="blur"
                className="w-full "
                width={378}
                height={378}
              />
              <div className="blog-overlay"></div>
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
          <div className=" flex flex-col items-start gap-6 mt-16 blog">
            <div className="w-full blog-img">
              <Image
                src={blog4}
                alt="blog-image"
                placeholder="blur"
                className="w-full "
                width={378}
                height={378}
              />
              <div className="blog-overlay"></div>
            </div>
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[28px]">
                  Why We Love Banko (And You Should, Too!)
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  esse, dolorem tempore earum soluta nam distinctio numquam quae
                  inventore, atque natus sint.
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-sm">
                <span className="bg-[#F8F8F8] rounded-sm text-[14px] py-1 px-2.5">
                  Product
                </span>
                <span className="bg-[#F8F8F8] rounded-sm text-[14px] py-1 px-2.5">
                  Technology
                </span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-6 mt-16 blog">
            <div className="w-full blog-img">
              <Image
                src={blog5}
                alt="blog-image"
                placeholder="blur"
                className="w-full "
                width={378}
                height={378}
              />
              <div className="blog-overlay"></div>
            </div>
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[28px]">
                  5 Principles Of Crypto Investing
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
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-6 mt-16 blog">
            <div className="w-full blog-img">
              <Image
                src={blog6}
                alt="blog-image"
                placeholder="blur"
                className="w-full "
                width={378}
                height={378}
              ></Image>
              <div className="blog-overlay"></div>
            </div>
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[28px]">
                  7 Things About Banko Your Friends Want To Know
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
        </div>
      </div>
    </div>
  );
}
