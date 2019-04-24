<template>
	<div class="content">
		<div class="banner">
			<img src="../assets/images/news/banner.png" alt="">
		</div>
		<div class="nav_top">
			<div class="wrap">
				<router-link to="/">首页</router-link>
				<router-link :to="{name:'newslist',params:{id:content.columnid}}"><span>{{content.column}}</span></router-link>
			</div>
		</div>
		<div class="news wrap">
        <div class="tit">
            <h2>{{content.title}}</h2>
            <div class="time">
                <span>所属分类：{{content.column}}</span>
                <span>发布时间：{{content.time}}</span>
            </div>
        </div>
        <div class="con" v-html="content.content"></div>
        <!-- <div class="fenye1">
            <a href="/html/View_2849.html">上一篇</a>
            <a href="/html/View_2851.html">下一篇</a>
            <div class="clear"></div>
        </div> -->

    </div>
	</div>
</template>

<script>
import condata from '../assets/libs/news-con.js'
export default {
	data() {
		return {
			content:'',
			urlid:Number
		}
	},
	mounted() {
		var that = this;
		let id = this.$route.params.id;
		this.urlid = id;
		condata.forEach((item,index)=> {
			if(that.urlid-1 == index){
				that.content = item
			}
		});
	},
	watch: {
		$route(to, from) {
			let pageid = this.$route.params.id;
			this.urlid = pageid;
		}
	}
}
</script>

<style scoped>
.banner img{display: block;width: 100%;}

.news{padding-bottom: 40px;}
.news .tit{text-align: center;padding: 30px 0 20px;}
.news .tit h2{font-size: 20px;font-weight: bold;}
.news .tit .time{width: 350px;margin: 0 auto;padding: 15px 0 10px;}
.news .tit span{font-size: 14px;margin: 0 5px;}

.news .con p{text-indent: 2em;font-size: 14px;line-height: 1.8;}
.news .con figure{text-align: center;}
.news .con figcaption{font-size: 16px;font-weight: bold;}
.news .con img{margin: 10px auto 5px;display: block;max-width: 100%;}
.bdshare_popup_box{display: none!important;}

/* .fenye1{width: 200px;margin: 0 auto;text-align: center;padding-top: 25px;}
.fenye1 a{width: 80px;margin: 0 8px;border-radius: 4px;border: 1px solid #c21820;display: block;float: left;padding: 2px 0;transition: all .4s;}
.fenye1 a:hover{background: #c21820;color: #fff;} */

@media(max-width:767px){
    .bdshare_popup_box{display: none!important;}
    .news .tit{padding: 15px 0 10px;}
    .news .tit h2{font-size: 16px;line-height: 1.6;}
    .news .tit .time{width: 100%;}
    .news .tit span{font-size: 12px;}
    .news .con figure{margin: 0 auto;width: 100%;}
    .news .con figcaption{font-size: 14px;}
    .fenye1{padding: 15px 0 20px;}
}
</style>

