<template>
	<footer>
        <div class="wrap">
            <div class="foot_nav">
                <ul>
                    <li><a href="">首页</a></li>
                    <li>
                        <a href="">关于我们</a>
                        <ul class="menu">
                            <li><a href="">公司介绍</a></li>
                            <li><a href="">团队介绍</a></li>
                            <li><a href="">大事记</a></li>
                            <div class="clear"></div>
                        </ul>
                    </li>
                    <li><a href="">企业文化</a></li>
                    <li>
                        <a href="">产品中心</a>
                        <ul class="menu">
                            <li><a href="">装配式建筑</a></li>
                            <li><a href="">旅游度假产品</a></li>
                            <li><a href="">实木改良</a></li>
                            <li><a href="">改良木家具</a></li>
                            <li><a href="">改良木门窗</a></li>
                            <!-- <li><a href="">泛旅游地产项目</a></li> -->
                            <div class="clear"></div>
                        </ul>
                    </li>
                    <li><a href="">应用展示</a></li>
                    <li>
                        <a href="">新闻中心</a>
                        <ul class="menu">
                            <li><a href="">公司新闻</a></li>
                            <li><a href="">行业动态</a></li>
                            <li><a href="">技术交流</a></li>
                            <div class="clear"></div>
                        </ul>
                    </li>
                    <li><a href="">加入我们</a></li>
                    <div class="clear"></div>
                </ul>
                <div class="line"></div>
            </div>
            <div class="contact">
                <p>联系我们</p>
                <ul>
                    <li><a href="tel:0311-80265537">0311-82065537</a></li>
                </ul>
                <div class="line"></div>
            </div>
            <div class="chat">
                <p>官方微信</p>
                <img src="../assets/images/public/wechat.jpg" alt="">
            </div>
            <div class="clear"></div>
        </div>
        <div class="copyright">
            <p>友情链接 ：<span><a href="">友情链接1</a></span><span><a href="">友情链接2</a></span></p>
            <p class="bq">Copyright ©2005 - 2016 河北优林科技  冀ICP备 16022109号</p>
        </div>
    </footer>
</template>
<script>
export default {};
</script>

<style scoped>
footer {
	background: #212121;
	padding-top: 20px;
}
.foot_nav {
	float: left;
	width: 680px;
	position: relative;
}
.foot_nav > ul > li {
	float: left;
	width: 100px;
	text-align: center;
}
.foot_nav > ul > li:first-child {
	width: 50px;
	text-align: left;
}
.foot_nav > ul > li:first-child a {
	padding-left: 0;
}
.foot_nav > ul > li a {
	color: #fff;
	font-size: 16px;
	padding: 10px 15px;
	display: block;
}
.foot_nav .menu li a {
	padding: 4px 0;
	font-size: 14px;
	color: #ccc;
	transition: all 0.4s;
}
.foot_nav .menu li:hover a {
	margin-left: 5px;
	color: #fff;
}
.contact {
	float: left;
	color: #fff;
	padding: 0 45px;
	position: relative;
}
.contact p {
	font-size: 16px;
	padding: 10px 0;
	width: 200px;
}
.contact li {
	font-size: 14px;
	padding: 4px 0;
	padding-left: 30px;
	background: url(../assets/images/public/tei-sm.png) no-repeat left 4px;
	background-size: 20px;
}
.contact li a {
	color: #ccc;
	transition: all 0.4s;
}
.contact li:hover a {
	color: #fff;
	margin-left: 5px;
}
.chat {
	float: left;
	color: #fff;
	width: 120px;
	padding-left: 45px;
}
.chat p {
	padding: 10px 0;
	font-size: 16px;
}
.chat img {
	width: 100%;
	display: block;
}
footer .line {
	width: 1px;
	height: 150px;
	background: #ccc;
	position: absolute;
	right: 0;
	top: 15px;
}
.copyright {
	background: #000;
	text-align: center;
	padding: 10px 0;
	color: #c5c5c5;
	font-size: 14px;
	margin-top: 20px;
}
.copyright a {
	color: #c5c5c5;
	padding: 0 15px;
}
.copyright a:hover {
	color: #fff;
}
.copyright a:first-child {
	color: #c5c5c5;
	padding-left: 20px;
}
.copyright .bq {
	padding-top: 5px;
}
</style>
