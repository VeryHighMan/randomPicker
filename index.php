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

			<div class="left_section section">

				<div class="record_view_container">
					<div class="record_view_cont index_cont">
						<div class="title">번호 : </div>
						<div class="context">번호</div>
					</div>
					<div class="record_view_cont title_cont">
						<div class="title">제목 : </div>
						<div class="context">제목</div>
					</div>
					<div class="record_view_cont date_cont">
						<div class="title">시행일자 : </div>
						<div class="context">시행일자</div>
					</div>
					<div class="record_view_cont picker_cont">
						<div class="title">당첨자 : </div>
						<div class="context">당첨자</div>
					</div>
					<div class="record_view_cont picker_index_cont">
						<div class="title">당첨자 인덱스 : </div>
						<div class="context">당첨자 인덱스</div>
					</div>
					<div class="record_view_cont start_index_cont">
						<div class="title">시작 인덱스 : </div>
						<div class="context">시작 인덱스</div>
					</div>
					<div class="record_view_cont timing_array_cont">
						<div class="title">타이밍 배열 : </div>
						<div class="context">타이밍 배열</div>
					</div>
					<div class="record_view_cont content_array_cont">
						<div class="title">컨텐츠 배열 : </div>
						<div class="context">컨텐츠 배열</div>
					</div>
				</div>
			
			</div>

			<div class="center_section section">

				<div class="title_container">
					<input type="text" class="input" maxlength="10"/>
				</div>

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

					<!-- <div class="record">
						<div class="title">제목</div>
						<div class="date">날짜</div>
					</div> -->

				</div>
				<div class="record_control">
					<div class="prev">이전</div>
					<div class="next">다음</div>
				</div>
			</div>

		</div>
		<!-- //container -->

	</body>
</html>
