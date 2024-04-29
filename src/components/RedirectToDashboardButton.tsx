'use client'
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function RedirectToDashboardButton() {
    return (
       <Link href={'/dashboard'} className='gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-amber-900 text-zinc-200 h-10 px-4 py-2'>
        Dashboard
       <UserButton/>
       </Link>
    )
}