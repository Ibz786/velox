<template>
    <ol class="testimonials-container">
        <template v-for="review in reviews" :key="review.id">
            <testimonial v-bind="review" />
        </template>
    </ol>
</template>

<script setup lang="ts">
    const reviews = [
        {
            id: 1,
            title: "Blocked drain pipe",
            rating: 5,
            review: "Amazing Service came and unblocked oour drain which we've had recurring issues with for months. We've had trouble with other plumbers but these guys were very honest and helpful, providing a great service. Would book them in the future and recommend",
            user: 'John Doe'
        },
        {
            id: 2,
            title: "Drains - Installation / Unblocking / Cleaning",
            rating: 5,
            review: "Response was very quick. Great customer service. They even cleaned the bath afterwards! ​ ​Would definitely hire again",
            user: 'John Doe'
        },
        {
            id: 3,
            title: "Water leaking from washing machine",
            rating: 5,
            review: "When our washing machine was leaking, Velox Maintenance responded immediately. Their quick and efficient service saved us from potential water damage",
            user: 'John Doe'
        },
        {
            id: 4,
            title: "Repaired water pipes",
            rating: 5,
            review: "Came on the day to fix the water leaks and came early too. Great guy would recommend him to friends and family",
            user: 'John Doe'
        },
        {
            id: 5,
            title: "Exceptional communication",
            rating: 5,
            review: "My job had a lot of challenges but this plumber was determined to solve it and he did! Well done. Excellent communications as well",
            user: 'John Doe'
        },
        {
            id: 6,
            title: "Bathroom, kitchen and WC plumbing",
            rating: 5,
            review: "Brilliant service. Was really quickly to get in touch. Will definitely use again.  ​Thank you for the brilliant job!",
            user: 'John Doe'
        }
    ];
</script>

<style lang="scss">
    @use '~/assets/scss/components/testimonial';
</style>