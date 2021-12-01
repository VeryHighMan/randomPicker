<!DOCTYPE html>
<html lang="ko">
	<head>
		<title></title>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>

		<!-- 공통 css -->
		<link type="text/css" rel="stylesheet" href="./common/css/common.css"/>
		<link type="text/css" rel="stylesheet" href="./common/css/fonts.css"/>

		<!-- 페이지 css -->
		<link type="text/css" rel="stylesheet" href="./css/content.css"/>

		<?php
			include './db/DBData.php';
			include './db/DBconnect.php';
		?>

		<!-- 공통 js -->
		<script type="text/javascript" src="./common/js/gsap.min.js"></script>
		<script type="text/javascript" src="./common/js/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="./common/js/plugins.js"></script>
		<script type="text/javascript" src="./common/js/common.js"></script>
		<script type="text/javascript" src="./common/js/util.js"></script>

		<!-- 페이지 js -->
		<script type="text/javascript" src="./js/pageData.js"></script>
		<script type="text/javascript" src="./js/content.js"></script>

		







	</head>
	<body>

		<!-- container -->
		<div id="container">

			<div class="left_section section"></div>

			<div class="center_section section">
				<div id="text_container" class="text_container">
					<div class="text_cont">
						<span class="text"></span>
						<input type="text" class="input" maxlength="6"/>
					</div>
					<div class="text_cont">
						<span class="text"></span>
						<input type="text" class="input" maxlength="6"/>
					</div>
					<div class="text_cont">
						<span class="text"></span>
						<input type="text" class="input" maxlength="6"/>
					</div>
					<div class="text_cont">
						<span class="text"></span>
						<input type="text" class="input" maxlength="6"/>
					</div>
				</div>
	
				<div class="btn_container">
					<div class="add_btn">추가</div>
					<div class="remove_btn">삭제</div>
					<div class="start_btn">시작</div>
				</div>
			</div>

			<div class="right_section section">

				<div class="record_container">
					<?php
						$sql = "SELECT * FROM record LIMIT 10";
						$result = mysqli_query($conn, $sql);
						while($row = mysqli_fetch_array($result)){
							echo "<div class='record' data-index='".$row['index']."'>".
								"<div class='title'>".$row['title']."</div>".
								"<div class='date'>".$row['date']."</div>".
								"<div class='blank'></div>".
							"</div>";
						}
						mysqli_close($conn);
					?>

					<!-- <div class="record">
						<div class="title">제목</div>
						<div class="date">날짜</div>
					</div> -->


					
				</div>

			</div>

		</div>
		<!-- //container -->

	</body>
</html>
