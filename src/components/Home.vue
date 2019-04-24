<template>
	<div class="home">
		<div class="swiper-container">
			<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in banner" :key="index"><img :src="item.img"></div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
		<section class="section1 wrap">
			<div class="left lt">
				<div class="tit">
					<h2>公司介绍</h2>
					<span>Company profile</span>
					<div class="line"></div>
				</div>
				<div class="pic lt">
					<img src="../assets/images/index/video.jpg" alt="">
				</div>
				<div class="txt rt">
					<p>河北优林科技有限公司，位于河北省宁晋县，占地面积500余亩 。公司秉承“科技寓心 • 品质可鉴”的企业追求，以创新引领发展，科技提升品质，致力于全球森林资源的保护与开发利用。</p>
					<p>公司与东北林业大学谢延军教授团队全面深度合作，开展实木改良技术的研发应用。通过研发构建的功能改良技术体系，从分子水平和微观构造方面着手，全面提升木材品质。形成了集实木改良、木结构建筑设计、制造、安装于一体的产业链条。2017年，公司被认定为河北省高新技术企业、河北省A级研发机构。</p>
				</div>
				<div class="clear"></div>
			</div>
			<div class="right rt">
				<div class="title">
					<h2>新闻资讯</h2>
					<a href="" class="rt">查看更多</a>
					<div class="clear"></div>
				</div>
				<div class="list">
					<ul>
						<li v-for="(item,index) in news" :key="index">
							<div class="date lt">
								<h2>{{item.time|weekDate}}</h2>
								<span>{{item.time|day}}</span>
							</div>
							<h2><router-link :to="{name:'newscontent',params:{id:item.id}}">{{item.title}}</router-link></h2>
							<p><router-link :to="{name:'newscontent',params:{id:item.id}}">{{item.summary}}</router-link></p>
							<div class="clear"></div>
						</li>
					</ul>
				</div>
			</div>
			<div class="clear"></div>
		</section>
		<section class="section2 wrap">
			<div class="tit">
				<h2>产品中心</h2>
				<div class="line"></div>
				<span>Product center</span>
			</div>
			<div class="box">
				<div class="sort" v-for="(item,index) in product" :key="index">
					<router-link :to="{name:'productList',params:{id:item.id}}">
						<img :src="item.img" alt="">
						<img class="bigimg" :class="'bigimg'+(index+1)" :src="item.img" alt="">
						<div class="txt">
							<h2>{{item.name}}</h2>
							<p>{{item.content}}</p>
						</div>
					</router-link>
				</div>
				<div class="clear"></div>
			</div>
		</section>
	</div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import indexData from "../assets/js/index.js";
import newsdata from "../assets/libs/news-con.js";
export default {
	data() {
		return {
			banner: indexData.banner,
			product: indexData.product,
			news: ''
		};
	},
	mounted() {
		var mySwiper = new Swiper(".swiper-container", {
			slidesPerView: 1,
			effect: "fade",
			loop: true,
			autoplay: {
				delay: 4500,
				disableOnInteraction: false
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
		});
		var newslist = [];
		for(var i=0;i<5;i++){
			newslist.push(newsdata[i])
		}
		this.news = newslist
	},
	filters: {
		weekDate: function(value) {
			if (!value) return "";
			const weekDay = [
				"星期天",
				"星期一",
				"星期二",
				"星期三",
				"星期四",
				"星期五",
				"星期六"
			];
			const myDate = new Date(Date.parse(value));
			return weekDay[myDate.getDay()];
		},
		day: function(value) {
			if (!value) return "";
			const week = value;
			return week.slice(5, 10);
		}
	}
};
</script>

<style scoped>
.swiper-container {
	width: 100%;
}
.swiper-container .swiper-slide img {
	width: 100%;
}

.section1 {
	padding: 60px 0 40px;
}
.section1 .left {
	width: 800px;
}
.section1 .left .pic {
	width: 50%;
	padding-top: 18px;
}
.section1 .left .pic img {
	width: 100%;
	display: block;
}
.section1 .txt {
	padding: 0 20px;
	width: 50%;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
.section1 .tit {
	text-align: center;
	position: relative;
	width: 400px;
	margin: 0 auto;
}
.section1 .tit h2 {
	font-size: 20px;
	width: 100px;
	background: #fff;
	margin: 0 auto;
}
.section1 .tit span {
	font-size: 12px;
}
.section1 .tit .line {
	height: 1px;
	width: 90%;
	background: #c98e44;
	position: absolute;
	top: 15px;
	left: 50%;
	margin-left: -45%;
	z-index: -1;
}
.section1 .txt p {
	line-height: 1.8;
	padding-top: 10px;
	text-indent: 2em;
}

.section1 .right {
	width: 400px;
}
.section1 .right .title h2 {
	font-size: 20px;
	display: inline-block;
	margin-bottom: 10px;
	padding-left: 30px;
	background: url(../assets/images/public/news.png) no-repeat left center;
	background-size: 25px;
}
.section1 .right .title a {
	padding-top: 4px;
	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	transition: all 0.4s;
}
.section1 .right .title a:hover {
	color: #c98e44;
}
.section1 .right .list li {
	padding-top: 10px;
}
.section1 .right .date {
	text-align: center;
}
.section1 .right .date h2 {
	border: 1px solid #777;
	line-height: 1;
	font-size: 14px;
	padding: 4px 10px;
	color: #c98e44;
}
.section1 .right .date span {
	padding-top: 5px;
	display: block;
	margin: 0 auto;
}
.section1 .right li > h2 {
	display: -webkit-box;
	padding-left: 15px;
	line-height: 1.2;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	overflow: hidden;
	margin-bottom: 5px;
	font-size: 14px;
	font-weight: bold;
}
.section1 .right li > h2 a {
	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	transition: all 0.4s;
}
.section1 .right li > h2 a:hover {
	color: #c98e44;
}
.section1 .right li p {
	display: -webkit-box;
	padding-left: 15px;
	line-height: 1.6;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	overflow: hidden;
	transition: all 0.4s;
}
.section1 .right li p a {
	color: #616161;
	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	transition: all 0.4s;
}
.section1 .right li p a:hover {
	color: #c98e44;
}

.section2 {
	padding: 30px 0 70px;
}
.section2 .tit {
	text-align: center;
	padding-bottom: 20px;
	position: relative;
}
.section2 .tit h2 {
	font-size: 20px;
	width: 100px;
	background: #fff;
	margin: 0 auto;
}
.section2 .tit span {
	font-size: 12px;
}
.section2 .tit .line {
	height: 1px;
	width: 400px;
	background: #c98e44;
	position: absolute;
	top: 15px;
	left: 50%;
	margin-left: -200px;
	z-index: -1;
}

.section2 .box .sort {
	float: left;
	width: 20%;
	position: relative;
}
.section2 .box .sort img {
	width: 100%;
	display: block;
}
.section2 .box .sort .bigimg {
	width: 0;
	display: block;
	position: absolute;
	z-index: -1;
	left: 50%;
	top: 50%;
	opacity: 0;
	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	transition: all 0.4s; /* 硬件加速 */
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
}
.section2 .box .sort .bigimg5 {
	position: absolute;
	z-index: -1;
	left: auto;
	top: 50%;
	right: 0;
}
.section2 .box .sort .txt {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	color: #fff;
	padding: 15px;
}
.section2 .box .sort .txt h2 {
	font-size: 16px;
	text-align: center;
	padding: 5px 0;
}
.section2 .box .sort .txt p {
	font-size: 14px;
	line-height: 1.6;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.section2 .box .sort:hover .bigimg {
	opacity: 1;
	width: 400px;
	display: block;
	position: absolute;
	z-index: 5;
	left: -80px;
	top: -50px;
}
.section2 .box .sort:hover .bigimg1 {
	opacity: 1;
	width: 400px;
	display: block;
	position: absolute;
	z-index: 5;
	left: 0;
	top: -50px;
}
.section2 .box .sort:hover .bigimg5 {
	opacity: 1;
	width: 400px;
	display: block;
	position: absolute;
	z-index: 5;
	left: auto;
	top: -50px;
	right: 0;
}
</style>
