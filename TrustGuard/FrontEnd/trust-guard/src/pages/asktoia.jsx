import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import roboMascote from "@/assets/img/mascote-trustguard.png";

export default function IA() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8080/ai/ask-assistant?question=${encodeURIComponent(String(input))}`
      );

      const data = await response.text();

      const botMessage = { from: "bot", text: data };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const botMessage = {
        from: "bot",
        text: "Ocorreu um erro ao conectar com o servidor.",
      };
      setMessages((prev) => [...prev, botMessage]);
    }

    setInput("");
    setLoading(false);
  }

  const faqItems = [
    {
      question: "Como posso saber se um site é falso?",
      answer:
        "Verifique a URL: se o endereço começa com https:// , se há cadeado de segurança ou se há pequenas variações no nome. Desconfie de sites com erros ortográficos ou aparência amadora. Nunca clique em links suspeitos, prefira digitar a URL manualmente se for o caso. Em caso de dúvidas, pesquise se o site é seguro.",
    },
    {
      question: "A IA pode analisar um e-mail suspeito?",
      answer:
        "Sim! Você pode colar o conteúdo do e-mail aqui e nossa IA analisará sinais comuns de phishing e tentativa de golpe.",
    },
    {
      question: "O que fazer se compartilhei meus dados por engano?",
      answer:
        "Entre em contato imediatamente com o seu banco e solicite o bloqueio de sua conta e cartões.",
    },
    {
      question: "Como denunciar uma tentativa de fraude?",
      answer:
        "Entre em contato com o setor de segurança do seu banco e relate oque aconteceu. Também registre um boletim de ocorrência, anexando prints, comprovantes, e-mails, etc. Você pode nos ajudar registrando seu relato na aba 'Formulário de denúncias', dessa forma você nos ajuda a mapear os golpes mais comuns do cenário bancário! ",
    },
    {
      question: "Posso conversar com a IA sobre outros temas?",
      answer:
        "Sim! Você pode tirar dúvidas gerais e receber orientações seguras sobre qualquer tema.",
    },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="flex-1">
  
        <section className="py-20 bg-red-600 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex justify-center md:justify-start md:w-1/2">
              <img src={roboMascote}
                alt="Assistente virtual TrustGuard"
                className="w-72 h-72 object-cover rounded-full border-4 border-red-400 shadow-lg hover:scale-105 transition-transform duration-300"/>
            </div>

            <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-100 mb-4">
                Conheça nosso Assistente de IA
              </h2>
              <p className="text-gray-100 text-lg leading-relaxed mb-6">
                Oi, sou o Brad! fui criado para ajudar você a identificar
                tentativas de golpe, esclarecer dúvidas e oferecer orientações
                rápidas sobre segurança digital. Eu aprendo continuamente para
                oferecer respostas mais úteis e didáticas a você!
              </p>

              <p className="text-gray-200 text-base">
                Converse com Bradinho, é prático e totalmente seguro!
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-600">
            Fale com Bradinho
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-[600px]">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 border border-gray-200 rounded-lg p-4">
              {messages.length === 0 ? (
                <p className="text-gray-500 text-center">
                  Envie uma mensagem para começar a conversa.
                </p>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-red-600 text-white self-end ml-auto"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))
              )}

              {loading && (
                <p className="text-gray-400 italic text-sm">Bradinho está pensando...</p>
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua dúvida aqui..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button
                onClick={handleSend}
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </section>


        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Dúvidas Frequentes
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg overflow-hidden">

                  <button onClick={() => toggleFaq(idx)} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors" >
                      <span className="font-medium text-gray-800 text-left">
                        {item.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${ expandedFaq === idx ? "rotate-180" : "" }`}/>
                  </button>

                  {expandedFaq === idx && (
                    <div className="px-6 py-4 bg-white border-t border-gray-300">
                      <p className="text-gray-700 text-sm">{item.answer}</p>
                    </div>
                  )}
                  
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
