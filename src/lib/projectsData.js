export const projectsData = [
  {
    title: 'ProtoPage',
    tagline: 'Find Google Fonts pairings quickly with our prototype startup page',
    images: [
      require('../images/pp-closed.png'),
      require('../images/pp-open.png'),
      require('../images/pp-open-changed.png'),
    ],
    stack: [
      'Google Fonts API',
      'Web Font Loader',
      'React',
      'Redux'
    ],
    features: [
      'Randomize through Google Fonts limiting by font type (sans-serif, handwriting, etc.) per element.',
      'Instantly get a feel for what pairings would look like on the totally real cloud-delivered meat startup page',
      'Look through all available font variants, per font. 100 italic? 900 regular? We got you!',
      'Limit your search to popular fonts, the top 30% per category as determined by Google',
      'Find a font you like? Lock it in and continue to randomize the other elements',
      'Got your fonts? Grab your css and get back to the fun stuff',
    ],
    backgroundColor : '#18E6DE',
    links : {
      github : 'http://www.github.com/dustwise/proto-page',
      live: 'http://protopage.dustwise.com'
    }
  },


  {
    title: 'PogTracker',
    tagline: 'Twitch highlights generated by chat activity',
    images: [
      require('../images/pg-first.png'),
      require('../images/pg-main.png'),
      require('../images/pg-modal.png'),
    ],
    stack: [
      'Twitch API',
      'Express',
      'Node',
      'React Router 4',
      'MongoDB',
      'Dokku'
    ],
    features: [
      'Utilizes multiple Twitch APIs to gather channel and replay chat data of a provided broadcast replay.',
      'Scans JSON for emote usage and generates timestamps for bursts of individual emotes.',
      'Frontend converts timestamps to buttons, integrated with twitch embedded player.',
      'The more active the chat, the better the results. Can easily handle a chat with tens of thousands of users.',
      'Provides all default emotes for each replay as well as subscriber emotes for partnered channels.',
      'Saves relevant generated data for instant delivery to future users with MongoDB.'
    ],
    backgroundColor : '#3feee6',
    links : {
      github : 'http://www.github.com/dustwise/pogtracker',
      live: 'http://www.pogtracker.com'
    }
  },


  {
    title: 'Rocket Garage',
    tagline: 'Redefining digital item trading for the Rocket League community',
    images: [
      require('../images/rg-current.png'),
      require('../images/rg-old.png'),
      require('../images/rg-old-1.png'),
      require('../images/rg-old-3.png')
    ],
    stack: [
      'React',
      'Redux',
      'React Router 4',
      'Node.js',
      'Express',
      'Passport.js',
      'PostgreSQL',
      'Knex'
    ],
    features: [
      'Provides users with a mobile-responsive trading experience, previously unavailable in the field.',
      'Users are able to utilize a front page live-trading feature to emulate popular social trading platforms, such as Discord.',
      'Steam and Auth0 authentication, backed by PostgreSQL/Knex.',
      'Features inventory and deals sections per profile to help facilitate faster, more accurate trades.',
    ],
    backgroundColor : '#00D6CE',
    links : {
      github : 'http://www.github.com/dustwise/Rocket-Garage',
      live: 'http://www.rocketgarage.io'
    },
    refactoring: true
  }
]