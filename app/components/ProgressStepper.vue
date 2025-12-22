<template>
    <ol class="progress-stepper">
        <li class="step" v-for="step in steps" :key="step.id">
            <div class="step-container">
                <span class="step-icon">
                    <i class="fa-fw" :class="step.icon"></i>
                </span>
                <div class="step-details">
                    <h5 class="step-title">{{ step.title }}</h5>
                    <p class="step-description">{{ step.description }}</p>
                </div>
            </div>
        </li>
    </ol>
</template>

<script setup lang="ts">
    const steps = [
        {
            id: 1,
            icon: 'fa-duotone fa-solid fa-headset',
            title: 'Contact Us',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore fugit quis saepe, dolorem quasi at quam odio deserunt'
        },
        {
            id: 2,
            icon: 'fa-duotone fa-regular fa-clock',
            title: 'Response',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore fugit quis saepe, dolorem quasi at quam odio deserunt'
        },
        {
            id: 3,
            icon: 'fa-duotone fa-solid fa-calendar-clock',
            title: 'Consultation',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore fugit quis saepe, dolorem quasi at quam odio deserunt'
        },
        {
            id: 4,
            icon: 'fa-duotone fa-regular fa-clipboard-list-check',
            title: 'Assessment',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore fugit quis saepe, dolorem quasi at quam odio deserunt'
        },
        {
            id: 5,
            icon: 'fa-duotone fa-regular fa-user-helmet-safety',
            title: 'Resolution',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore fugit quis saepe, dolorem quasi at quam odio deserunt'
        },
        {
            id: 6,
            icon: 'fa-duotone fa-solid fa-medal',
            title: 'Review',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore fugit quis saepe, dolorem quasi at quam odio deserunt'
        },
    ];
</script>

<style lang="scss">
    @use '~/assets/scss/components/progress-stepper';
</style>