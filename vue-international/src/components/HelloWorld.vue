<template>
  <div class="hello">
    <button @click="switchChinese()">切换中文</button><br>
    <button  @click="switchEnlish()">切换英文</button>
    <p>{{$t('message.hello')}}</p> 
    <p>{{$t('message.msg')}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    switchChinese(){
      this.$i18n.locale = 'cn'; 
    },
    switchEnlish(){
      this.$i18n.locale = 'en'; 
    }

  }
}
</script>