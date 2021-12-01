<?php
	$conn = DBConnect($host, $user, $pw, $dbName);

	function DBConnect($host, $user, $pw, $dbName) {
		$conn = new mysqli($host, $user, $pw, $dbName);
		mysqli_query($conn, "set session character_set_connection=utf8;");
		mysqli_query($conn, "set session character_set_results=utf8;");
		mysqli_query($conn, "set session character_set_client=utf8;");
	
		/* DB 연결 확인 */
		if($conn){
			// echo "Connection established"."<br>";
			return $conn;
		}
		else{ die( 'Could not connect: ' . mysqli_error($conn) ); }
	}
	
	/*
	CREATE TABLE `random_picker`.`record` (
	`index` INT(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title` VARCHAR(255),
	`date` DATETIME default NOW() NOT NULL,
	`result_picker` VARCHAR(255) NOT NULL,
	`result_picker_index` INT(100) NOT NULL,
	`condition_start_index` INT(255) NOT NULL,
	`condition_timing_array` TEXT(30000) NOT NULL,
	`condition_content_array` TEXT(30000) NOT NULL
	) ENGINE = InnoDB;
	*/
	// INSERT INTO `record`(`title`, `result_picker`, `result_picker_index`, `condition_start_index`, `condition_timing_array`, `condition_content_array`) VALUES ("테스트데이터","당첨자",0,0,"타이밍배열","컨텐츠배열")




?>
	
		
		
