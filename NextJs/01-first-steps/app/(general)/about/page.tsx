import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'About page',
 description: 'About page',
 keywords: ['About page', "Cristian", "información", "..."]
};


export default function AboutPage(){
    return (
        <>
            <span className="text-7xl mx-auto flex justify-center">About page</span>
        </>
    )
}