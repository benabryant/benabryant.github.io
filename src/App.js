import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from './components/Sidebar';
import About from './components/About';
import HeaderImage from './components/HeaderImage';
import './App.css';
export default function App() {
    return (_jsxs("div", { className: "layout", children: [_jsx(Sidebar, {}), _jsxs("main", { className: "main", children: [_jsx(HeaderImage, {}), _jsx(About, {})] })] }));
}
