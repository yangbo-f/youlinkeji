import Vue from "vue";
import Router from "vue-router";
import News from "@/components/News";
import Home from "@/components/Home";
import HeadNav from "@/components/HeadNav";
import Frame from "@/components/Frame";
import Summary from "@/components/Summary";
import Team from "@/components/Team";
import History from "@/components/History";
import Culture from "@/components/Culture";
import Product from "@/components/Product";
import ProductList from "@/components/ProductList";
import Project from "@/components/Project";
import Join from "@/components/Join";
import NewsContent from "@/components/NewsContent";

Vue.use(Router);
Vue.component(HeadNav);
export default new Router({
	routes: [
		{ path: "*", redirect: "/" },
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/about",
			name: "about",
			redirect: "/summary",
			component: Frame,
			children: [
				{
					path: "/summary",
					name: "summary",
					component: Summary
				},
				{
					path: "/team",
					name: "team",
					component: Team
				}
			]
		},
		{
			path: "/history",
			name: "history",
			component: History
		},
		{
			path: "/news",
			name: "news",
			redirect: "/newslist/1",
			component: Frame,
			children: [
				{
					path: "/newslist/:id",
					name: "newslist",
					component: News
				}
			]
		},
		{
			path: "/cultures",
			name: "cultures",
			component: Frame,
			redirect: "/culture",
			children: [
				{
					path: "/culture",
					name: "culture",
					component: Culture
				}
			]
		},
		{
			path: "/product",
			name: "product",
			component: Product
		},
		{
			path: "/list",
			name: "list",
			component: Frame,
			redirect: "list/1",
			children: [
				{
					path: "/productList/:id",
					name: "productList",
					component: ProductList
				}
			]
		},
		{
			path: "/project",
			name: "project",
			component: Project
		},
		{
			path: "/joinus",
			name: "joinus",
			component: Frame,
			redirect: "/join",
			children: [
				{
					path: "/join",
					name: "join",
					component: Join
				}
			]
		},
		{
			path: "/newscontent/:id",
			name: "newscontent",
			component: NewsContent
		}
	]
});
