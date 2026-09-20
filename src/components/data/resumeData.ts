// export const experience = [
//     {
//         position: "Frontend Mastery",
//         company: "Online code school",
//         startDate: "2018",
//         endDate: "2019",
//         description: `I've honed my front-end skills through online coding school and INFOSYS IIT, mastering technologies like React, Next.JS, and React Native. I am able to create high-performance, responsive, and visually-appealing user interfaces, utilizing latest front-end engineering techniques and best practices. My strong attention to detail and ability to understand user needs make me a valuable asset to any team looking to create top-notch web applications.`,
//     },
//     {
//         position: "Lead Backend Engineer",
//         company: "INFOSYS IIT Software",
//         startDate: "2019",
//         endDate: "2021",
//         description:
//             "I am a highly passionate lead backend engineer with expertise in Core Python, Django & Python Scripting. My experience in building scalable and efficient backends for web and mobile applications has been honed since 2018. My skills include mastery of database design, RESTful API development, and performance optimization. With a deep love for coding in Python, I am dedicated to creating top-quality solutions on problems by clean and robust programmatic approaches.",
//     },
//     {
//         position: "Data structuring and Algorithmic approach With AI concepts",
//         company: "INFOSYS",
//         startDate: "2023",
//         endDate: "2024",
//         description: `I have a strong background in data structuring and algorithm implementation using Python, gained through my education at INFOSYS IIT. I am able to effectively work with large datasets, and use advanced techniques such as machine learning and statistical modeling to extract insights and make data-driven decisions. My ability to communicate complex findings in a clear and concise manner makes me an excellent asset to any team looking for a skilled data engineer.`,
//     },
// ];

export const experience = [
	{
		id: 1,
		position: "Full Stack Engineer",
		company: "KeyTax Accountants Ltd",
		logo: "/images/companies-logo/keytax.png",
		startDate: { month: "May", year: "2026" },
		endDate: { month: "Present", year: "" },
		description: `Fostered the best solution in reshaping and efficiency of the product EDOC21, ready to business and challenge the existing bookkeeping software solutions in UK market. Delivered highly optimized code based over the previous work the company was willing for and turned the idea into a business ready product that offers competitive features to the accounting firms in UK, following best pricing model to maintain the company expenses with only 4 client firms each month to fulfil the running system cost.`,
		achievements: [
			{
				id: 1,
				text: "Reshaped and optimized EDOC21 product for UK bookkeeping market",
				metrics: "Business-ready product",
			},
			{
				id: 2,
				text: "Delivered competitive features with sustainable pricing model",
				metrics: "4 client firms/month",
			},
		],
		technologies: [
			"Django",
			"React",
			"TypeScript",
			"PostgreSQL",
			"Docker",
			"REST API",
		],
		companyUrl: "https://keytax.co.uk",
	},
	{
		id: 2,
		position: "Full Stack Engineer",
		company: "Propertier pvt ltd",
		logo: "/images/companies-logo/propertier_logo.png",
		startDate: { month: "Nov", year: "2024" },
		endDate: { month: "April", year: "2026" },
		description: `Led and managed the development flow of enterprise-level full-stack web and hybrid mobile application of Propertier pvt ltd. Provided high quality and optimized code based solution over the previous implementations and fostered a centralized multi container application workflow.`,
		achievements: [
			{
				id: 1,
				text: "Led development of enterprise-level full-stack web and hybrid mobile applications",
				metrics: "Enterprise-scale",
			},
			{
				id: 2,
				text: "Fostered centralized multi-container application workflow",
				metrics: "Improved architecture",
			},
		],
		technologies: [
			"Django",
			"React Native",
			"Next.js",
			"PostgreSQL",
			"Docker",
			"RabbitMQ",
			"Prometheus",
			"Grafana",
			"WebSockets",
			"ElasticSearch",
		],
		companyUrl: "https://thepropertier.com",
	},
	{
		id: 3,
		position: "Senior Full Stack Engineer",
		company: "Infintrix Technologies",
		logo: "/images/companies-logo/infintrix_logo.jpeg",
		startDate: { month: "Jan", year: "2024" },
		endDate: { month: "Nov", year: "2024" },
		description: `Led the development of enterprise-level full-stack applications and achieved a 25% increase in operational efficiency. Working as a Senior Full Stack engineer role Being a team lead I managed and performed on various projects. Crafting high-quality frontend and robust application back-end with cutting edge technologies using Django/React/Next.JS.`,
		achievements: [
			{
				id: 1,
				text: "Achieved 25% increase in operational efficiency",
				metrics: "+25% efficiency",
			},
			{
				id: 2,
				text: "Led team and managed various enterprise projects",
				metrics: "Team leadership",
			},
		],
		technologies: [
			"Django",
			"React",
			"Next.js",
			"PostgreSQL",
			"Docker",
			"TypeScript",
			"CI/CD",
		],
		companyUrl: "https://infintrixtech.com",
	},
	{
		id: 4,
		position: "Full Stack Web Developer",
		company: "Infosys IIT",
		logo: "/images/companies-logo/infosys_logo.jpg",
		startDate: { month: "May", year: "2021" },
		endDate: { month: "Dec", year: "2022" },
		description: `Worked as a Django/React Developer lead in projects for various clients of Infosys IIT. Built application pages on React.js on the client side and collaborated with back-end developers on the integration of elements.`,
		achievements: [
			{
				id: 1,
				text: "Led Django/React development projects for various clients",
				metrics: "Project leadership",
			},
			{
				id: 2,
				text: "Built responsive React.js applications and integrated with backend systems",
				metrics: "Full-stack integration",
			},
		],
		technologies: [
			"Django",
			"React.js",
			"PostgreSQL",
			"SQLite3",
			"MySQL",
			"Docker",
			"RabbitMQ",
			"Redis",
			"Celery",
		],
		companyUrl: "http://www.infosys.pk",
	},
];

export const education = [
	{
		id: 1,
		degree: "Bachelor of Science - Computer Science",
		school: "Govt College University Faisalabad",
		logo: "/images/companies-logo/gcuf-logo.png",
		startDate: { month: "Aug", year: "2019" },
		endDate: { month: "July", year: "2023" },
		description: `Graduated with a Bachelor's in Computer Science from Govt College University Faisalabad. My award-winning final year project, "jsbook-qandeel," allows for writing and running React code in the browser, with the added functionality of saving code and taking notes.`,
		schoolUrl: "https://gcuf.edu.pk",
	},
];
