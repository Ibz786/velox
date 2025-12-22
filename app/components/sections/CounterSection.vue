<template>
    <div class="counter-section-container">
        <section class="container counter-section">
            <ul class="counter-list">
                <li class="counter-list-item">
                    <!-- <HandHeart class="item-icon" :stroke-width="1" /> -->
                    <!-- <div class="item-details"> -->
                        <p class="count">500+</p>
                        <p class="item-description">Satisfied Clients</p>
                    <!-- </div> -->
                </li>
                <li class="counter-list-item">
                    <!-- <HandHeart class="item-icon" :stroke-width="1" /> -->
                    <!-- <div class="item-details"> -->
                        <p class="count">10+</p>
                        <p class="item-description">Years of Experience</p>
                    <!-- </div> -->
                </li>
                <li class="counter-list-item">
                    <!-- <HandHeart class="item-icon" :stroke-width="1" /> -->
                    <!-- <div class="item-details"> -->
                        <p class="count">1000+</p>
                        <p class="item-description">Successful Jobs</p>
                    <!-- </div> -->
                </li>
                <li class="counter-list-item">
                    <!-- <HandHeart class="item-icon" :stroke-width="1" /> -->
                    <!-- <div class="item-details"> -->
                        <p class="count">15+</p>
                        <p class="item-description">Services Provided</p>
                    <!-- </div> -->
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { HandHeart } from 'lucide-vue-next';
</script>

<style lang="scss">
.counter-section {
    border-radius: 12px;
    // background-color: oklch(43.8% 0.218 303.724);
    // color: oklch(94.6% 0.033 307.174);
    // margin-block: 5em;
    padding: 10em 0;

    &-container {
        position: relative;
        background-color: oklch(43.8% 0.218 303.724);
        color: oklch(94.6% 0.033 307.174);
    }

    .counter-list {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        gap: 5em;
        list-style: none;
        padding: 0;

        &-item {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            padding: 10px;
        }
        .item-icon {
            width: 1.5em;
            height: 1.5em;
        }
        .count {
            font-size: 4em;
        }
        .item-description {
            font-size: 1.5em;
        }
    }
}
</style>