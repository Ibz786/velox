<template>
    <div class="hero-section-container">
        <section class="container hero-section">
            <div class="hero-details">
                <h1 class="hero-title">
                    <span>
                        Your <span class="bg-clip">trusted local</span> drainage and plumbing experts
                    </span>
                </h1>
                <p class="hero-text">Transform your plumbing experience with dependable, high-quality solutions tailored to your needs in London. From blocked sewage pipes to toilet overflows, we ensure your home runs efficiently and flawlessly.</p>
                <div class="hero-actions">
                    <v-button class="btn-success">
                        <template #prefix-icon>
                            <i class="fa-solid fa-message-quote"></i>
                        </template>
                        Get a quote
                    </v-button>
                    <v-button element="a" href="tel:07546595648" class="btn-default pulsate">
                        <template #prefix-icon>
                            <i class="fa-solid fa-phone-volume"></i>
                        </template>
                        Call us now
                    </v-button>
                </div>
            </div>
            <!--
            <div class="hero-img-container">
                <img class="hero-img" src="/img/hero2.png" />
            </div>
            -->
        </section>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss">
    @use '~/assets/scss/sections/hero';
</style>