"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Navbar(){

    const pathname = usePathname();
    console.log(pathname);



    return(
        <nav>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/products/1">Products/1</Link>

            <button>About</button>
        </nav>
    )
}