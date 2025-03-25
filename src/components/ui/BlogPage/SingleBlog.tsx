import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import compare from "../../../../public/compare.png";

export default function SingleBlog() {
  return (
    <>
      <section className="mt-24 mb-40 ">
        <div className="max-w-[1000px] mx-auto box-border overflow-hidden px-6 flex flex-col items-center justify-center gap-16 ">
          <div className=" flex flex-col items-center justify-center text-center gap-4">
            <span className="text-[13px] text-[#5BB5A2] bg-[#E8F2EE] py-1 px-2.5">
              App
            </span>
            <h3 className="heading3 mb-4">
              How To Start Using Banko <br /> For Your Startup
            </h3>
            <p className="paragraph ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
              Dui accumsan sit amet nulla facilisi morbi.
            </p>
          </div>
          <Image
            src={compare}
            alt="compare img"
            width={1000}
            height={600}
            placeholder="blur"
          />
          <div className="flex flex-col items-center gap-8 max-w-[600px] mx-auto box-border overflow-hidden px-6">
            <h5 className="text-[22px] lg:text-[28px] text-[#1A191E] font-medium ">
              Et malesuada fames ac turpis
            </h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio
              morbi quis commodo odio. Et malesuada fames ac turpis egestas sed
              tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices
              sagittis orci a. Fringilla ut morbi tincidunt augue interdum.
              Ultrices in iaculis nunc sed augue lacus viverra. <br />
              <br /> Erat imperdiet sed euismod nisi porta. Morbi blandit cursus
              risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget
              velit aliquet sagittis. Amet commodo nulla facilisi nullam
              vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt
              lobortis feugiat vivamus at augue. Blandit aliquam etiam erat
              velit scelerisque in dictum. In hac habitasse platea dictumst
              vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.
            </p>
            <h5 className="text-[22px] lg:text-[28px] text-[#1A191E] font-medium ">
              Nascetur ridiculus mus
            </h5>
            <p className="paragraph">
              Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis
              orci a scelerisque purus semper eget duis at. Porta lorem mollis
              aliquam ut porttitor leo a diam. In fermentum et sollicitudin ac
              orci phasellus egestas tellus. Mauris cursus mattis molestie a
              iaculis at erat pellentesque adipiscing. Nascetur ridiculus mus
              mauris vitae ultricies. Dui nunc mattis enim ut tellus. Duis
              convallis convallis tellus id interdum. Quis ipsum suspendisse
              ultrices gravida dictum fusce. Scelerisque mauris pellentesque
              pulvinar pellentesque. Tincidunt augue interdum velit euismod.
              Nibh tortor id aliquet lectus. Amet commodo nulla facilisi nullam.
              Vulputate ut pharetra sit amet aliquam id diam maecenas. Tellus
              pellentesque eu tincidunt tortor. Ultrices vitae auctor eu augue
              ut lectus arcu bibendum.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="paragraph">Share article</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Visit our Twitter page"
              >
                <FaTwitter size={20} />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook size={20} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
