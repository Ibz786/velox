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
                    <v-button element="a" href="tel:07546595648" class="btn-default">
                        <template #prefix-icon>
                            <i class="fa-solid fa-phone-volume"></i>
                        </template>
                        Call us now
                    </v-button>
                </div>
            </div>
            <img class="hero-img" src="/img/hero2.png" />
        </section>
        <!-- <svg class="waves-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1.5" d="M0,64L24,53.3C48,43,96,21,144,42.7C192,64,240,128,288,149.3C336,171,384,149,432,170.7C480,192,528,256,576,282.7C624,309,672,299,720,293.3C768,288,816,288,864,272C912,256,960,224,1008,202.7C1056,181,1104,171,1152,165.3C1200,160,1248,160,1296,144C1344,128,1392,96,1416,80L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg> -->
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss">
    @use '~/assets/scss/sections/hero';
</style>