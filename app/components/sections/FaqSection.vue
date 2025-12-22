<template>
    <div class="faqs-section-container">
        <section class="container faqs-section">
            <div class="faqs-section-details">
                <h4 class="sub-heading">
                    <i class="fa-duotone fa-solid fa-circle-question"></i>
                    <span>Faqs</span>
                </h4>
                <h2 class="feature-heading">Find answers to commonly asked questions about Velox and our services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam aut expedita distinctio cumque quia dicta eius reiciendis et nihil?</p>
            </div>
            <div class="faqs-feature-container">
                <template v-for="faq in faqs" :key="faq.id">
                    <accordion
                        class="accordion"
                        :name="faq.name"
                        :summary="faq.summary"
                        :description="faq.description" />
                </template>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    const faqs = [
        { id: 1, summary: 'Do you offer emergency plumbing services in London?', description: 'Yes, we provide 24/7 emergency plumbing services across London to resolve urgent issues like leaks, burst pipes, or blockages swiftly!', name: 'faqs' },
        { id: 2, summary: 'What areas in London do you cover?', description: 'We serve all of London, including residential and commercial properties, ensuring prompt and reliable plumbing solutions wherever you\'re located', name: 'faqs' },
        { id: 3, summary: 'Are your services guaranteed?', description: 'Absolutely! All our work comes with a warranty, and we conduct follow-up inspections to ensure long-lasting results and your satisfaction', name: 'faqs' },
        { id: 4, summary: 'Do you use eco-friendly plumbing solutions?', description: 'Yes, we prioritise sustainable practices, offering eco-friendly materials and energy-efficient solutions to reduce environmental impact and lower utility costs', name: 'faqs' },
        { id: 5, summary: 'How do your maintenance plans work?', description: 'Our proactive maintenance plans include regular inspections and preventative care to keep your plumbing systems running smoothly, avoiding costly repairs down the line', name: 'faqs' }
    ];
</script>

<style lang="scss">
    .faqs-feature-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 2.5em;
    }

</style>