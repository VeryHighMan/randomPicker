<?php
	include_once './DBData.php';
	include_once './DBconnect.php';

	$sql = $_POST["sql"];
	$result = mysqli_query($conn, $sql);
	if($result === false){
		echo mysqli_error($conn);
	}

	mysqli_close($conn);
?>
	

