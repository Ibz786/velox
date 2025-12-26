<template>
    <div class="testimonials-section-container">
        <section class="container testimonials-section">
            <h4 class="sub-heading">
                <i class="fa-duotone fa-solid fa-hand-holding-star fa-fw"></i>
                <span>Testimonials</span>
            </h4>
            <h2 class="feature-heading">What do our customers say about us</h2>
            <p>With over 500 satisfied customers and counting, here at Velox we pride ourselves in ensuring that we give you the best service possible</p>

        </section>
        <div class="testimonials-section-feature-container">
            <div class="testimonials-section-feature">
                <testimonials />
                <testimonials />
            </div>
            <div class="testimonials-section-feature">
                <testimonials class="reversed" />
                <testimonials class="reversed" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '~/assets/scss/sections/testimonials';
</style>