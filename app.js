//  <script src="https://unpkg.com/vue@2.6.11/dist/vue.js" ></script>
new Vue({
  el:'#app',
  data (){
    return {
      currency:{},
      base: null,
      currDate: ''
    }
  },
    mounted(){
      axios.get("https://api.exchangeratesapi.io/latest").then((res) =>{
        this.currency = res.data.rates
        this.base = res.data.base
        this.currDate =  res.data.date
      })
    }
});
