$(function() {
    Vue.filter('capitalize', function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      })
    const vm = new Vue({
        el: '#app',
        data: {
            loading: false,
            showing: 'breeds',
            breeds: [],
            images: []
        },
        methods: {
            loadBreeds() {
                this.loading = true
                this.$http.get('https://dog.ceo/api/breeds/list')
                    .then(resp => {
                        this.breeds = resp.body.message
                        this.loading = false
                    })
            },
            loadBreedImages(breed) {
                this.$http.get('https://dog.ceo/api/breed/' + breed + '/images')
                .then(resp => {                    
                    this.images = resp.body.message
                    this.showing = 'images'
                })
            }
        }
    })
})