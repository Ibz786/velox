<template>
    <form>
        <div class="form-option-container">
            <template v-for="form in forms" :key="form.id">
                <div class="form-option" @click="onSelectOption(form)">
                    <p><strong>{{ form.type }}</strong></p>
                    <small v-if="form.summary">{{ form.summary }}</small>
                </div>
            </template>
        </div>
        <div class="form-footer">
            <v-button class="btn-thin btn-default">Next</v-button>
        </div>
    </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const formIndex = ref(0);
    const forms = [
        {
            id: 1,
            type: 'Radiators',
            summary: 'Radiators installation, repairs etc.',
            fields: [
                {
                    id: 1.1,
                    type: 'Minor issue (e.g. leaking, bleeding, banging)'
                },
                {
                    id: 1.2,
                    type: 'Moving or replacing'
                },
                {
                    id: 1.3,
                    type: 'Other'
                }
            ]
        },
       { id: 2, type: 'Boilers', summary: 'Central heating systems, boiler installation, etc.' },
       { id: 3, type: 'Appliances', summary: 'Dishwasher, washing machine, etc.' },
    ];

    interface IOptionForm {
        id: number;
        type: string;
        summary?: string;
    };

    function onSelectOption (form: IOptionForm) {
        debugger
    }
</script>

<style lang="scss">
form {
    .form-option {
        &-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        position: relative;
        padding: 10px;
        border: 1px solid;
        border-radius: 8px;
    }

    .form-footer {
        margin-top: 15px;
        text-align: right;
    }
}
</style>