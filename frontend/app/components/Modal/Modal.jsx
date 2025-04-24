import { useState } from "react";

export default function Modal({ isOpen, handleClose, createPostHandler }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostHandler(nombre, descripcion);
    setNombre("");
    setDescripcion("");
    handleClose(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-10"
        onClick={handleClose}
      ></div>

      <div className="relative z-90 w-11/12 sm:w-11/12 md:w-1/2 xl:w-4/12 p-4 bg-white rounded-lg shadow-lg">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex justify-between items-start">
            <h2 className="text-xl xl:text-2xl font-bold text-gray-800">
              Crear nuevo post
            </h2>
            <button
              type="button"
              onClick={handleClose}
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

          <div className="flex flex-col gap-4 text-black">
            <label>
              <span className="block mb-1 font-medium">Nombre</span>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </label>

            <label>
              <span className="block mb-1 font-medium">Descripción</span>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
                required
              />
            </label>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="p-2 text-white bg-gray-400 hover:bg-gray-700 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="p-2 text-white bg-blue-600 hover:bg-blue-800 rounded"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
