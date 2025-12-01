package com.trustguard.trustguard.repository;

import com.trustguard.trustguard.model.FraudChannel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FraudChannelRepository extends JpaRepository<FraudChannel, Integer> {}
