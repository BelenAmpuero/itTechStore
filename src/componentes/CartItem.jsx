import { useContext } from "react"
import { CartContext } from "./context/CartContext"

function CartItem({ id, name, quantity, url }) {

const { removeItem, increaseItem, decreaseItem } = useContext(CartContext)

return (
<div className="flex justify-around items-center border-b p-3 mb-3 text-gray-800">

<img src={url} alt={name} className="w-20 h-20"/>

<p>{name}</p>

<div className="flex items-center gap-2">

<button onClick={() => decreaseItem(id)}> - </button>

<span>{quantity}</span>

<button onClick={() => increaseItem(id)}> + </button>

</div>

<button 
onClick={() => removeItem(id)} 
className="bg-red-900 mt-2 px-3 py-1 text-sm rounded-lg text-white"
>
Eliminar
</button>

</div>
)
}

export default CartItem