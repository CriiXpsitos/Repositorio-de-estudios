import { TabBar } from "./_components/TabBar";
import { cookies } from "next/headers";



export default async function CookiePage() {

    const cookieStore = await cookies();
    const cookieTab = Number(cookieStore.get('selectedTab')?.value) || 1;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 @container mx-auto px-4 py-6">
            <span className="text-3xl">Tabs</span>
            <TabBar currentIndex={cookieTab}/>
        </div>
    );
}
