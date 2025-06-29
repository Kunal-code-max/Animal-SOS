package com.animal.sos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.animal.sos.model.AnimalContact;

public interface AnimaContactRepository extends JpaRepository<AnimalContact, Long>{

}
