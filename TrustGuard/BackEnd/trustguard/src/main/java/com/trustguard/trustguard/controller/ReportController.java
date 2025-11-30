package com.trustguard.trustguard.controller;

import com.trustguard.trustguard.dto.ReportRequest;
import com.trustguard.trustguard.model.Report;
import com.trustguard.trustguard.services.ReportService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping
    public ResponseEntity<Report> createReport(@Valid @RequestBody ReportRequest request) {
        Report saved = reportService.createReport(request);
        return ResponseEntity.ok(saved);
    }
}
