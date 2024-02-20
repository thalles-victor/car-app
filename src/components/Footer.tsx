import Image from "next/image";
import Link from "next/link";
import LogoImageSvg from "@/../public/logo.svg";
import { footerLinks } from "@/constants";

export function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-mg:flex-col flex-wrap justify-between gap-5 sm:px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={LogoImageSvg}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">Carhub 2024 reserved &copy;</p>
        </div>

        <div className="footer__links">
          {footerLinks.map((_link_) => (
            <div key={_link_.title} className="footer_link">
              <h3 className="font-bold">{_link_.title}</h3>
              {_link_.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-6 px-6 py-10">
        <p>@2024 CarHub. All Rights Reserved</p>
        <div className="footer_copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>

          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
