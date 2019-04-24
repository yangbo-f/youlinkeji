<template>
	<div class="summary">
		<div class="tit">
                <h2>关于我们</h2>
                <div class="line"></div>
                <span>About Us</span>
            </div>
            <div class="con">
                <p>河北优林科技有限公司是一家高新科技企业，致力于全球森林资源的保护与开发再利用。公司围绕实木改良技术研发应用，形成集木材进出口贸易、木制品加工与销售、木结构设计、制造、安装于一体的产业闭环。</p>
                <p>公司以创新引领发展，科技提升品质，基于“以木材组分单元增强改良木材自身性能”的绿色功能改良理念，依据细胞壁修饰理论和细胞密实增强理论，通过研发构建的功能改良技术体系，从分子水平和微观构造方面着手，全面提升木材品质。所用技术经鉴定达到同类技术国际领先水平，获得省科技进步一等奖，并被中央电视台新闻联播和新闻直播间等媒体进行了报道，产生了广泛的社会影响。</p>
                <img src="../assets/images/about/1.jpg" alt="">
                <p>河北优林科技有限公司位于河北省宁晋县，临近省会，总投资15亿元，占地面积500亩，设改良分厂、烘干分厂、实木门窗分厂、木结构分厂、机加工分厂。</p>
                <p>优林科技秉承“科技寓心 · 品质可鉴”的企业追求，愿与同道共赢盛举！</p>
                <p>东方优木系列产品具有尺寸稳定性好、抗开裂变形、纹理美观、色彩愉悦、耐久性强、阻燃抑烟、防霉、防腐、防蛀、防水、自清洁等典型特征。基于其环境友好和卓越性能，东方优木系列实木产品可广泛应用于高端家具、地板、家居装饰、户外景观、车船内饰、游艇甲板、木结构建筑等领域。整个生产过程清洁无污染，产品环保无毒，是木材改良使用的革命性技术。</p>
                <p>优林科技实木改良，以常规树种为基材；通过对其改良满足了人们对稀缺木材日益增长的喜好性消耗。</p>
                <p>产品品质可与名贵木材媲美，为名贵树种提供了五十年以上的生产蓄积时间。</p>
                <p>使用常规林木，保护生态林木，是造福当代，功在千秋的绿色产业。</p>
                <div class="more" @click="show()" v-if="state"></div>
                <div class="hiden"  v-show="(!state)">
                    <img src="../assets/images/about/prize.jpg" alt="">
                </div>
            </div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			state: true
		};
	},
	methods: {
		show() {
			this.state= false
		}
	}
};
</script>


<style scoped>
.summary .tit {
	text-align: center;
	padding: 20px 0;
}
.summary .tit h2 {
	font-size: 20px;
	font-weight: bold;
}
.summary .tit .line {
	width: 80px;
	height: 1px;
	margin: 5px auto 2px;
	background: #c98e44;
}
.summary .tit span {
	font-size: 12px;
}
.summary .con p {
	line-height: 1.8;
	font-size: 16px;
	text-indent: 2em;
}
.summary .con > img {
	width: 100%;
	display: block;
	padding: 10px 0;
}
.summary .con .more {
	height: 40px;
	width: 100%;
	margin-top: 15px;
	background: url(../assets/images/about/more.png) no-repeat center #e1dede;
	background-size: 35px;
	transition: all 0.4s;
	border-radius: 5px;
	cursor: pointer;
}
.summary .con .more:hover {
	background: url(../assets/images/about/more2.png) no-repeat center #c21820;
	background-size: 35px;
}
.summary .con .hiden img {
	display: block;
	max-width: 100%;
	margin: 15px auto;
}
</style>
