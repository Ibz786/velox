<template>
    <ul class="pills">
        <li class="pill" :class="[pill?.classes]" v-for="(pill, index) in props.pills" :key="index">
            <i class="fa" :class="pill?.icon"></i>
            <span>{{ pill.label }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
    interface IPill {
        label: string;
        icon?: string;
        classes?: string;
    };

    interface IPillProps {
        pills: IPill[];
    };

    const props = defineProps<IPillProps>();
</script>

<style lang="scss">
    @use '~/assets/scss/components/pills';
</style>