import { useContext } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import ThemeContext from './Components/Themecontext';
import "./App.css";



function App() {
  const {dark} = useContext(ThemeContext)
  return (
    <div className={`App${dark ? '' : '-light'}`}>
      <Header />
      <Main />
    </div>
  )
}

export default App
