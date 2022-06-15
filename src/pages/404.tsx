import GradientButton from "components/buttons/GradientButton";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Container from "components/ui/Container";
import Image from "next/image";

export default function NotFound() {
  return (
    <Container>
      <div className="flex items-center justify-center ">
        <div className="flex items-center flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-14">
          <div className="flex flex-col space-y-2">
            <h1 className="text-white text-lg font-bold">Page not found</h1>
            <p className="text-sm text-gray-200">
              The page you tried to visit does not exist!
            </p>
            <br />
            <GradientButton
              className="rounded-md p-2 text-white trans-grow"
              from="from-indigo-500"
              via="via-purple-500"
              to="to-pink-500"
              redirect="/"
            >
              Go Home
            </GradientButton>
          </div>
          <Image
            src={"/gifs/404.gif"}
            alt="404 Not Found Gif"
            width={800}
            height={600}
          />
        </div>
      </div>
    </Container>
  );
}
