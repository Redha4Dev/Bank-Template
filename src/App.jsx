import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuBar from './MenuBar'
import Hero from './Pages/Hero'
import SecondPage from './Pages/SecondPage'
import ThirdPages from './Pages/ThirdPages'
import EmpoweringCommunities from './Pages/EmpoweringCommunities'
import Awards from './Pages/Awards'
import Stories from './Pages/Stories'
import Qualift from './Pages/Qualift'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'
import Contect from './Pages/Contect'
import FinalePage from './Pages/FinalePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Theme>
      <div className='min-h-screen w-full bg-[#efefef]'> 
        <MenuBar/>
        <Hero/>
        <SecondPage/>
        <ThirdPages/>
        <EmpoweringCommunities/>
        <Awards/>
        <Stories/>
        <Qualift/>
        <Contect/>
        <FinalePage/>
      </div>
    </Theme>
  )
}

export default App
