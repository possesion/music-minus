import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  console.log("session", session);
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return <div>This is protected Route</div>;
}
