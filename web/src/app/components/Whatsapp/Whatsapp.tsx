'use client'

import "./Whatsapp.css"
import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from 'next/navigation';

export default function Whatsapp() {
  const router = useRouter()
  return (
    <div onClick={() => router.push('https://api.whatsapp.com/send?phone=5575991155066')} className="flex pulsaDelay btn-whatsapp">
      <a target='_blank' href='https://api.whatsapp.com/send?phone=5575991155066'>
        <div className="bg-[#25d366] p-4 rounded-full text-white">
          <BsWhatsapp className='' />
        </div>
      </a>
    </div>
  )
}
