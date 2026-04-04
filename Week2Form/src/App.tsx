import { useEffect, useState, type SetStateAction } from 'react'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [formValid, setFormValid] = useState(false)
  const handleEmailChange=(event: { target: { value: SetStateAction<string> } })=>{
    setEmail(event.target.value)
  };
  const clearForm=()=>{
    setFirstName('')
    setLastName('')
    setEmail('')
  }
  useEffect(() => {
    const isFirstNameValid = firstName.trim() !== ''
    const isLastNameValid = lastName.trim() !== ''
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    setFormValid(isFirstNameValid && isLastNameValid && isEmailValid)
  }, [firstName, lastName, email])
  
  return (
    <div className="App">
      <button onClick={() => setShowForm(true)}>Show Form</button>
      {showForm && (
        <form>
          <label className="form-label">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label className="form-label">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label className="form-label">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
          <button type="submit" onClick={(clearForm)}>Submit</button>
          {!formValid && <p style={{ color: 'red' }}>Please fill in all fields correctly.</p>}
        </form>
      )}
    </div>
  )
}

export default App
