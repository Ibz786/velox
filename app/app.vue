<template>
    <div>
    <!-- <NuxtRouteAnnouncer /> -->
        <VHeader />
        <NuxtPage />
        <MobileCta />
        <VFooter />
    <!-- <NuxtWelcome /> -->
    </div>
</template>

<script setup lang="ts">
    useSeoMeta({
        title: 'Velox Maintenance 24/7',
        description: 'Velox is London\'s leading property maintenance service company, handling all your plumbing and drainage needs.',
        ogTitle: 'Velox Maintenance 24/7',
        ogDescription: 'Velox is London\'s leading property maintenance service company, handling all your plumbing and drainage needs.',
        ogUrl: 'https://veloxmaintenance247.com/',
        ogSiteName: 'Velox Maintenance 24/7',
        ogLocale: 'en_GB'
    });

    defineOgImageComponent('Nuxt', {
        title: 'Home',
        description: 'Velox, London\'s leading and most trusted local plumbing and drainage experts',
        headline: 'Velox Maintenance 24 / 7'
    });
</script>
