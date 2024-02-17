const noPass = {
  email: 'analuiza@gmail.com',
  password: '',
};

const noEmail = {
  email: '',
  password: 'fakePassword'
}

const userdb = {
  email: 'user@user.com',
  password: 'fakePassword',
  username: 'User',
  role: 'user'
}

const notInDb = {
  email: 'analuiza@gmail.com',
  password: 'fakePassword',
}

const userSeeder = {
    username: 'User',
    role: 'user',
    email: 'user@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
}

const userSeed = {
  email: 'user@user.com',
  password: 'secret_user'
}

export {noPass, noEmail, userdb, notInDb, userSeeder, userSeed}