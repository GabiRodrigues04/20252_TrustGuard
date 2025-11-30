package com.trustguard.trustguard.repository;

import com.trustguard.trustguard.model.Aftermath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AftermathRepository extends JpaRepository<Aftermath, Integer> {}
