import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  bot,
  images,
  java,
  weather,
  data,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Smart Bot',
    desc:
      'An AI bot design using python. The bot gives user response to questions asked',
    stack: 'Python Machine Learning',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Wordle-clone',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://worlde-cloned.netlify.app/',
    },
    imgUrl: bot,
  },
  {
    id: 2,
    name: 'Hostel Finder App',
    desc: 'A hybrid mobile application, designed to enable university and college students, locate and book nearby hostels.',
    stack: 'Flutter, Dart, Firebase',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Restaurant-Website-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gericht-restaurant-website.netlify.app/',
    },
    imgUrl: images,
  },
  {
    id: 3,
    name: 'Java Calculator',
    desc: 'This is an amazing class project designed to show case java skills',
    stack: 'Java',
    imgUrl: java,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/OpenAI-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gpt3-openai-project.netlify.app/',
    },
  },
  {
    id: 4,
    name: 'Weather Expert',
    desc: 'A real-time weather application design to give weather information, as well as forecast.',
    stack: 'React JS, REST API',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-booking-project.netlify.app/',
    },
    imgUrl: weather,
  },

  {
    id: 5,
    name: 'Beans Disease Detection',
    desc: 'A bean desease detection system design using machine learning models, and computer vision. It detects diseases in bean leaves. ',
    stack: 'Deep Learning, Tensorflow',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/rest-countries-api-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://rest-countries-web-app-project.netlify.app/',
    },
    imgUrl: data,
  },
  {
    id: 6,
    name: 'Huddle Landing Page',
    desc: 'A simple landing page website',
    stack: 'React js, SCSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Huddle-landing-page',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://huddle-website-project.netlify.app/',
    },
    imgUrl: weather,
  },
  {
    id: 4,
    name: 'Hotel Booking Project',
    desc: 'A complicated project that enhanced my skills a lot',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-booking-project.netlify.app/',
    },
    imgUrl: weather,
  },
  {
    id: 2,
    name: 'Restaurant Website',
    desc: 'A Responsive restaurant website design with great UI Effect',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Restaurant-Website-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gericht-restaurant-website.netlify.app/',
    },
    imgUrl: weather,
  },
]