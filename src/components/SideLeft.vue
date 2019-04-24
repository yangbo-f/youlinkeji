<template>
	<div class="side">
		<div class="search">
                <input type="text" value="" placeholder="搜索">
                <button></button>
            </div>
            <a href=""><img src="../assets/images/public/left_1.jpg" alt=""></a>
            <a href=""><img src="../assets/images/public/left_2.jpg" alt=""></a>
            <a href=""><img src="../assets/images/public/left_3.jpg" alt=""></a>
            <div class="clear"></div>
            <div class="box">
                <span>板块1</span>
            </div>
            <div class="box">
                <span>板块2</span>
            </div>
            <div class="box">
                <span>板块3</span>
            </div>
	</div>
</template>
<script>
export default {

}
</script>

<style scoped>
.side .search {
  position: relative;
}
.side .search input {
  padding: 5px 35px 5px 8px;
  border: 1px solid #eaeaea;
  width: 100%;
  box-sizing: border-box;
}
.side .search button {
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: url(../assets/images/public/search.png) no-repeat center;
  background-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 5px;
  z-index: 5;
}
.side img {
  display: block;
  padding-top: 10px;
  width: 100%;
}
.side .box {
  width: 33.33%;
  float: left;
  text-align: center;
  padding: 10px 15px;
  box-sizing: border-box;
  display: none;
}
.side .box span {
  display: block;
  line-height: 50px;
  background: #ccc;
}
</style>
