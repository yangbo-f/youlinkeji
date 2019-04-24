<template>
  <div class="hello">
	<div class="box">
                <div class="item" v-for="(item,index) in list" :key="index">
                    <div class="pic lt">
						<router-link :to="{name:'newscontent',params:{id:item.id}}"><img :src="item.poster" alt=""></router-link>
                    </div>
                    <div class="txt rt">
                        <h2><router-link :to="{name:'newscontent',params:{id:item.id}}">{{item.title}}</router-link></h2>
                        <p><router-link :to="{name:'newscontent',params:{id:item.id}}">{{item.summary}}</router-link></p>
                        <span>{{item.time}}</span>
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="fenye">
                    <a class="prev" href="">首页</a>
                    <!-- <a class="prev" href="">上一页</a> -->
                    <a class="curr" href="">1</a>
                    <!-- <a href="">2</a>
                    <a href="">3</a> -->
                    <!-- <a class="next" href="">下一页</a> -->
                    <a class="next" href="">尾页</a>
                    <div class="clear"></div>
                </div>
            </div>
  </div>
</template>

<script>
import Home from "./Home";
import news from '../assets/libs/news-con.js'
export default {
	name: "HelloWorld",
	data() {
		return {
			list:[],
			pageid: Number
		};
	},
	components: {
		Home
	},
	mounted() {
		var that = this;
		let id = this.$route.params.id;
		this.pageid = id;
		var list = []
		this.list = ''
		news.forEach((item,index)=> {
			if(that.pageid == item.columnid){
				list.push(item)
			}
		});
		this.list = list
	},
	watch: {
		$route(to, from) {
			var that = this;
			let id = this.$route.params.id;
			this.pageid = id;
			var list = []
			news.forEach((item,index)=> {
				if(that.pageid == item.columnid){
					list.push(item)
				}
			});
			this.list = list
		},
		list: {
	　　　　handler(newValue, oldValue) {
	　　　　　　for (let i = 0; i < newValue.length; i++) {
	　　　　　　　　if (oldValue[i] != newValue[i]) {
	　　　　　　　　　　console.log(newValue,'------')
	　　　　　　　　}
	　　　　　　}
	　　　　},
	　　　　deep: true
	　　}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner img {
	width: 100%;
	display: block;
}

.box a {
	transition: all 0.4s;
}
.box .item {
	margin-bottom: 20px;
}
.box .item .pic {
	width: 150px;
}
.box .item .pic img {
	width: 100%;
	display: block;
}
.box .item .txt {
	width: calc(100% - 150px);
	padding-left: 15px;
	box-sizing: border-box;
}
.box .item .txt h2 {
	font-size: 16px;
	font-weight: bold;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	overflow: hidden;
}
.box .item .txt p {
	font-size: 14px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	overflow: hidden;
	line-height: 1.6;
	margin: 10px 0;
}
.box .item .txt p a {
	color: #555;
}
.box .item .txt h2:hover a {
	color: #c98e44;
}
.box .item .txt p:hover a {
	color: #c98e44;
}
.box .item .txt span {
	color: #888888;
}
</style>
