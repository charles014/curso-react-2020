import React from 'react';
import Navbar from './components/navbar'
import Home from './pages/home'
import Rotas from './rotas'
function App() {
  return (
    <>
      <div className='container'>
        < Navbar />
        <Rotas />
      </div>
    </>
  );
}

export default App;
