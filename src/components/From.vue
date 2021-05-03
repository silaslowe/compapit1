<template>
    <div>
        <h1>Form</h1>
        <form @submit.prevent="logIt()">
        <BaseInput
            v-model="title"
            label="Title"
            type="text"
         />
        <BaseInput
            v-model="details"
            label="Details"
            type="text"
         />
        <button class="button" type="submit">Submit</button>
         </form>
    </div>
</template>

<script>
import BaseInput from './BaseInput'
import {ref} from 'vue'

    export default {
        name: "Form",
        components: {
            BaseInput
        },
        setup() {
            const title = ref('')
            const details = ref('')

            function logIt() {
                console.log(title.value, details.value)
            }

            return {
                title,
                details,
                logIt
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>