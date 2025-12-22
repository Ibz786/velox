<template>
    <details :name="props.name">
        <summary @click="onToggle">
            <span>{{ props.summary }}</span>
            <span class="accordion-toggle" :class="{'rotate': isOpen}">
                <i class="fa-solid fa-chevron-down fa-fw"></i>
            </span>
        </summary>
        <p class="description">{{ props.description }}</p>
    </details>
</template>

<script setup lang="ts">
    import { ref, useTemplateRef, watch } from 'vue';
    interface IAccordionProps {
        name?: string;
        summary: string;
        description: string;
    };

    const props = defineProps<IAccordionProps>();
    const isOpen = ref(false);

    function onToggle () {
        isOpen.value = !isOpen.value;
    }
</script>

<style lang="scss">
    @use '~/assets/scss/components/accordion';
</style>