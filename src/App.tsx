import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitcher from './routes/RouteSwitcher';
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
    <React.StrictMode>
        <RouteSwitcher />
    </React.StrictMode>
       <h4 style={{
                  display: 'block',
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                }}>OBS: Projeto portfólio em fase de refatoração. Haverá erros e bugs que estão sendo resolvidos.
        </h4>
    </>
)
