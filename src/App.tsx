import React, { ReactNode, createContext, useContext, useState } from 'react';

// Definindo uma interface para as props do componente
interface MyComponentProps {
  title: string;
}

// Criando o contexto para o estado global
interface AppState {
  count: number;
  increment: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

// Provedor do contexto para envolver o aplicativo
const AppProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <AppContext.Provider value={{ count, increment }}>
      {children}
    </AppContext.Provider>
  );
};

// Componente principal
const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  // Consumindo o contexto para acessar o estado global
  const context = useContext(AppContext);

  if (!context) {
    // Tratando o caso em que o componente não está dentro do provedor do contexto
    return null;
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>Count from Context: {context.count}</p>
      <button onClick={context.increment}>Increment</button>
    </div>
  );
};

// Aplicando o provedor do contexto ao componente principal
const App: React.FC = () => {
  return (
    <AppProvider>
      <MyComponent title="My Complex Component" />
    </AppProvider>
  );
};

export default App;