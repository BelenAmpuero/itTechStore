function SkeletonCard() {
  return (
    <div className="card bg-white w-72 shadow-md">
      {/* imagen */}
      <div className="skeleton h-56 w-full rounded-b-none"></div>

      <div className="card-body items-center text-center flex flex-col gap-3">
        {/* título y precio */}
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="skeleton h-5 w-44"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>

        {/* botón */}
        <div className="skeleton h-10 w-full"></div>
      </div>
    </div>
  )
}

function Skeleton() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export default Skeleton