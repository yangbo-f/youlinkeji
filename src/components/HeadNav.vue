<template>
	<header>
        <div class="head-up wrap">
            <router-link to="/" class="logo"><img src="../assets/images/public/logo.png" alt=""></router-link>
            <div class="tel">
                <a href="tel:0311-82065537">
                    <img src="../assets/images/public/tel.png">
                    <span>0311-82065537</span>
                    <div class="clear"></div>
                </a>
            </div>
            <div class="clear"></div>
        </div>

        <nav>

            <div class="nav wrap">
				<ul class='clearfix'>
					<li v-for="(item,index) in Nav" :key="index" :class="{'active':index==n}" @mouseenter="mouse(index)">
						<router-link :to="item.url">{{item.name}}</router-link>
						<ul class="catebox">
							<li v-for="(leven,index) in item.childNav" :key="index">
								<router-link :to="leven.url">{{leven.name}}</router-link>
							</li>
							<div class="clear"></div>
						</ul>
					</li>
				</ul>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
	data() {
		return {
			n: 0,
			Nav: [
				{
					id: 0,
					name: "首页",
					url: "/"
				},
				{
					id: 1,
					name: "关于我们",
					url: "/about",
					childNav: [
						{
							id: 10,
							name: "公司介绍",
							url: "summary"
						},
						{
							id: 11,
							name: "协作团队介绍",
							url: "team"
						},
						{
							id: 12,
							name: "大事记",
							url: "history"
						}
					]
				},
				{
					id: 2,
					name: "企业文化",
					url: "/cultures"
				},
				{
					id: 3,
					name: "产品中心",
					url: "/product",
					childNav: [
						{
							id: 30,
							name: "装配式建筑",
							url: "/productList/1"
						},
						{
							id: 31,
							name: "旅游度假产品",
							url: "/productList/2"
						},
						{
							id: 32,
							name: "实木改良",
							url: "/productList/3"
						},
						{
							id: 33,
							name: "改良木家具",
							url: "/productList/4"
						},
						{
							id: 34,
							name: "改良木门窗",
							url: "/productList/5"
						}
					]
				},
				{
					id: 4,
					url: "/project",
					name: "经典项目"
				},
				{
					id: 5,
					name: "新闻中心",
					url: "/news",
					childNav: [
						{
							id: 60,
							name: "公司新闻",
							url: "/newslist/1"
						},
						{
							id: 61,
							name: "行业动态",
							url: "/newslist/2"
						},
						{
							id: 62,
							name: "技术交流",
							url: "/newslist/3"
						}
					]
				},
				{
					id: 6,
					url: "/joinus",
					name: "加入我们"
				}
			]
		};
	},
	methods: {
		mouse(index) {
			// alert(index);
			this.n = index;
		}
	}
};
</script>

<style scoped>
/*head*/
.head-up {
	padding: 5px 0;
}
.head-up .logo {
	display: block;
	float: left;
	width: 400px;
}
.head-up .logo img {
	width: 100%;
	display: block;
}
.head-up .tel {
	float: right;
	width: 210px;
}
.head-up .tel img {
	width: 40px;
	padding-top: 10px;
	display: block;
	float: left;
}
.head-up .tel span {
	float: left;
	font-size: 20px;
	font-weight: bold;
	line-height: 60px;
	padding-left: 10px;
	color: #c21820;
}
nav {
	background: #000;
}
.nav > ul > li {
	padding: 10px 20px;
	width: auto;
	float: left;
	position: relative;
}
.nav > ul > li:hover,
.nav > ul > li.active {
	background: #c68d45;
}
.nav .active:hover .catebox {
	display: block;
}
.nav li a {
	color: #fff;
	font-size: 16px;
}
.catebox {
	position: absolute;
	top: 100%;
	left: 0;
	background: #000;
	width: 1920px;
	transition: all 0.4s;
	display: none;
	z-index: 10;
}
.catebox li {
	float: left;
	padding: 10px 15px;
}
.catebox li a {
	font-size: 16px;
	color: #ccc;
	transition: all 0.4s;
	height: 0;
}
.catebox li:hover a {
	color: #c21820;
}
</style>
