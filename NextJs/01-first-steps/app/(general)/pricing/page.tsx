import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'Pricing page',
 description: 'Pricing page',
 keywords: ['Pricing page', "Cristian", "información", "..."]
};



export default function PricingPage(){
    return (
        <>
            <span className="text-7xl mx-auto flex justify-center">Pricing page</span>
        </>
    )
}