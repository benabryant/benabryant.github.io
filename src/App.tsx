import Sidebar from './components/Sidebar'
import About from './components/About'
import HeaderImage from './components/HeaderImage'
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
