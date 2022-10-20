// import formatExistingUserData from '@/js/user/user-data-handling/format-user-data'

const users = [
  {
    favorite: true,
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Norbert',
      last: 'Weishaupt',
    },
    location: {
      street: {
        number: 5597,
        name: 'Mittelstraße',
      },
      city: 'Rhön-Grabfeld',
      state: 'Mecklenburg-Vorpommern',
      country: 'Germany',
      postcode: 52640,
      coordinates: {
        latitude: '-42.1817',
        longitude: '-152.1685',
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin',
      },
    },
    email: 'norbert.weishaupt@example.com',
    login: {
      uuid: 'bfe8ab77-36f2-4853-973a-c3241cfd3e18',
      username: 'brownmouse804',
      password: 'inside',
      salt: 'nz7kIxow',
      md5: 'e5a4c7f88c23a92ff703e79b95080c2b',
      sha1: '5cf24c4fc40e3d7ca2d626f0c26670a2c834f739',
      sha256: '150c20b6af123eb7603ebb80ba42301465aea1f9df012680c5a6e17c6d5f46b5',
    },
    dob: {
      date: '1956-12-23T19:09:19.602Z',
      age: 65,
    },
    registered: {
      date: '2004-09-01T12:10:49.583Z',
      age: 17,
    },
    phone: '0079-8291509',
    cell: '0179-1899833',
    id: {
      name: '',
      value: 'asdfjjsladf',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/28.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/28.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg',
    },
    nat: 'DE',
    course: 'English',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Claude',
      last: 'Payne',
    },
    location: {
      street: {
        number: 939,
        name: 'Church Road',
      },
      city: 'Skerries',
      state: 'Longford',
      country: 'Ireland',
      postcode: 64451,
      coordinates: {
        latitude: '-81.9272',
        longitude: '179.5544',
      },
      timezone: {
        offset: '-12:00',
        description: 'Eniwetok, Kwajalein',
      },
    },
    email: 'claude.payne@example.com',
    login: {
      uuid: 'f2deed66-a32b-4011-9995-bc18f33084c6',
      username: 'orangefish809',
      password: '1234qwer',
      salt: 'uUYfF7nl',
      md5: '777720d4bf06d66800efa8950d2f5439',
      sha1: 'a431174184fd105768f4852541dc31dc2d421fc0',
      sha256: 'bf9cb533527bf2679a77cc4913577badecebdc08b6a3c2b260027a33633fd5a5',
    },
    dob: {
      date: '1966-07-31T21:57:32.876Z',
      age: 55,
    },
    registered: {
      date: '2004-06-20T11:20:57.243Z',
      age: 17,
    },
    phone: '071-558-2972',
    cell: '081-533-7908',
    id: {
      name: 'PPS',
      value: '2340626T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/40.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/40.jpg',
    },
    nat: 'IE',
    course: 'Chemistry',
  },
  {
    favorite: true,
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Curtis',
      last: 'Mendoza',
    },
    location: {
      street: {
        number: 6483,
        name: 'First Street',
      },
      city: 'Bowral',
      state: 'Western Australia',
      country: 'Australia',
      postcode: 5234,
      coordinates: {
        latitude: '-66.8661',
        longitude: '-35.7288',
      },
      timezone: {
        offset: '+10:00',
        description: 'Eastern Australia, Guam, Vladivostok',
      },
    },
    email: 'curtis.mendoza@example.com',
    login: {
      uuid: 'f99d4fc3-855c-4f0e-b561-a390039fa42e',
      username: 'crazyelephant618',
      password: 'lback',
      salt: '8gqeuk66',
      md5: '6e3848bb0013e407e68875188c89f9d4',
      sha1: '2fdfd5f5dbf305a6036838e151326308cbfbc33c',
      sha256: '928e051ba3bd22a59a65a05c3d02d87fae2681e15ec50a55fc46794772f1bb13',
    },
    dob: {
      date: '1975-04-02T02:31:00.130Z',
      age: 46,
    },
    registered: {
      date: '2018-08-09T16:52:29.559Z',
      age: 3,
    },
    phone: '02-6397-0344',
    cell: '0497-219-830',
    id: {
      name: 'TFN',
      value: '505504341',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/4.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/4.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
    },
    nat: 'AU',
    course: 'Computer Science',
  },
  {
    gender: 'male',
    favorite: true,
    name: {
      title: 'Mr',
      first: 'Elias',
      last: 'Tikkanen',
    },
    location: {
      street: {
        number: 8511,
        name: 'Hämeenkatu',
      },
      city: 'Nousiainen',
      state: 'Ostrobothnia',
      country: 'Finland',
      postcode: 67794,
      coordinates: {
        latitude: '1.4218',
        longitude: '-169.0904',
      },
      timezone: {
        offset: '+5:30',
        description: 'Bombay, Calcutta, Madras, New Delhi',
      },
    },
    email: 'elias.tikkanen@example.com',
    login: {
      uuid: '88065628-f73f-4188-a070-78fa486357c8',
      username: 'ticklishpeacock599',
      password: 'swordfish',
      salt: 'QL8uU8Ci',
      md5: '1fd332481474935c7d8f5262cae87865',
      sha1: '4bb66c4c823b66cbbf30ced32575570b06e57b2a',
      sha256: '94a4a049fdf0498c298e83b22a51b5a336c9751c6a0d83dafd9f13915c15ccc0',
    },
    dob: {
      date: '1985-09-28T12:59:41.244Z',
      age: 36,
    },
    registered: {
      date: '2011-11-12T05:35:59.336Z',
      age: 10,
    },
    phone: '04-531-159',
    cell: '047-685-48-86',
    id: {
      name: 'HETU',
      value: 'NaNNA013undefined',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/34.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/34.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
    },
    nat: 'FI',
    course: 'English',
  },
  {
    gender: 'female',
    favorite: true,
    name: {
      title: 'Ms',
      first: 'Tessa',
      last: 'Möllmann',
    },
    location: {
      street: {
        number: 3702,
        name: 'Gartenweg',
      },
      city: 'Hohenstein-Ernstthal',
      state: 'Bayern',
      country: 'Germany',
      postcode: 87827,
      coordinates: {
        latitude: '61.8456',
        longitude: '67.6500',
      },
      timezone: {
        offset: '+4:30',
        description: 'Kabul',
      },
    },
    email: 'tessa.mollmann@example.com',
    login: {
      uuid: 'c40fd210-2787-4f0e-a5eb-3cafecf54076',
      username: 'angrybutterfly143',
      password: 'salomon',
      salt: 'fXqngwS1',
      md5: '47f2df267eae3fb9c49bc24fabf4e0f6',
      sha1: '9c03e07bbee8a47a3edff4cdcb99a98eb35a42ba',
      sha256: '211f9a5feafbad5ff3fad4335ad212e7680b0324dfb12965e9ed0bbea553c407',
    },
    dob: {
      date: '1986-05-08T09:19:12.021Z',
      age: 35,
    },
    registered: {
      date: '2010-11-11T20:29:09.690Z',
      age: 11,
    },
    phone: '0358-7950096',
    cell: '0174-4297315',
    id: {
      name: '',
      value: 'asdfwadf1',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/8.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/8.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/8.jpg',
    },
    nat: 'DE',
    course: 'Chemistry',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Maxine',
      last: 'James',
    },
    location: {
      street: {
        number: 408,
        name: 'Samaritan Dr',
      },
      city: 'Brisbane',
      state: 'Northern Territory',
      country: 'Australia',
      postcode: 797,
      coordinates: {
        latitude: '-41.1464',
        longitude: '142.0238',
      },
      timezone: {
        offset: '+5:00',
        description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
      },
    },
    email: 'maxine.james@example.com',
    login: {
      uuid: 'bd388aa9-f5cf-472e-9c8c-85486119ecad',
      username: 'crazywolf106',
      password: 'jack',
      salt: 'c8wqqkpf',
      md5: 'db2be13fdeee1ac99afd2d5c1599f714',
      sha1: 'e636cf16e0271a2e4c3c2dd69106df5d520545e3',
      sha256: 'f288f89234645f4093dce1be9ae117ade786fdf4c6abd12194b425e2ad943356',
    },
    dob: {
      date: '1974-08-10T01:12:04.592Z',
      age: 47,
    },
    registered: {
      date: '2003-04-05T17:59:08.752Z',
      age: 18,
    },
    phone: '02-7976-3904',
    cell: '0449-588-001',
    id: {
      name: 'TFN',
      value: '386597027',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/94.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/94.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/94.jpg',
    },
    nat: 'AU',
    course: 'Chemistry',
  },
  {
    gender: 'male',
    favorite: true,
    name: {
      title: 'Monsieur',
      first: 'Viktor',
      last: 'Legrand',
    },
    location: {
      street: {
        number: 2508,
        name: 'Place de L\'Abbé-Georges-Hénocque',
      },
      city: 'Gy',
      state: 'Solothurn',
      country: 'Switzerland',
      postcode: 4919,
      coordinates: {
        latitude: '-73.3324',
        longitude: '-63.8552',
      },
      timezone: {
        offset: '+7:00',
        description: 'Bangkok, Hanoi, Jakarta',
      },
    },
    email: 'viktor.legrand@example.com',
    login: {
      uuid: '8cbf901f-a763-4fb4-a90b-a73a0b3490f5',
      username: 'ticklishrabbit934',
      password: 'mobile',
      salt: 'ekpEgDHE',
      md5: 'da97686cb0e79abeecf43a51b7af1e23',
      sha1: '6269704b556f3dd0935fd3de6ec817c9dd6e8f88',
      sha256: 'c4a5068d2b31e0fbc499ef8d286dcd75e6ade918f8ed5300146097f6f35f3f6c',
    },
    dob: {
      date: '1994-07-04T12:08:05.427Z',
      age: 27,
    },
    registered: {
      date: '2008-03-26T05:07:43.196Z',
      age: 13,
    },
    phone: '077 863 38 70',
    cell: '079 039 17 19',
    id: {
      name: 'AVS',
      value: '756.2023.5649.57',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/51.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/51.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
    },
    nat: 'CH',
    course: 'Computer Science',
  },

]

export { users }
