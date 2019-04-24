<template>
	<div>
		<div class="recruit">
          <div class="txt">
            <!-- <div class="title">
              <p>招贤纳士<img src="images/index/title-icon.jpg" alt=""></p>
              <p>RECTUIT</p>
            </div> -->
            <p class="describe">这里有你想要的一切！只要敢想，没有什么做不了！无限的发展空间，我们的成长邀你一起参与！</p>
            <div class="mail-tell clearfix">
              <div class="mail">
                <p>简历投递方式：xxx@163.com</p>
                <p>邮箱地址：xxx@163.com</p>
              </div>
              <div class="tell">
                <p>联系人：人力资源部</p>
                <p>联系电话：0311-88888888</p>
              </div>
            </div>
          </div>

          <!-- 职位 -->
          <div class="post">
			  <div v-for="(item,index) in post" :key="index">
				<div class="post-list" @click="postShow(index)">
					<h3 class="active"><p class="active">{{item.title}}<span></span></p></h3>
				</div>
				<div class="post-hide" v-html="item.content" v-show="num==index"></div>
			  </div>
          </div>

          <!-- 地图 -->
          <div id="wrap" class="my-map">
            <!-- <div id="mapContainer"></div> -->
			<div class="amap-wrapper">
			<el-amap  ref="map" class="amap-box" :vid="'amap-vue'" :center="center" :plugin="plugin" :amap-manager="amapManager" :zoom="zoom" :events="events"></el-amap>
			<div class="toolbar">
        <button @click="add()">add marker</button>
      </div>
          </div>
    </div>

        </div>
	</div>
</template>

<script>
import VueAMap from "vue-amap";
import { AMapManager } from "vue-amap";
let amapManager = new VueAMap.AMapManager();

export default {
	data() {
		return {
			post: [
				{
					title: "区域销售",
					content:
						'<p class="titles">岗位职责</p><p>1、承接部门销售任务并完成，了解客户需求，寻找销售机会，进行产品销售，完成各项销售指标；</p><p>2、负责所辖区域渠道开拓、建立、支持及管理工作；</p><p>3、开发新客户，拓展与老客户的业务，建立和维护客户档案；</p><p>4、收集和分析市场数据，并定期反馈最新信息；</p><p>5、协助相应区域销售内勤建立完善公司经销商、代理商数据信息库；</p><p>6、建立完善公司经销商、代理商数据信息库；</p><p class="titles">任职要求:</p><p>1、工作经验：有销售经验者优先；</p><p>2、良好的团队合作精神；</p><p>3、 适应全国范围出差（15-20天/月）。</p><p>4、有建材、地板、快速消费品行业经验者优先</p><p>5、年薪8-10万，上不封顶，待遇丰厚，五险，各种补助及假期</p>'
				},
				{
					title: "销售经理",
					content:
						'<p class="titles">岗位职责</p><p>1、承接部门销售任务并完成，了解客户需求，寻找销售机会，进行产品销售，完成各项销售指标；</p><p>2、负责所辖区域渠道开拓、建立、支持及管理工作；</p><p>3、开发新客户，拓展与老客户的业务，建立和维护客户档案；</p><p>4、收集和分析市场数据，并定期反馈最新信息；</p><p>5、协助相应区域销售内勤建立完善公司经销商、代理商数据信息库；</p><p>6、建立完善公司经销商、代理商数据信息库；</p><p class="titles">任职要求:</p><p>1、工作经验：有销售经验者优先；</p><p>2、良好的团队合作精神；</p><p>3、 适应全国范围出差（15-20天/月）。</p><p>4、有建材、地板、快速消费品行业经验者优先</p><p>5、年薪8-10万，上不封顶，待遇丰厚，五险，各种补助及假期</p>'
				},
				{
					title: "生产管理人员",
					content:
						'<p class="titles">岗位职责</p><p>1、承接部门销售任务并完成，了解客户需求，寻找销售机会，进行产品销售，完成各项销售指标；</p><p>2、负责所辖区域渠道开拓、建立、支持及管理工作；</p><p>3、开发新客户，拓展与老客户的业务，建立和维护客户档案；</p><p>4、收集和分析市场数据，并定期反馈最新信息；</p><p>5、协助相应区域销售内勤建立完善公司经销商、代理商数据信息库；</p><p>6、建立完善公司经销商、代理商数据信息库；</p><p class="titles">任职要求:</p><p>1、工作经验：有销售经验者优先；</p><p>2、良好的团队合作精神；</p><p>3、 适应全国范围出差（15-20天/月）。</p><p>4、有建材、地板、快速消费品行业经验者优先</p><p>5、年薪8-10万，上不封顶，待遇丰厚，五险，各种补助及假期</p>'
				}
			],
			num: 0,
			zoom: 16,
			center: [114.442439, 38.075801],
			amapManager,
			events: {
				init(o) {
					let marker = new AMap.Marker({
						position: [121.59996, 31.197646]
					});

					marker.setMap(o);
				},
				moveend: () => {},
				zoomchange: () => {},
				click: e => {
					console.log(e)
				}
			},
			// loaded: false,
			plugin: [
				"ToolBar",
				{
					pName: "MapType",
					defaultType: 0,
					events: {
						init(o) {
							console.log(o);
						}
					}
				},
				{
					pName: "OverView",
					events: {
						init(instance) {
							console.log("-----", instance);
						}
					}
				}
			]
		};
	},
	methods: {
		postShow(index) {
			this.num = index;
		},
		add() {
			let o = amapManager.getMap();
			let marker = new AMap.Marker({
				position: [121.59996, 31.177646]
			});
			marker.setMap(o);
			console.log(o);
		},
		getMap() {
			// amap vue component
			console.log(amapManager._componentMap);
			// gaode map instance
			console.log(amapManager._map);
		}
	}
};
</script>

<style scoped>
.amap-wrapper {
	width: 100%;
	height: 100%;
}

.recruit .txt .bt {
	font-size: 14px;
	text-align: center;
	color: #c5c5c5;
}
.recruit .txt p.describe {
	font-size: 16px;
	text-align: center;
	padding: 30px 0;
}
.recruit .txt .mail-tell {
	width: 600px;
	margin: 0 auto;
}
.recruit .txt .mail-tell .mail {
	width: 300px;
	float: left;
}
.recruit .txt .mail-tell .mail p {
	font-size: 16px;
	font-size: 1.6rem;
	text-align: left;
	padding: 3px 0;
}
.recruit .txt .mail-tell .tell {
	width: 300px;
	float: left;
}
.recruit .txt .mail-tell .tell p {
	font-size: 16px;
	font-size: 1.6rem;
	text-align: left;
	padding: 3px 0;
}
.recruit .post {
	margin-top: 40px;
}
.recruit .post h3 {
	width: 100%;
	margin-bottom: 5px;
}
.recruit .post h3 p {
	padding: 10px 20px;
	font-size: 16px;
	background: #ececec;
	transition: all 0.6s;
	cursor: pointer;
}
.recruit .post h3 p:hover {
	color: #fff;
	background: #999;
}
.recruit .post h3 p span {
	background: url(../assets/images/recruit/j.png) no-repeat;
	width: 20px;
	height: 20px;
	float: right;
	background-size: 100%;
	transition: all 0.4s;
}
.recruit .post h3 p:hover span {
	background: url(../assets/images/recruit/jt.png) no-repeat;
	background-size: 100%;
}
/* .recruit .post h3:hover .post-hide{display: block;}*/
.post .post-hide {
	box-sizing: border-box;
	padding: 10px 20px 20px;
	/* display: none; */
}
.post-hide p {
	font-size: 14px;
	font-size: 1.4rem;
	line-height: 1.8;
}
.post-hide p.titles {
	font-weight: bold;
	line-height: 2;
}

.my-map {
	margin: 20px auto 0;
	width: 750px;
	height: 420px;
	max-width: 100%;
}
.my-map .icon {
	background: url(http://lbs.amap.com/console/public/show/marker.png)
		no-repeat;
}
.my-map .icon-cir {
	height: 31px;
	width: 28px;
}
.my-map .icon-cir-red {
	background-position: -11px -5px;
}
.amap-container {
	height: 100%;
}
</style>
