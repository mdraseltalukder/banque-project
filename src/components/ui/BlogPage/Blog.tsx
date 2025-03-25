import { MdArrowOutward } from "react-icons/md";
import blog1 from "../../../../public/blog1.png";
import blog2 from "../../../../public/blog2.png";
import blog3 from "../../../../public/blog3.png";
import blog4 from "../../../../public/blog4.png";
import blog5 from "../../../../public/blog5.png";
import blog6 from "../../../../public/blog6.png";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "How To Start Using Banko For Your Startup",
      src: blog1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      categories: ["App", "Technology"],
    },
    {
      id: 2,
      title: "10 Things Nobody Told You About Banko",
      src: blog2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      categories: ["Technology"],
    },
    {
      id: 3,
      title: "How To Start Using Banko For Your Startup",
      src: blog3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      categories: ["App", "Product"],
    },
    {
      id: 4,
      title: "Why We Love Banko (And You Should, Too!)",
      src: blog4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      categories: ["Product", "Technology"],
    },
    {
      id: 5,
      title: "5 Principles Of Crypto Investing",
      src: blog5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      categories: ["App"],
    },
    {
      id: 6,
      title: "7 Things About Banko Your Friends Want To Know",
      src: blog6,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
      categories: ["Technology"],
    },
  ];
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
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className=" flex flex-col items-start gap-6 mt-16 blog "
            >
              <div className="w-full blog-img relative">
                <Image
                  src={post.src}
                  alt="blog-image"
                  width={378}
                  height={378}
                  className="w-full "
                />
                <div className="blog-overlay">
                  <div className="flex items-center justify-center h-full relative">
                    <Link href="/blog/id">
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 bg-[#5BB5A2] py-6 px-10 rounded-full text-white absolute top-3/5 left-3/5 "
                      >
                        <MdArrowOutward className="size-6" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[28px]">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 text-[16px]">
                    {post.content}
                  </p>
                </div>
                <div className="flex items-start gap-2 rounded-sm">
                  <span className="bg-[#F8F8F8] rounded-sm text-[14px] py-1 px-2.5">
                    {post.categories}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
