



import Vue from 'vue'
import axios from 'axios'

new Vue({

    el: '#root',

    data: {

        people: {},
        id: '',
        name: '',
        lastname: ''
    },
    
    mounted() {

        let _self = this

        axios.get('https://sheetdb.io/api/v1/5ad967ff7e387').then((response) => {

            _self.people = response

        })

        axios.get('https://sheetdb.io/api/v1/5ad967ff7e387/count').then((response) => {

            _self.people = response.data.rows

        })
    },
    methods: {

        addPerson() {

            this.id += 1;

            let person = {

                id: this.id,

                name: this.name,

                last_name: this.lastname

            }

            let savePerson = {

                data: [

                    person

                ]

            }

            this.people.data.push(person)

            axios.post('https://sheetdb.io/api/v1/5ad967ff7e387', savePerson)

        },

        deletePerson(person) {

            let personIndex = this.people.data.indexOf(person)

            this.people.data.splice(personIndex, 1)

            axios.delete('https://sheetdb.io/api/v1/5ad967ff7e387/id/', + person.id)
           

        }

    }

})