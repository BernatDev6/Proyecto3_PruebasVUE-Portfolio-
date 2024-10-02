<template>
    <h1 class="py-5">Componentes de Bootstrap</h1>
    <div class="w-75 m-auto">
        <section class="my-5">
            <AccordionComp />
        </section>
        
        <section class="my-5">
            <CarouselComp />
        </section>
        
        <section class="my-5">
            <SideBarComp />
        </section>
        
        <section class="my-5">
            <Section1Comp />
        </section>
    </div>
</template>

<script setup>
import AccordionComp from '@/components/BootstrapSections/AccordionComp.vue';
import CarouselComp from '@/components/BootstrapSections/CarouselComp.vue';
import SideBarComp from '@/components/BootstrapSections/SideBarComp.vue';
import Section1Comp from '@/components/BootstrapSections/Section1Comp.vue';
</script>

<style scoped lang='scss'>

</style>