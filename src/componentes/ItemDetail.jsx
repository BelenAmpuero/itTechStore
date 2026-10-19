import ItemCounter from "./ItemCounter"

function ItemDetail({detail}) {
    return (<div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row gap-10 text-gray-300">

    <img
    src={detail?.url}
    className="max-w-sm rounded-lg shadow-2xl"
    />

    <div className="flex flex-col gap-4">

    <h1 className="text-5xl font-bold">{detail?.name}</h1>

    <p>{detail?.price}</p>
    <p  
    className={`font-bold ${
  detail?.stock ? "text-green-500" : "text-red-500"
}`}>
        {detail?.stock ? "In Stock" : "No Stock"}</p>
    <p className="py-6">
        {detail?.description}
    </p>
    <ItemCounter product={detail}/>
    </div>
    </div>
</div>)

    
}

export default ItemDetail