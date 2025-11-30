package com.trustguard.trustguard.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.PastOrPresent;

import java.math.BigDecimal;
import java.time.LocalDate;

public class ReportRequest {

    @NotNull(message = "O ID do banco é obrigatório.")
    private Integer bankId;

    @NotNull(message = "O ID do estado é obrigatório.")
    private Integer stateId;

    @NotNull(message = "O canal é obrigatório.")
    private Integer channelId;

    @NotNull(message = "A categoria é obrigatória.")
    private Integer categoryId;

    @NotBlank(message = "O campo urbano ou rural é obrigatório.")
    private String urbanOrRural;

    @NotNull(message = "O valor perdido é obrigatório.")
    @DecimalMin(value = "0.0", inclusive = false, message = "O valor perdido deve ser maior que zero.")
    private BigDecimal lossAmount;

    @NotNull(message = "A data da fraude é obrigatória.")
    @PastOrPresent(message = "A data da fraude não pode estar no futuro.")
    private LocalDate fraudDate;

    @NotNull(message = "Informe se foi vítima da fraude.")
    private Boolean wasVictim;

    @NotNull(message = "Informe se reportou ao banco.")
    private Boolean reportedToBank;

    @NotNull(message = "Informe se reportou à polícia.")
    private Boolean reportedToPolice;

    @DecimalMin(value = "0.0", inclusive = true, message = "O valor recuperado não pode ser negativo.")
    private BigDecimal recoveredAmount;

    @NotBlank(message = "A descrição não pode estar vazia.")
    @Size(min = 10, max = 500, message = "A descrição deve ter entre 10 e 500 caracteres.")
    private String description;

    private Boolean resolved;

    public ReportRequest() {}

    public Integer getBankId() { return bankId; }
    public void setBankId(Integer bankId) { this.bankId = bankId; }

    public Integer getStateId() { return stateId; }
    public void setStateId(Integer stateId) { this.stateId = stateId; }

    public Integer getChannelId() { return channelId; }
    public void setChannelId(Integer channelId) { this.channelId = channelId; }

    public Integer getCategoryId() { return categoryId; }
    public void setCategoryId(Integer categoryId) { this.categoryId = categoryId; }

    public String getUrbanOrRural() { return urbanOrRural; }
    public void setUrbanOrRural(String urbanOrRural) { this.urbanOrRural = urbanOrRural; }

    public BigDecimal getLossAmount() { return lossAmount; }
    public void setLossAmount(BigDecimal lossAmount) { this.lossAmount = lossAmount; }

    public LocalDate getFraudDate() { return fraudDate; }
    public void setFraudDate(LocalDate fraudDate) { this.fraudDate = fraudDate; }

    public Boolean getWasVictim() { return wasVictim; }
    public void setWasVictim(Boolean wasVictim) { this.wasVictim = wasVictim; }

    public Boolean getReportedToBank() { return reportedToBank; }
    public void setReportedToBank(Boolean reportedToBank) { this.reportedToBank = reportedToBank; }

    public Boolean getReportedToPolice() { return reportedToPolice; }
    public void setReportedToPolice(Boolean reportedToPolice) { this.reportedToPolice = reportedToPolice; }

    public BigDecimal getRecoveredAmount() { return recoveredAmount; }
    public void setRecoveredAmount(BigDecimal recoveredAmount) { this.recoveredAmount = recoveredAmount; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Boolean getResolved() { return resolved; }
    public void setResolved(Boolean resolved) { this.resolved = resolved; }
}
