<template>
    <div id="sideLeft">
        <h1>Cinema</h1>
        <div class="list">    
            <h4>Favoriler</h4>
            <ul v-for="fav in favs" :key="fav.id">
                <li>{{ fav.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideLeft",

    props : {
        favs: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    #sideLeft {
        background-color: #4b0505;
        max-width: 700px;
        width: 20%;
        color: #fff;
    }

</style>