import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Bem-vindo à HomePage</h1>
            <Link to="/asset-class">
                <button>Ir para a página de classe de ativos</button>
            </Link>
        </div>
    );
}

export default HomePage;