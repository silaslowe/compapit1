<template>
    <div>
        <h1>List</h1>
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
</template>

<script>
import TaskProvider  from '../TaskProvider'
import TaskCard from './TaskCard'

export default {
    name: "List",
    components: {
        TaskCard
    },
    setup() {
        const { tasks } = TaskProvider()
        return {
            tasks
        }    
    }
}

</script>

<style lang="scss" scoped>

</style>