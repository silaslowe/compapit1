import axios from 'axios'
import { ref, onMounted, watch } from 'vue'

const tasks = ref(null)

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

export default function() {

    function getTasks() {
        apiClient.get('/tasks').then((res) => tasks.value = res.data)
    }

    async function deleteTask(id) {
        console.log(id)
        await apiClient.delete(`/tasks/${id}`)
        getTasks()

    }

    async function saveTask(taskObj) {
        await apiClient.post('/tasks', taskObj)
        getTasks()
    }

    onMounted(() => { getTasks() })

    watch(tasks, (newTasks, prevTasks) => {
})

    return {
        tasks,
        saveTask,
        deleteTask
    }
}





// const apiClient = axios.create({
//     baseURL: 'http://localhost:3000',
//     withCredentials: false,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })


// async function setTasks() {
//     tasks.value = await getTasks()
// }