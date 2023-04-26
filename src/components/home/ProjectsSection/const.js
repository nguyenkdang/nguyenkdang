import image1 from './test_1.jpg';
import image2 from './test_2.jpg';
import image3 from './test_3.jpg';

export const PROJECTS_DATA = [
    {
        name: 'Reddit Ranks',
        description:
            "Ever wanted to know what Reddit is talking about? Reddit Ranker logs, sorts and displays any subreddit's most popular terms using multiple ranking methods and Reddit's official retrieval API",
        tags: ['Python', 'Reddit API', 'Matplotlib'],
        link: '',
        image: image1,
        id: 0,
    },
    {
        name: 'Image Translator',
        description:
            "Ever wanted to translate some text but only have an image? This python script can return a fully translated image using Google's Tesseract OCR and some math.",
        tags: ['Python', 'NumPy', 'Matplotlib', 'Pytesseract'],
        link: '',
        image: image2,
        id: 1,
    },
    {
        name: 'Investing Simulator',
        description:
            'Ever wanted to test which investing rule is most profitable? This modular Python script allows for the simulation and comparison of different investing strategy on real world market data.',
        tags: ['Python', 'Yahoo Finance API', 'Pandas'],
        link: '',
        image: image3,
        id: 2,
    },
];
