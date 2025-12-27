/**
 * Profile Data Configuration
 *
 * Fill in this file with information from your LinkedIn profile or personal details.
 * All sections are optional - remove or leave empty any sections you don't want to display.
 *
 * To get started:
 * 1. Update the hero section (name, title, tagline, bio)
 * 2. Add your social links (LinkedIn, GitHub, email)
 * 3. Fill in your experience, skills, projects, and education
 * 4. The website will automatically display all filled sections
 */

// Experience ID enum for type-safe linking between experiences and projects
export enum ExperienceID {
  DONT_DIE = "dont-die",
  BLUEPRINT = "blueprint",
  BETTER_BLOOD = "better-blood",
  OPTO_INVESTMENTS = "opto-investments",
  EOFLIX = "eoflix",
  WAYFAIR = "wayfair",
  FORTEM_TECHNOLOGIES = "fortem-technologies",
  NIKE = "nike",
  SPILLMAN_TECHNOLOGIES = "spillman-technologies",
  SCHAWEL_COLES = "schawel-coles",
  REI_SYSTEMS = "rei-systems",
}

export const profileData = {
  // Hero Section
  name: "Gregory Fong",
  title: "Software Engineer at Blueprint Bryan Johnson",
  tagline: "I like to build things that help people live better.",
  bio: "Hi there! My name is Greg, and I'm a software developer based in Bellevue, Washington, and originally from Rigby, Idaho. My mission is to build things that help people live better. I've built software solutions over the past 15 years across many industries such as public safety, private security, eCommerce, real estate, aerospace defense, entertainment media, finance, health, and AI.",

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/devgregoryfong/",
    github: "https://github.com/gf5901",
    email: "", // Add your email if you'd like to display it
    website: "", // Add your website URL if available
    twitter: "https://twitter.com/devgregfong",
  },

  // About Section
  about: {
    heading: "About Me",
    description:
      "I am currently a Software Engineer at Blueprint, Bryan Johnson's company for human survival and beyond. I am building the Don't Die App while working on achieving optimal health. I've built software solutions over the past 15 years across many industries such as public safety, private security, eCommerce, real estate, aerospace defense, entertainment media, finance, health, and AI. I'm passionate about creating impactful technology that solves real-world problems.",
    highlights: [
      "15+ years of software development experience",
      "Full-stack expertise with modern technologies",
      "Experience across multiple industries",
      "Building health and wellness platforms",
    ],
  },

  // Experience
  experience: [
    {
      id: ExperienceID.DONT_DIE,
      title: "Lead Software Engineer",
      company: "Don't Die",
      location: "Los Angeles, California, United States · Remote",
      startDate: "Aug 2024",
      endDate: "Present",
      duration: "1 yr 5 mos",
      description: "Developed the Don't Die App. Let's not die. Together.",
      achievements: [
        "Built an app that scaled to 130K+ users with no marketing or advertising",
        "Developed for iOS (4.8 stars), Android (4.5 stars), and Web",
        "Built Solana based NFT creation pipeline for AI generated passport photos",
      ],
      skills: [
        "Mobile Application Development",
        "Blockchain",
        "Artificial Intelligence (AI)",
        "Web Development",
        "Amazon Web Services (AWS)",
      ],
      logo: "/images/companies/dont-die.jpeg",
    },
    {
      id: ExperienceID.BLUEPRINT,
      title: "Staff Software Engineer",
      company: "Blueprint",
      location: "Remote",
      startDate: "Aug 2024",
      endDate: "Present",
      duration: "1 yr 5 mos",
      description:
        "Building Blueprint Biomarkers with Bryan Johnson and the team at Blueprint to provide the world's best operating system for health.",
      achievements: [
        "Developed MVP for Blueprint Biomarkers",
        "Built team of world class backend, frontend, mobile, and AI engineers to build Blueprint Biomarkers V2",
        "Led development of other software related projects across the company",
      ],
      skills: [
        "AWS Lambda",
        "PostgreSQL",
        "Artificial Intelligence (AI)",
        "React.js",
        "Node.js",
      ],
      logo: "/images/companies/blueprint.jpeg",
    },
    {
      id: ExperienceID.BETTER_BLOOD,
      title: "Founder",
      company: "Better Blood",
      location: "Bellevue, Washington, United States",
      startDate: "Jan 2024",
      endDate: "Aug 2024",
      duration: "8 mos",
      description:
        "I believe health technology should be free to use by everyone, so I created a 503(c)(3) non-profit organization for developing free, private, open source, and AI powered biomarker tracking tools.",
      achievements: [
        "Successfully registered a 503(c)(3) non-profit organization",
        "Developed a private biomarker tracking platform using React.js, Google Cloud Platform (GCP), and OpenAI API",
        "Only runs on the browser and never sends data to a server (except for the AI chatbot)",
      ],
      skills: ["React.js", "Google Cloud Platform (GCP)", "OpenAI API"],
      logo: "/images/companies/better-blood.jpeg",
    },
    {
      id: ExperienceID.OPTO_INVESTMENTS,
      title: "Software Engineer",
      company: "Opto Investments",
      location: "San Francisco, California, United States · Remote",
      startDate: "Mar 2023",
      endDate: "Aug 2024",
      duration: "1 yr 6 mos",
      description:
        "Collaborated with a world-class team at Opto, a fintech startup cofounded by Joe Lonsdale that raised a $145M Series A to build the next generation of private market investment software.",
      achievements: [
        "Partnered with product and design to develop front end features for the core product using React, NextJS, and TypeScript",
        "Implemented new API endpoints and microservices using Python FastAPI, Java Spring Boot, Kubernetes, Pulumi, and AWS",
        "Integrated LaunchDarkly into the platform to become a feature flag first development process",
      ],
      skills: [
        "Java",
        "Python",
        "React.js",
        "Mobile Application Development",
        "PostgreSQL",
        "Amazon Web Services (AWS)",
        "Next.js",
        "OpenAI API",
      ],
      logo: "https://prod-files-secure.s3.us-west-2.amazonaws.com/542473ae-f6bb-43e5-97e0-ae3e972ddb8b/d5e42184-d83a-430e-971b-5f5dceff3cf1/optoinvest_logo.jpeg",
    },
    {
      id: ExperienceID.EOFLIX,
      title: "Cofounder & CTO",
      company: "eoFlix",
      location: "West Hollywood, California, United States · Hybrid",
      startDate: "May 2022",
      endDate: "Aug 2024",
      duration: "2 yrs 4 mos",
      description:
        "Created and led development of eoFlix, a social platform for filmmakers to connect with each other, find new opportunities, and sell their content. eoFlix's streaming capabilities enable film festivals around the world to bring their inspiring stories to the living room. 100x'ed revenue YoY and partnered with over a hundred film festivals.",
      achievements: [
        "Created and led development of eoFlix, a social platform for filmmakers",
        "100x'ed revenue YoY and partnered with over a hundred film festivals",
        "Built streaming capabilities for film festivals worldwide",
      ],
      skills: [
        "Expo",
        "TypeScript",
        "Web Development",
        "vercel",
        "AWS Lambda",
        "Cloud Computing",
        "Microservices",
        "Mobile Application Development",
        "JavaScript",
        "Agile Methodologies",
        "Graphic Design",
        "Team Building",
        "React Native",
        "DevOps",
        "Amazon Web Services (AWS)",
        "Teamwork",
        "Next.js",
        "Web Design",
      ],
      logo: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb86a472-3675-47ba-b88c-5d03fb647f73/Logo_White_150x150.png",
    },
    {
      id: ExperienceID.WAYFAIR,
      title: "Senior Software Engineer",
      company: "Wayfair",
      location: "Boston, Massachusetts, United States · Remote",
      startDate: "Sep 2021",
      endDate: "Aug 2022",
      duration: "1 yr",
      description:
        "Led a team of 10 engineers for supporting and maintaining Wayfair.com's existing upper funnel (navigation, search, browse) infrastructure while other teams re-platformed the underlying tech stack. Performed full-stack development for the search experience of websites for Wayfair, Perigold, AllModern, Joss&Main, Birch Lane, and other brands owned by Wayfair Inc. Led small and large projects that increased company revenue by $77MM.",
      achievements: [
        "Led a team of 10 engineers for supporting and maintaining Wayfair.com's existing upper funnel infrastructure",
        "Performed full-stack development for the search experience across multiple brands",
        "Led projects that increased company revenue by $77MM",
      ],
      skills: [
        "TypeScript",
        "Web Development",
        "Leadership",
        "GraphQL",
        "PHP",
        "Cloud Computing",
        "Microservices",
        "React.js",
        "CSS",
        "Mentoring",
        "JavaScript",
        "Google Cloud Platform (GCP)",
        "Team Building",
        "Teamwork",
        "SQL",
      ],
      logo: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c74032fd-0743-4293-8599-30e25429b524/wayfair.png",
    },
    {
      id: ExperienceID.FORTEM_TECHNOLOGIES,
      title: "Senior DevOps Engineer",
      company: "Fortem Technologies",
      location: "Pleasant Grove, Utah, United States · On-site",
      startDate: "Sep 2020",
      endDate: "Jun 2021",
      duration: "10 mos",
      description:
        "Managed all of the CI/CD processes, cloud resources, and software distribution for the company. Implemented OpenVPN and Certificate Authority servers for connecting a client's on-premise radar installation to Fortem's aerospace monitoring software hosted in AWS. Set up IP routing tables for connecting radars across a VPN router to Fortem's HQ network.",
      achievements: [
        "Managed all CI/CD processes, cloud resources, and software distribution",
        "Implemented OpenVPN and Certificate Authority servers for client on-premise radar installations",
        "Set up IP routing tables for connecting radars across VPN to Fortem's HQ network",
      ],
      skills: [
        "Web Development",
        "Linux",
        "AWS Lambda",
        "Python",
        "Cloud Computing",
        "Microservices",
        "React.js",
        "Node.js",
        "CSS",
        "Mentoring",
        "JavaScript",
        "Agile Methodologies",
        "Team Building",
        "DevOps",
        "Amazon Web Services (AWS)",
        "Teamwork",
        "Web Design",
      ],
      logo: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/857b70b4-cf15-49ef-aa93-967bba9eebf2/fortem.svg",
    },
    {
      id: ExperienceID.FORTEM_TECHNOLOGIES,
      title: "Software Engineering Manager",
      company: "Fortem Technologies",
      location: "Pleasant Grove, Utah, United States · On-site",
      startDate: "Sep 2019",
      endDate: "Sep 2020",
      duration: "1 yr 1 mo",
      description:
        "Managed a team of 7 software engineers for developing SkyDome, a web-based C-UAS / aerospace monitoring solution that connects radars, drones, RF sensors, cameras, and other devices. Drove improvements to company culture by creating an anonymous survey to gauge employee satisfaction across the company and make issues transparent. Enabled an agile development environment by adding standups, planning meetings, and retrospectives into the team processes.",
      achievements: [
        "Managed a team of 7 software engineers for developing SkyDome",
        "Drove improvements to company culture by creating anonymous employee satisfaction surveys",
        "Enabled an agile development environment with standups, planning meetings, and retrospectives",
      ],
      skills: [
        "Web Development",
        "Leadership",
        "Linux",
        "AWS Lambda",
        "Python",
        "Cloud Computing",
        "Microservices",
        "React.js",
        "Node.js",
        "CSS",
        "Mentoring",
        "JavaScript",
        "Agile Methodologies",
        "Team Building",
        "Amazon Web Services (AWS)",
        "Teamwork",
      ],
      logo: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/857b70b4-cf15-49ef-aa93-967bba9eebf2/fortem.svg",
    },
    {
      id: ExperienceID.NIKE,
      title: "Senior Full Stack Engineer",
      company: "Nike",
      location: "Portland, Oregon Area · On-site",
      startDate: "Apr 2017",
      endDate: "Dec 2020",
      duration: "3 yrs 9 mos",
      description:
        "This is a full stack engineering role on a tiger team which drives software infrastructure monitoring, costs saving, and quality initiatives across Nike's digital commerce organization. I developed tools for monitoring and maintaining infrastructure for Nike's SNKRS drops.",
      achievements: [
        "Developed tools for monitoring and maintaining infrastructure for Nike's SNKRS drops",
        "Drove software infrastructure monitoring, cost saving, and quality initiatives",
      ],
      skills: [
        "Java",
        "Web Development",
        "Python",
        "Cloud Computing",
        "Microservices",
        "React.js",
        "CSS",
        "JavaScript",
        "Agile Methodologies",
        "Team Building",
        "DevOps",
        "Amazon Web Services (AWS)",
        "Teamwork",
        "Web Design",
      ],
      logo: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af486fc6-15de-4afd-be33-747c27cf740d/nike.svg",
    },
    {
      id: ExperienceID.SPILLMAN_TECHNOLOGIES,
      title: "Senior Java Web Developer",
      company: "Spillman Technologies",
      location: "West Valley City, Utah, United States · On-site",
      startDate: "Jan 2014",
      endDate: "Apr 2017",
      duration: "3 yrs 4 mos",
      description:
        "Full stack web development on hosted law enforcement and private security record management systems by using Java EE, SQL, and Primefaces",
      achievements: [
        "Full stack web development on hosted law enforcement and private security record management systems",
      ],
      skills: [
        "Java",
        "Web Development",
        "CSS",
        "Mentoring",
        "JavaScript",
        "Agile Methodologies",
        "Team Building",
        "Teamwork",
        "SQL",
        "Web Design",
      ],
      logo: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/13959b75-ede4-4ec5-b320-f0c7fee7af8c/motorola.png",
    },
    {
      id: ExperienceID.SPILLMAN_TECHNOLOGIES,
      title: "Lead Web Developer Intern",
      company: "Spillman Technologies",
      location: "West Valley City, Utah, United States · On-site",
      startDate: "Jul 2013",
      endDate: "Dec 2013",
      duration: "6 mos",
      description: "Internship role at Spillman Technologies",
      achievements: [],
      skills: [],
      logo: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/13959b75-ede4-4ec5-b320-f0c7fee7af8c/motorola.png",
    },
    {
      id: ExperienceID.SCHAWEL_COLES,
      title: "Front End Web Developer",
      company: "SCHAWEL+COLES",
      location: "Greater Salt Lake City Area",
      startDate: "Aug 2013",
      endDate: "Dec 2013",
      duration: "5 mos",
      description: "Internship role at SCHAWEL+COLES",
      achievements: [],
      skills: [],
      logo: "",
    },
    {
      id: ExperienceID.REI_SYSTEMS,
      title: "PHP App Developer Intern",
      company: "REI Systems",
      location: "Greater Salt Lake City Area",
      startDate: "Apr 2013",
      endDate: "Jun 2013",
      duration: "3 mos",
      description: "Internship role at REI Systems",
      achievements: [],
      skills: [],
      logo: "",
    },
  ],

  // Skills
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Java"],
    frameworks: ["React.js", "React Native", "Next.js", "Node.js", "Expo"],
    tools: [
      "Amazon Web Services (AWS)",
      "AWS Lambda",
      "PostgreSQL",
      "Google Cloud Platform (GCP)",
      "Blockchain",
      "Amazon Bedrock",
    ],
    other: [
      "Web Development",
      "Mobile Application Development",
      "Full Stack Development",
      "Cloud Computing",
      "AI Integration",
    ],
  },

  // Projects
  projects: [
    {
      title: "Blueprint Biomarkers",
      description:
        "Science backed and AI driven health platform. Built MVP backend infrastructure using AWS serverless to power labs and health tracking systems.",
      technologies: [
        "Amazon Web Services (AWS)",
        "Next.js",
        "Serverless",
        "AI",
      ],
      link: "https://blueprintbiomarkers.com", // Add live demo URL if available
      github: "", // Add GitHub URL if available
      image: "/images/projects/blueprint-biomarkers-screenshot-1.png", // Using company logo as project image
      startDate: "Aug 2024",
      endDate: "Present",
      experienceId: ExperienceID.BLUEPRINT,
    },
    {
      title: "Don't Die App",
      description:
        "Health and wellness social app with 100K+ users. Designed and built the mobile app using React Native with blockchain integration.",
      technologies: [
        "React Native",
        "Amazon Web Services (AWS)",
        "Blockchain",
        "Mobile Development",
      ],
      link: "", // Add app store link if available
      github: "", // Add GitHub URL if available
      image: "/images/projects/dont-die-app-screenshot-1.webp", // Using company logo as project image
      startDate: "Aug 2024",
      endDate: "Present",
      experienceId: ExperienceID.DONT_DIE,
    },
    {
      title: "Better Blood",
      description:
        "Private biomarker tracking platform developed as a 503(c)(3) non-profit organization to provide free, private health technology to everyone.",
      technologies: ["React.js", "Google Cloud Platform (GCP)", "Health Tech"],
      link: "https://app.betterblood.ai/",
      github: "https://github.com/BetterBloodInc/better-blood-web-app",
      image: "/images/projects/better-blood-screen-shot-1.png",
      startDate: "Jan 2024",
      endDate: "Aug 2024",
      experienceId: ExperienceID.BETTER_BLOOD,
    },
    {
      title: "eoFlix",
      description:
        "Social platform for filmmakers to connect, find opportunities, and sell their work. The ultimate platform for film festivals. LinkedIn meets Netflix - entertainment professional networking platform with built-in streaming capabilities.",
      technologies: [
        "TypeScript",
        "Expo",
        "React Native",
        "React",
        "Next.js",
        "AWS Lambda",
        "Social Platform",
      ],
      link: "https://app.entertainmentoxygen.com", // Web app URL
      github: "", // Add GitHub URL if available
      image: "/images/projects/eoflix.png", // Project image
      startDate: "May 2022",
      endDate: "Aug 2024",
      experienceId: ExperienceID.EOFLIX,
    },
    {
      title: "Midgard",
      description:
        "AWS monitoring & scaling operations dashboard. Internal tool used by hundreds of engineers at Nike for managing over 3,000 AWS Autoscaling Groups. Replaced Asgard, a tool created by Netflix. Midgard's caching strategy saved hundreds of engineers from AWS API throttling.",
      technologies: ["JavaScript", "Apache FTL", "Java", "AWS", "Spring MVC"],
      link: "", // Internal tool, no public URL
      github: "", // Add GitHub URL if available
      image: "/images/projects/midgard.png",
      startDate: "Apr 2017",
      endDate: "Dec 2020",
      experienceId: ExperienceID.NIKE,
    },
    {
      title: "YummiNinja",
      description:
        "Online menu and ordering platform for restaurants. Cloud-based platform to simplify the online experience for restaurants and their customers.",
      technologies: ["React", "GraphQL", "GCP", "Golang", "Prisma", "Postgres"],
      link: "https://yummi.ninja",
      github: "", // Add GitHub URL if available
      image: "/images/projects/yummininja.png",
      startDate: "2021",
      endDate: "2022",
      // No specific company - built with Wayfair colleague but not a Wayfair project
    },
    {
      title: "SkyDome",
      description:
        "Aerospace monitoring for command and control. Web-based C-UAS / aerospace monitoring solution that connects radars, drones, RF sensors, cameras, and other devices.",
      technologies: ["Angular", "AWS", "Linux", "MongoDB", "NodeJS"],
      link: "https://fortemtech.com/products/skydome-manager/",
      github: "", // Add GitHub URL if available
      image: "/images/projects/skydome.png",
      startDate: "Sep 2019",
      endDate: "Sep 2020",
      experienceId: ExperienceID.FORTEM_TECHNOLOGIES,
    },
    {
      title: "Apishare",
      description:
        "API sharing and documentation tool for developers and product folks to easily create and share API documentation of their services.",
      technologies: ["React", "AWS", "TypeScript", "REST API"],
      link: "", // Currently not hosted
      github: "", // Add GitHub URL if available
      image: "/images/projects/apishare.avif",
      startDate: "2020",
      endDate: "2021",
      // No specific company - personal project
    },
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Science (BS), Computer Science",
      institution: "Neumont University",
      location: "Utah, United States",
      year: "Jul 2011 - Dec 2013",
      description:
        "Graduated Magna Cum Laude. Completed this project-focused program in 2.5 years. Capstone project: Built and demoed a 2d chemical and particle physics simulator in C++ using the Qt UI framework.",
      logo: "/images/education/neumont.jpeg", // Local image path
    },
    {
      degree: "Startup School",
      institution: "Y Combinator",
      location: "Remote",
      year: "Aug 2021 - Oct 2021",
      description:
        "Completed 12 weeks of company updates and all course material.",
      logo: "", // Add logo if available
    },
  ],

  // Certifications (optional - can be displayed separately if needed)
  certifications: [
    {
      name: "Full Stack Developer",
      issuer: "Toptal",
      date: "Feb 2022",
    },
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "May 2018 - May 2020",
    },
  ],

  // Blog Posts
  blog: [
    {
      id: "technology",
      title: "AI and Agency",
      excerpt:
        "This is where I'll be sharing my thoughts on software development, technology, and my experiences building products.",
      content: `# AI and Agency
I have been studying and thinking a lot about AI and the future for humanity. I believe the future we should build towards and will likely be the outcome is that abundance will give everyone maximum agency with minimum consequence.

## Seatbelts
Before seatbelts were invented, we had more restrictive speed limits to reduce accident mortality rates. However, we now are able to drive much faster with less risk due to seatbelts. I believe it will be the same with AI. People will be able to take on much more risk than they used to and get more rewards. 
I foresee a future where have more freedom than at any other time. We won't need to work. We can just do whatever we want. I think this is better than the alternative, which is being enslaved by our technology and those who control it.`,
      date: "Dec 27, 2025",
      tags: ["AI", "Future", "Humanity"],
      readTime: "2 min read",
    },
  ],
};
