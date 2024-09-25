<template>
    <h2 class="text-start" >SideBar</h2>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Open Menu
    </button>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h3 class="offcanvas-title title" id="offcanvasExampleLabel">Bernat Font</h3>
            <button type="button" class="btn-close p-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="list-unstyled list">
                <li><router-link class="nav-link" :to="{ name: 'home' }" >Home</router-link></li>
                <li><router-link class="nav-link" :to="{ name: 'about' }" >About</router-link></li>
                <li><router-link class="nav-link" :to="{ name: 'contact' }" >Contact</router-link></li>
                <li><router-link class="nav-link" :to="{ name: 'bootstrapComp' }" >Bootstrap Comp</router-link></li>
            </ul>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped lang='scss'>
    .list{
        display: flex;
        flex-direction: column;
    }

    li{
        a{
            padding: 12px;
            color: $primary-color;
        }
        :hover{
            background-color: #ccc;
        }
    }
</style>