import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.7,
			ease: "easeOut",
		},
	}),
};

const projects = [
	{
		title: "Data Mart de Ventas - Tai Loy",
		description: "Implementación con SQL Server y Power BI para análisis de ventas.",
		tech: ["SQL Server", "Power BI"],
	},
	{
		title: "Sistema Web de Citas - Clínica Izaguirre",
		description: "Desarrollo web integral para gestión de citas médicas.",
		tech: ["Java", "SQL Server", "React"],
	},
	{
		title: "Proyectos Backend",
		description: "Más de 10 aplicaciones en Python/SQLite y CRUD-MVC en Java.",
		tech: ["Python", "SQLite", "Java"],
	},
];

const skills = [
	"Java (NetBeans)",
	"Python",
	"Node.js",
	"PHP (MVC)",
	"SQL Server",
	"MySQL",
	"MongoDB",
	"SQLite",
	"AWS (EC2, S3, IAM)",
	"Git/GitHub",
	"Docker",
	"Power BI",
];

export default function Home() {
	return (
		<main className="min-h-screen bg-[#0a0a0a] text-[#ededed] flex flex-col items-center px-4 md:px-0">
			{/* Hero Section */}
			<motion.section
				initial="hidden"
				animate="visible"
				variants={fadeIn}
				className="w-full max-w-2xl py-16 flex flex-col items-center"
			>
				<motion.h1
					variants={fadeIn}
					custom={1}
					className="text-4xl md:text-5xl font-bold text-[#ededed] mb-4 text-center"
				>
					Kevin Arny Silva Paredes
				</motion.h1>
				<motion.h2
					variants={fadeIn}
					custom={2}
					className="text-xl md:text-2xl font-semibold text-cyan-400 mb-2 text-center"
				>
					Ingeniero de Sistemas | Java & AWS Developer
				</motion.h2>
				<motion.p
					variants={fadeIn}
					custom={3}
					className="text-base md:text-lg text-gray-400 mb-6 text-center"
				>
					Estudiante de 10mo ciclo de Ingeniería de Sistemas e Informática. Apasionado por el desarrollo fullstack, la escalabilidad y soluciones cloud en AWS. Experiencia en backend Java/API REST, gestión de datos y visualización con SQL Server y Power BI.
				</motion.p>
				<motion.div
					variants={fadeIn}
					custom={4}
					className="flex gap-4 mt-2"
				>
					<Link href="https://linkedin.com/in/kevin-silva-paredes-936646343" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
						<svg width="24" height="24" fill="currentColor" className="inline mr-1"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-9 19H5V9h5v10zm-2.5-11.25c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm13.5 11.25h-5v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5h-5V9h5v1.5c.88-1.32 2.5-2.5 4.5-2.5 2.76 0 5 2.24 5 5v6z"/></svg>
						LinkedIn
					</Link>
					<a href="mailto:kevinsilvap1998@hotmail.com" className="hover:text-cyan-400 transition-colors">
						<svg width="24" height="24" fill="currentColor" className="inline mr-1"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z"/></svg>
						kevinsilvap1998@hotmail.com
					</a>
				</motion.div>
			</motion.section>

			{/* Skills Section */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeIn}
				className="w-full max-w-2xl mb-12"
			>
				<motion.h3
					variants={fadeIn}
					custom={1}
					className="text-2xl font-semibold text-cyan-400 mb-4"
				>
					Tech Stack
				</motion.h3>
				<motion.ul
					variants={fadeIn}
					custom={2}
					className="flex flex-wrap gap-2"
				>
					{skills.map((skill, i) => (
						<motion.li
							key={skill}
							variants={fadeIn}
							custom={i + 1}
							className="px-3 py-1 bg-gray-800 text-gray-200 rounded-lg text-sm shadow-sm border border-cyan-700"
						>
							{skill}
						</motion.li>
					))}
				</motion.ul>
			</motion.section>

			{/* Projects Section */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeIn}
				className="w-full max-w-2xl mb-12"
			>
				<motion.h3
					variants={fadeIn}
					custom={1}
					className="text-2xl font-semibold text-cyan-400 mb-4"
				>
					Experiencia & Proyectos
				</motion.h3>
				<div className="grid gap-6">
					{projects.map((project, i) => (
						<motion.div
							key={project.title}
							variants={fadeIn}
							custom={i + 1}
							className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-700/30 transition-shadow group"
						>
							<h4 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
							<p className="text-gray-400 mb-2">{project.description}</p>
							<div className="flex flex-wrap gap-2 mt-2">
								{project.tech.map((tech) => (
									<span key={tech} className="px-2 py-0.5 bg-cyan-900 text-cyan-200 rounded text-xs border border-cyan-700">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Logros Section */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeIn}
				className="w-full max-w-2xl mb-16"
			>
				<motion.h3
					variants={fadeIn}
					custom={1}
					className="text-2xl font-semibold text-cyan-400 mb-4"
				>
					Logros Destacados
				</motion.h3>
				<motion.ul
					variants={fadeIn}
					custom={2}
					className="list-disc list-inside text-gray-300"
				>
					<motion.li variants={fadeIn} custom={3} className="mb-2">Beca por Excelencia Académica UTP (2022 - 2024)</motion.li>
					<motion.li variants={fadeIn} custom={4} className="mb-2">Certificación Scrum Fundamentals Certified (SFC™)</motion.li>
					<motion.li variants={fadeIn} custom={5} className="mb-2">Ganador del concurso de Networking 2024</motion.li>
				</motion.ul>
			</motion.section>
		</main>
	);
}
