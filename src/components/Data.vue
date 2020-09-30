<template>
  <div>
    Hello world
    
  </div>
</template>

<script>

import { reactive } from '@vue/composition-api'

export default {
   setup(){
    const state = reactive({ 
        isSearching: false,
        searchText: '',
        isShowMoreResults: false,
        resultItems: [] 
      })
  
      const search =  (searchText) => {
        console.log("Searching... ", searchText)
      }
  
      const clear =  () => {
        console.log("Clear search")
      }
  
      const nextResults =  () => {
        console.log("Next Results")
      }
  
      return {
        state,
        search,
        clear,
        nextResults
      }
   }
  
}
</script>
