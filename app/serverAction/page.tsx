import { getServerSession } from "next-auth/next";
import WhoAmIButton from "@/app/serverAction/WhoAmIButton";

export default function ServerActionPage() {
  const whoAmI = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.name ?? "Not Logged In";
  };

  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  );
}
