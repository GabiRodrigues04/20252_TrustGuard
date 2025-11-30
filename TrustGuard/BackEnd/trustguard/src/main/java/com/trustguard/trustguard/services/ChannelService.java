package com.trustguard.trustguard.services;

import com.trustguard.trustguard.model.FraudChannel;
import com.trustguard.trustguard.repository.FraudChannelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChannelService {

    private final FraudChannelRepository repo;

    public ChannelService(FraudChannelRepository repo) {
        this.repo = repo;
    }

    public List<FraudChannel> getAll() {
        return repo.findAll();
    }
}
