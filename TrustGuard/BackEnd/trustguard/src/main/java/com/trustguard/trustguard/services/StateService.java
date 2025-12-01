package com.trustguard.trustguard.services;

import com.trustguard.trustguard.model.State;
import com.trustguard.trustguard.repository.StateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    private final StateRepository repo;

    public StateService(StateRepository repo) {
        this.repo = repo;
    }

    public List<State> getAll() {
        return repo.findAll();
    }
}
