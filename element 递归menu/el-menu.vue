<template>
	<div class="menuContainer">
		<template
		    v-for="(list,index1) in menu" 
			>
			<el-menu-item
			  v-if="jungleEmpty(list.children)"
			 :index="list.functionUrl || ''">
				<span>{{list.name}}</span>
				<span slot="title">{{list.name}}</span>
			</el-menu-item>

			<el-submenu
			 v-else
			 :index="list.functionUrl || ''">
 				<!-- <span slot="title"> {{child.name}}</span> -->
				<template slot="title">
		          <span> {{list.name}}</span>
		        </template>
	        	<NavMenu :menu="list.children || []"></NavMenu>
        	</el-submenu>
        	

			
		</template>
		
	</div>
</template>



<script type="text/javascript">
	export default{
		name: 'NavMenu',
   		props:{
			menu:{
				required:true,
				type:Array
			}
		},
		data (){
			return {
	        		
	        	}
		},
		 methods: {
	      	jungleEmpty(val){
	      		if(val===null || val==="" || val===undefined){
	      			return true;
	      		}
	      		if(val instanceof Array && val.length<1){
	      			return true;
	      		}
	      		return false;
	      	}
	    }
	}

</script>

<style type="text/css" lang="less" scoped=true>
	


</style>