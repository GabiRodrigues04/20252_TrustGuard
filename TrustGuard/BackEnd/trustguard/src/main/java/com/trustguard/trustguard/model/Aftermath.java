package com.trustguard.trustguard.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "aftermath")
public class Aftermath {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "report_id")
    private Report report;

    @Column(name = "reported_to_bank")
    private Boolean reportedToBank;

    @Column(name = "reported_to_police")
    private Boolean reportedToPolice;

    @Column(name = "recovered_amount")
    private BigDecimal recoveredAmount;

    private Boolean resolved;

    public Aftermath() {}

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Report getReport() { return report; }
    public void setReport(Report report) { this.report = report; }

    public Boolean getReportedToBank() { return reportedToBank; }
    public void setReportedToBank(Boolean reportedToBank) { this.reportedToBank = reportedToBank; }

    public Boolean getReportedToPolice() { return reportedToPolice; }
    public void setReportedToPolice(Boolean reportedToPolice) { this.reportedToPolice = reportedToPolice; }

    public BigDecimal getRecoveredAmount() { return recoveredAmount; }
    public void setRecoveredAmount(BigDecimal recoveredAmount) { this.recoveredAmount = recoveredAmount; }

    public Boolean getResolved() { return resolved; }
    public void setResolved(Boolean resolved) { this.resolved = resolved; }
}
