import React from "react"

export const Loading:React.FC =  () => {
  return <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '200px',
                  fontSize: '1.2rem',
                  color: '#555'
                }}>
                  <div style={{
                    border: '6px solid #f3f3f3',
                    borderTop: '6px solid #3498db',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    animation: 'spin 1s linear infinite'
                  }} />
                  <p style={{ marginTop: '1rem' }}>Carregando...</p>
                  <style>
                    {`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                        }
                        `}
                  </style>
    </div>
}