<template>
    <ol class="rating-container">
        <li v-for="(star, index) in stars" :key="star">
            <i class="fa-star fa-regular fa-fw" :class="{'fa-solid filled': (index + 1) <= props.rating}"></i>
        </li>
    </ol>
</template>

<script setup lang="ts">
    interface Props {
        rating: number
    };

    const props = defineProps<Props>();
    const stars = Array(5);
</script>

<style lang="scss">
    @use '~/assets/scss/components/rating';
</style>