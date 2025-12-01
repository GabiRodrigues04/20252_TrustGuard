package com.trustguard.trustguard.services;

import com.trustguard.trustguard.dto.ReportRequest;
import com.trustguard.trustguard.model.*;
import com.trustguard.trustguard.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReportService {

    private final ReportRepository reportRepo;
    private final AftermathRepository aftermathRepo;
    private final BankRepository bankRepo;
    private final StateRepository stateRepo;
    private final FraudChannelRepository channelRepo;
    private final FraudCategoryRepository categoryRepo;

    public ReportService(ReportRepository reportRepo,
                         AftermathRepository aftermathRepo,
                         BankRepository bankRepo,
                         StateRepository stateRepo,
                         FraudChannelRepository channelRepo,
                         FraudCategoryRepository categoryRepo) {
        this.reportRepo = reportRepo;
        this.aftermathRepo = aftermathRepo;
        this.bankRepo = bankRepo;
        this.stateRepo = stateRepo;
        this.channelRepo = channelRepo;
        this.categoryRepo = categoryRepo;
    }

    @Transactional
    public Report createReport(ReportRequest req) {
        Report r = new Report();

        bankRepo.findById(req.getBankId()).ifPresent(r::setBank);
        stateRepo.findById(req.getStateId()).ifPresent(r::setState);
        channelRepo.findById(req.getChannelId()).ifPresent(r::setChannel);
        categoryRepo.findById(req.getCategoryId()).ifPresent(r::setCategory);

        r.setUrbanOrRural(req.getUrbanOrRural());
        r.setLossAmount(req.getLossAmount());
        r.setFraudDate(req.getFraudDate());
        r.setDescription(req.getDescription());
        r.setWasVictim(req.getWasVictim());

        Report saved = reportRepo.save(r);

        Aftermath a = new Aftermath();
        a.setReport(saved);
        a.setReportedToBank(req.getReportedToBank());
        a.setReportedToPolice(req.getReportedToPolice());
        a.setRecoveredAmount(req.getRecoveredAmount());
        a.setResolved(req.getResolved());

        aftermathRepo.save(a);

        return saved;
    }
}
