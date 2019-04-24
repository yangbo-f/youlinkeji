<template>
	<div>
		<div class="banner"><img src="img/product/banner2.png" alt=""></div>
			{{urlid}}


        <!-- 右侧内容 -->
        <div class="cont rt">
            <div class="product">
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product1.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product2.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product3.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product4.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product5.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product6.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product4.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product5.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="">
                        <div class="pic">
                            <img src="../assets/images/product/product6.jpg" alt="">
                            <div class="bg">
                                <div class="line line1"></div>
                                <div class="line line2"></div>
                                <div class="line line3"></div>
                                <div class="line line4"></div>
                            </div>
                        </div>
                        <div class="txt">
                            <p>粗刨材产品一</p>
                        </div>
                    </a>
                </div>
                <div class="clear"></div>
                <div id="fenye">
                    <a class="prev" href="">首页</a>
                    <a class="prev" href="">上一页</a>
                    <a class="curr" href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a class="next" href="">下一页</a>
                    <a class="next" href="">尾页</a>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			urlid: ""
		};
	},
	mounted() {
		let id = this.$route.params.id;
		this.urlid = id;
		console.log(this.urlid);
	},
	watch: {
		$route(to, from) {
			let pageid = this.$route.params.id;
			this.urlid = pageid;
			console.log(this.urlid)
		}
	}
};
</script>

<style scoped>
.banner img {
	width: 100%;
	display: block;
}

.main .product .box {
	float: left;
	width: 32%;
	margin-right: 2%;
}
.main .product .box:nth-child(3n) {
	margin-right: 0;
}

.main .product .box img {
	width: 100%;
	display: block;
}
.main .product .box .pic {
	position: relative;
	overflow: hidden;
}
.main .product .box .line {
	background: #fff;
	position: absolute;
}
.main .product .box .line1 {
	width: 1px;
	height: 0;
	left: 5%;
	bottom: 5%;
}
.main .product .box .line2 {
	width: 0;
	height: 1px;
	left: 5%;
	top: 5%;
}
.main .product .box .line3 {
	width: 1px;
	height: 0;
	top: 5%;
	right: 5%;
}
.main .product .box .line4 {
	width: 0;
	height: 1px;
	right: 5%;
	bottom: 5%;
}
.main .product .box .pic:hover .line1 {
	animation: line 0.8s forwards;
	-webkit-animation: line 0.8s forwards;
	-o-animation: line 0.8s forwards;
	-moz-animation: ine 0.8s forwards;
}
.main .product .box .pic:hover .line2 {
	animation: line2 0.8s forwards;
	-webkit-animation: line2 0.8s forwards;
	-o-animation: line2 0.8s forwards;
	-moz-animation: ine 0.8s forwards;
}
.main .product .box .pic:hover .line3 {
	animation: line3 0.8s forwards;
	-webkit-animation: line3 0.8s forwards;
	-o-animation: line3 0.8s forwards;
	-moz-animation: ine 0.8s forwards;
}
.main .product .box .pic:hover .line4 {
	animation: line4 0.8s forwards;
	-webkit-animation: line4 0.8s forwards;
	-o-animation: line4 0.8s forwards;
	-moz-animation: ine 0.8s forwards;
}
.main .product .box .txt {
	padding: 15px 10px;
	background: #eaeaea;
	margin-bottom: 20px;
}
.main .product .box p {
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	overflow: hidden;
	text-align: center;
}
@-webkit-keyframes line {
	0% {
		height: 0;
	}
	100% {
		height: 90%;
	}
}
@-moz-keyframes line {
	0% {
		height: 0;
	}
	100% {
		height: 90%;
	}
}
@-o-keyframes line {
	0% {
		height: 0;
	}
	100% {
		height: 90%;
	}
}
@keyframes line {
	0% {
		height: 0;
	}
	100% {
		height: 90%;
	}
}
@-webkit-keyframes line2 {
	0% {
		width: 0;
	}
	100% {
		width: 90%;
	}
}
@-moz-keyframes line2 {
	0% {
		width: 0;
	}
	100% {
		width: 90%;
	}
}
@-o-keyframes line2 {
	0% {
		width: 0;
	}
	100% {
		width: 90%;
	}
}
@keyframes line2 {
	0% {
		width: 0;
	}
	100% {
		width: 90%;
	}
}
@-webkit-keyframes line3 {
	0% {
		height: 0;
	}
	100% {
		height: 90%;
	}
}
@-moz-keyframes line3 {
	0% {
		height: 0;
	}
	100% {
		height: 90%;
	}
}
@-o-keyframes line3 {
	0% {
		height: 0;
	}
	100% {
		height: 90%;
	}
}
@keyframes line3 {
	0% {
		height: 0;
	}
	100% {
		height: 90%;
	}
}
@-webkit-keyframes line4 {
	0% {
		width: 0;
	}
	100% {
		width: 90%;
	}
}
@-moz-keyframes line4 {
	0% {
		width: 0;
	}
	100% {
		width: 90%;
	}
}
@-o-keyframes line4 {
	0% {
		width: 0;
	}
	100% {
		width: 90%;
	}
}
@keyframes line4 {
	0% {
		width: 0;
	}
	100% {
		width: 90%;
	}
}
</style>
