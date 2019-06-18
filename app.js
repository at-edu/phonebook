"use strict";
import { users, countries, cities, phones, emails }  from './data/data.js';

var Users = Vue.component('Users', {
    data: function(){
        return {
            selectedUserIndex: 0
        }
    },
    props: ['filteredUsers'],
    template: 
        `<ul class="list-group">
            <li 
                class="list-group-item list-group-item-action pointer"
                v-for="(user, index) of filteredUsers"
                v-on:click="selectUser(index)"
                v-bind:class="{'active': isActive(index)}"
                >
                <strong>{{user.lastName}}   {{user.firstName}}</strong>
            </li>
        </ul>`,
        methods: {
            selectUser: function(index) {                
                this.$emit('info', index);
                this.selectedUserIndex = index;                      
            },
            isActive(index) {
                return (this.selectedUserIndex === index);
            }
        },
        computed: {
            
        }
});
new Vue ({
    el: "#app",
    data: {
        countries: countries,
        country: countries[0],
        selectedCountryIndex: 0,
        
        cities: cities,
        city: cities[0],
        selectedCityIndex: 0,
        
        users: users,
        user: users[0],
        selectedUserIndex: 0,               

        search: '',

        locationVisibility: false,
        fadeVisibility: false,
        newVisibility: false,
        editVisibility: false,
    },
    methods: {
        newContact: function(){
            this.newVisibility = true;
            this.fadeVisibility = true;
            this.selectedCityIndex = 0;
            his.selectedCountryIndex = 0;
        },
        editContact: function(){
            this.editVisibility = true; 
            this.fadeVisibility = true;
            this.selectedCityIndex = this.filteredUsers[this.selectedUserIndex].id_city;
            this.selectedCountryIndex = this.cities[this.selectedCityIndex].id_country;
        },
        closeModal: function(){
            this.fadeVisibility = false;
            this.locationVisibility = false;
            this.newVisibility = false;
            this.editVisibility = false;            
        },
        selectUser: function(index){
            this.user = users[index];           
            this.selectedUserIndex = index;            
        },
        selectCountry: function(index){
            this.country = this.countries[index];
            this.selectedCountryIndex = index;
            this.selectedCityIndex = 0;
        },
        selectCity: function(index){
            this.city = this.cities[index];
            this.selectedCityIndex = index;
        },
        removeContact: function(){            
            this.users.splice(users.indexOf(this.user),1);
            this.$refs.Users.selectUser(0);
        }
    },
    computed:{
        filteredCities(){
            const id = this.countries[this.selectedCountryIndex].id;
            return this.cities.filter(city => {
                return city.id_country == id;
            });
        },
        filteredUsers(){            
            const search = this.search.toLowerCase();
            const _users =  this.users.filter( user => {
                const _user = user.firstName.toLowerCase().indexOf(search) > -1 || 
                              user.lastName.toLowerCase().indexOf(search) > -1;
                return _user;
            });
            this.selectedUserIndex = 0;                                              
            return (_users.length !==0)?_users:this.users;
        },
        selectedUserCity(){            
            return cities[users[this.selectedUserIndex].id_city];
        },
        selectedUserCountry(){
            const city = this.selectedUserCity;            
            return countries[city.id_country];
        },
        selectedUserPnones(){
            return phones.filter(phone => {                
                return phone.id_user == users[this.selectedUserIndex].id;
            })
        },
        selectedUserEmails(){
            return emails.filter(email => {                
                return email.id_user == users[this.selectedUserIndex].id;
            })
        },
    },
});


