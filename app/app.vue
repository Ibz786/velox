<template>
    <div>
    <!-- <NuxtRouteAnnouncer /> -->
        <VHeader />
        <NuxtPage />
        <VFooter />
    <!-- <NuxtWelcome /> -->
    </div>
</template>

<script setup lang="ts">
    useSeoMeta({
        title: 'Velox Maintenance 24/7',
        ogTitle: 'Velox Maintenance 24/7',
        ogUrl: 'https://veloxmaintenance247.com/',
        ogSiteName: 'Velox Maintenance 24/7',
        ogLocale: 'en_GB'
    });

    defineOgImageComponent('Nuxt', {
        title: 'Home',
        description: 'Your trusted local drainage and plumbing experts',
        headline: 'Velox Maintenance 24 / 7'
    });
</script>
