import { useTheme } from '../hooks/UseTheme'
import './Sidebar.css'

interface ContactLink {
  href: string
  icon: string  
  label: string
  external?: boolean
}

const CONTACT_LINKS: ContactLink[] = [
  { href: 'mailto:you@email.com',                   icon: 'fa-solid fa-envelope',   label: 'Email' },
  { href: 'https://github.com/benabryant',          icon: 'fa-brands fa-github',    label: 'GitHub',   external: true },
  { href: 'https://linkedin.com/in/benjaminabryant',icon: 'fa-brands fa-linkedin',  label: 'LinkedIn', external: true },
  { href: 'https://www.instagram.com/ben.abryant/', icon: 'fa-brands fa-instagram',  label: 'Instagram',   external: true },
]

export default function Sidebar() {
  const { dark, toggle } = useTheme()

  return (
    <aside className="sidebar">
      <img className="sidebar__photo" src="/profile.jpg" alt="Ben Bryant" />
      <h1 className="sidebar__name">Ben Bryant</h1>
      <p className="sidebar__tagline">
        CS student at <em>University of Washington</em>
      </p>
      <nav className="sidebar__nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
      </nav>

      <div className="sidebar__contact">
        {CONTACT_LINKS.map(({ href, icon, label, external }) => (
          <a
            key={label}
            href={href}
            {...(external && { target: '_blank', rel: 'noreferrer' })}
          >
            <i className={icon} /> {label}
          </a>
        ))}
      </div>

      <button className="sidebar__theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
        <i className={dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
        {dark ? 'Light mode' : 'Dark mode'}
      </button>
    </aside>
  )
}