import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <strong id="titulo"> ETAPA 2 - DESAFIO DE PROGRAMAÇÃO</strong>
        </Link>
    </aside>