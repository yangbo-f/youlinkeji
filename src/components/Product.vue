<template>
	<div>
		<!-- 面包屑导航 -->
        <div class="nav_top">
            <div class="wrap">
                <a href="">首页</a>
                <span>产品栏目页</span>
            </div>
        </div>

        <div class="main">
            <div class="wrap">
                <!--一块开始-->
                <div class="content1">
                    <div class="content1-left">
                        <img src="../assets/images/product/indoor.jpg">
                        <div class="bg">
                            <div class="bg-border">
                                <div class="bg-font"><a href="">查看详情</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="content1-right">
                        <div class="content1-right-icon">
                            <div class="content1-font1">装配式建筑</div>
                            <div class="content1-font2"></div>
                            <div class="content1-font3">Indoor sports series</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--一块结束-->


                <!--二块开始-->
                <div class="content1">
                    <div class="content1-left content2-left">
                        <img src="../assets/images/product/personality.jpg">
                        <div class="bg">
                            <div class="bg-border">
                                <div class="bg-font"><a href="">查看详情</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="content1-right">
                        <div class="content1-right-icon">
                            <div class="content1-font1">旅游度假产品</div>
                            <div class="content1-font2"></div>
                            <div class="content1-font3">Personalized customization series</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--二块结束-->

                <!--一块开始-->
                <div class="content1">
                    <div class="content1-left">
                        <img src="../assets/images/product/outdoor.jpg">
                        <div class="bg">
                            <div class="bg-border">
                                <div class="bg-font"><a href="">查看详情</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="content1-right">
                        <div class="content1-right-icon">
                            <div class="content1-font1">实木改良</div>
                            <div class="content1-font2"></div>
                            <div class="content1-font3">Outdoor sports series</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--一块结束-->


                <!--二块开始-->
                <div class="content1">
                    <div class="content1-left content2-left">
                        <img src="../assets/images/product/auxiliary.jpg">
                        <div class="bg">
                            <div class="bg-border">
                                <div class="bg-font"><a href="">查看详情</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="content1-right">
                        <div class="content1-right-icon">
                            <div class="content1-font1">改良木家具</div>
                            <div class="content1-font2"></div>
                            <div class="content1-font3">Auxiliary product line</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--二块结束-->

                <!--一块开始-->
                <div class="content1">
                    <div class="content1-left">
                        <img src="../assets/images/product/outdoor.jpg">
                        <div class="bg">
                            <div class="bg-border">
                                <div class="bg-font"><a href="">查看详情</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="content1-right">
                        <div class="content1-right-icon">
                            <div class="content1-font1">改良木门窗</div>
                            <div class="content1-font2"></div>
                            <div class="content1-font3">Outdoor sports series</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--一块结束-->

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

.content1 {
	margin-top: 30px;
}
.content1-left {
	width: 70%;
	height: 300px;
	overflow: hidden;
	float: left;
	position: relative;
}
.content1-left img {
	width: 100%;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
}
.content1:hover .content1-left img {
	width: 101%;
	transform: scale(1.1);
	-webkit-transform: scale(1.1);
}
.content1:hover .bg {
	opacity: 1;
}
.content1:hover .content1-right {
	background-color: #c21820;
}
.content1:hover .content1-icon1 span {
	height: 75px;
}
.content1:hover .content1-font1 {
	color: #ffffff;
}
.content1:hover .content1-font3 {
	color: #ffffff;
}
.content1:hover .content1-font2 {
	background-color: #ffffff;
}
.bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	opacity: 0;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
}
.bg-border {
	width: calc(100% - 70px);
	height: calc(100% - 70px);
	border: 1px solid #fff;
	margin: 35px;
	position: relative;
}
.bg-font a {
	width: 100px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	font-size: 16px;
	font-size: 1.6rem;
	background-color: #c98e44;
	position: absolute;
	top: 50%;
	left: 50%;
	color: #fff;
	margin-left: -50px;
	margin-top: -16px;
	border-radius: 4px;
}
.content1-right {
	width: 30%;
	height: 300px;
	float: left;
	background-color: #f8f8f8;
	position: relative;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
}

.content1-right-icon {
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	margin-top: -55px;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
}
.content1-font1 {
	font-size: 26px;
	color: #585858;
	text-align: center;
	margin: 20px 0;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
}
.content1-font2 {
	width: 40px;
	height: 2px;
	margin: 0 auto;
	background-color: #e2e2e2;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
}
.content1-font3 {
	color: #e2e2e2;
	font-size: 16px;
	padding-top: 20px;
	text-align: center;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
}

.content2-left {
	float: right;
}
</style>
