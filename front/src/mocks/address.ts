export const address = [
  {
    name: 'Jade Emerson',
    cellphone: '1-785-961-0261',
    address: 'P.O. Box 354, 5281 Non Avenue',
    employee: 'Tanek Davis',
    unit: 'Jorden Ferrell',
    date_of_registration: '31/08/2023',
  },
  {
    name: 'Devin Hays',
    cellphone: '(415) 567-5324',
    address: '7691 Ac Ave',
    employee: 'Walker Griffith',
    unit: 'Chaney Lang',
    date_of_registration: '17/08/2024',
  },
  {
    name: 'Rae Odom',
    cellphone: '(651) 665-8655',
    address: 'P.O. Box 258, 9558 At St.',
    employee: 'Dale Cruz',
    unit: 'Samson Booker',
    date_of_registration: '06/08/2024',
  },
  {
    name: 'Roth Gillespie',
    cellphone: '(225) 812-5322',
    address: '320-8573 Magna. Road',
    employee: 'Rahim Barber',
    unit: 'Zahir Reese',
    date_of_registration: '26/02/2024',
  },
]

export type Address = (typeof address)[number]
