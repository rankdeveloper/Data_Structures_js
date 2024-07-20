// output:
// {
//     user_id: 1,
//     user_name: 'rohit sharma',
//     user_address_city: 'Mumbai',
//     user_address_state: 'Maharashtra',
//     user_address_office_plot: '#23',
//     user_address_office_area: 'IT',
//     user_address_hometown_houseNo: '#232',
//     user_address_hometown_village: 'Majari',
//     user_address_hometown_District: 'Something'
//   }

const obj = {
    id: 1,
    name: 'rohit sharma',
    address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        office: {
            plot: '#23',
            area: 'IT'
        },
        hometown: {
            houseNo: '#232',
            village: 'Majari',
            District: 'Something'
        }
    }
}

const finalObj = {}

function convert(obj, parent) {
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            convert(obj[key], parent + '_' + key)
        }

        else {
            finalObj[parent + '_' + key] = obj[key]
        }
    }
}

convert(obj, 'user')
console.log(finalObj)