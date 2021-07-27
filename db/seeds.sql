-- populate departments table
INSERT INTO departments (name)
VALUES
    ('Cosmetology'),
    ('Fashion'),
    ('Modeling');

-- populate roles table
INSERT INTO roles (title, salary, department_id)
VALUES
    ('Makeup Artist', 70000, 1),
    ('Hair Stylist', 50000, 1),
    ('Esthetician', 40000, 1),
    ('Fashion Designer', 55000, 2),
    ('Buyer', 60000, 2),
    ('Stylist', 45000, 2),
    ('Fashion Model', 70000, 3),
    ('Photographer', 45000, 3),
    ('Model Agent', 60000, 3);

-- populate employees table
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Amanza', 'Smith', 1, NULL),
    ('Brett', 'Oppenheim', 2, 1),
    ('Christine', 'Quinn', 3, 1),
    ('Mary', 'Fitzgerald', 4, NULL),
    ('Heather', 'Young', 5, 4),
    ('Davina', 'Potratz', 6, 4),
    ('Chrishell', 'Stause', 7, 9),
    ('Jason', 'Oppenheim', 8, 9),
    ('Maya', 'Vander', 9, NULL);