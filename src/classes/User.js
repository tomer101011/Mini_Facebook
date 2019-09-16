export class User {
    userName;
    password;
    age;
    address;
    img;
    posts = [];

    constructor(userName, password, age, address, img, posts) {
        this.userName = userName;
        this.password = password;
        this.age = age;
        this.address = address;
        this.img = img;
        this.posts = posts;
    }
}

export class Post {
    title;
    info;
    img;

    constructor(title, info, img) {
        this.title = title;
        this.info = info;
        this.img = img;
    }
}