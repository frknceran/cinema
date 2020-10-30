<template>
  <div id="app">
    <SideLeft 
      :favs="likes"
    />
    <search 
      @select="handleSelected" 
      @like="handleLike"
    />
    <SideRight 
      :selected="selected"
    />
  </div>
</template>
<script>
import Search from "./components/Search.vue"
import SideRight from "./components/SideRight.vue"
import SideLeft from "./components/SideLeft.vue"

export default {
  name: "App",

  components: { 
    Search, 
    SideRight,
    SideLeft 
  },

  data() {
    return {
      selected: null,
      likes: []
    }
  },

  methods: {
    handleSelected(item) {
      this.selected = item
    },
    
    handleLike(item) {
      this.likes.push(item)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display:flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
}
</style>
