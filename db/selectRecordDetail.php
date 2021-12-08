<?php
	include_once './DBData.php';
	include_once './DBconnect.php';

	$sql = $_POST["sql"];
	$result_array;
	$result = mysqli_query($conn, $sql);

	while($row = mysqli_fetch_array($result)){
		$result_array = array($row['index'],$row['title'],$row['date'],$row['result_picker'],$row['result_picker_index'],$row['condition_start_index'],$row['condition_timing_array'],$row['condition_content_array']);
	}

	echo json_encode($result_array, JSON_UNESCAPED_UNICODE);

	mysqli_close($conn);
?>
	

