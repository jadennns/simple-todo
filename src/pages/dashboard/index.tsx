import Container from "components/ui/Container";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { TrueUserProps } from "typings";
import UserTab from "components/dashboard/UserTab";
import Todos from "components/dashboard/Todos";

export default function Dashboard({ user }: TrueUserProps) {
  return (
    <>
      <Container>
        <div className="flex flex-col space-y-10 items-center justify-center mt-5">
          <UserTab user={user} />
          <Todos />
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
