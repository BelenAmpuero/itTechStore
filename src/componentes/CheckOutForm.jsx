function CheckoutForm({ onConfirm }) {

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target

    const user = {
      name: form.name.value,
      email: form.email.value,
      telefono: form.telefono.value,
      direccion: form.direccion.value,
      ciudad: form.ciudad.value,
      cp: form.cp.value
    }

    onConfirm(user)
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Datos del comprador
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Nombre */}
        <div>
          <label htmlFor="block text-sm font-medium text-gray-600 mb-1" id= 'name'>
            Nombre completo
          </label>
          <input
            name= "name"
            type="text"
            required placeholder="Juan Pérez"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none text-black focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="block text-sm font-medium text-gray-600 mb-1" id= 'email'>
            Email
          </label>
          <input
            name= "email"
            type="email"
            required placeholder="juan@email.com"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none text-black focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="block text-sm font-medium text-gray-600 mb-1" id= 'telefono'>
            Teléfono
          </label>
          <input
          name= "telefono"
            type="tel"
              inputMode="numeric"
            required placeholder="+54 9 11 1234 5678"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none text-black focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Dirección */}
        <div>
          <label htmlFor="block text-sm font-medium text-gray-600 mb-1" id= 'direccion'>
            Dirección
          </label>
          <input
          name= "direccion"
            type="text"
            required placeholder="Calle y número"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none text-black focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Ciudad + CP */}
        <div htmlFor="flex gap-3">
          <input
          name= "ciudad"
            type="text"
            required placeholder="Ciudad"
            className="w-2/3 px-4 py-2 border rounded-xl focus:outline-none text-black focus:ring-2 focus:ring-black placeholder-gray-400" id = 'ciudad'
          />
          <input
            type="number"
            name="cp"
            required placeholder="CP"
            className="w-1/3 px-4 py-2 border rounded-xl focus:outline-none text-black focus:ring-2 focus:ring-black placeholder-gray-400" id= 'cp'
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium placeholder-gray-400" id= 'enviar'
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;

