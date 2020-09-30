<template>
  <div class="hello">
    <Data></Data>
    <button @click="dummy">Cllick</button>
  </div>
</template>

<script>
import Data from './Data'
import { useHelper } from '../compositionApi/helper'
export default {
  name: 'HelloWorld',
  // eslint-disable-line vue/no-unused-components
  components:{Data},
  setup(){
    let { state,search , clear} = useHelper()
    return{
      state,
      search,
      clear
    }
  },
  mounted(){
    this.search("hello")
    console.log(this.state,this.clear())
  },
  methods: {
    dummy(){
     console.log("gg",this.clear())
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
