<template>
    <header class="header">
        <nav>
            <section>
                <img src="/img/vm-logo.png" />
            </section>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
            <v-button element="a" href="tel:07546595648" class="btn-default uppercase">
                <template #prefix-icon><i class="fa-solid fa-phone-volume"></i></template>
                Call us 24 / 7
            </v-button>
        </nav>
    </header>
</template>

<style lang="scss">
    @use '~/assets/scss/components/header';
</style>