<template>
	<div>
		<!-- 面包屑导航 -->
		<div class="nav_top">
			<div class="wrap">
				<a href="">首页</a>
				<!-- <a href="" class="level">产品栏目页</a> -->
				<span>应用展示</span>
			</div>
		</div>

		<div class="images wrap">
			<div class="tit">
				<h2>应用展示</h2>
				<span>Application display</span>
			</div>
			<div class="box clearfix">
					<div class="honor-block" id="honor-block">
						<ul class="clearfix">

							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show1.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show2.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show3.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show4.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show5.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show6.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show7.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show8.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show9.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show10.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show11.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
							<li>
								<a href="">
								<div class="pic">
									<img src="../assets/images/product/show12.jpg" alt="">
								</div>
								<p>产品应用</p>
								</a>
							</li>
						</ul>
					</div>
					<div id="bg"></div>
					<div id="bottom">
						<ul>
							<li class="prev"></li>
							<li class="next"></li>
							<li class="close"></li>
						</ul>
					</div>
					<div id="frame"></div>
				</div>
			</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner img {
	width: 100%;
	display: block;
}

.images .tit {
	text-align: center;
	padding: 40px 0 25px;
}
.images .tit h2 {
	font-size: 20px;
	font-weight: bold;
}
.images .tit span {
	font-size: 12px;
	padding-top: 10px;
}
.images .box li {
	width: 24%;
	margin: 0 0.5% 20px;
	height: auto;
	border: none;
	float: left;
}
.images .box li .pic {
	border: 1px solid #ccc;
	padding: 2px;
	overflow: hidden;
}
.images .box li .pic:hover img {
	transform: scale(1.1);
}
.images .box li img {
	width: 100%;
	display: block;
	transition: all 0.4s;
}
.images .box li p {
	font-size: 16px;
	text-align: center;
	padding: 5px 0;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>
