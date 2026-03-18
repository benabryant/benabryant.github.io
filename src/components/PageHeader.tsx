import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { FaSun, FaMoon } from 'react-icons/fa'
import './PageHeader.css'

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/games',    label: 'Games'    },
]

export default function PageHeader() {
  const { dark, toggle } = useTheme()

  return (
    <header className="page-header">
      <Link to="/" className="page-header__name">Ben Bryant</Link>

      <nav className="page-header__nav">
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              isActive ? 'page-header__link page-header__link--active' : 'page-header__link'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <button className="page-header__theme icon-btn" onClick={toggle} aria-label="Toggle dark mode">
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  )
}
