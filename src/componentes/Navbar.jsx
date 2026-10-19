import logo from "../assets/iTechLogo2.png"
import CartWidget from "./CartWidget"
import { Link } from "react-router"
import { useState, useEffect } from "react"

function Navbar({ categories }) {

  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Detecta scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detecta cuando aparece la sección About
  useEffect(() => {

    const section = document.querySelector("#about")

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setActiveSection("about")
        } else {
          setActiveSection("")
        }

      },
      {
        threshold: 0.4
      }
    )

    observer.observe(section)

    return () => observer.disconnect()

  }, [])

  return (

    <header
      className={`sticky top-0 z-50 flex justify-between items-center px-8 text-white transition-all duration-300
      ${scrolled ? "bg-black/50 backdrop-blur-md py-2 shadow-md" : "bg-black py-4"}`}
    >

      {/* logo */}

      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            className={`transition-all duration-300 ${scrolled ? "h-8" : "h-12"}`}
          />
        </Link>
      </div>

      {/* navegación */}

      <nav className="flex gap-8 items-center">

        {/* categorias */}

        <div className="relative group cursor-pointer">

          <div className="transition group-hover:text-accent">Categorias</div>

          <ul className="absolute pt-3 left-0 hidden group-hover:grid bg-base-100 text-white rounded-box w-96 p-2 shadow-sm grid-cols-2 gap-2 z-50">

            {categories.map(cat => (
              <li
                key={cat.id}
                className="block px-2 py-1 transition hover:text-accent"
              >
                <Link to={`/category/${cat.name}`}>
                  {cat.name}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* pedido */}

        <Link
          to="/cart"
          className="cursor-pointer hover:text-accent transition"
        >
          Tu pedido
        </Link>

        {/* sobre nosotros */}

        <Link
          to="/#about"
          className={`cursor-pointer transition ${
    activeSection === "about"
      ? "text-accent font-semibold"
      : "hover:text-accent"
  }`}
        >
          Sobre nosotros
        </Link>

      </nav>

      {/* carrito */}

      <div className="flex items-center">
        <CartWidget />
      </div>

    </header>
  )
}

export default Navbar