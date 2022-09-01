CREATE DEFINER=`root`@`localhost` PROCEDURE `get_Names`(location varchar(100))
BEGIN
select CUST_NAME from customer where customer.WORKING_AREA=location;
END