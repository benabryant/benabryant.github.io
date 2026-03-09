import Sidebar from './components/Sidebar.js'
import About from './components/About.js'
import HeaderImage from './components/HeaderImage.js'
import './App.css'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <HeaderImage/>
        <About />
      </main>
    </div>
  )
}
