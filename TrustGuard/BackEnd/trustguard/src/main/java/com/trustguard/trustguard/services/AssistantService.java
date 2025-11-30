    package com.trustguard.trustguard.services;

    import org.springframework.ai.chat.model.ChatModel;
    import org.springframework.ai.chat.prompt.Prompt;
    import org.springframework.ai.chat.prompt.PromptTemplate;
    import org.springframework.stereotype.Service;

    import java.util.Map;

    @Service
    public class AssistantService {

        private final ChatModel chatModel;

        public AssistantService(ChatModel chatModel) {
            this.chatModel = chatModel;
        }

        public String askToAssistant (String question) {

            var template = """
                    Você é Bradinho, assistente de IA especializado em orientar usuários sobre golpes e fraudes bancárias.
                    Sua missão é explicar riscos, mecanismos dos golpes e boas práticas de segurança de forma simples, empática e sem causar pânico. 
                    Use um tom curto, calmo, simpático e profissional, evitando linguagem infantil.
                    
                    Regras obrigatórias:
                    - Responda apenas em texto corrido, sem formatação (sem listas, títulos, markdown).
                    - Limite sua resposta a até 650 caracteres.
                    - Nunca faça afirmações com certeza: use expressões como “pode ser”, “parece”, “há indícios”.
                    - Nunca peça dados pessoais (senha, documentos, cartão) e oriente o usuário a não compartilhá-los.
                    - Quando necessário, recomende canais oficiais e sugira registrar boletim de ocorrência.
                    - Não forneça instruções ilegais, não acuse sem evidências e não produza conclusões jurídicas.
                    - Seja objetivo, flexível e criativo nas orientações, adaptando a linguagem ao nível do usuário.
                    - Analise brevemente o caso e ofereça passos práticos e seguros.
                     Finalize sempre com um lembrete de segurança curto.
                    Pergunta do usuário: {question}
                    """;

            PromptTemplate promptTemplate = new PromptTemplate(template);
            Map<String, Object> params = Map.of(
                    "question", question
            );

            Prompt prompt = promptTemplate.create(params);

            return chatModel.call(prompt).getResult().getOutput().getText();
        }

    }
