import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/proximolancamento">
                <i className="fa fa-rocket"></i>Próximo Lançamento
            </Link>
            <Link to="/ultimolancamento">
                <i className="fa fa-rocket"></i>Último Lançamento
            </Link>
            <Link to="/proximoslancamentos">
                <i className="fa fa-rocket"></i>Próximos Lançamentos
            </Link>
            <Link to="/lancamentospassados">
                <i className="fa fa-rocket"></i>Lançamentos Passados
            </Link>
        </nav>
    </aside>