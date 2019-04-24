<template>
	<div class="about">
		<div class="banner"><img src="../assets/images/about/banner.png" alt=""></div>

    <!-- 面包屑导航 -->
    <div class="nav_top">
        <div class="wrap">
            <a href="">首页</a>
            <a href="" class="level">关于我们</a>
            <span>公司介绍</span>
        </div>
    </div>
    <div class="main wrap">
        <!-- 左侧导航 -->
        <div class="left_nav lt">
            <SideLeft></SideLeft>
        </div>

        <!-- 右侧内容 -->
        <div class="cont rt">
			<router-view></router-view>
        </div>
        <div class="clear"></div>
    </div>
	</div>
</template>
<script>
import SideLeft from "./SideLeft";
export default {
	data() {
		return {};
	},
	components: {
		SideLeft
	}
};
</script>

<style scoped>
.banner img {
	width: 100%;
	display: block;
}

/* 企业文化 */
.main .culture img {
	width: 100%;
}

@media (min-width: 1024px) {
	.main .cont {
		min-height: 1114px;
	}
}
</style>
