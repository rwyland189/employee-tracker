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