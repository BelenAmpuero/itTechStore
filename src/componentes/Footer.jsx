import { Link } from "react-router"
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"

function Footer() {
  return (

    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Marca */}
     <div className="flex flex-col gap-3">
  <h2 className="text-2xl font-bold">iTech</h2>

  <p className="text-gray-400 text-sm">
    Tecnología pensada para potenciar tu creatividad y tu día a día.
  </p>

  <div className="w-full h-40 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps?q=Paseo+del+Buen+Pastor+Cordoba&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
    ></iframe>
  </div>
</div>
        {/* Navegación */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Navegación</h3>

          <Link to="/" className="text-gray-400 hover:text-accent transition">
            Inicio
          </Link>

          <Link to="/" className="text-gray-400 hover:text-accent transition">
            Productos
          </Link>

          <Link to="/cart" className="text-gray-400 hover:text-accent transition">
            Tu pedido
          </Link>

          <Link to="/#about" className="text-gray-400 hover:text-accent transition">
            Sobre nosotros
          </Link>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Contacto</h3>

          <p className="text-gray-400 text-sm">
            soporte@itech.com
          </p>

          <p className="text-gray-400 text-sm">
            Córdoba, Argentina
          </p>

          <div className="flex gap-4 mt-2">

            <a className="hover:text-accent transition cursor-pointer">
            <FaInstagram />
            </a>

            <a className="hover:text-accent transition cursor-pointer">
            <FaTwitter />
            </a>

            <a className="hover:text-accent transition cursor-pointer">
            <FaGithub />
            </a>

          </div>

        </div>

      </div>

      {/* línea inferior */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-8 py-4 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} iTech — Todos los derechos reservados

        </div>

      </div>

    </footer>
  )
}

export default Footer