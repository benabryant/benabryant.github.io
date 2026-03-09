import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Sidebar.css';
const CONTACT_LINKS = [
    { href: 'mailto:you@email.com', icon: 'fa-solid fa-envelope', label: 'Email' },
    { href: 'https://github.com/benabryant', icon: 'fa-brands fa-github', label: 'GitHub', external: true },
    { href: 'https://linkedin.com/in/benjaminabryant', icon: 'fa-brands fa-linkedin', label: 'LinkedIn', external: true },
    { href: 'https://www.instagram.com/ben.abryant/', icon: 'fa-brands fa-instagram', label: 'Instagram', external: true },
];
export default function Sidebar() {
    return (_jsxs("aside", { className: "sidebar", children: [_jsx("img", { className: "sidebar__photo", src: "/profile.jpg", alt: "Ben Bryant" }), _jsx("h1", { className: "sidebar__name", children: "Ben Bryant" }), _jsxs("p", { className: "sidebar__tagline", children: ["CS student at ", _jsx("em", { children: "University of Washington" })] }), _jsx("nav", { className: "sidebar__nav", children: _jsx("a", { href: "#about", children: "About" }) }), _jsx("div", { className: "sidebar__contact", children: CONTACT_LINKS.map(({ href, icon, label, external }) => (_jsxs("a", { href: href, ...(external && { target: '_blank', rel: 'noreferrer' }), children: [_jsx("i", { className: icon }), " ", label] }, label))) })] }));
}
