import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav className="mt-2 mx-auto mb-20 py-2 flex justify-end items-end border-b-[1px] border-[#dddddd]">
        <div id="logo" className="mr-auto">
          <Image
            src="/logo.png"
            width={128}
            height={77}
            alt="Ninja List Logo"
          />
          <span className="sr-only">Ninja List Project</span>
        </div>
        <Link href="/">
          <a className="ml-3">Home</a>
        </Link>
        <Link href="/about">
          <a className="ml-3">About</a>
        </Link>
        <Link href="/ninjas">
          <a className="ml-3">Ninja Listing</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
