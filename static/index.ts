import { Icons } from "@/public/stack/icons";

export const navItems = [
  { name: "About", link: "#about", icon: Icons.about },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "You can trust me like you trust your partners. Share ideas and communicate your dreams easily.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-white bodyTwo",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Let me build your dreams while you go to sleep",
    description: "I work across time zones",
    // description: "Our different time zones won't be a problem",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    // titleClassName: "justify-start",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "I build applications using these",
    // description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I have experience in onsite and distributed team environments.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "I am daring and open to familiarize myself with any stack your team uses.",
    description: "Fun Fact:",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Afri Foods Ltd",
    des: "A fruits and vegerables e-commerce platform with a modern design and a user-friendly interface.",
    img: "/pro/afrifoods.png",
    iconLists: ["/re.svg", "/redux.svg", "/tail.svg", "/javascript.svg"],
    link: "https://afrifoods.vercel.app/",
  },
  {
    id: 2,
    title: "Voom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Voom. Seamlessly connect with colleagues and friends.",
    img: "/pro/voom.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://voom-call-app.vercel.app/",
  },
  {
    id: 3,
    title: "Evently",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/pro/evently.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongo.svg", "/c.svg"],
    link: "https://evently-web-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "Crown Clothing Shop",
    des: "Built a clothing store using Redux and Redux toolkit, firebase for authentication and data storage.",
    img: "/pro/crown.png",
    iconLists: [
      "/javascript.svg",
      "/stack/sass-Light.svg",
      "/redux.svg",
      "/stack/firebase-Light.svg",
    ],
    link: "https://crownshops.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Emmanuel transformed our outdated website into a modern, responsive masterpiece. The user experience is now seamless across all devices, and our conversion rates have skyrocketed.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with this Emmanuel was a game-changer for our web app. He implemented complex features with ease, significantly improving performance and reducing load times.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "We were impressed by how quickly Emmanuel adapted to our tech stack and delivered high-quality code. Their expertise in React and Redux took our project to the next level.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Emmanuel's proficiency in TypeScript and his commitment to writing clean, maintainable code has made our codebase a joy to work with. Future updates and scaling will be much easier.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer, Afri Foods Ltd",
    desc: "To give the company website a new look, I made use of ReactJS and TailwindCSS amongst other technologies, industry standard and modern patterns to build a scalable and maintainable application.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer, Nervelabs Innovative Africa",
    desc: "I developed a number of web applications including an order tracking system for users as well and Event management application for events of all sizes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer, Matriks Hub",
    desc: "Led the development team to rebuild the tech hub's website using HeadlessUI and TailwindCSS and also provided technical guide to trainees on live projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer, Zuri Chat",
    desc: "Worked closely with team members to create consistent, reusable, and maintainable code. I also implemented new features and fixed bugs on the company's website.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/EmmanuelOkon",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/eo-udo/",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://x.com/EO_Udo",
  },
];
