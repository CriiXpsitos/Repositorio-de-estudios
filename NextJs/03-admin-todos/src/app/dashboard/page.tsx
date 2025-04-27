import { auth } from "@/auth";
import { WidgetItem } from "./_components/WidgetItem";
import { redirect } from "next/navigation";

export default async function Page() {

  const session = await auth()

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/dashboard")
  }

  return (
    <div className="px-6 pt-6">
      {/* TODO: dashboard/page.tsx  */}
      {/* Este contenido va dentro de page.tsx */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* TODO: src/components <WidgetItem /> */}
        <WidgetItem title="Usuario conectato SSR">
          <div className="flex flex-col items-center justify-center h-full p-4 bg-white rounded-lg shadow-md">
            {
              JSON.stringify(session.user, null, 2)
            }
          </div>
        </WidgetItem>
        {/* TODO: Fin <WidgetItem /> */}
      </div>
      {/* TODO: fin del dashboard/page.tsx  */}

      {/* TODO: Fin del contenido en el Layout.tsx */}
    </div>
  );
}
