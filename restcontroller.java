package com.example.employee;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin
public class EmployeeController {

    private final EmployeeRepository repository;

    public EmployeeController(
        EmployeeRepository repository
    ) {
        this.repository = repository;
    }

    @GetMapping
    public List<Employee> getEmployees() {

        return repository.findAll();
    }

    @PostMapping
    public Employee addEmployee(
        @RequestBody Employee employee
    ) {

        return repository.save(employee);
    }

    @GetMapping("/health")
    public String health() {

        return "Employee API is running";
    }
}
