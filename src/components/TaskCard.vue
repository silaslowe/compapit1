<template>
    <div class="task-card">
        <h3>{{task.title}}</h3>
        <p>{{task.details}}</p>

        <button @click="deleteTask(this.task.id)">Delete</button>
    </div>
</template>

<script>
import TaskProvider from '../TaskProvider'

    export default {
        name: "TaskCard",
        setup() {
            const { deleteTask } = TaskProvider()
            return {
                deleteTask
            }
        },
        props: {
            task: {
                type: Object,
                required: true
            }
        }
    }
</script>
