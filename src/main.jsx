import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

{/* Ten root to jest coś do czego jakby renderujemy wszystko co stworzymy, to będzie nasz div ostatecznie będący rootem*/}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
