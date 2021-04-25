<template>
  <div class="bg-blue-900">
    <input type="text" v-model="query" @keypress.enter="getResult" />
    <button @click="getResult">Search</button>
    <item 
        v-for="result in results" 
        :key="result.id" 
        :item="result"
        @select="handleSelected"
        @like="handleLike"
    />
  </div>
</template>

<script>
import axios from "axios"
import Item from "./Item.vue"

export default {
    name: "Search",

    components: {
        Item
    },

    data() { 
        return {
            query: "",
            results: [],
            selected: null
        }
    },

    methods: {
        getResult(){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=90f3de636b43286d0f6270d203e2b13b&query=' + this.query)
            .then(response => {
                console.log(response)
                return this.results = response.data.results
            })
        },

        handleSelected(item) {
            this.$emit("select", item)
        },
        
        handleLike(item) {
            this.$emit("like", item)
        }
    }
}
</script>

<style>
    .search {
        background-color: black;
        text-align: center;
        max-width: 700px;
    }

    .search input {
        padding: 10px 20px;
        border: 1px solid #CCC;
        border-radius: 5px;
        width: 400px;
    }

    .search button {
        padding: 5px 15px;
        border: 1px solid #CCC;
        background-color: #4183c4;
        color: #FFF;
        font-size: 16px;
        border-radius: 5px;
    }
    .search .view {
      text-align: center;
      display: flex;
      flex-direction: row;
      margin:5px;
    }
    p {
        color:beige;
    }
</style>
