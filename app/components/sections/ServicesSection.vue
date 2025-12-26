<template>
    <div class="services-section-container">
        <section class="container services-section">
            <h4 class="sub-heading">
                <i class="fa-duotone fa-solid fa-gears"></i>
                <span>Services</span>
            </h4>
            <h2 class="feature-heading">All your Plumbing and Drainage solutions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam aut expedita distinctio cumque quia dicta eius reiciendis et nihil?</p>

            <ul class="services-list">
                <li class="services-list-item" v-for="service in services" :key="service.id">
                    <div class="service-img-container">
                        <img :src="`${BASE}/img/${service.image}`" />
                    </div>
                    <div class="service-details">
                        <h4 class="service-title">{{ service.title }}</h4>
                        <p class="service-description">{{ service.description }}</p>
                        <div class="service-items">
                            <pills :pills="service.badges" />
                        </div>
                    </div>

                    <a class="service-action">
                        <span>Book Now</span>
                        <MoveRight :stroke-width="2.5"/>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { MoveRight } from 'lucide-vue-next';
    
    const BASE = process.env.NUXT_APP_BASE_URL ? `/${process.env.NUXT_APP_BASE_URL}` : '';
    const services = [
        {
            id: 1,
            image: 'sink.jpg',
            title: 'Plumbing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            badges: [
                { label: 'Emergency', icon: 'fa-solid fa-triangle-exclamation', classes: 'emergency' },
                { label: 'Blockages', icon: 'fa-solid fa-road-barrier', classes: 'blockage' },
                { label: 'Repairs', icon: 'fa-solid fa-screwdriver-wrench', classes: 'repair' },
                { label: 'Pipes', icon: 'fa-solid fa-pipe-valve', classes: 'pipes' },
                { label: 'Installations', icon: 'fa-solid fa-person-digging' },
                { label: 'Damp', icon: 'fa-solid fa-disease', classes: 'damp' },
                { label: 'Leaks', icon: 'fa-solid fa-droplet', classes: 'leak' },
            ]
        },
        {
            id: 2,
            image: 'drainage.jpg',
            title: 'Drainage',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            badges: [
                { label: 'Emergency', icon: 'fa-solid fa-triangle-exclamation', classes: 'emergency' },
                { label: 'Blockages', icon: 'fa-solid fa-road-barrier', classes: 'blockage' },
                { label: 'Repairs', icon: 'fa-solid fa-screwdriver-wrench', classes: 'repair' },
                { label: 'Pipes', icon: 'fa-solid fa-pipe-valve', classes: 'pipes' },
                { label: 'Backing up', icon: 'fa-solid fa-pump' },
                { label: 'Clearance', icon: 'fa-solid fa-broom', classes: 'cleaning' },
                { label: 'Gullys', icon: 'fa-solid fa-pipe-valve', classes: 'gully' },
            ]
        },
        {
            id: 3,
            image: 'manhole.jpg',
            title: 'Sewage',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            badges: [
                { label: 'Emergency', icon: 'fa-solid fa-triangle-exclamation', classes: 'emergency' },
                { label: 'Blockages', icon: 'fa-solid fa-road-barrier', classes: 'blockage' },
                { label: 'Repairs', icon: 'fa-solid fa-screwdriver-wrench', classes: 'repair' },
                { label: 'Pipes', icon: 'fa-solid fa-pipe-valve', classes: 'pipes' },
                { label: 'CCTV Surveys', icon: 'fa-solid fa-hose-reel' },
                { label: 'Manholes', icon: 'fa-solid fa-manhole', classes: 'manhole' },
                { label: 'Overflowing', icon: 'fa-solid fa-fill-drip', classes: 'overflow' },
            ]
        }
    ];
</script>

<style lang="scss">
    @use '~/assets/scss/sections/services';
</style>