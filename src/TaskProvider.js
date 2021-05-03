import axios from 'axios'
import { ref, onMounted, watch } from 'vue'

const tasks = ref(null)

export default function() {

    function getTasks() {
        fetch('http://localhost:3000/tasks').then((res) => res.json()).then((json) => (tasks.value = json))
    }

    function saveTask(taskObj) {
        console.log(taskObj)
        return fetch('http://localhost:3000/tasks', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskObj)
        }).then(getTasks())
    }

    onMounted(() => { getTasks() })

//     watch(tasks, (newTasks, prevTasks) => {
//         console.log(newTasks, prevTasks)
// })

    return {
        tasks,
        saveTask
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