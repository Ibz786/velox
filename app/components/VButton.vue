<template>
    <component
        :is="props.element"
        :href="props.href"
        type="button"
        role="button"
        class="btn">
        <slot name="prefix-icon"></slot>
        <span v-if="$slots.default" class="btn-text"><slot></slot></span>
        <slot name="suffix-icon"></slot>
    </component>
</template>

<script setup lang="ts">
    interface IButtonProps {
        element?: string;
        href?: string;
    };

    const props = withDefaults(defineProps<IButtonProps>(), {
        element: 'button'
    });
</script>

<style lang="scss">
    @use '~/assets/scss/components/button';
</style>