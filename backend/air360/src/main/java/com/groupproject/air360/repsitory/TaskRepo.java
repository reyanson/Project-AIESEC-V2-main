package com.groupproject.air360.repsitory;

import com.groupproject.air360.modal.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepo extends JpaRepository<Task,Integer> {

}
