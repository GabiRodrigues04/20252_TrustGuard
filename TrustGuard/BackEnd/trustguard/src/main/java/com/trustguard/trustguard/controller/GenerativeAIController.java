package com.trustguard.trustguard.controller;

import com.trustguard.trustguard.services.AssistantService;
import com.trustguard.trustguard.services.ChatService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GenerativeAIController {

    private final ChatService chatService;
    private final AssistantService assistantService;

    public GenerativeAIController(ChatService chatService, AssistantService assistantService) {
        this.chatService = chatService;
        this.assistantService = assistantService;
    }

    @GetMapping("ask-ai")
    public String getResponse(@RequestParam String prompt) {
        return chatService.getResponse(prompt);
    }

    @GetMapping("ask-ai_options")
    public String getResponseWithOptions(@RequestParam String prompt) {
        return chatService.getResponseWithOptions(prompt);
    }

    @GetMapping("ask-assistant")
    public String askAssistant(@RequestParam String question) {
        return assistantService.askToAssistant(question);
    }
}
