<template>
    <header class="header">
        <nav>
            <section>
                <img src="/img/vm-logo.png" />
            </section>
            <ul class="nav-links header-navigation" :class="{'responsive-menu': showResponsiveMenu}">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
            <v-button element="a" href="tel:07546595648" class="btn-default uppercase header-navigation">
                <template #prefix-icon><i class="fa-solid fa-phone-volume"></i></template>
                Call us 24 / 7
            </v-button>
            <v-button class="btn-clear mobile-navigation" @click="onToggleResponsiveMenu">
                <i class="fa-solid fa-bars fa-fw"></i>
            </v-button>
        </nav>
    </header>
</template>

<script setup lang="ts">
    const showResponsiveMenu = ref<boolean>(false);

    function onToggleResponsiveMenu () {
        showResponsiveMenu.value = !showResponsiveMenu.value;
    }

    function onWindowResize () {
        if (window.innerWidth > 992) {
            showResponsiveMenu.value = false;
        }
    }

    onMounted(() => {
        window.addEventListener('resize', onWindowResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', onWindowResize);
    });
</script>

<style lang="scss">
    @use '~/assets/scss/components/header';
</style>