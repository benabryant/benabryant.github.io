import React from 'react'
import { useTheme } from '../hooks/UseTheme'
import './Sidebar.css'
import {
    FaSun, FaMoon, FaEnvelope,
    FaGithub, FaLinkedin, FaInstagram,
} from 'react-icons/fa'

export default function Sidebar() {
  const { dark, toggle } = useTheme()

  return (
    <aside className="sidebar">
      <img className="sidebar__photo" src="/profile.jpg" alt="Ben Bryant" />
      <h2 className="sidebar__name">Ben Bryant</h2>
      <p className="sidebar__tagline">
        CS student at <em>University of Washington</em>
      </p>
      <nav className="sidebar__nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        
        <a href="#skills">Skills</a>
      </nav>

      <div className="sidebar__contact">
        {CONTACT_LINKS.map(Contact)}
      </div>

      <button className="sidebar__theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
        {dark ? <FaSun /> : <FaMoon />}
        {dark ? 'Light mode' : 'Dark mode'}
      </button>
      <button className="sidebar__theme-toggle-mobile" onClick={toggle} aria-label="Toggle dark mode">
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </aside>
  )
}

const CONTACT_LINKS: ContactLink[] = [
  { href: 'mailto:me@benabryant.com',               icon: <FaEnvelope />,   label: 'Email' },
  { href: 'https://github.com/benabryant',          icon: <FaGithub />,    label: 'GitHub',   external: true },
  { href: 'https://linkedin.com/in/benjaminabryant',icon: <FaLinkedin />,  label: 'LinkedIn', external: true },
  { href: 'https://www.instagram.com/ben.abryant/', icon: <FaInstagram />,  label: 'Instagram',   external: true },
]

interface ContactLink {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}

const Contact = ({ href, icon, label, external } : ContactLink) => (
          <a
            key={label}
            href={href}
            {...(external && { target: '_blank', rel: 'noreferrer' })}
          >
            {icon} {label}
          </a>
        )