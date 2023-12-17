import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      {session?.user?.name ? (
        <div className=" py-3 text-center">Главная страница сайта</div>
      ) : (
        <div> Not logged in</div>
      )}
    </>
  );
}
