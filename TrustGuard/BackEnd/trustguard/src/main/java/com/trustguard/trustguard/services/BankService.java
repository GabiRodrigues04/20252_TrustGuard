package com.trustguard.trustguard.services;

import com.trustguard.trustguard.model.Bank;
import com.trustguard.trustguard.repository.BankRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankService {

    private final BankRepository repo;

    public BankService(BankRepository repo) {
        this.repo = repo;
    }

    public List<Bank> getAll() {
        return repo.findAll();
    }
}
