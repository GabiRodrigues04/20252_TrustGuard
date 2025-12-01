package com.trustguard.trustguard.services;

import com.trustguard.trustguard.model.FraudCategory;
import com.trustguard.trustguard.repository.FraudCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FraudCategoryService {

    private final FraudCategoryRepository repo;

    public FraudCategoryService(FraudCategoryRepository repo) {
        this.repo = repo;
    }

    public List<FraudCategory> getAll() {
        return repo.findAll();
    }
}
