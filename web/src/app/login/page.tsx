'use client'


import BaseLayout from "@/app/components/BaseLayout";
import { useState } from "react";
import { useRouter } from 'next/navigation';




export default function register() {

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const router = useRouter()

  async function login() {
    const res = await fetch("http://localhost:8789/auth", {
      method: 'POST',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        ID_USUARIO: email,
        SENHA: senha
      })
    })
    if (res.status != 200) {
      alert("Usuário invalido")
      return;
    }
    const dados = await res.json();
    localStorage.setItem('id_usuario',dados.dados.ID_USER)
    router.push('/vu/contacts')
  }
  return (
    <BaseLayout>
      <div className="w-full flex flex-col">
        <div className="flex flex-col items-center h-[100vh] w-full">
          <div className="flex flex-row justify-between text-center">
            <h4 className="text-xl font-bold text-navy-700 mb-3 ">
              Login
            </h4>
          </div>

          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">E-mail:</label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" placeholder="Digite seu email" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">Senha:</label>
            <input value={senha} type="password" onChange={(e) => { setSenha(e.target.value) }} id="senha" placeholder="Digite sua senha" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <button type="button" onClick={() => login()} className="bg-[#5cb85c] text-white p-2 w-full">
            Entrar
          </button>
          <button type="button" className="bg-[#2a45be] text-white mt-2 p-2 w-full">
            Cadastrar
          </button>
        </div>
        <div>
        </div>
      </div>
    </BaseLayout>

  )
}
