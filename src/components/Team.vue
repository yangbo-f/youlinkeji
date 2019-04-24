<template>
	<div class="team">
				<div class="box">团队成员</div>
				<div class="team_box">
					<div class="left">
						<!-- <img src="" alt=""> -->
						<!-- <p>中国工程院院士 李坚</p> -->
					</div>
					<div class="right">
						<h2>李坚</h2>
						<span>中国工程院院士</span>
						<p>国际知名木材科学家，博士、博导、教授、著名归国学者，原东北林业大学校长。</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="team_box">
					<div class="left">
						<!-- <img src="" alt=""> -->
						<!-- <p>东北林业大学 谢延军</p> -->
					</div>
					<div class="right">
						<h2>谢延军</h2>
						<span>东北林业大学</span>
						<p>教授/博士生导师，生物质复合材料学科带头。主要从事木材绿色功能改良基础及应用研究。</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="team_box">
					<div class="left">
						<!-- <img src="" alt=""> -->
						<!-- <p>北京别处空间事务所 刘小川</p> -->
					</div>
					<div class="right">
						<h2>刘小川</h2>
						<span>北京别处空间事务所</span>
						<p>与我司达成战略联盟、共同完成大型木结构结构的设计、审图工作。</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="team_box">
					<div class="left">
						<!-- <img src="" alt=""> -->
						<!-- <p>中国城市建筑研究院第六所所长 李硕</p> -->
					</div>
					<div class="right">
						<h2>李硕</h2>
						<span>中国城市建筑研究院第六所所长</span>
						<p>与我司达成战略联盟、共同完成大型木结构结构的设计、审图工作。</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="team_box">
					<div class="left">
						<!-- <img src="" alt=""> -->
						<!-- <p>加拿大木材协会 毛林海</p> -->
					</div>
					<div class="right">
						<h2>毛林海</h2>
						<span>加拿大木材协会</span>
						<p>市场顾问，精通现代木结构建筑在国内外的发展情况及现代木结构发展优势。</p>
					</div>
					<div class="clear"></div>
				</div>
				<!-- <div class="team_box">
					<div class="left">
						<img src="" alt="">
						<p>南京林业大学 路步云</p>
					</div>
					<div class="right">
						<h2></h2>
						<span></span>
						<p>木结构建筑系副教授，是我公司BIM应用技术及现代装配式木结构建筑系顾问。</p>
					</div>
				</div> -->
			</div>
</template>
<script>
export default {
	data() {
		return {
			now2: ""
		};
	},
	computed: {
		now: function() {
			return Date.now();
		}
	},
	methods: {
		now3() {
			this.now2 = Date.now();
		}
	}
};
</script>

<style scoped>
.banner img{width: 100%;display: block;}

.team{width: 800px;margin: 0 auto;}
.team .box{width: 50%;margin: 20px auto;height: 40px;line-height: 40px;font-size: 18px;text-align: center;background: #e2e2e2;}
.team .team_box{margin-top: 10px;background: #f1eff1;}
.team .team_box .left{width: 150px;float: left;height: 200px;position: relative;background: #dadada;}
.team .team_box .left::after{position: absolute;top: 50%;left: 50%;content: "成员图片";transform: translate(-50%,-50%);}
.team .team_box .right{float: left;width: calc(100% - 150px);padding: 10px;box-sizing: border-box;}
.team .team_box .right h2{font-size: 16px;}
.team .team_box .right span{font-size: 14px;display: block;}
.team .team_box .right p{font-size: 12px;display: block;}
</style>
