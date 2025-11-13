import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, Users, Smartphone, Shield, Mail, Phone, CreditCard, FileWarning} from "lucide-react";

export default function Informativo() {

  return (

    <div className="flex flex-col bg-gray-200">
      <main className="flex-1">
        <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <h1 className="text-1xl md:text-5xl font-semi-bold mb-6 leading-tight text-gray-200">
              Bem-vindo ao <span className="text-gray-200 font-bold text-5xl">Bradesco Trust Guard</span>
            </h1>

            <h2 className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
              O TrustGuard é uma plataforma educativa criada para ajudar você a reconhecer, entender e evitar fraudes bancárias.
            </h2>

            <span className="font-semi-bold text-gray-200"> Conhecimento é sua melhor defesa. Proteja-se de golpes:</span>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 mt-6">

              <Link to="/ia" className="px-6 py-3 bg-gray-200 text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                Conversar com a IA
              </Link>

              <a href="#golpes" className="px-6 py-3 border border-white/40 text-white rounded-lg hover:bg-white/10 transition">
                Aprenda a se proteger
              </a>
            </div>

            <p className="text-sm text-gray-200 max-w-lg mx-auto">
            Mantenha sua conta segura. Nossas dicas e informações o ajudarão a proteger seus dados e prevenir fraudes em suas operações financeiras.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre o projeto</h2>
            <h3 className="text-2xl font-bold text-red-800 mb-8 text-center">O TrustGuard nasceu com um propósito simples: reduzir o impacto dos golpes bancários no Brasil.</h3>
           
            <p className="text-gray-700 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              O Trust Guard reúne orientações, exemplos reais de golpes e ferramentas de
              apoio para o usuário. Nosso objetivo é reduzir o impacto das fraudes por meio da
              conscientização dos principais golpes ocorridos no cenário bancário.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Educação",
                  text: "Educar e conscientizar o usuário sobre como as principais fraudes funcionam. Entenda os tipos de golpe e aprenda como agir em cada situação. ",
                },
                {
                  title: "Denúncia",
                  text: "Compartilhe seu relato anonimamente e nos ajude a melhorar nosso conteúdo. Dessa forma conseguimos mapear novas fraudes!",
                },
                {
                  title: "Assistente IA",
                  text: "Converse e receba orientações práticas de forma rápida e segura com nosso assistente de IA, pronto para responder qualquer dúvida.",
                },
              ].map((card, idx) => (

                <div key={idx} className="p-6 border rounded-xl text-center hover:shadow-md transition-all" >
                  <h3 className="font-bold text-red-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-700">{card.text}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Como funciona (em 3 passos)
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  number: "1",
                  title: "Aprenda",
                  text: "Explore guias e exemplos reais de golpes.",
                },
                {
                  number: "2",
                  title: "Verifique",
                  text: "Use a IA para checar mensagens e links suspeitos.",
                },
                {
                  number: "3",
                  title: "Denuncie",
                  text: "Preencha o formulário e ajude a proteger mais pessoas.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-red-600 text-4xl font-bold mb-3">{step.number}</div>
                  <h4 className="font-semibold mb-2 text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="golpes" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">

            <div className="text-center mb-12">
              <p className="text-red-600 font-semibold text-sm mb-2">ALERTA DE SEGURANÇA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principais Golpes Bancários e Como Evitá-los
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Conheça as fraudes mais comuns no cenário bancário atual. 
                Entenda como agem os golpistas, quais seus objetivos e como se proteger dessas fraudes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icone: Mail,
                  titulo: "Phishing (E-mail ou Site Falso)",
                  oque: "O golpista envia mensagens que imitam o banco ou uma instituição conhecida.",
                  como: "Essas mensagens contêm links falsos que levam a páginas idênticas às oficiais, pedindo dados pessoais ou bancários.",
                  defesa: "Nunca clique em links recebidos por e-mail ou SMS. Acesse sempre o site do banco digitando o endereço manualmente no navegador."
                },
                {
                  icone: Phone,
                  titulo: "Golpe da Falsa Cental",
                  oque: "Criminosos ligam fingindo ser funcionários do banco.",
                  como: "Eles dizem ter identificado uma movimentação suspeita e pedem para confirmar dados, senhas ou até recolher o cartão físico.",
                  defesa: "Bancos nunca pedem senhas por telefone nem enviam mensageiros. Desligue e ligue diretamente para o número oficial do seu banco."
                },
                {
                  icone: Smartphone,
                  titulo: "Clonagem de WhatsApp",
                  oque: "O golpista tenta obter o código de verificação da sua conta do WhatsApp.",
                  como: "Ele se passa por uma empresa ou conhecido, pedindo que você repasse um código recebido por SMS.",
                  defesa: "Ative a verificação em duas etapas no app e nunca compartilhe códigos por mensagens."
                },
                {
                  icone: CreditCard,
                  titulo: "Clonagem de Cartão",
                  oque: "Cópia não autorizada dos dados do seu cartão físico ou virtual.",
                  como: "Pode ocorrer em maquininhas adulteradas, sites falsos ou dispositivos de leitura em caixas eletrônicos.",
                  defesa: "Evite pagar em maquininhas suspeitas, cubra o teclado ao digitar a senha e use cartões virtuais para compras online."
                },
                {
                  icone: FileWarning,
                  titulo: "Boleto Falso",
                  oque: "O documento de pagamento é adulterado para redirecionar o valor a outra conta.",
                  como: "Acontece com boletos enviados por e-mail, aplicativos falsos ou links de segunda via.",
                  defesa: "Confira sempre o nome do beneficiário e o CNPJ antes de pagar. Prefira gerar boletos diretamente no app oficial do banco."
                },
                {
                  icone: Users,
                  titulo: "Golpe do Pagamento de Resgate",
                  oque: "Criminosos dizem ter sequestrado ou retido dados pessoais e pedem pagamento urgente.",
                  como: "Usam medo e pressa para induzir transferências via Pix ou criptomoedas.",
                  defesa: "Mantenha a calma, não faça pagamentos e procure a polícia imediatamente. Evite divulgar informações pessoais em redes sociais."
                },
              ].map((item, idx) => (

                <div key={idx} className="bg-gray-50 rounded-xl border p-6 hover:shadow-lg transition-all flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
                      <item.icone className="w-8 h-8 text-red-600" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-lg mb-3 text-center">
                    {item.titulo}
                  </h3>

                  <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                    <div className="flex items-start gap-2">
                      <p><strong>O que é:</strong> {item.oque}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <p><strong>Como acontece:</strong> {item.como}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <p><strong>Como se proteger:</strong> {item.defesa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Este conteúdo é atualizado constantemente conforme novos golpes são identificados.
              </p>

              <Link to="/questionario">
                    <Button className={"inline-block px-6 py-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all" } >
                      Denuncie um golpe
                    </Button>
              </Link>

            </div>
          </div>
        </section>

        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <p className="text-3xl font-bold text-gray-100 mb-6 uppercase tracking-wide">
              FALSAS CENTRAIS DE ATENDIMENTO
            </p>
            <p className="md:text-3xl text-gray-100 font-semi-bold mb-6">
              Golpistas se passam por atendentes de centrais de atendimento oficiais para roubar seus dados
            </p>
            <p className="md:text-2xl text-gray-100 font-semi-bold mb-12">
              Fique experto: 
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { icon: Phone, title: "Como o golpe acontece", desc: "Usam números parecidos e dizem que há problemas na sua conta para induzir instalação de apps." },
                { icon: AlertCircle, title: "Táticas dos golpistas", desc: "Criam urgência e usam linguagem técnica para parecer legítimos." },
                { icon: Shield, title: "Como se proteger", desc: "O banco nunca pede senhas ou apps. Desligue e confirme em canais oficiais." },
              ].map((item, idx) => (
                <div key={idx} className="bg-red-700 rounded-lg p-6 hover:bg-red-800 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-6 h-6 text-red-100" />
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-red-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-red-100 text-sm max-w-2xl mx-auto">
              <strong>Dica:</strong> se receber uma ligação suspeita, desligue imediatamente e entre em contato com o banco apenas pelos canais oficiais. Desconfie sempre que o atendente demonstrar pressa, pedir informações pessoais ou tentar instalar programas no seu celular.
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Formulário de Denúncia",
                  desc: "Identificou uma tentativa de golpe? Preencha o formulário para registrar o caso.",
                  link: "/questionario",
                  button: "Preencher denúncia",
                  variant: "primary",
                },
                {
                  title: "Fale com a IA",
                  desc: "Ainda em dúvida? Converse com nosso assistente virtual para checar mensagens e links.",
                  link: "/ia",
                  button: "Abrir chat da IA",
                  variant: "secondary",
                },
              ].map((box, idx) => (
                <div key={idx} className="bg-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-3">{box.title}</h3>
                  <p className="text-sm text-gray-600 mb-6">{box.desc}</p>
                  <Link to={box.link}>
                    <Button
                      className={ "bg-red-600 hover:bg-red-700 text-white" } >
                      {box.button}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
