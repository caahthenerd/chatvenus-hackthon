import Image from 'next/image'
import Navbar from './components/Navbar'
import img_hambuguer from "../assets/hamburger.png"
import img_bebidas from "../assets/bebidas.png"
import { BsMapFill } from "react-icons/bs";
import img_venus from "../assets/venus_deusa.png"
import Whatsapp from './components/Whatsapp/Whatsapp';
import BaseLayout from './components/BaseLayout';
// import { Popup } from "@typebot.io/react";

export default function Home() {
  return (
    <BaseLayout>
      <div id='content' className='w-full'>
        <div className='flex justify-center text-center my-4 p-2'>
          <p className='font-semibold text-2xl'>Faça sua voz ser ouvida de forma segura e anônima.</p>
        </div>

        <div className="flex flex-row flex-wrap justify-around gap-y-2 p-2">
          <div className='card-venus flex flex-row items-center p-2  bg-[#f9ca0c] rounded-xl w-full shadow'>
            <p className='text-justify p-1 w-3/4 text-white'>Nosso aplicativo de denúncias anônimas oferece a todos a oportunidade de compartilhar informações importantes sem revelar sua identidade.</p>
            <Image alt='Imagem' width={300} height={150} src={img_venus} className='opacity-10 w-1/4'></Image>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-around gap-y-2 p-2">
          <div className='card-venus flex flex-row items-center p-2  bg-[#c665c6] rounded-xl w-full shadow'>
            <Image alt='Imagem' width={300} height={150} src={img_venus} className='opacity-10 w-1/4'></Image>
            <p className='w-3/4 text-white text-justify p-1 font-sm'>Nosso aplicativo de denúncias anônimas oferece a todos a oportunidade de compartilhar informações importantes sem revelar sua identidade. <b>DISK 180 NO CHAT</b></p>
          </div>
        </div>
      </div>
      {/* <div>
        <iframe className="z-500"
          src="https://viewer.typebot.io/chat-venus-25m8mqn"
        // style="border: none; width='100%'; height='600px'"
        ></iframe>
      </div> */}

      {/* <Popup typebot="chat-venus-25m8mqn" />; */}
    </BaseLayout>
  )
}
