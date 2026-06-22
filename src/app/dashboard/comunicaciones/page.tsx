import { MessageSquare } from "lucide-react";

export default function ComunicacionesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Comunicaciones</h1>
      <div className="card p-8 text-center">
        <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Sin comunicaciones registradas
        </h2>
        <p className="text-sm text-gray-500">
          Registra llamadas, WhatsApps y emails con tus clientes
        </p>
      </div>
    </div>
  );
}
