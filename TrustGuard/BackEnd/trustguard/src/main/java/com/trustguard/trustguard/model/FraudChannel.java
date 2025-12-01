package com.trustguard.trustguard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "fraud_channel")
public class FraudChannel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    public FraudChannel() {}

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
