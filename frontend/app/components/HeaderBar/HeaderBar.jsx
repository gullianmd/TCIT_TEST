export default function HeaderBar({ value, setValue, modalHandler }) {
  return (
    <div className="w-11/12 xl:w-8/12 flex flex-col sm:flex-row items-center p-1 xl:p-2 2xl:p-4 gap-2 sm:gap-4">
      <div className="text-black font-medium text-xs sm:text-xl text-center sm:text-left w-full sm:w-auto">
        Filtro
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:flex-1">
        <input
          type="text"
          placeholder="Buscar..."
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 text-black bg-white text-xs sm:text-sm md:text-base border rounded"
        />

        <button
          onClick={modalHandler}
          className="px-4 py-2 bg-white text-gray-700 font-semibold text-sm rounded hover:bg-gray-100 transition"
        >
          Crear Post
        </button>
      </div>
    </div>
  );
}
