import React, { useState } from 'react'

import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

import './styles.css'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()
    const ognId = localStorage.getItem('ongId')

  async  function handleNewIncident(e) {
      e.preventDefault()


        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ognId
                }
            })

            history.push('/profile')
        }catch (err) {
            alert('erro ao cadastrar caso, tente novamente')
        }
    }

    return (
        <div className="new-incident">
        <div className="content">
         <section>
             <img src={logoImg} alt="Be The Hero" />
             <h1>Cadastrar novo Caso</h1>
             <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

             <Link className="back-link" to="/profile">
               <FiArrowLeft size={16} color="#e02041"/>
               Voltar Para Home
           </Link>
         </section>

         <form onSubmit={handleNewIncident}>
             <input placeholder="Título do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
             <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
             <input placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)}/>


             <button className="button" type="submit">Salvar</button>
         </form>
        </div>
    </div>
    )
}