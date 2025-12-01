"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import {
  fetchBanks,
  fetchStates,
  fetchChannels,
  fetchCategories,
  sendReport,
} from "../services/api.js";

export default function questions() {
  const [banks, setBanks] = useState([]);
  const [states, setStates] = useState([]);
  const [channels, setChannels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    bankId: "",
    stateId: "",
    channelId: "",
    categoryId: "",
    urbanOrRural: "",
    fraudDate: "",
    lossAmount: "",
    description: "",
    wasVictim: "",
    reportedToBank: "",
    reportedToPolice: "",
    resolved: "",
    recoveredAmount: 0,
  });

  useEffect(() => {
    fetchBanks().then(setBanks);
    fetchStates().then(setStates);
    fetchChannels().then(setChannels);
    fetchCategories().then(setCategories);
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val =
      type === "radio" ? value === "true" : type === "number" ? Number(value) : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await sendReport(formData);
      alert("Denúncia enviada com sucesso. Obrigado pela contribuição!");
      setFormData({
        bankId: "",
        stateId: "",
        channelId: "",
        categoryId: "",
        urbanOrRural: "",
        fraudDate: "",
        lossAmount: "",
        description: "",
        wasVictim: "",
        reportedToBank: "",
        reportedToPolice: "",
        resolved: "",
        recoveredAmount: 0,
      });
    } catch (err) {
      if (err.validation) {
        setErrors(err.validation);
      } 
    }
  };

  const renderError = (field) => errors[field] && (
    <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 flex justify-center items-center">
      <form
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-3xl border border-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-10">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Formulário de Denúncia
          </h1>
          <p className="text-gray-600">
            Ajude-nos a mapear golpes relatando ocorrências de fraude bancária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Banco
            </label>
            <select
              name="bankId"
              value={formData.bankId}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            >
              <option value="">Selecione</option>
              {banks.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
            {renderError("bankId")}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Estado
            </label>
            <select
              name="stateId"
              value={formData.stateId}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            >
              <option value="">Selecione</option>
              {states.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.state} - {s.region}
                </option>
              ))}
            </select>
            {renderError("stateId")}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Canal
            </label>
            <select
              name="channelId"
              value={formData.channelId}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            >
              <option value="">Selecione</option>
              {channels.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            {renderError("channelId")}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Categoria
            </label>
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            >
              <option value="">Selecione</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {renderError("categoryId")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Data aproximada do golpe
            </label>
            <input
              type="date"
              name="fraudDate"
              value={formData.fraudDate}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            />
            {renderError("fraudDate")}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Valor perdido (R$)
            </label>
            <input
              type="number"
              name="lossAmount"
              step="0.01"
              value={formData.lossAmount}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            />
            {renderError("lossAmount")}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Descrição do ocorrido
          </label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
          ></textarea>
          {renderError("description")}
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Urbano ou Rural
          </label>
          <select
            name="urbanOrRural"
            value={formData.urbanOrRural}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500"
          >
            <option value="">Selecione</option>
            <option value="Urbano">Urbano</option>
            <option value="Rural">Rural</option>
          </select>
          {renderError("urbanOrRural")}
        </div>

        {["Você foi vítima do golpe diretamente?", "Reportou a fraude ao seu banco?", "Reportou a fraude à polícia?", "Seu caso foi resolvido?"].map((q, idx) => {
          const field = ["wasVictim", "reportedToBank", "reportedToPolice", "resolved"][idx];
          return (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 mb-3">
              <p className="text-sm font-medium text-gray-700">{q}</p>
              <div className="flex gap-6 mt-2 sm:mt-0">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="radio" name={field} value="true" checked={formData[field] === true} onChange={handleChange} />
                  Sim
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="radio" name={field} value="false" checked={formData[field] === false} onChange={handleChange} />
                  Não
                </label>
              </div>
              {renderError(field)}
            </div>
          );
        })}

        <div className="text-center">
          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-lg">
            Enviar Denúncia
          </Button>
        </div>
      </form>
    </div>
  );
}
