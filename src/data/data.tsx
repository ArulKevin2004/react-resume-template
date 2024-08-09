import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpeg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Arulkevin J.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hi, I'm <strong className="text-stone-100">Arulkevin</strong>, an 
        aspiring <strong className="text-stone-100">front-end developer</strong>{" "}
        with a background in software design and{" "}
        <strong className="text-stone-100">cloud computing</strong>. I'm
        passionate about creating engaging user interfaces and continuously
        improving my front-end skills.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Ambiverted <strong className="text-stone-100">music lover </strong>and{" "}
        <strong className="text-stone-100">F1</strong> enthusiast who enjoys
        playing sports like{" "}
        <strong className="text-stone-100">Badminton</strong>,
        <strong className="text-stone-100">basketball</strong>, and{" "}
        <strong className="text-stone-100">Silambam</strong>, and is inspired by
        creative challenges.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi, I'm Arulkevin, currently pursuing an MSc in Software Systems at PSG College of Technology. Through my coursework and projects, I've developed a strong skill set in software development, system design, and data management. 
Although I haven't yet decided on a specific career path, I am particularly interested in exploring fields such as Web Development, cloud computing and machine learning. My strengths include coding, problem-solving, teamwork and I thrive in environments that challenge me to think critically and innovate.
I am excited to continue learning and growing, and I am open to exploring various opportunities that align with my skills and interests. My goal is to find a path where I can leverage my expertise to create meaningful and efficient software solutions.`,
  aboutItems: [
    { label: "Location", text: "Vellalore, Cbe", Icon: MapIcon },
    { label: "Age", text: "20", Icon: CalendarIcon },
    { label: "Nationality", text: "Indian", Icon: FlagIcon },
    { label: "Interests", text: "F1, Silambam", Icon: SparklesIcon },
    {
      label: "Study",
      text: "PSG College of Technology",
      Icon: AcademicCapIcon,
    },
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        // level: 10,
      },
      // {
      //   name: 'French',
      //   level: 4,
      // },
      {
        name: 'Tamil',
        // level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        // level: 9,
      },
      {
        name: 'Typescript',
        // level: 7,
      },
      // {
      //   name: 'GraphQL',
      //   level: 6,
      // },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        // level: 8,
      },
      // {
      //   name: 'Rust',
      //   level: 5,
      // },
      // {
      //   name: 'Golang',
      //   level: 4,
      // },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      // {
      //   name: 'React Native',
      //   level: 9,
      // },
      {
        name: 'Flutter',
        // level: 4,
      },
      // {
      //   name: 'Swift',
      //   level: 3,
      // },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Aroura',
    description: 'A music website using PHP, HTML, CSS, and JavaScript. The site features user authentication with login and sign-up capabilities, a search function for finding music tracks, and the ability for users to add tracks to a personalized favorites list. This project uses skills in web development.',
    url: 'https://github.com/ArulKevin2004/Aroura-music-app',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "July 2024",
    location: "PSG College of Technology",
    title: "Pursuing Masters in Software Systems",
    content: <p>In college, I learned software design, programming in Java and Python,
    data structures, and algorithms. I studied operating systems, database
    management, and Agile methodologies. I gained skills in software
    testing, networking, security principles, UI/UX design, and cloud
    computing. These experiences equipped me to design, develop, and manage
    complex software systems.</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me',
  items: [
    {
      type: ContactType.Email,
      text: "arulkevin2004@gmail.com",
      href: "mailto:arulkevin2004@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Vellalore, CBE",
      href: "https://google.ca/maps/place/Vellalore,+Tamil+Nadu/@10.9788404,77.0102102,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba850b4070e9523:0x4cd096b88e7b4115!8m2!3d10.9805375!4d77.0303217!16zL20vMGY2bXNw?entry=ttu,-123.376775,14z",
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: "ArulKevin2004",
      href: "https://github.com/ArulKevin2004",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Github",
    Icon: GithubIcon,
    href: "https://github.com/ArulKevin2004",
  },
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/arulkevin2004/",
  },
];
