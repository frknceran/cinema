<template>
    <div id="item">
        <div class="view" @click="handleClick">
            <img :src="'http://image.tmdb.org/t/p/w500/' + item.poster_path" width="100px">
            <div class="text">
                <h4>{{ item.title }}</h4>
                <h4>{{ item.release_date }}</h4>
                <button @click="handleLike">Like</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    methods: {
        handleClick() {
            this.$emit("select", this.item)
        },

        handleLike() { 
            this.$emit("like", this.item)
        },

    }   
}
</script>

<style scoped>
    h4 {
        color:beige;
    }
</style>