package me.reclaite.bananosbackend.repository;

import me.reclaite.bananosbackend.model.report.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {

}
