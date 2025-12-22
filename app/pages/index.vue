<template>
    <main>
        <!-- <modal ref="modal" /> -->
        <!-- <v-button @click="onOpenModal">Test</v-button> -->
        <hero-section />
        <counter-section />
        <why-choose-us-section />
        <services-section />
        <our-process-section />
        <areas-covered-section />
        <testimonials-section />
        <faq-section />
    </main>
</template>

<script setup lang="ts">
    import HeroSection from '~/components/sections/HeroSection.vue';
    import CounterSection from '~/components/sections/CounterSection.vue';
    import WhyChooseUsSection from '~/components/sections/WhyChooseUsSection.vue';
    import ServicesSection from '~/components/sections/ServicesSection.vue';
    import OurProcessSection from '~/components/sections/OurProcessSection.vue';
    import AreasCoveredSection from '~/components/sections/AreasCoveredSection.vue';
    import TestimonialsSection from '~/components/sections/TestimonialsSection.vue';
    import FaqSection from '~/components/sections/FaqSection.vue';
    // import Modal from '~/components/Modal.vue'
    // import { useTemplateRef } from 'vue';

    useSeoMeta({
        title: 'Home - Velox Maintenance 24/7',
        ogTitle: 'Home - Velox Maintenance 24/7',
        ogUrl: 'https://veloxmaintenance247.com/'
    });

    /*
    const modal = useTemplateRef('modal');

    function onOpenModal () {
        if (modal?.value) {
            modal.value.onOpenDialog();
        }
    }
    */
</script>