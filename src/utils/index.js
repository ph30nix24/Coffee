

const navlinks = ["home", "products", "premium", "blog"];

const aboutCoffee = [
    {
        pic : './assets/img/specialty1.png',
        heading: 'selected coffee',
        subheading: 'We select the best premium coffee, for a true taste.'
    },
    {
        pic : './assets/img/specialty2.png',
        heading: 'delicious cookies',
        subheading: 'Enjoy your coffee with some hot cookies.'
    },
    {
        pic : './assets/img/specialty3.png',
        heading: 'enjoy at home',
        subheading: 'Enjoy the best coffee in the comfort of your home.'
    },
]

const products = [
    {
        name: 'new delicacies',
        length : 3,
        items : [
            {
                pic : './assets/img/delicacies1.png',
                price: 5,
                itemName : "cookies"
            },
            {
                pic : './assets/img/delicacies2.png',
                price: 6,
                itemName : "croissant"
            },
            {
                pic : './assets/img/delicacies3.png',
                price: 4,
                itemName : "croissant"
            },
        ]
    },
    {
        name: 'hot coffee',
        length : 4,
        items : [
            {
                pic : './assets/img/coffee1.png',
                price: 7,
                itemName : "black coffee"
            },
            {
                pic : './assets/img/coffee2.png',
                price: 12,
                itemName : "pure coffee"
            },
            {
                pic : './assets/img/coffee3.png',
                price: 9,
                itemName : "milk coffee"
            },
            {
                pic : './assets/img/coffee4.png',
                price: 9,
                itemName : "moka coffee"
            },
        ]
    },
    {
        name: 'cake and delicacies',
        length : 4,
        items : [
            {
                pic : './assets/img/cake1.png',
                price: 6,
                itemName : "cream cake"
            },
            {
                pic : './assets/img/cake2.png',
                price: 5,
                itemName : "chocolate croissant"
            },
            {
                pic : './assets/img/cake3.png',
                price: 15,
                itemName : "pancake"
            },
            {
                pic : './assets/img/cake4.png',
                price: 12,
                itemName : "milk cake"
            },
        ]
    }
]
const logos = ["./assets/img/logocoffee1.png", "./assets/img/logocoffee2.png", "./assets/img/logocoffee3.png", "./assets/img/logocoffee4.png", "./assets/img/logocoffee5.png"]


const blogs = [
    {
        img: './assets/img/blog1.png',
        title : '10 coffee recommandations',
        para: 'The blogs about coffee will help you a lot about how it is prepared, its waiting time, for a good quality coffee.',
        comments: 12,
        views: 76.5
    },
    {
        img: './assets/img/blog2.png',
        title : '12 benefits of drinking coffee',
        para: 'The blogs about coffee will help you a lot about how it is prepared, its waiting time, for a good quality coffee.',
        comments: 45,
        views: 356.5
    },
]
export { navlinks, aboutCoffee, products, logos, blogs }