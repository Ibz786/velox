<template>
    <div class="why-choose-us-section-container">
        <section class="container why-choose-us-section">
            <div class="why-choose-us-section-details">
                <h4 class="sub-heading">
                    <MessageCircleQuestionMark :size="30" />
                    <span>Why Choose Us?</span>
                </h4>
                <h2 class="feature-heading">Choose us for all your Expert Plumbing and Drainage Solutions</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam aut expedita distinctio cumque quia dicta eius reiciendis et nihil?</p>
    
                <ul class="options-list">
                    <li class="options-list-item" v-for="(option, index) in options" :key="index">
                        <component :is="option.icon" :stroke-width="1.5"  class="option-icon" />
                        <div class="option-details">
                            <h4 class="option-title">{{ option.title }}</h4>
                            <p class="option-description">{{ option.description }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="why-choose-us-section-img-container">
                <img src="/img/choose-us.png" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { CalendarClock, Clock1, CircleStar, HandCoins, MessageCircleQuestionMark } from 'lucide-vue-next';

    const options = [
        { icon: CalendarClock, title: 'Available 24 / 7', description: 'We are avaiable to assist you with any service and resolve any issues, including emergencies any day, any time' },
        { icon: Clock1, title: '1 hour response time', description: 'We aim to respond to your query and attend to your service within the hour' },
        { icon: CircleStar, title: 'Fast and reliable', description: 'Our team takes care and pride in their work, ensuring you recieve the best quality and service you deserve' },
        { icon: HandCoins, title: 'Transparent and fair pricing', description: 'We offer all our customers clear, fair and competitive pricing and quotes upfront' },
    ];
</script>

<style lang="scss">
    @use '~/assets/scss/sections/choose-us';
</style>