import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";

// Signed-in people only: checked on the server before the page loads.
export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const s = await createClient();
  const { data: { user } } = await s.auth.getUser();
  if (!user) redirect("/login");
  return <>{children}</>;
}
