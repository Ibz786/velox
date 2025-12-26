<template>
    <section class="mobile-cta-container">
        <v-button element="a" href="https://wa.me/447546595648" class="btn-default whatsapp">
            <template #prefix-icon>
                <i class="fa-brands fa-whatsapp fa-fw"></i>
            </template>
            WhatsApp us
        </v-button>
        <v-button element="a" href="tel:07546595648" class="btn-default uppercase pulsate call-now">
            <template #prefix-icon>
                <i class="fa-solid fa-phone-volume fa-fw"></i>
            </template>
            Call us 24 / 7
        </v-button>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    @use '~/assets/scss/components/mobile-cta';
</style>