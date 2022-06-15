import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="max-w-7xl z-[50] w-full flex items-center justify-between p-4 mt-0 lg:mt-5">
        <Link href={"/"}>
          <Image
            src={"/Logo2.png"}
            className="cursor-pointer"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          <NavbarItem name="About" redirect="/about" />
          <NavbarItem name="Dashboard" redirect="/dashboard" />
        </div>
        <div className="lg:hidden flex-col relative space-y-2">
          <div className="text-white rounded-md p-2 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 cursor-pointer">
            <BsList size={25} onClick={() => setOpen(!open)} />
          </div>
          {open && (
            <div className="animate-in slide-in-from-right-2 duration-500">
              <div className="rounded-md absolute z-[50] px-2 py-2 w-[8rem] flex flex-col space-y-2 left-auto right-0 text-white bg-gradient-to-r  from-indigo-500 via-indigo-600 to-indigo-700">
                <Link href={"/about"}>
                  <p>About</p>
                </Link>
                <Link href={"/dashboard"}>
                  <p>Dashboard</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

interface NavbarItemProps {
  name: string;
  redirect: string;
}

function NavbarItem({ name, redirect }: NavbarItemProps) {
  return (
    <Link href={redirect}>
      <a className="text-white text-lg cursor-pointer hover-underline-animation">
        {name}
      </a>
    </Link>
  );
}
