
import {reactive} from '@vue/composition-api'
export const useHelper=()=>{

        const state = reactive({ 
          isSearching: false,
          searchText: '',
          isShowMoreResults: false,
          resultItems: [] 
        })
    
        const search =  (searchText) => {
          console.log("Searching... ", searchText)
          state.searchText=searchText
        }
    
        const clear =  () => {
          console.log("Clear search",state.searchText)
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