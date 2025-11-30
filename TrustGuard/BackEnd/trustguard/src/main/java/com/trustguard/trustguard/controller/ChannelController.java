package com.trustguard.trustguard.controller;

import com.trustguard.trustguard.model.FraudChannel;
import com.trustguard.trustguard.services.ChannelService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/channels")
public class ChannelController {

    private final ChannelService channelService;

    public ChannelController(ChannelService channelService) {
        this.channelService = channelService;
    }

    @GetMapping
    public ResponseEntity<List<FraudChannel>> getAllChannels() {
        return ResponseEntity.ok(channelService.getAll());
    }
}
