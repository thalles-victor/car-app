import Link from "next/link";
import Image from "next/image";

import LogoImageSvg from "@/../public/logo.svg";

import { CustomButton } from "@/components";

export function Navbar() {
  return (
    <header className=" w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="items-center">
          <Image
            src={LogoImageSvg}
            alt="Car Hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}