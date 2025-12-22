<template>
    <li class="testimonial">
        <header>
            <span class="testimonial-icon">
                <i class="fa-solid fa-quote-left fa-fw"></i>
            </span>
            <p class="testimonial-title">{{ props.title }}</p>
        </header>
        <p class="testimonial-review">{{ props.review }}</p>
        <footer>
            <div class="user-container">
                <span class="testimonial-avatar">
                    <i class="fa-duotone fa-solid fa-circle-user fa-fw"></i>
                </span>
                <p class="testimonial-user">{{ props.user }}</p>
            </div>
            <star-rating :rating="props.rating"  />
        </footer>
    </li>
</template>

<script setup lang="ts">
    interface ITestimonialProps {
        id: number;
        title: string;
        review: string;
        user: string;
        rating: number;
    };

    const props = defineProps<ITestimonialProps>();
</script>