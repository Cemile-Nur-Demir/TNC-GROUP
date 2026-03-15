import React from "react";

interface ModalProps {
  isOpen: boolean;
  task: any;
  onClose: () => void;
  onSave: (updatedTask: any) => void;
}

export default function Modal({ isOpen, task, onClose, onSave }: ModalProps) {
  const [formData, setFormData] = React.useState(task);

  React.useEffect(() => {
    setFormData(task);
  }, [task]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h3 className="text-lg font-bold mb-4">Görev Düzenle</h3>
        <input
          type="text"
          value={formData.gorevAdi}
          onChange={(e) => setFormData({ ...formData, gorevAdi: e.target.value })}
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Görev Adı"
        />
        <input
          type="text"
          value={formData.adSoyad}
          onChange={(e) => setFormData({ ...formData, adSoyad: e.target.value })}
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Ad Soyad"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Email"
        />
        <input
          type="number"
          value={formData.durationMinutes}
          onChange={(e) =>
            setFormData({ ...formData, durationMinutes: e.target.value })
          }
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Süre (dk)"
        />

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            İptal
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}