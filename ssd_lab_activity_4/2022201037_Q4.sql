CREATE DEFINER=`root`@`localhost` PROCEDURE `get_Details`()
BEGIN
DECLARE finished INTEGER DEFAULT 0;
DECLARE custData varchar(100) DEFAULT "";
DEClARE custRow CURSOR FOR SELECT CONCAT(CUST_NAME, " ", WORKING_AREA, " ", CUST_COUNTRY, " ", Grade) FROM customer where AGENT_CODE like "A00%";
DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;
CREATE TEMPORARY TABLE TempData (custdetails varchar(100)); 

OPEN custRow;
getData: LOOP
	FETCH custRow INTO custData;
    IF finished = 1 THEN 
		LEAVE getData;
	END IF;
    INSERT INTO TempData values (custData);
END LOOP getData;
select * from TempData;
DROP TABLE TempData;
CLOSE custRow;
END