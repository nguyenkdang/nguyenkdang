export const PROJECTS = [
    {
        year: 2021,
        name: '“Reddit Term Ranker”, Popular Reddit Topics Visualizer',
        tools: ['Python', 'Reddit API', 'Matplotlib'],
        descriptions: [
            'Used official Reddit API to make request to server to retrieve post data',
            'Built a database from post data and used reverse indexing to rank term frequency',
            'Used Matplotlib to graph term ranks by multiple criteria, like count, score & density',
        ],
    },
    {
        year: 2021,
        name: '“Market Simulator”, Determines Best Investment Strategy',
        tools: ['Python', 'Yahoo Finance API', 'Pandas API'],
        descriptions: [
            'Used official Yahoo Finance API to retrieve historical stock market data',
            'Implement multiple investing strategies modularly to allow for ease of testing',
            'Ran short and long term simulation to verify investing strategy effectiveness',
        ],
    },
    {
        year: 2019,
        name: '“Spotify Set”, A Spotify UI Proposal',
        tools: ['Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop'],
        descriptions: [
            'Conducted relevant market research on Spotify and its competitor',
            'Built wireframes, mockups and interactive prototypes while adhering to Spotify’s brand',
            'Presented proposal to stakeholders, using prototypes to reinforce understanding',
        ],
    },
];

export const EXPERIENCE = [
    {
        from: '09/21',
        to: 'Present',
        position: 'Frontend Software Developer',
        organization: 'Taboola',
        location: 'Los Angeles, CA',
        descriptions: [
            'Contributed to the building and maintenance of Taboola Ads by creating react components, constructing hooks, writing unit tests, and designing UI features.',
            'Participated in the agile process and practiced principles like code ownership',
            'Collaborated with designers and engineers across the world to ship features that is used by thousands of businesses and publishers.',
        ],
    },
];

export const SKILLS = [
    ['Python', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript'],
    ['Excel', 'SQL', 'MySQL', 'Figma', 'SCSS', 'React.js'],
    ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD'],
];

export const COURSES = [
    ['Artificial Intelligence', 'Data Management', 'Machine Learning'],
    ['Data Structure Implementation & Analysis', 'Information Retrieval'],
    ['Project in Databases & Web Applications', 'Computer Vision'],
];
