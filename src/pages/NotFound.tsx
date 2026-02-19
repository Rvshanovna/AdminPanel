const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 
    bg-linear-to-br from-[#0a0f1f] via-[#111827] to-[#3f0d12]">

      <div className="text-center max-w-2xl">

        {/* 404 Text */}
        <h1 className="text-[140px] md:text-[180px] font-extrabold 
        bg-linear-to-r from-blue-500 via-red-500 to-purple-500 
        bg-clip-text text-transparent leading-none drop-shadow-2xl">
          ❌
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-6">
          Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
          The page you are looking for doesn't exist or has been moved.
          Please check the URL or return back.
        </p>

        {/* Decorative line */}
        <div className="mt-8 h-0.5 w-40 mx-auto 
        bg-linear-to-r from-blue-600 to-red-600 rounded-full opacity-70" />

        {/* Back Button UI only (no functionality) */}
        <div className="mt-10">
          <button className="px-8 py-3 rounded-xl text-lg font-semibold 
          bg-linear-to-r from-blue-700 to-red-700 
          hover:scale-105 active:scale-95 
          transition duration-300 shadow-lg shadow-red-900/40 text-white">
            Go Back Home
          </button>
        </div>

      </div>
    </div>
  )
}

export default NotFound