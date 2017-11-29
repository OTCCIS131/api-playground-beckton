$(function() {

    const vm = new Vue({
        el: '#app',
        data: {
            loading: false,
            showing: 'films',
            films: [],
            film: null,
            people: []
        },
        methods: {
            loadFilms() { 
                this.loading = true
                this.$http.get('https://ghibliapi.herokuapp.com/films')
                    .then(resp => {
                        this.films = resp.body
                        this.loading = false
                    })
            },
            selectFilm(film) {
                this.film = film
                this.showing = 'people'
                this.loadPeople()
            },
            loadPeople() {
                //this.loading = true
                this.people = []                
                this.film.people.forEach(person => {
                    this.$http.get(person)
                        .then(resp => {
                            this.people.push(resp.body)
                        })
                })
            }    
        }
    })
})