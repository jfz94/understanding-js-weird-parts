var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '44 Fifth St.'
        ],
        greet: function(){
            return 'Hello!';
        }
    }
]

console.log(people);