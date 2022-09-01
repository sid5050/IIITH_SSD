CREATE DEFINER=`root`@`localhost` PROCEDURE `add_nums`(in num1 int, in num2 int, out res int)
BEGIN
	Set res=num1+num2;
END