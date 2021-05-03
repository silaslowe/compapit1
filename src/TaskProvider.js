import axios from 'axios'
import { ref, toRefs } from 'vue'
import { computed } from '@vue/composition-api'

// const state = ref({
//     tasks: []
// })

export function useTasks() {
    const tasks = ref([])

async function setTasks() {
    tasks.value = await getTasks()
}

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

function getTasks() {
    return axios.get('http://localhost:3000/tasks')
}

return {
    tasks,
    setTasks,
    getTasks
}
}