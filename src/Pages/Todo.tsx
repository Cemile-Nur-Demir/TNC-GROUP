export default function TodoPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Todo App
      </h1>

      {/* Input + Button */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Yeni görev ekle..."
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Ekle
        </button>
      </div>

      {/* Listeleme Alanı */}
      <ul className="space-y-2">
        <li className="flex justify-between items-center bg-gray-100 p-2 rounded shadow-sm">
          <span className="text-gray-800">Örnek görev 1</span>
          <div className="flex gap-2">
            <button className="text-green-600 hover:text-green-800">Tamamla</button>
            <button className="text-red-600 hover:text-red-800">Sil</button>
          </div>
        </li>
        <li className="flex justify-between items-center bg-gray-100 p-2 rounded shadow-sm">
          <span className="text-gray-800">Örnek görev 2</span>
          <div className="flex gap-2">
            <button className="text-green-600 hover:text-green-800">Tamamla</button>
            <button className="text-red-600 hover:text-red-800">Sil</button>
          </div>
        </li>
      </ul>
    </div>
  );
}