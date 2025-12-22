<template>
    <!-- <teleport to="body"> -->
        <dialog ref="dialog">
            <div class="modal-container">
                <header class="modal-header">
                    <slot name="header">Get an instant quote</slot>
                </header>
                <section class="modal-body">
                    <slot name="main">
                        <multi-step-form />
                    </slot>
                </section>
                <footer class="modal-footer">
                    <v-button class="btn-clear btn-thin" @click="onCloseDialog">Close</v-button>
                    <slot name="footer"></slot>
                </footer>
            </div>
        </dialog>
    <!-- </teleport> -->
</template>

<script setup lang="ts">
    import { onBeforeMount, onMounted, useTemplateRef } from 'vue';
    import MultiStepForm from '~/components/forms/MultiStepForm.vue';

    const dialog = useTemplateRef('dialog');
    const body = document.querySelector('body');

    function onOpenDialog () {
        dialog.value?.showModal();
        if (body) {
            body.style.overflow = 'hidden';
        }
    }

    function onCloseDialog () {
        if (body) {
            body.style.overflow = '';
        }
        dialog.value?.close();
    }

    onMounted(() => {
        dialog.value?.addEventListener('cancel', onCloseDialog);
    });

    onBeforeMount(() => {
        dialog.value?.removeEventListener('cancel', onCloseDialog);
    });

    defineExpose({ onOpenDialog });
</script>

<style lang="scss">
    @use '~/assets/scss/components/modal';
</style>