<template>
    <v-button element="a" href="tel:07546595648" class="btn-default call-now">
        <template #prefix-icon>
            <i class="fa-solid fa-phone-volume"></i>
        </template>
        Call us now
    </v-button>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    @use '~/assets/scss/components/call-now';
</style>