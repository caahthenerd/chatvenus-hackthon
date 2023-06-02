'use client'

import { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import { useRouter } from 'next/navigation';

export default function register() {

  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [chaveSecreta, setChaveSecreta] = useState<string>("");
  const router = useRouter()

  async function cadastro() {
    const res = await fetch("http://localhost:8789/cadastrarUsuario", {
      method: 'POST',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        CHAVE_SECRETA: chaveSecreta,
        NOME_FANTASIA: nome,
        IDADE: idade,
        E_MAIL: email,
        SENHA: senha,
        NUMERO: numero,
      })
    })
    if (res.status != 200) {
      alert("Cadastro invalido")
    }
    alert("Cadastro Realizado com sucesso!")
    router.push('/')
  }
  return (
    <BaseLayout>
      <div className="w-full flex flex-col">

        <div className="flex flex-col items-center h-[100vh] w-full">
          <div className="flex flex-row justify-between text-center">
            <h4 className="text-xl font-bold text-navy-700 mb-3 ">
              Crie sua conta
            </h4>
          </div>
          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">Email:</label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" placeholder="exemplo@exemplo.com" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">Chave Secreta:</label>
            <input value={chaveSecreta} onChange={(e) => { setChaveSecreta(e.target.value) }} type="text" id="email" placeholder="exemplo@exemplo.com" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">Nome:</label>
            <input value={nome} onChange={(e) => { setNome(e.target.value) }} type="text" id="nome" placeholder="Digite seu nome" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">Idade:</label>
            <input value={idade} onChange={(e) => { setIdade(e.target.value) }} type="text" id="nome" placeholder="Digite a sua idade" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">Senha:</label>
            <input value={senha} onChange={(e) => { setSenha(e.target.value) }} type="password" id="nome" placeholder="Digite a sua senha" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">Número:</label>
            <input value={numero} onChange={(e) => { setNumero(e.target.value) }} type="text" id="nome" placeholder="Digite o seu número" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <button onClick={() => {cadastro()}} className="bg-[#5cb85c] text-white p-2 w-full">
            Criar
          </button>
        </div>
        <div>
        </div>
      </div>
    </BaseLayout>
  )
}
