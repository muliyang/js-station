<template>
	
	<div>
		<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
		  <el-radio-button :label="false">展开</el-radio-button>
		  <el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group>
		<el-menu
			:router="true"
			:collapse="isCollapse"
	        default-active="1"
	        class="el-menu-vertical-demo"
	        @select="menuSelected"
	        background-color="#F0F6F6"
	        text-color="#3C3F41"
	        active-text-color="black">

        	<nav-menus :menu="originlist"></nav-menus>
      	</el-menu>
		
	</div>
</template>



<script type="text/javascript">
	import navMenus from "./el-menu";
	export default {
		components:{
			navMenus
		},
		data (){
			return {
	        	isCollapse: true,
	        	originlist:[{
	        		functionUrl:"1",
	        		name:"test1",
	        		children:[]
	        	},{
	        		functionUrl:"2",
	        		name:"test2",
	        		children:[{
		        		functionUrl:"21",
		        		name:"test21",
		        		children:[]
		        	},{
		        		functionUrl:'22',
		        		name:"test22",
		        		children:[{
			        		functionUrl:"221",
			        		name:"test221",
			        		children:[]
			        	},{
			        		functionUrl:'222',
			        		name:"test222",
			        		children:[{
			        		functionUrl:"221",
			        		name:"test221",
			        		children:[]
			        	},{
			        		functionUrl:'222',
			        		name:"test222",
			        		children:[]
			        	}]
			        	}]
		        	}]
	        	},{
	        		functionUrl:'3',
	        		name:"test3",
	        		children:[]
	        	}]
	        }
		},
		 methods: {
	      menuSelected(val){
	      		console.log(val)
	      }
	    }
	}


</script>


<style type="text/css">
	


</style>