import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Questionario() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 flex justify-center items-center">
      <form className="bg-white shadow-md rounded-xl p-8 w-full max-w-3xl border border-gray-200">
        <div className="text-center mb-10">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Formulário de Denúncia
          </h1>
          <p className="text-gray-600">
            Ajude-nos a mapear golpes relatando ocorrências de fraude bancária que aconteceram com você ou pessoas próximas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
            Qual banco banco
            </label>
            <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">
              <option value="">Selecione</option>

            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Estado onde ocorreu o golpe
            </label>
            <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">
              <option value="">Selecione</option>

            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Canal onde ocorreu o golpe
            </label>
            <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">
              <option value="">Selecione</option>

            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Tipo de golpe
            </label>
            <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">
              <option value="">Selecione</option>

            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Data aproximada do golpe
            </label>
            <input
              type="date"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Valor perdido (R$) (Opcional)
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="Ex: 1500.00"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Descrição do ocorrido
          </label>
          <textarea
            rows="4"
            placeholder="Descreva brevemente como o golpe aconteceu..."
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        <div className="space-y-6 mb-10">
          {[
            "Você foi vítima do golpe diretamente?",
            "Reportou a fraude ao seu banco?",
            "Reportou a fraude à polícia?",
            "Seu caso foi resolvido?",
          ].map((question, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3"
            >
              <p className="text-sm font-medium text-gray-700">{question}</p>
              <div className="flex gap-6 mt-2 sm:mt-0">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="radio" name={`q${idx}`} value="sim" />
                  Sim
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="radio" name={`q${idx}`} value="nao" />
                  Não
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-lg"
          >
            Enviar Denúncia
          </Button>
        </div>
      </form>
    </div>
  );
}
