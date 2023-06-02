'use client'

import logo from "../../assets/logo_.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter()
    return (
        <div className="flex flex-row items-center gap-4 w-full py-8 ">
            <div className="ml-4">
                <div onClick={() => router.push('/')}>
                    <Image src={logo} width={120} height={45} alt="logo"></Image>
                </div>
            </div>

            <div className="ml-auto gap-4 font-semibold">
                <button onClick={() => router.push('/faq')} className=" text-black py-2 px-4 text-sm">
                    Faq
                </button>
                <button onClick={() => router.push('/')} className=" text-white bg-[#EA1d2c] py-2 px-10 text-sm rounded shadow-md">
                    Sair
                </button>
            </div>
        </div>
    )
}
