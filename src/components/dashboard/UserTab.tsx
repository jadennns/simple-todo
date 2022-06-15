import GradientButton from "components/buttons/GradientButton";
import { SensorEmail } from "lib/utils/censors";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";
import { TrueUserProps } from "typings";
import { AiOutlinePlus } from "react-icons/ai";

export default function UserTab({ user }: TrueUserProps) {
  const [revealEmail, setRevealEmail] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 space-x-[20rem]">
      <div className="flex items-center space-x-4">
        <img
          src={user.image}
          alt={`${user.name} Image`}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex flex-col items-start">
          <p className="text-white font-bold text-xl">{user.name}</p>
          <div className="flex items-center space-x-6 text-gray-300">
            <p className="text-lg">
              {revealEmail ? user.email : SensorEmail(user.email as string)}
            </p>
            <FiEye
              size={20}
              onMouseEnter={() => setRevealEmail(true)}
              onMouseLeave={() => setRevealEmail(false)}
              className="hidden lg:flex"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 pr-5 lg:pr-0">
        <GradientButton
          from="from-blue-500"
          via="via-blue-600"
          to="to-blue-700"
          className="text-white rounded-md p-2 trans-grow"
          redirect="/dashboard/create"
        >
          <AiOutlinePlus size={25} />
        </GradientButton>
        <GradientButton
          from="from-rose-500"
          via="via-rose-600"
          to="to-rose-700"
          className="text-white rounded-md p-2 trans-grow"
          onClick={() => signOut()}
        >
          <IoLogOut size={25} />
        </GradientButton>
      </div>
    </div>
  );
}
