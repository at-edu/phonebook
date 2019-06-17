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
        users: users,
        user: users[0],
        selectedUserIndex: 0,               
        search: '',
        modalVisibility: false,
    },
    methods: {
        selectUser: function(index){
            this.user = users[index];           
            this.selectedUserIndex = index;            
        }
    },
    computed:{
        filteredUsers() {
            
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
            return countries[
                //cities[users[this.selectedUserIndex].id_city]                
                city.id_country
                            ];
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


