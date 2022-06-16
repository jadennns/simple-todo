import GradientButton from "components/buttons/GradientButton";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Container from "components/ui/Container";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col space-y-[25rem] items-center justify-center mt-5">
        <div className="flex items-center space-x-14">
          <div className="flex flex-col  items-center lg:items-start space-y-8">
            <div className="flex flex-col space-y-2">
              <h1 className="text-white font-bold text-4xl lg:text-5xl">
                {"Simple Todo's"}
              </h1>
              <p className="text-lg text-gray-300 w-[20rem] lg:w-full">
                {
                  "Provides you a great app that saves your todo's items so you won't forget!"
                }
              </p>
            </div>
            <GradientButton
              from="from-indigo-500"
              via="via-purple-500"
              to="to-pink -700"
              redirect="/dashboard"
              className="text-white py-2 px-5 rounded-md trans-grow"
            >
              Try now
            </GradientButton>
          </div>
          <Image
            src={"/imgs/Clipboard.png"}
            alt="Writing Gif"
            width={256}
            height={256}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </Container>
  );
}

interface InfoProps {
  subject: string;
  text: string | ReactNode;
}

function Info({ subject, text }: InfoProps) {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-2">
      <h2 className="text-main-3 font-semibold text-2xl pl-3 lg:pl-0 lg:text-3xl">
        {subject}
      </h2>
      <p className="text-lg text-gray-200 w-[20rem] lg:w-[65rem]">{text}</p>
    </div>
  );
}
