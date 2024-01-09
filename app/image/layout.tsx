import { Metadata } from 'next'
import React from 'react'



export const metadata: Metadata = {
    title: "Image page",
    description: "",
}

export default function ImageLayout({ children }: { children: React.ReactNode }) {

    return (
        <div>{children}</div>
    )
}
