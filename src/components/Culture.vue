<template>
<div>
			<div class="tit">
                <h2>企业文化</h2>
                <div class="line"></div>
                <span>Company culture</span>
            </div>
            <div class="culture">
                <img src="../assets/images/about/business1.jpg" alt="">
                <img src="../assets/images/about/business2.jpg" alt="">
                <img src="../assets/images/about/business3.jpg" alt="">
                <img src="../assets/images/about/business4.jpg" alt="">
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

.main .cont .tit {
	text-align: center;
	padding: 20px 0;
}
.main .cont .tit h2 {
	font-size: 20px;
	font-weight: bold;
}
.main .cont .tit .line {
	width: 80px;
	height: 1px;
	margin: 5px auto 2px;
	background: #c98e44;
}
.main .cont .tit span {
	font-size: 12px;
}
.main .cont .con p {
	line-height: 1.8;
	font-size: 16px;
	text-indent: 2em;
}
.main .cont .con > img {
	width: 100%;
	display: block;
	padding: 10px 0;
}
.main .cont .con .more {
	height: 40px;
	width: 100%;
	margin-top: 15px;
	background: url(../assets/images/about/more.png) no-repeat center #e1dede;
	background-size: 35px;
	transition: all 0.4s;
	border-radius: 5px;
	cursor: pointer;
}
.main .cont .con .more:hover {
	background: url(../assets/images/about/more2.png) no-repeat center #c21820;
	background-size: 35px;
}
.main .cont .con .hiden img {
	display: block;
	max-width: 100%;
	margin: 15px auto;
}
.culture img {
	width: 100%;
}
</style>
