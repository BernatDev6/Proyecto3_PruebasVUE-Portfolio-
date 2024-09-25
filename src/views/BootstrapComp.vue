<template>
    <h1 class="my-5">Componentes de Bootstrap</h1>
    <div class="w-75 m-auto">
        <section class="my-3">
            <AccordionComp />
        </section>
        
        <section class="my-3">
            <CarouselComp />
        </section>
        
        <section class="my-3">
            <SideBarComp />
        </section>
    </div>
</template>

<script setup>
import AccordionComp from '@/components/BootstrapSections/AccordionComp.vue';
import CarouselComp from '@/components/BootstrapSections/CarouselComp.vue';
import SideBarComp from '@/components/BootstrapSections/SideBarComp.vue';
</script>

<style scoped lang='scss'>

</style>