'use client'

import React, { useEffect, useState } from 'react'
import { BsFillPencilFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';



export default function page() {
    const router = useRouter()

    const [dados, setDados] = useState<any[]>([]);

    async function getTabela() {
        const id_usuario = localStorage.id_usuario ?? ''
        const res = await fetch(`http://localhost:8789/buscarContatos/${id_usuario}`, {
            method: 'GET',
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
        if (res.status == 200) {
            setDados(await res.json())
        }
    }

    useEffect(() => {
        getTabela()
    }, [])


    return (
        <div className=''>
            <div className="md:px-32 py-8 w-full ">
                <div className="shadow overflow rounded border-b border-gray-200">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nome</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Telefone</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">#</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {dados.map((dado, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="w-1/3 text-left py-3 px-4">{dado.nome_contato}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{dado.numero}</td>
                                        <td className="text-left py-3 px-4">
                                            <button>
                                                <BsFillPencilFill />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
            <button  onClick={() => router.push('/vu/contacts/create')} className="bg-[#5cb85c] text-white p-2 w-full">
                Cadastrar contato
            </button>
        </div>
    )
}
