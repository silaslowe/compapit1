<template>
    <div>
        <h1>Form</h1>
        <form @submit="saveTask({title: title, details: details}).then(() =>reset())">
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
import TaskProvider from '../TaskProvider'
import {ref} from 'vue'

    export default {
        name: "Form",
        components: {
            BaseInput
        },
        setup() {
            const title = ref('')
            const details = ref('')
            const { saveTask } = TaskProvider()
            function reset() {
                title.value = ''
                details.value = ''
            }

            let task = {
            title: title.value,
            details: details.value
            }

            return {
                title,
                details,
                reset,
                saveTask,
                task
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>