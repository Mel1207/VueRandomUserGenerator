const app = Vue.createApp({
    data() {
        return {
            firstName: 'Mel',
            lastName: 'Pualon',
            email: 'mel@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    }
})

app.mount('#app')