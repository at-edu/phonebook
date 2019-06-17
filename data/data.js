
"use strict"
class Country {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}
class City {
    constructor(id, id_country, name) {
        this.id = id;
        this.id_country = id_country;
        this.name = name;
    }
}
class Email {
    constructor(id, id_user, email){
        this.id = id;
        this.id_user = id_user;
        this.email = email;
    }
}
class Phone {
    constructor(id, id_user, phone){
        this.id = id;
        this.id_user = id_user;
        this.phone = phone;
    }
}
class User {
    constructor(id, id_city, firstName, lastName){
        this.id = id;
        this.id_city = id_city;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
export const countries = [
    new Country(0,'Казахстан'),
    new Country(1,'Россия'),
    new Country(2,'Белоруссия'),
    new Country(3,'Украина')
]

export const cities = [
    new City(0, 0,'Алматы'),
    new City(1, 0,'Нурсултан'),
    new City(2, 0,'Караганда'),
    new City(3, 1,'Москва'),
    new City(4, 1,'Питербург'),
    new City(5, 3,'Киев'),
    new City(6, 3,'Мариуполь'),
    new City(7, 2,'Минск'),    
]

// Личности и персональные данные сгенерированы с помощью сервиса - https://www.fakenamegenerator.com/
export const users = [
    new User (0, 1, 'Ivan', 'Uspensky'),
    new User (1, 0, 'Samuel', 'Sokolov'),
    new User (2, 2, 'Gabriel', 'Mordvinov'),
    new User (3, 7, 'Nestor', ' Ignatyev'),
]

export const phones = [
    new Phone(0, 0, '+7-210-946-3779'),
    new Phone(1, 0, '+7-410-673-0195'),
    new Phone(2, 1, '+7-404-477-6510'),
    new Phone(3, 1, '+7-574-857-8796'),
    new Phone(4, 2, '+7-505-676-1687'),
    new Phone(5, 2, '+7-478-390-0100'),
    new Phone(6, 3, '+7-405-323-6230'),
]

export const emails = [
    new Email(0,0, 'Ivan.Uspensky@teleworm.us'),
    new Email(1,0, 'Ivan.Uspensky@gmail.com'),
    new Email(2,0, 'Ivan.Uspensky@outlook.com'),
    new Email(3,0, 'Ivan.Uspensky@list.ru'),
    new Email(4,1, 'Samuel.Sokolov@teleworm.us'),
    new Email(5,2, 'Gabriel.Mordvinov@teleworm.us'),
    new Email(6,3, 'Nestor.Ignatyev@armyspy.com'),
]
