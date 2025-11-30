package com.trustguard.trustguard.controller;

import com.trustguard.trustguard.model.FraudCategory;
import com.trustguard.trustguard.services.FraudCategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class FraudCategoryController {

    private final FraudCategoryService service;

    public FraudCategoryController(FraudCategoryService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<FraudCategory>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }
}
