import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
     subsets: ["latin"],
    display : 'swap',
    weight : ['700', '400',],
 });

function Logo() {
  return (
    <Link href="/">
        <div className="hover:opacity-75 transition items-center gap-x2 hidden md:flex">
            <Image src="/logo.svg" alt="logo" width={30} height={30}/>
            <p className={cn("text-lg font-bold text-neutral-700 pb-1", inter.className)}>Taskify</p>
        </div>
    </Link>
  )
}

export default Logo;