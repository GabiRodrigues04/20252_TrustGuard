package com.trustguard.trustguard.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "report")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "channel_id")
    private FraudChannel channel;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private FraudCategory category;

    @ManyToOne
    @JoinColumn(name = "bank_id")
    private Bank bank;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;

    @Column(name = "urban_or_rural")
    private String urbanOrRural;

    @Column(name = "loss_amount")
    private BigDecimal lossAmount;

    @Column(name = "fraud_date")
    private LocalDate fraudDate;

    private String description;

    @Column(name = "report_date")
    private LocalDate reportDate;

    @Column(name = "was_victim")
    private Boolean wasVictim;

    public Report() {}

    @PrePersist
    public void prePersist() {
        if (this.reportDate == null) {
            this.reportDate = LocalDate.now();
        }
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public FraudChannel getChannel() { return channel; }
    public void setChannel(FraudChannel channel) { this.channel = channel; }

    public FraudCategory getCategory() { return category; }
    public void setCategory(FraudCategory category) { this.category = category; }

    public Bank getBank() { return bank; }
    public void setBank(Bank bank) { this.bank = bank; }

    public State getState() { return state; }
    public void setState(State state) { this.state = state; }

    public String getUrbanOrRural() { return urbanOrRural; }
    public void setUrbanOrRural(String urbanOrRural) { this.urbanOrRural = urbanOrRural; }

    public BigDecimal getLossAmount() { return lossAmount; }
    public void setLossAmount(BigDecimal lossAmount) { this.lossAmount = lossAmount; }

    public LocalDate getFraudDate() { return fraudDate; }
    public void setFraudDate(LocalDate fraudDate) { this.fraudDate = fraudDate; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDate getReportDate() { return reportDate; }
    public void setReportDate(LocalDate reportDate) { this.reportDate = reportDate; }

    public Boolean getWasVictim() { return wasVictim; }
    public void setWasVictim(Boolean wasVictim) { this.wasVictim = wasVictim; }
}
