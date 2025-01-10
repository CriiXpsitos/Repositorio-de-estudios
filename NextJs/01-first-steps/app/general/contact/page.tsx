import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'Contact page',
 description: 'Contact page',
 keywords: ['Contact page', "Cristian", "información", "..."]
};



export default function ContactPage(){
    return (
        <>
            <span className="text-7xl mx-auto flex justify-center">contact page</span>
        </>
    )
}