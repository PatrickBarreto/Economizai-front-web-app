import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App/App.tsx'
import './index.css'
//<React.StrictMode></React.StrictMode>

ReactDOM.createRoot(document.getElementById('root')!).render(
    //Preciso adicionar o <React.StrictMode></React.StrictMode> antes do build. Removi por conta da dupla request.
    <App />,
)
