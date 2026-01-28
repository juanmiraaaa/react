import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "./../../assets/coffee.png"

const linkActivo = ({isActive}) => {{/*Definimos fuera de la funcion para mantener un orden separado de la logica del componente, las constantes de diseño se suelen crear fuera */}
  if (isActive) {
    return "px-3 py-2 rounded-xl font-semibold transition bg-white text-black"
  } else {
    return "px-3 py-2 rounded-xl font-semibold transition text-white hover:bg-slate-800"
  }
}

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className="border-b border-white/10 bg-[#0b0f14]">
      <div className="w-full px-40 py-4 flex items-center justify-between">
        <div className="flex flex-row items-end gap-4 font-[Rubik] ">
            <img src={logo} alt="" className="size-10" />
            <div className="font-extrabold tracking-tight text-2xl text-white">Coffee Shop</div>
        </div>
            

        <nav className="flex items-center gap-2 text-white">
          <NavLink to="/" className={linkActivo}>
            Home
          </NavLink>
          <NavLink to="/menu" className={linkActivo}>
            Menu
          </NavLink>
          <NavLink to="/about" className={linkActivo}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}