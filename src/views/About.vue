<template>
  <div>
    {{tasks}}
  </div>
</template>

<script>
import TaskProvider from '../TaskProvider'

  export default {
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
