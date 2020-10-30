<template>
    <div id="sideRight" v-if="selected">
        <img :src="'http://image.tmdb.org/t/p/w500/' + selected.poster_path" width="100px">
        <h4>{{ selected.title }}</h4>
        <h4>{{ selected.release_date }}</h4>
    </div>
</template>

<script>

export default { 
    name: "SideRight",

    props: {
        selected: {
            type: Object,
            default: null
        }
    }
}
</script>

<style scoped>
    #sideRight{
        background-color: #df1111;
        max-width: 700px;
        text-align: center;
        min-height: 100vh;
    }
    p {
        color:beige;
    }

</style>