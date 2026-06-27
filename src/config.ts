export interface TechItem {
    name: string;
    icon: string;
    url: string;
}

export const config = {
    showWork: false,
    developer: {
        name: "Fulaji",
        fullName: "Fulaji Thakor",
        initials: "FT",
        loaderTitle: "FulajiThakor",
        title: "Lead Full Stack Engineer | Backend & VoIP Specialist",
        description: "Lead Full Stack Engineer with 7+ years of experience building and scaling VoIP-based SaaS platforms and backend systems. Deep expertise in Node.js, Laravel, real-time communication (Socket.IO), and multi-provider VoIP integration (Twilio, Telnyx, SignalWire)."
    },
    social: {
        github: "fvthakor",
        email: "fvthakor11@gmail.com",
        location: "Gandhinagar, Gujarat, India"
    },
    about: {
        title: "About Me",
        description: "Lead Full Stack Engineer with 7+ years of experience building and scaling VoIP-based SaaS platforms and backend systems. Deep expertise in Node.js, Laravel, real-time communication via Socket.IO, and multi-provider VoIP integration with Twilio, Telnyx, and SignalWire. Proven ability to architect high-throughput call routing engines, bulk messaging platforms, and live monitoring systems. Complements backend strength with solid frontend skills in Angular, Vue, and React to deliver end-to-end production-ready solutions."
    },
    experiences: [
        {
            position: "Freelance Full Stack Engineer",
            company: "Self-Employed",
            period: "Apr 2026 - Present",
            location: "Gandhinagar, Gujarat, India",
            description: "Working independently on VoIP, real-time communication, and full-stack web projects. Building scalable backend systems and integrating multi-provider telephony solutions for clients.",
            responsibilities: [
                "Designing and building VoIP and real-time communication systems for clients",
                "Integrating Twilio, Telnyx, and SignalWire for call routing and messaging",
                "Developing full-stack web applications using Node.js, Laravel, and React",
                "Managing end-to-end project delivery from architecture to deployment"
            ],
            technologies: ["Node.js", "Laravel", "Twilio", "Socket.IO", "React", "Vue.js", "MySQL", "MongoDB"]
        },
        {
            position: "Senior Full Stack Developer / Lead Engineer",
            company: "Digipine Infotech LLP",
            period: "Aug 2023 - Apr 2026",
            location: "Gandhinagar, Gujarat, India",
            description: "Lead backend architecture for VoIP and messaging SaaS platforms. Designed scalable call routing engines and built real-time live monitoring systems.",
            responsibilities: [
                "Lead backend architecture for VoIP and messaging SaaS platforms",
                "Designed scalable call routing engines with capacity (daily/monthly/global) and priority rules",
                "Integrated Twilio, Telnyx, and SignalWire for inbound/outbound calls, SMS, ringless voicemail & recordings",
                "Built real-time dashboards and live call tracking (barge & whisper) using Socket.IO",
                "Implemented Stripe billing, spam call filtering (IPQS), and Redis caching for performance"
            ],
            technologies: ["Node.js", "Express.js", "Socket.IO", "Angular 17", "Redis", "MongoDB", "Twilio", "Telnyx", "SignalWire", "Stripe"]
        },
        {
            position: "Senior Associate (Node.js)",
            company: "DRC Systems",
            period: "Mar 2023 - Aug 2023",
            location: "Gandhinagar, Gujarat, India",
            description: "Developed secure and scalable REST APIs using Node.js. Improved database performance and application scalability for production systems.",
            responsibilities: [
                "Developed secure and scalable REST APIs using Node.js",
                "Improved database performance and application scalability for production systems"
            ],
            technologies: ["Node.js", "REST APIs", "MySQL", "MongoDB", "Performance Optimization"]
        },
        {
            position: "Full Stack Developer",
            company: "Xsquare Technology",
            period: "Dec 2021 - Feb 2023",
            location: "Gandhinagar, Gujarat, India",
            description: "Built real-time web applications using Node.js, Angular, Vue.js, and Socket.IO. Owned backend API development while actively contributing to frontend UI.",
            responsibilities: [
                "Built real-time web applications using Node.js, Angular, Vue.js, and Socket.IO",
                "Owned backend API development while actively contributing to frontend UI"
            ],
            technologies: ["Node.js", "Angular", "Vue.js", "Socket.IO", "REST APIs", "MongoDB"]
        },
        {
            position: "Web Developer",
            company: "Xsquare Technology",
            period: "Mar 2018 - Oct 2021",
            location: "Gandhinagar, Gujarat, India",
            description: "Delivered multiple production-grade web applications using CodeIgniter, Laravel, Node.js, Vue, and Angular. Worked across e-commerce, CMS, VoIP, and communication domains.",
            responsibilities: [
                "Delivered multiple production-grade web applications using CodeIgniter, Laravel, Node.js, Vue, and Angular",
                "Worked across e-commerce, CMS, VOIP, and communication domains"
            ],
            technologies: ["CodeIgniter", "Laravel", "Node.js", "Vue.js", "Angular", "MySQL", "PHP"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Drishti",
            category: "AI / LLM",
            technologies: "Python, PyTorch, Transformers, FastAPI, React, MongoDB",
            image: "/images/drishti.png",
            description: "Bangladesh's first intelligent advanced AI chatbot powered by a custom Large Language Model. Features natural language understanding, contextual conversations, and multilingual support including Bengali."
        },
        {
            id: 2,
            title: "VoteChain",
            category: "Blockchain",
            technologies: "Solidity, Web3.js, React, Ethereum, IPFS, MetaMask, Node.js",
            image: "/images/votechain.png",
            description: "A decentralized election system built on blockchain technology ensuring transparent, tamper-proof, and verifiable voting. Features smart contracts for vote integrity and real-time result tracking."
        },
        {
            id: 3,
            title: "EIE - Earthquake Impact Estimator",
            category: "IoT / Hardware",
            technologies: "Arduino, C++, IoT Sensors, Python, ML, React",
            image: "/images/eie.png",
            description: "A practical circuit-based IoT system utilizing Arduino to predict earthquakes before they strike. Integrates hardware sensors for real-time seismic detection and impact estimation."
        },
        {
            id: 4,
            title: "GameKroy",
            category: "Full Stack",
            technologies: "React, Node.js, MongoDB, Express, Stripe, TailwindCSS",
            image: "/images/gamekroy.png",
            description: "A full-featured e-commerce platform for gaming products. Includes user authentication, product catalog, shopping cart, secure payments, order tracking, and admin dashboard."
        },
        {
            id: 5,
            title: "RedxChess",
            category: "AI / Game Engine",
            technologies: "Python, C++, Neural Networks, Bitboards, UCI Protocol",
            image: "/images/redxchess.png",
            description: "A high-performance chess engine rated 3640 ELO. Features advanced search algorithms, neural network evaluation, and optimized bitboard representation for lightning-fast move generation."
        },
        {
            id: 6,
            title: "Floodhub",
            category: "AI / ML",
            technologies: "Python, TensorFlow, Pandas, React, FastAPI, GIS",
            image: "/images/floodhub.png",
            description: "A flood prediction model specifically designed for Bangladesh's river systems. Analyzes weather patterns, water levels, and historical data to provide accurate flood forecasts and alerts."
        },
        {
            id: 7,
            title: "Phoenix",
            category: "AI Assistant",
            technologies: "Python, Speech Recognition, PyAutoGUI, OpenAI API, Tkinter",
            image: "/images/phoenix.png",
            description: "A JARVIS-inspired personal AI desktop assistant. Controls system functions, manages tasks, answers queries, automates workflows, and provides voice-activated computing experience."
        },
        {
            id: 8,
            title: "HekTools",
            category: "Security / Android",
            technologies: "Kotlin, Android SDK, Firebase, Python, Encryption",
            image: "/images/hektools.png",
            description: "An advanced Android monitoring and security research tool. Features remote device management, activity logging, and encrypted data transmission for security testing purposes."
        }
    ],
    contact: {
        email: "fvthakor11@gmail.com",
        github: "https://github.com/fvthakor",
        linkedin: "https://linkedin.com/in/fulaji-thakor",
        upwork: "https://www.upwork.com/freelancers/~01c11f698f970bf12d",
        instagram: "https://www.instagram.com/fvthakor1993"
    },
    techStack: [
        [
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", url: "https://php.net" },
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
            { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", url: "https://nestjs.com" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", url: "https://laravel.com" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
            { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", url: "https://vuejs.org" },
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", url: "https://angular.io" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
        ],
        [
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com" },
            { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg", url: "https://codeigniter.com" },
            { name: "AdonisJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg", url: "https://adonisjs.com" },
            { name: "Socket.IO", icon: "https://cdn.simpleicons.org/socketdotio/010101", url: "https://socket.io" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", url: "https://redis.io" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
        ],
        [
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com" },
            { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com" },
            { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg", url: "https://digitalocean.com" },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
            { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", url: "https://www.gnu.org/software/bash/" },
        ],
        [
            { name: "Twilio", icon: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg", url: "https://twilio.com" },
            { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF", url: "https://stripe.com" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
            { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", url: "https://nginx.org" },
        ],
        [
            { name: "Razorpay", icon: "https://cdn.simpleicons.org/razorpay/02042B", url: "https://razorpay.com" },
            { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", url: "https://webpack.js.org" },
            { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
            { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg", url: "https://ubuntu.com" },
        ],
        [
            { name: "Vonage", icon: "https://www.vectorlogo.zone/logos/vonage/vonage-icon.svg", url: "https://vonage.com" },
            { name: "SignalWire", icon: "https://avatars.githubusercontent.com/u/43100554?s=200&v=4", url: "https://signalwire.com" },
        ],
    ] as TechItem[][],
    skills: {
        develop: {
            title: "BACKEND & VOIP",
            description: "Scalable VoIP systems & real-time communication",
            details: "Architecting high-throughput call routing engines, bulk messaging platforms, and live monitoring systems using Node.js, NestJS, Laravel, and Socket.IO. Multi-provider VoIP integration with Twilio, Telnyx, SignalWire, Plivo, and Vonage.",
            tools: ["Node.js", "NestJS", "AdonisJS", "Laravel", "CodeIgniter", "Socket.IO", "Twilio", "Telnyx", "SignalWire", "Microservices"]
        },
        design: {
            title: "FULL-STACK",
            description: "Modern frontend & scalable web applications",
            details: "Building responsive, real-time web applications using Angular, Vue.js, and React with TypeScript. Creating live dashboards, browser-based calling interfaces, and seamless user experiences backed by REST APIs.",
            tools: ["Angular", "Vue.js", "React.js", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind", "Bootstrap", "REST APIs"]
        }
    }
};
