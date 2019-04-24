<template>
  <div id="app">
<HeadNav></HeadNav>
    <router-view/>
	<Footer></Footer>
  </div>
</template>

<script>
import HeadNav from './components/HeadNav'
import Footer from './components/Footer'
export default {
	name: "App",
	components:{
		HeadNav,
		Footer
	}
};
</script>

<style>
@import "../src/assets/css/reset.css";
#app {
  overflow-x: hidden;
}
</style>
