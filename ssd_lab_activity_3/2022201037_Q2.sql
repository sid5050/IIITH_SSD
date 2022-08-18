SELECT DISTINCT E2.Fname, E2.Minit, E2.Lname, E2.Ssn, E2.Dno, COUNT(E1.Ssn) AS MANAGING FROM EMPLOYEE E1 JOIN EMPLOYEE E2 ON E1.Super_ssn = E2.Ssn GROUP BY E2.Fname,E2.Minit,E2.Lname, E2.SSN, E2.Dno ORDER BY MANAGING ASC;
