package com.animal.sos.repository;

import com.animal.sos.model.AnimalReport;

import org.springframework.data.jpa.repository.JpaRepository;

import com.animal.sos.model.AnimalContact;

public interface AnimalReportRepository extends JpaRepository<AnimalReport, Long> {

    public AnimalContact save(AnimalContact contact);
}


