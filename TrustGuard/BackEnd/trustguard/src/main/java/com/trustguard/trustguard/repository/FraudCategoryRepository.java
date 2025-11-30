package com.trustguard.trustguard.repository;

import com.trustguard.trustguard.model.FraudCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FraudCategoryRepository extends JpaRepository<FraudCategory, Integer> {}
