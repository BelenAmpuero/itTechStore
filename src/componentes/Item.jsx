import { useNavigate } from "react-router"

function Item({ prod }) {
  const navigate = useNavigate()

  if (!prod) {
    return (
      <h2 className="text-2xl font-semibold text-gray-700">
        Producto no encontrado
      </h2>
    )
  }

  return (
    <div className="card bg-white w-72 h-full shadow-xl hover:shadow-2xl hover:shadow-teal-300/70 transition duration-300">
      <figure className="h-56 flex items-center justify-center bg-gray-50">
        <img
          src={prod.url}
          alt={prod.name}
          className="h-full object-contain p-6"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = `https://placehold.co/600x600?text=${encodeURIComponent(prod.name)}`
          }}
        />
      </figure>

      <div className="card-body items-center text-center flex flex-col gap-3">
        <div className="w-full">
          <h2 className="text-lg font-semibold leading-snug text-gray-800 min-h-[3.25rem] line-clamp-2">
            {prod.name}
          </h2>
          <p>${Number(prod.price).toLocaleString("es-AR")}</p>
        </div>

        <div className="card-actions w-full mt-auto">
          <button
            className="btn btn-outline border-gray-400 text-base-100 hover:bg-accent hover:border-accent hover:text-base-100 w-full transition hover:shadow-[0_0_12px_theme(colors.accent)]"
            onClick={() => navigate(`/item/${prod.id}`)}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item