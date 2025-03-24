import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1400px] px-3   box-border overflow-hidden mx-auto mt-[160px] pb-9">
      <hr />
      <div className=" flex flex-col gap-8 md:flex-row  items-center md:items-start justify-between mb-[80px] mt-[97px]">
        <h6 className="text-[#5BB5A2]  flex-2">
          <Link className="font-[700] text-[24px] md:text-[32px]" href="/">
            banquee.
          </Link>
        </h6>

        <div className="flex flex-col gap-8 flex-1">
          <h5>About</h5>
          <div className="flex flex-col gap-3 text-[#1A191E80] dark:text-foreground/60">
            <Link href="/feature">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 flex-1">
          <h5>Blog</h5>
          <div className="flex flex-col gap-3 text-[#1A191E80] dark:text-foreground/60">
            <Link href="/products">Products</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/crypto">Crypto</Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 flex-1">
          <h5>Webflow</h5>
          <div className="flex flex-col gap-3 text-[#1A191E80] dark:text-foreground/60">
            <Link href="/styleguide">Styleguide</Link>
            <Link href="/licensing">Licensing</Link>
            <Link href="/changelog">Changelog</Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 flex-1">
          <h5>Social Media</h5>
          <div className="flex flex-col gap-3 text-[#1A191E80] dark:text-foreground/60">
            <Link href="/https://twitter.com/mdraseltalukdr">Twitter</Link>
            <Link href="/https://www.facebook.com/mdraseltalukder0/">
              Facebook
            </Link>
            <Link href="/https://www.instagram.com/mdraseltalukdrr/">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between text-[#1A191E80]">
        <p className="paragraph dark:text-foreground/60">
          © Made by <span className="text-[#5BB5A2]">Md Rasel Talukder</span>
        </p>
        <div className="flex items-center gap-4 mt-4">
          <p className="paragraph dark:text-foreground/60">Impressum</p>
          <p className="paragraph dark:text-foreground/60">datenschutz</p>
        </div>
      </div>
    </footer>
  );
}
