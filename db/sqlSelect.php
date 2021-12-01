<?php
	include_once './DBData.php';
	include_once './DBconnect.php';

	$sql = $_POST["sql"];
	$result_array = array();
	$result = mysqli_query($conn, $sql);

	while($row = mysqli_fetch_array($result)){
		array_push($result_array, array($row['index'],$row['title'],$row['date']));
	}

	echo json_encode($result_array, JSON_UNESCAPED_UNICODE);

	mysqli_close($conn);
?>
	

