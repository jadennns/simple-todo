import GradientButton from "components/buttons/GradientButton";
import Step1 from "components/dashboard/steps/Step1";
import Step2 from "components/dashboard/steps/Step2";
import Step3 from "components/dashboard/steps/Step3";
import Container from "components/ui/Container";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { TrueUserProps } from "typings";

export default function CreateTodo({ user }: TrueUserProps) {
  const [step, setStep] = useState(1);

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [thumbnail, setThumbnail] = useState<string>();

  return (
    <>
      <Container>
        <div className="flex flex-col space-y-[3rem] items-center justify-center">
          {step == 1 ? <Step1 data={{ name, setName, setStep }} /> : <></>}
          {step == 2 ? (
            <Step2 data={{ description, setDescription, setStep }} />
          ) : (
            <></>
          )}
          {step == 3 ? (
            <Step3 data={{ thumbnail, setThumbnail, setStep }} />
          ) : (
            <></>
          )}
        </div>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session?.user)
    return {
      redirect: {
        destination: "/api/auth/callback/google",
        permanent: false,
      },
    };

  return {
    props: { user: session.user },
  };
};
