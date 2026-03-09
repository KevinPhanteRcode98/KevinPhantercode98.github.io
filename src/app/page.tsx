"use client";
import { motion, easeOut } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const techStack = [
	{
		name: "Java",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="18" ry="18" fill="#F89820"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="Arial">J</text></svg>
		),
	},
	{
		name: "Python",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#3776AB"/><text x="50%" y="55%" textAnchor="middle" fill="#FFD43B" fontSize="16" fontWeight="bold" fontFamily="Arial">Py</text></svg>
		),
	},
	{
		name: "Node.js",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#68A063"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">Node</text></svg>
		),
	},
	{
		name: "PHP (MVC)",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#777BB4"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">PHP</text></svg>
		),
	},
	{
		name: "SQL Server",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#CC2927"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">SQL</text></svg>
		),
	},
	{
		name: "MySQL",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#00758F"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">MySQL</text></svg>
		),
	},
	{
		name: "MongoDB",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#4DB33D"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">Mongo</text></svg>
		),
	},
	{
		name: "SQLite",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#003B57"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">SQLite</text></svg>
		),
	},
	{
		name: "AWS",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="18" ry="18" fill="#232F3E"/><text x="50%" y="55%" textAnchor="middle" fill="#FF9900" fontSize="14" fontWeight="bold" fontFamily="Arial">AWS</text></svg>
		),
	},
	{
		name: "Git/GitHub",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="18" ry="18" fill="#181717"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">Git</text></svg>
		),
	},
	{
		name: "Docker",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#2496ED"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">Docker</text></svg>
		),
	},
	{
		name: "Power BI",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#F2C811"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">BI</text></svg>
		),
	},
];

const fadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: easeOut,
		},
	},
};

const staggerContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.18,
		},
	},
};
const projectCardMotion = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function Home() {
	return (
		<div className="min-h-screen bg-[#101010] text-gray-200">
			{/* Cover Image */}
			<div className="relative w-full h-55 md:h-80">
				<Image
					src="/portada.jpeg"
					alt="Portada"
					fill
					className="object-cover"
					priority
					unoptimized
				/>
				{/* Profile Image */}
				<div className="absolute left-1/2 top-[70%] md:top-[60%] transform -translate-x-1/2 -translate-y-1/2">
					<Image
						src="/foto-perfil.jpeg"
						alt="Foto de perfil"
						width={140}
						height={140}
						className="rounded-full border-4 border-cyan-400 shadow-lg bg-[#101010]"
						priority
						unoptimized
					/>
				</div>
			</div>

			{/* Main Content */}
			<main className="max-w-3xl mx-auto px-4 pt-32 pb-12">
				{/* Hero Section */}
				<motion.section
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					className="text-center mb-8"
				>
					<h1 className="text-4xl md:text-5xl font-bold mb-2">
						Kevin Arny Silva Paredes
					</h1>
					<h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
						Ingeniero de Sistemas | Java & AWS Developer
					</h2>
					<p className="text-lg text-gray-400 mb-4">
						Estudiante de 10mo ciclo de Ingeniería de Sistemas e Informática. Apasionado por el desarrollo fullstack, la escalabilidad y soluciones cloud en AWS. Experiencia en backend Java/API REST, gestión de datos y visualización con SQL Server y Power BI.
					</p>
					{/* Contact & Social */}
					<div className="flex justify-center items-center gap-6 mb-4">
						<Link href="https://linkedin.com/in/kevin-silva-paredes-936646343" target="_blank" rel="noopener noreferrer">
							<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0A66C2"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">in</text></svg>
						</Link>
						<Link href="https://github.com/KevinPhanteRcode98" target="_blank" rel="noopener noreferrer">
							<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#181717"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">GH</text></svg>
						</Link>
						<a href="mailto:kevinsilvap1998@hotmail.com">
							<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#EA4335"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">@</text></svg>
						</a>
						<a href="/CV-Kevin-Silva-Paredes-Desarrollador-Software.pdf" download>
							<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#F2C811"/><text x="50%" y="55%" textAnchor="middle" fill="#181717" fontSize="14" fontWeight="bold" fontFamily="Arial">CV</text></svg>
						</a>
					</div>
					{/* Botón destacado para descargar CV */}
					<a
						href="/CV-Kevin-Silva-Paredes-Desarrollador-Software.pdf"
						download
						className="inline-block mt-2 px-6 py-2 bg-cyan-400 text-[#101010] font-semibold rounded-lg shadow hover:bg-cyan-300 transition"
					>
						Descargar CV en PDF
					</a>
				</motion.section>

				{/* Tech Stack */}
				<motion.section
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.2 }}
					className="mb-10"
				>
					<h3 className="text-2xl font-semibold text-cyan-400 mb-4">Tech Stack</h3>
					<div className="flex flex-wrap gap-4 justify-center">
						{techStack.map((tech) => (
							<div
								key={tech.name}
								className="flex flex-col items-center bg-[#181f2a] rounded-lg px-3 py-2 shadow-md transition-transform duration-200 group"
							>
								<div className="transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_cyan]">
									{tech.svg}
								</div>
								<span className="text-sm mt-1 text-cyan-300">{tech.name}</span>
							</div>
						))}
					</div>
				</motion.section>

				{/* Experiencia y Proyectos */}
				<motion.section
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.4 }}
					className="mb-10"
				>
					<h3 className="text-2xl font-semibold text-cyan-400 mb-4">Experiencia & Proyectos</h3>
					<motion.div
						className="space-y-6"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						{/* Proyecto 1 */}
						<motion.div
							variants={projectCardMotion}
							  className="bg-white/10 backdrop-blur-md border border-cyan-300/30 rounded-xl p-6 shadow-lg transition-all duration-300"
						>
							<h4 className="text-xl font-bold text-cyan-300 mb-2">Data Mart de Ventas - Tai Loy</h4>
							<p className="mb-2">Implementación con SQL Server y Power BI para análisis de ventas.</p>
							<div className="flex gap-2">
								{techStack.find(t => t.name === "SQL Server")?.svg}
								{techStack.find(t => t.name === "Power BI")?.svg}
							</div>
						</motion.div>
						{/* Proyecto 2 */}
						<motion.div
							variants={projectCardMotion}
							className="bg-[#181f2a] rounded-xl p-6 shadow-lg"
						>
							<h4 className="text-xl font-bold text-cyan-300 mb-2">Sistema Web de Citas - Clínica Izaguirre</h4>
							<p className="mb-2">Desarrollo web integral para gestión de citas médicas.</p>
							<div className="flex gap-2">
								{techStack.find(t => t.name === "Java")?.svg}
								{techStack.find(t => t.name === "SQL Server")?.svg}
								{/* React SVG */}
								<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#61DAFB"/><text x="50%" y="55%" textAnchor="middle" fill="#181717" fontSize="14" fontWeight="bold" fontFamily="Arial">React</text></svg>
							</div>
						</motion.div>
						{/* Proyecto 3 */}
						<motion.div
							variants={projectCardMotion}
							className="bg-[#181f2a] rounded-xl p-6 shadow-lg"
						>
							<h4 className="text-xl font-bold text-cyan-300 mb-2">Proyectos Backend</h4>
							<p className="mb-2">Más de 10 aplicaciones en Python/SQLite y CRUD-MVC en Java.</p>
							<div className="flex gap-2">
								{techStack.find(t => t.name === "Python")?.svg}
								{techStack.find(t => t.name === "SQLite")?.svg}
								{techStack.find(t => t.name === "Java")?.svg}
							</div>
						</motion.div>
					</motion.div>
				</motion.section>

				{/* Formación */}
				<motion.section
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.6 }}
					className="mb-10"
				>
					<h3 className="text-2xl font-semibold text-cyan-400 mb-4">Formación</h3>
					<div className="bg-[#181f2a] rounded-xl p-6 shadow-lg">
						<p className="mb-2">Ingeniería de Sistemas e Informática - UTP (10mo ciclo)</p>
						<p>Beca por Excelencia Académica UTP (2022 - 2024)</p>
					</div>
				</motion.section>

				{/* Premios y Reconocimientos */}
				<motion.section
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.8 }}
					className="mb-10"
				>
					<h3 className="text-2xl font-semibold text-cyan-400 mb-4">Premios & Reconocimientos</h3>
					<ul className="list-disc list-inside text-gray-300">
						<li>Beca por Excelencia Académica UTP (2022 - 2024)</li>
						<li>Certificación Scrum Fundamentals Certified (SFC™)</li>
						<li>Ganador del concurso de Networking 2024</li>
					</ul>
				</motion.section>

				{/* Código fuente */}
				<motion.section
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					transition={{ delay: 1.0 }}
					className="mb-10"
				>
					<h3 className="text-2xl font-semibold text-cyan-400 mb-4">Código Fuente</h3>
					<p>
						Puedes ver el código de este portafolio en{" "}
						<Link
							href="https://github.com/KevinPhanteRcode98/portafolio-kevin"
							target="_blank"
							rel="noopener noreferrer"
							className="text-cyan-300 underline"
						>
							GitHub
						</Link>
						.
					</p>
				</motion.section>
			{/* Badge flotante de contacto */}
			<div className="fixed bottom-6 right-6 z-50">
				<div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-300 px-6 py-3 rounded-2xl shadow-lg backdrop-blur-md border border-cyan-300/40 text-white font-semibold flex items-center gap-3 animate-pulse">
					<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0A66C2"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">in</text></svg>
					<span>Disponible para vacantes AWS/Java</span>
					<a href="mailto:kevinsilvap1998@hotmail.com" className="ml-2 underline text-cyan-100 hover:text-cyan-300 transition">Contáctame</a>
				</div>
			</div>
		</main>
	</div>
);
}
