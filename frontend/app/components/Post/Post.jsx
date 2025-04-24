export default function CustomCard({ id, name = "nombre", description = "descripcion", handleDelete }) {
  return (
    <div className="max-w-sm p-6 bg-white border rounded-lg shadow-sm flex flex-col h-80">
      <div className="flex justify-center gap-4 text-xs text-gray-700">
        <div className="flex items-center">
          <span className="text-xl font-medium px-2.5 py-0.5">
            {name} - <span className="text-xs text-gray-400">ID : {id}</span>
          </span>
          <div className="flex justify-between items-start">
            <button
              type="button"
              onClick={() => handleDelete(id)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-4" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-base font-medium px-2.5 py-0.5">
          {description}
        </span>
      </div>
    </div>
  );
}
