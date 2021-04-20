/*Questions:a, b and c are based on the following two arrays:users and products

		const users = [
		{
				_id: 'ab12ex',
				username: 'Alex',
				email: 'alex@alex.com',
				password: '123123',
				createdAt:'17/05/2019 9:00 AM',
				isLoggedIn: false
		},
		{
				_id: 'fg12cy',
				username: 'Asab',
				email: 'asab@asab.com',
				password: '123456',
				createdAt:'17/05/2019 9:30 AM',
				isLoggedIn: true
		},
		{
				_id: 'zwf8md',
				username: 'Brook',
				email: 'brook@brook.com',
				password: '123111',
				createdAt:'17/05/2019 9:45 AM',
				isLoggedIn: true
		},
		{
				_id: 'eefamr',
				username: 'Martha',
				email: 'martha@martha.com',
				password: '123222',
				createdAt:'17/05/2019 9:50 AM',
				isLoggedIn: false
		},
		{
				_id: 'ghderc',
				username: 'Thomas',
				email: 'thomas@thomas.com',
				password: '123333',
				createdAt:'17/05/2019 10:00 AM',
				isLoggedIn: false
		}
		];

		const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
			{ userId: 'fg12cy', rate: 5 },
			{ userId: 'zwf8md', rate: 4.5 }
		],
		likes: []
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy']
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy']
	}
];
a. Imagine you are getting the above users collection from a MongoDB database.

a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called ***signIn*** which allows user to sign in to the application
b. The products array has three elements and each of them has six properties.

a. Create a function called ***rateProduct*** which rates the product
b. Create a function called ***averageRating*** which calculate the average rating of a product
c. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
*/
const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];

// Write a function which filter users who has scoresGreaterThan85

    function Filter(){
        users.filter(user => {
            if(user.scores > 85){
                return console.log(user)
            }
        });
    }
    Filter(users)

// Write a function which addUser to the user array only if the user does not exist.

    function addUser(){
        users.forEach(user => {
            if(user.name !== 'Abhishek'){
                
                users.name = "Abhishek",
                users.scores = 81,
                users.skills= ['HTM', 'CSS', 'JS'],
                users.age = 21
            }
        });
        // console.log(users);
    }
    addUser(users)

// Write a function which addUserSkill which can add skill to a user only if the user exist.

    function addUserSkill(){
        users.forEach(user => {
            if(user.name === 'John'){
                user.skills[1] = 'REACT'
            }
        });
        // console.log(users)
    }
    addUserSkill(users)

// Write a function which editUser if the user exist in the users array.

    function editUser(){
        users.map(user => {
            if(user.name === 'Sara'){
                user.name = 'Brook'
            }
        });
        // console.log(users)
    }
    editUser(users)