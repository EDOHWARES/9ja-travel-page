import './App.css';
import React from 'react';
import Nav from './components/Navbar/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

function App() {

  const [showForm, setShowForm] = React.useState(false)
  const handleClick = () => {
    setShowForm(true)
  }
  const hideForm = () => {
    setShowForm(false)
  }


  return (
    <>
    <Nav handleClick={handleClick} />
    {showForm ? <Form showForm={showForm} hideForm={hideForm} /> : <Main showForm={handleClick} />}
    <Footer />
    </>
  )
}

export default App
