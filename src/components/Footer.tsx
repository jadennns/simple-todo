import Image from "next/image";
import Link from "next/link";
import GradientButton from "./buttons/GradientButton";

export default function Footer() {
  return (
    <footer>
      <div className="bg-transparent">
        <div className="flex justify-center lg:justify-between">
          <div className="flex flex-col items-center space-x-0 space-y-4 py-10 px-14 lg:flex-row lg:space-y-0">
            <div className="flex items-center space-x-4">
              <Image src={"/Logo.png"} alt="Logo" width={100} height={100} />
              <div className="flex flex-col space-y-1">
                <h2 className="text-2xl font-bold text-gray-200">
                  SIMPLE TODO
                </h2>
                <span className="text-sm text-gray-300">
                  Copyright © {new Date().getFullYear()} Simple Todo
                </span>
                <span data-ccpa-link="1"></span>
              </div>
            </div>
            <br />
            <div className="lg:hidden flex items-center relative space-x-4 px-14">
              <GradientButton
                from="from-purple-500"
                via="via-purple-600"
                to="to-purple-700"
                className="text-white rounded-full py-2 px-5"
                redirect="https://github.com/jadennns/simple-todo"
              >
                Open Source
              </GradientButton>
            </div>
          </div>
          <div className="hidden lg:flex items-center relative space-x-4 px-14">
            <GradientButton
              from="from-purple-500"
              via="via-purple-600"
              to="to-purple-700"
              className="text-white rounded-full py-2 px-5"
              redirect="https://github.com/jadennns/simple-todo"
            >
              Open Source
            </GradientButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
