import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  bot,
  images,
  java,
  weather,
  data,
  budget,
  todo,
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
      url: 'https://github.com/BANADDA/bot',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://github.com/BANADDA/bot',
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
      url: 'https://github.com/MyHOSTEL-GROUP31/MyHOSTEL-GROUP31.github.io',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://github.com/MyHOSTEL-GROUP31/MyHOSTEL-GROUP31.github.io',
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
      url: 'https://github.com/BANADDA/JAVA-CODE',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://github.com/BANADDA/JAVA-CODE',
    },
  },
  {
    id: 4,
    name: 'Weather Expert',
    desc: 'A real-time weather application design to give weather information, as well as forecast.',
    stack: 'React JS, REST API',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/BANADDA/react_weather_app',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://weatherexpert.netlify.app/',
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
      url: '',
    },
    website: {
      icon: <TbWorld />,
      url: '',
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
    name: 'Budget Calculator',
    desc: 'A react app designed to keep track of daily expenses',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/BANADDA/budget-calculator/tree/main/budget-calculator',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://budget-calculator-expert.netlify.app',
    },
    imgUrl: budget,
  },
  {
    id: 2,
    name: 'Todo App',
    desc: 'A React scheduler app for daily tasks',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/BANADDA/todo_app_react',
    },
    website: {
      icon: <TbWorld />,
      url: ' https://task-schedular-app.netlify.app',
    },
    imgUrl: todo,
  },
]