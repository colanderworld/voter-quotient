/* 
1. Put your dummy data here! Don't worry about sorting, the program handles that automatically
2. Text goes in single quotes, i.e. 'Governor'. Numbers do not, i.e. 47. true and false are lowercase without quotes. If you don't know what to put, just write null
3. When done, scroll to the bottom and hit "Make New Branch." Title it something short and memorable. It will appear as branch.dontwait.vote.

REFERENCE (each of these elements can be repeated infinitely)
- Positions
    - Candidates
        - Endorsements
*/

// You can import more photos here using the same syntax.
// But if you leave the photo blank, it will default to a generic avatar icon

export const thirdTest = [
  {
    positionName: "Governor of California",
    tagged: false,
    position_id: 666,
    level: "STATE",
    normalizedPosition: "Governor",
    voteRaw: "2,978,585",
    voteMargin: 24, // Need runner up data
    description:
      "The Governor of California is the head of government of the U.S. state of California. The California Governor is the chief executive of the state government and the commander-in-chief of the California National Guard and the California State Guard.",
    candidatesArray: [
      {
        first_name: "Gavin",
        last_name: "Newsom",
        party_name: "Democrat",
        election_result: "Won",
        thumb_url:
          "https://upload.wikimedia.org/wikipedia/commons/2/20/Gavin_Newsom_official_photo.jpg",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ]
      }
    ]
  },
  {
    positionName: "Attorney General of California",
    tagged: false,
    position_id: 666,
    level: "STATE",
    normalizedPosition: "Attorney General",
    voteRaw: "3,325,156",
    voteMargin: 27, // Need runner up data
    description:
      "The Attorney General is the chief legal representative for the state. Often times, the AG will get involved in investigations into police misconduct, deciding whether to prosecute or not.",
    candidatesArray: [
      {
        first_name: "Xavier",
        last_name: "Becerra",
        party_name: "Democrat",
        election_result: "Won",
        thumb_url:
          "https://pbs.twimg.com/profile_images/725272568366809088/ChUDHq1N_400x400.jpg",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ]
      }
    ]
  },
  {
    positionName: "State Senate 11th District",
    tagged: false,
    position_id: 666,
    level: "STATE",
    normalizedPosition: "State Senator",
    voteRaw: "8,146",
    voteMargin: 2, // Need runner up data
    description:
      "A State Senator is a member of the upper chamber of the California State Legislature. Alongside the California State Assembly, it forms the legislative branch of the California state government and works alongside the governor of California to create laws and establish a state budget. ",
    candidatesArray: [
      {
        first_name: "Hi",
        last_name: "Hi",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ]
      }
    ]
  },
  {
    positionName: "State Assembly 19th District",
    tagged: false,
    position_id: 228408,
    level: "STATE",
    normalizedPosition: "State Assemblyperson",
    voteRaw: "124,656",
    voteMargin: 67, // Need runner up data
    description:
      "A State Assemblyperson is a member the lower chamber of the California State Legislature. Alongside the California State Senate, it forms the legislative branch of the California state government and works alongside the governor of California to create laws and establish a state budget.",
    candidatesArray: [
      {
        first_name: "Phil",
        last_name: "Ting",
        election_result: "Won",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228408,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [8, 25, 2237],
        candidate_type: null,
        updated_at: "2019-09-04T14:12:15.506775",
        id: 329221,
        party_name: "Democrat",
        middle_name: null,
        thumb_url:
          "https://upload.wikimedia.org/wikipedia/commons/c/c2/Phil_Ting_CA_assembly_photo.jpeg"
      },
      {
        first_name: "John",
        last_name: "McDonnell",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228408,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [8, 25, 2237],
        candidate_type: null,
        updated_at: "2019-09-04T14:12:15.506775",
        id: 329221,
        party_name: "Republican",
        middle_name: null,
        thumb_url:
          "https://sfpublicpress.org/wp-content/uploads/2020/02/johnmcdonnell-1568x1044.jpg"
      }
    ]
  },
  {
    positionName: "San Francisco District Attorney",
    tagged: true,
    position_id: 228408,
    level: "County",
    normalizedPosition: "District Attorney",
    voteRaw: "666",
    voteMargin: 0, // Need runner up data
    description:
      "A State Assemblyperson is a member the lower chamber of the California State Legislature. Alongside the California State Senate, it forms the legislative branch of the California state government and works alongside the governor of California to create laws and establish a state budget.",
    candidatesArray: [
      {
        urls: [
          {
            url: "https://votesuzyloftus.com/",
            entry_type: "website",
            url_id: 169293,
            type: "website"
          },
          {
            url: "https://twitter.com/suzyloftus",
            entry_type: "twitter",
            url_id: 169350,
            type: "twitter"
          },
          {
            url: "https://www.facebook.com/suzyforDA/",
            entry_type: "facebook",
            url_id: 169351,
            type: "facebook"
          },
          {
            url: "https://votesuzyloftus.com/volunteer/",
            entry_type: "volunteer",
            url_id: 169499,
            type: "volunteer"
          }
        ],
        first_name: "Suzy",
        last_name: "Loftus",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228408,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [8, 25, 2237],
        candidate_type: null,
        updated_at: "2019-09-04T14:12:15.506775",
        id: 329221,
        party_name: "Nonpartisan",
        middle_name: null,
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/329221/thumb_329221.jpg",
        nickname: null,
        slug: null,
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/329221/329221.jpg"
      },
      {
        urls: [
          {
            url: "https://www.chesaboudin.com/about",
            entry_type: "website",
            url_id: 178069,
            type: "website"
          },
          {
            url: "https://twitter.com/chesaboudin",
            entry_type: "twitter",
            url_id: 178070,
            type: "twitter"
          },
          {
            url: "https://www.facebook.com/chesa.boudin",
            entry_type: "facebook",
            url_id: 178072,
            type: "facebook"
          }
        ],
        first_name: "Chesa",
        last_name: "Boudin",
        election_result: "Won",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228408,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [32, 2234],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:13.648110",
        id: 340702,
        party_name: "Nonpartisan",
        middle_name: null,
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340702/thumb_340702.jpg",
        nickname: null,
        slug: null,
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340702/340702.jpg"
      },
      {
        urls: [
          {
            url: "https://leif2019.com/",
            entry_type: "website",
            url_id: 178098,
            type: "website"
          },
          {
            url: "https://twitter.com/leif4sfda",
            entry_type: "twitter",
            url_id: 178099,
            type: "twitter"
          },
          {
            url: "https://www.facebook.com/LeifDautchforSFDA/",
            entry_type: "facebook",
            url_id: 178101,
            type: "facebook"
          }
        ],
        first_name: "Leif",
        last_name: "Dautch",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228408,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [33],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:16.086199",
        id: 340724,
        party_name: "Nonpartisan",
        middle_name: null,
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340724/thumb_340724.jpg",
        nickname: null,
        slug: null,
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340724/340724.jpg"
      },
      {
        urls: [
          {
            url: "https://www.nancytung2019.com/",
            entry_type: "website",
            url_id: 178309,
            type: "website"
          },
          {
            url: "https://www.facebook.com/NancyforSFDA/",
            entry_type: "facebook",
            url_id: 178310,
            type: "facebook"
          },
          {
            url: "https://twitter.com/nancyforsfda",
            entry_type: "twitter",
            url_id: 178311,
            type: "twitter"
          }
        ],
        first_name: "Nancy",
        last_name: "Tung",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228408,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:13.162971",
        id: 340697,
        party_name: "Nonpartisan",
        middle_name: "H.",
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340697/thumb_340697.jpg",
        nickname: null,
        slug: null,
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340697/340697.jpg"
      }
    ]
  },
  {
    positionName: "San Francisco Public Defender",
    tagged: true,
    level: "CITY",
    normalizedPosition: "Public Defender",
    voteRaw: "158,560",
    voteMargin: 100,
    description:
      "A Public Defender is a lawyer appointed to represent people who otherwise cannot reasonably afford to hire a lawyer.",
    candidatesArray: [
      {
        first_name: "Manohar",
        last_name: "Raju",
        election_result: "Won",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        party_name: "Nonpartisan"
      }
    ]
  },
  {
    positionName: "San Francisco County Sheriff",
    tagged: true,
    position_id: 228406,
    level: "COUNTY",
    normalizedPosition: "County Sheriff",
    voteRaw: "146,628",
    voteMargin: 100,
    description:
      "The County Sheriff is the chief law enforcement official of the county.",
    candidatesArray: [
      {
        urls: [
          {
            url: "https://miyamoto4sheriff.com/",
            entry_type: "website",
            url_id: 178239,
            type: "website"
          },
          {
            url: "https://www.facebook.com/Paul.M.Miyamoto/",
            entry_type: "facebook",
            url_id: 178240,
            type: "facebook"
          }
        ],
        first_name: "Paul",
        last_name: "Miyamoto",
        election_result: "Won",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228406,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:22.874527",
        id: 340787,
        party_name: "Nonpartisan",
        middle_name: null,
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340787/thumb_340787.jpg",
        nickname: null,
        slug: null,
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340787/340787.jpg"
      }
    ]
  },
  {
    positionName: "San Francisco County Treasurer",
    tagged: false,
    position_id: 228409,
    level: "COUNTY",
    normalizedPosition: "County Treasurer",
    voteRaw: "152,703",
    voteMargin: 100,
    description:
      "The County Treasurer is the Chief Fiscal Officer of the county responsible for overseeing all public funds owned by the County, the County School District, and other taxing entities within the County.",
    candidatesArray: [
      {
        urls: [
          {
            url: "https://twitter.com/treasurersf",
            entry_type: "twitter",
            url_id: 178090,
            type: "twitter"
          },
          {
            url: "https://www.facebook.com/sftreasurer/",
            entry_type: "facebook",
            url_id: 178092,
            type: "facebook"
          }
        ],
        first_name: "José",
        last_name: "Cisneros",
        election_result: "Won",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228409,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [55],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:15.006973",
        id: 340713,
        party_name: "Nonpartisan",
        middle_name: "M.",
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340713/thumb_340713.jpg",
        nickname: null,
        slug: null,
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340713/340713.jpg"
      }
    ]
  },
  {
    positionName: "San Francisco City Mayor",
    tagged: true,
    position_id: 228405,
    level: "CITY",
    normalizedPosition: "Mayor",
    voteRaw: "100,533",
    voteMargin: 56.8,
    description:
      "The Mayor is the chief executive officer of the municipality.  They often preside over council meetings, and may have powers to hire and fire heads of municipal departments.",
    candidatesArray: [
      {
        urls: [
          {
            url: "https://www.londonformayor.com/",
            entry_type: "website",
            url_id: 100369,
            type: "website"
          },
          {
            url: "https://www.facebook.com/londonformayor",
            entry_type: "facebook",
            url_id: 100370,
            type: "facebook"
          },
          {
            url: "https://twitter.com/londonbreed",
            entry_type: "twitter",
            url_id: 100371,
            type: "twitter"
          },
          {
            url: "https://mayorlondonbreed.org/volunteer-2/",
            entry_type: "volunteer",
            url_id: 203109,
            type: "volunteer"
          }
        ],
        first_name: "London",
        last_name: "Breed",
        election_result: "Won",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: "",
        incumbent: false,
        position_id: 228405,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [8, 24, 25, 2237],
        candidate_type: null,
        updated_at: "2018-09-08T14:26:11.770131",
        id: 165452,
        party_name: "Nonpartisan",
        middle_name: "",
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/165452/thumb_165452.jpg",
        nickname: "",
        slug: "london-breed-b5955a8d-d4a2-47cf-8a7e-02a219bdf195",
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/165452/165452.jpg"
      },
      {
        urls: [],
        first_name: "Robert",
        last_name: "Jordan",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228405,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:19.654877",
        id: 340757,
        party_name: "Nonpartisan",
        middle_name: null,
        thumb_url: null,
        nickname: null,
        slug: null,
        photo_url: null
      },
      {
        urls: [],
        first_name: "Wilma",
        last_name: "Pang",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228405,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:09.751773",
        id: 340663,
        party_name: "Nonpartisan",
        middle_name: null,
        thumb_url: null,
        nickname: null,
        slug: null,
        photo_url: null
      },
      {
        urls: [
          {
            url: "https://twitter.com/Robertson4mayor",
            entry_type: "twitter",
            url_id: 178285,
            type: "twitter"
          }
        ],
        first_name: "Paul",
        last_name: "Robertson",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228405,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:11.121435",
        id: 340676,
        party_name: "Nonpartisan",
        middle_name: "Y.",
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340676/thumb_340676.jpg",
        nickname: null,
        slug: null,
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340676/340676.jpg"
      },
      {
        urls: [],
        first_name: "Joel",
        last_name: "Ventresca",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228405,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:13.259077",
        id: 340698,
        party_name: "Nonpartisan",
        middle_name: null,
        thumb_url: null,
        nickname: null,
        slug: null,
        photo_url: null
      },
      {
        urls: [
          {
            url: "https://twitter.com/ellen4sfmayor",
            entry_type: "twitter",
            url_id: 178319,
            type: "twitter"
          },
          {
            url: "https://www.facebook.com/EllenLeeZhou/",
            entry_type: "facebook",
            url_id: 178320,
            type: "facebook"
          },
          {
            url: "https://www.ellenleezhouformayor2018.com/",
            entry_type: "website",
            url_id: 92877,
            type: "website"
          }
        ],
        first_name: "Ellen",
        last_name: "Zhou",
        election_result: "Lost",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: "",
        incumbent: false,
        position_id: 228405,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [],
        candidate_type: null,
        updated_at: "2018-09-08T14:26:11.759272",
        id: 165450,
        party_name: "Nonpartisan",
        middle_name: "Lee",
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/165450/thumb_165450.jpg",
        nickname: "",
        slug: "ellen-lee-zhou",
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/165450/165450.jpg"
      }
    ]
  },
  {
    positionName: "San Francisco City Attorney",
    tagged: false,
    position_id: 228407,
    level: "CITY",
    normalizedPosition: "City Attorney",
    voteRaw: "161,369",
    voteMargin: 100,
    description:
      "The duties of the City Attorney include appearing in judicial, administrative and other legal actions, issuing legal opinions to city officers, drafting ordinances, bonds, and other legal documents, prosecuting ordinance violations in municipal court, and providing a full range of legal services to various City departments, boards, and entities.",
    candidatesArray: [
      {
        urls: [
          {
            url: "http://www.dennisherrera2019.com/",
            entry_type: "website",
            url_id: 178144,
            type: "website"
          },
          {
            url: "https://twitter.com/dennisherrera",
            entry_type: "twitter",
            url_id: 178145,
            type: "twitter"
          }
        ],
        first_name: "Dennis",
        last_name: "Herrera",
        election_result: "Won",
        endorsementsArray: [
          { Color: "green", Group: "", KeyEndorsement: false }
        ],
        suffix: null,
        incumbent: false,
        position_id: 228407,
        election_id: 389,
        election_day: "2019-11-05",
        endorsements: [],
        candidate_type: null,
        updated_at: "2019-09-27T21:53:18.643719",
        id: 340749,
        party_name: "Nonpartisan",
        middle_name: "J.",
        thumb_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340749/thumb_340749.jpg",
        nickname: null,
        slug: null,
        photo_url:
          "https://br-production-assets.s3.amazonaws.com/uploads/candidate/headshot/340749/340749.jpg"
      }
    ]
  }
];
