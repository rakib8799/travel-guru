const hotels = [
    {
        key: 1,
        id: 1,
        name: `COX'S BAZAR`,
        categoryName: `Stay in COX'S BAZAR`,
        description: `Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...`,
        overview: 'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.',
        image: 'https://i.ibb.co/fYMB7mL/Rectangle-26.png',
        info: 'Light bright airy apt & safe peaceful stay',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.9}(${20})`,
        price: `$${34}/night`
    },
    {
        key: 2,
        id: 1,
        name: `COX'S BAZAR`,
        categoryName: ``,
        image: 'https://i.ibb.co/Bfr0h3Q/Rectangle-27.png',
        info: 'Apartment in lost panorama',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.8}(${10})`,
        price: `$${52}/night`
    },
    {
        key: 3,
        id: 1,
        name: `COX'S BAZAR`,
        categoryName: ``,
        image: 'https://i.ibb.co/mh92j2q/Rectangle-28.png',
        info: 'AR Lounge and pool (r&r + b&b)',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.9}(${25})`,
        price: `$${44}/night`
    },
    {
        key: 4,
        id: 2,
        name: `SREEMANGAL`,
        categoryName: `Stay in SREEMANGAL`,
        description: `Sreemangal is an Upazila of Moulvibazar District in the Sylhet Division of Bangladesh...`,
        overview: 'It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971, the Pakistani army reached Srimangal on 30 April setting houses on fire and committing atrocities against women. The East Pakistan Rifles camp and Wapda office premises were among the two mass killing sites. Two mass graves remain in Bharaura with a memorial in North Bharaura.',
        image: 'https://i.ibb.co/LSJty4Z/Sreemangal-Balisha-Resort.jpg',
        info: 'Balishira Resort Ltd.',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.9}(${30})`,
        price: `$${55}/night`
    },
    {
        key: 5,
        id: 2,
        name: `SREEMANGAL`,
        categoryName: ``,
        image: 'https://i.ibb.co/dLJZf74/Sreemangal-Inn-Hotel.jpg',
        info: 'Sreemangal Inn Hotel & Restaurant',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.8}(${10})`,
        price: `$${52}/night`
    },
    {
        key: 6,
        id: 2,
        name: `SREEMANGAL`,
        categoryName: ``,
        image: 'https://i.ibb.co/R4srjjR/Sreemangal-tea-Resort.jpg',
        info: 'Green Park Tea Resort',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.7}(${20})`,
        price: `$${30}/night`
    },
    {
        key: 7,
        id: 3,
        name: `SUNDARBANS`,
        categoryName: `Stay in SUNDARBANS`,
        description: `The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from ...`,
        overview: `The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.`,
        image: 'https://i.ibb.co/JqL774F/Sundarban-Royal-Hotel.jpg',
        info: 'Hotel Royal International',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.8}(${20})`,
        price: `$${32}/night`
    },
    {
        key: 8,
        id: 3,
        name: `SUNDARBANS`,
        categoryName: ``,
        image: 'https://i.ibb.co/LdHycjf/Sundarban-Devine-Centre.jpg',
        info: 'Divine Centre Ltd, Hotel and Convention Centre',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.9}(${30})`,
        price: `$${45}/night`
    },
    {
        key: 9,
        id: 3,
        name: `SUNDARBANS`,
        categoryName: ``,
        image: 'https://i.ibb.co/Pr52YD7/Sundarban-Zabeer-International.jpg',
        info: 'Zabeer International Hotel',
        facility:[
            `${4} guests ${2} bedrooms ${2} beds ${2} baths`,
            `Wif Air conditioning kitchen`,
            `Cancellation flexibility available`
        ],
        rating: `${4.8}(${25})`,
        price: `$${38}/night`
    },
]

export default hotels;