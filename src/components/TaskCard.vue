<template>
    <div class="task-card">
        <h3>{{task.title}}</h3>
        <p>{{task.details}}</p>
    </div>
</template>

<script>
    export default {
        name: "TaskCard",
        props: {
            task: {
                type: Object,
                required: true
            }
        }
    }
</script>
