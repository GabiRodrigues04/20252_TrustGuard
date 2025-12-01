package com.trustguard.trustguard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bank")
public class Bank {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Column(name = "digital_only")
    private Boolean digitalOnly;

    public Bank() {}

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Boolean getDigitalOnly() { return digitalOnly; }
    public void setDigitalOnly(Boolean digitalOnly) { this.digitalOnly = digitalOnly; }
}
