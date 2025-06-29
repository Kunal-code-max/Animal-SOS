package com.animal.sos.controller;

import com.animal.sos.model.AnimalReport;
import com.animal.sos.repository.AnimalReportRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.animal.sos.model.AnimalContact;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class AnimalReportController {

    @Autowired
    private AnimalReportRepository repo;

    @Autowired
    private AnimalReportRepository repo2;
  
    @PostMapping("/reports")
    public AnimalReport submitReport(@RequestBody AnimalReport report) {
        return repo.save(report);
    }
    @PostMapping("/contact")
    public AnimalContact submitContact(@RequestBody AnimalContact contact) {
        return repo2.save(contact);
}
}
