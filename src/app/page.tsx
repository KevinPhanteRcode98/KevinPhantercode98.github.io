"use client";
import { motion, easeOut } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Portada from "./Portada";

const techStack = [
	{
		name: "Java",
		svg: (
			<img src="/java.png" alt="Java" width={40} height={40} className="rounded shadow-md bg-white/10 object-contain" />
		),
	},
	{
		name: "Python",
		svg: (
			<img src="/python.png" alt="Python" width={40} height={40} className="rounded shadow-md bg-white/10 object-contain" />
		),
	},
	{
		name: "Node.js",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#68A063" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">Node</text>
			</svg>
		),
	},
	{
		name: "PHP",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#777BB4" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">PHP</text>
			</svg>
		),
	},
	{
		name: "SQL Server",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#CC2927" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">SQL</text>
			</svg>
		),
	},
	{
		name: "MySQL",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#00758F" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">MySQL</text>
			</svg>
		),
	},
	{
		name: "MongoDB",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#4DB33D" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">Mongo</text>
			</svg>
		),
	},
	{
		name: "SQLite",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#003B57" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">SQLite</text>
			</svg>
		),
	},
	{
		name: "AWS",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<ellipse cx="20" cy="20" rx="18" ry="18" fill="#232F3E" />
				<text x="50%" y="55%" textAnchor="middle" fill="#FF9900" fontSize="14" fontWeight="bold" fontFamily="Arial">AWS</text>
			</svg>
		),
	},
	{
		name: "Git/GitHub",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<ellipse cx="20" cy="20" rx="18" ry="18" fill="#181717" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">Git</text>
			</svg>
		),
	},
	{
		name: "Docker",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#2496ED" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">Docker</text>
			</svg>
		),
	},
	{
		name: "Power BI",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#F2C811" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">BI</text>
			</svg>
		),
	},
	{
		name: "Excel",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#217346" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">Excel</text>
			</svg>
		),
	},
	{
		name: "VBA",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<rect width="40" height="40" rx="18" fill="#A020F0" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">VBA</text>
			</svg>
		),
	},
	{
		name: "Bizagi",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40">
				<ellipse cx="20" cy="20" rx="18" ry="18" fill="#00BFAE" />
				<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">BZ</text>
			</svg>
		),
	},
	{
		name: "Prompt Engineering",
		svg: (
			<img src="/prompt-engineering.png" alt="Prompt Engineering" width={40} height={40} className="rounded shadow-md bg-white/10 object-contain" />
		),
	},
	{
		name: "GitHub Copilot",
		svg: (
			<img src="/githubcopilot.png" alt="GitHub Copilot" width={40} height={40} className="rounded shadow-md bg-white/10 object-contain" />
		),
	},
	{
		name: "IA",
		svg: (
			<img src="/IA.png" alt="IA" width={40} height={40} className="rounded shadow-md bg-white/10 object-contain" />
		),
	},
	{
		name: "JavaScript",
		svg: (
			<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#F7DF1E"/><text x="50%" y="55%" textAnchor="middle" fill="#181717" fontSize="14" fontWeight="bold" fontFamily="Arial">JS</text></svg>
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
	// Certificados AWS
	const awsCerts = [
		{ src: "/CERTIFICADOS/Certificado-Desarrollo-web.jpg", alt: "Desarrollo Web" },
		{ src: "/CERTIFICADOS/Certificado-Cisco.jpg", alt: "Cisco" },
		{ src: "/CERTIFICADOS/Certificado-Excel.jpg", alt: "Excel" },
		{ src: "/CERTIFICADOS/Certificado-SQL.jpg", alt: "SQL" },
		{ src: "/CERTIFICADOS/Certificado-SCRUM.jpg", alt: "SCRUM" },
		{ src: "/CERTIFICADOS/Certificado-Python.jpg", alt: "Python" },
	];

	// Estado para el modal de certificados
	const [modalCert, setModalCert] = useState<{ src: string; alt: string } | null>(null);

	// Estado para el toast de mensajes breves
	const [toast, setToast] = useState("");

	return (
		<div className="min-h-screen bg-transparent text-gray-200">
			<Sidebar />
			{/* Cover Image */}
			<Portada />
			{/* Profile Image */}
			<div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
				<Image
					src="/foto-perfil.jpeg"
					alt="Foto de perfil"
					width={220}
					height={220}
					className="rounded-full border-4 border-cyan-400 shadow-lg bg-[#101010] object-cover transition-transform duration-300 hover:scale-110"
					priority
					unoptimized
				/>
			</div>

			{/* Main Content */}
			<main className="max-w-3xl mx-auto px-4 pt-32 pb-12">
				{/* Hero Section */}
				<motion.section
					id="hero"
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
					{/* Código fuente */}
					{/* Contact & Social */}
					<div className="flex justify-center items-center gap-6 mb-4">
						<Link href="https://www.linkedin.com/in/kevin-arny-silva-paredes-129827389" target="_blank" rel="noopener noreferrer">
							<svg width="32" height="32" viewBox="0 0 32 32" className="transition-transform duration-200 hover:scale-110 hover:shadow-lg">
								<rect width="32" height="32" rx="8" fill="#0A66C2"/>
								<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">in</text>
							</svg>
						</Link>
						<Link href="https://github.com/KevinPhanteRcode98" target="_blank" rel="noopener noreferrer">
							<svg width="32" height="32" viewBox="0 0 32 32" className="transition-transform duration-200 hover:scale-110 hover:shadow-lg">
								<rect width="32" height="32" rx="8" fill="#181717"/>
								<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">GH</text>
							</svg>
						</Link>
						<button
							onClick={() => {
								navigator.clipboard.writeText('kevinsilvap1998@hotmail.com');
								setToast('Correo copiado');
								setTimeout(() => setToast(''), 2000);
							}}
							className="focus:outline-none transition-transform duration-200 hover:scale-110 hover:shadow-lg"
							aria-label="Copiar correo"
						>
							<svg width="32" height="32" viewBox="0 0 32 32" className="transition-transform duration-200 hover:scale-110 hover:shadow-lg">
								<rect width="32" height="32" rx="8" fill="#EA4335"/>
								<g><rect x="6" y="10" width="20" height="12" rx="3" fill="#fff"/><polyline points="6,10 16,18 26,10" fill="none" stroke="#EA4335" strokeWidth="2"/></g>
							</svg>
						</button>
						<a href="https://wa.me/51964868930" target="_blank" rel="noopener noreferrer">
							<img src="/whatsapp.png" alt="WhatsApp" width={32} height={32} className="transition-transform duration-200 hover:scale-110 hover:shadow-lg object-contain" style={{width:32, height:32}} />
						</a>
						<button
							onClick={() => {
								setModalCert({ src: "/CV-imagen.jpg", alt: "Curriculum Vitae" });
								setToast('Visualizando CV...');
								setTimeout(() => setToast(''), 2000);
							}}
							className="transition-transform duration-200 hover:scale-110 hover:shadow-lg focus:outline-none"
							aria-label="Visualizar CV"
						>
							<img src="/cv.png" alt="CV" width={32} height={32} className="object-contain" style={{width:32, height:32}} />
						</button>
					</div>
					{/* Toast de mensajes breves */}
					{toast && (
						<div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-[#101010] px-4 py-2 rounded-lg shadow-lg z-50 font-semibold animate-fadeIn">
							{toast}
						</div>
					)}
					{/* Botón destacado para descargar CV */}
					<a
						href="/CV-Kevin-Silva-Paredes-Desarrollador-Software.pdf"
						download
						className="inline-block mt-2 px-6 py-2 bg-cyan-400 text-[#101010] font-semibold rounded-lg shadow hover:bg-cyan-300 transition"
						onClick={() => {
							setToast('Descargando CV...');
							setTimeout(() => setToast(''), 2000);
						}}
					>
						Descargar CV en PDF
					</a>
				</motion.section>

				{/* Tech Stack */}
				<motion.section
					id="tech"
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
								className="flex flex-col items-center bg-[#181f2a] rounded-lg px-3 py-2 shadow-md transition-transform duration-200 group hover:scale-110 hover:drop-shadow-[0_0_8px_cyan] hover:bg-cyan-950"
							>
								<div className="transition-transform duration-200">
									{tech.svg}
								</div>
								<span className="text-sm mt-1 text-cyan-300">{tech.name}</span>
							</div>
						))}
					</div>
				</motion.section>

				{/* Experiencia y Proyectos */}
				<motion.section
					id="exp"
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
							className="bg-[#181f2a] rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/30 hover:bg-cyan-950"
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
							className="bg-[#181f2a] rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/30 hover:bg-cyan-950"
						>
							<h4 className="text-xl font-bold text-cyan-300 mb-2">Sistema Web de Citas - Clínica Izaguirre</h4>
							<p className="mb-2">Desarrollo web integral para gestión de citas médicas. <span className="text-xs text-cyan-200">(PHP, MySQL, JavaScript)</span></p>
							<div className="flex gap-2">
								{techStack.find(t => t.name === "PHP")?.svg}
								{techStack.find(t => t.name === "MySQL")?.svg}
								{techStack.find(t => t.name === "JavaScript")?.svg}
								{/* React SVG */}
								<svg width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="18" fill="#61DAFB"/><text x="50%" y="55%" textAnchor="middle" fill="#181717" fontSize="14" fontWeight="bold" fontFamily="Arial">React</text></svg>
							</div>
						</motion.div>
						{/* Proyecto 3 */}
						<motion.div
							variants={projectCardMotion}
							className="bg-[#181f2a] rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/30 hover:bg-cyan-950"
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

				{/* Galería de Certificados tipo Netflix */}
				<motion.section
					id="cert"
					variants={fadeIn}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={{ delay: 0.7 }}
					className="mb-10"
				>
					<h3 className="text-2xl font-semibold text-cyan-400 mb-4">Certificados & Logros</h3>
					<div className="flex gap-4 overflow-x-auto pb-2">
						{awsCerts.map((cert, idx) => (
							<motion.div
								key={cert.alt}
								className="relative group w-56 h-36 shrink-0 rounded-xl overflow-hidden shadow-lg border border-cyan-300/30 bg-white/10 backdrop-blur-md cursor-pointer"
								whileHover={{ scale: 1.07 }}
								onClick={() => setModalCert(cert)}
							>
								<img src={cert.src} alt={cert.alt} className="w-full h-full object-cover" />
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
									<span className="text-cyan-200 font-semibold text-lg drop-shadow">{cert.alt}</span>
								</div>
							</motion.div>
						))}
					</div>
					{/* Modal de certificado */}
					{modalCert && (
						<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								className="bg-[#181f2a] rounded-2xl shadow-2xl border border-cyan-300/40 p-6 relative max-w-3xl w-full"
							>
								<button
									onClick={() => setModalCert(null)}
									className="absolute top-3 right-3 text-cyan-300 bg-white/10 rounded-full p-2 hover:bg-cyan-400 hover:text-[#181f2a] transition"
									aria-label="Cerrar"
								>
									&#10005;
								</button>
								<img src={modalCert.src} alt={modalCert.alt} className="w-full rounded-xl mb-4 object-cover max-h-[70vh]" />
								<h4 className="text-xl font-bold text-cyan-200 mb-2">{modalCert.alt}</h4>
								<p className="text-gray-300 text-sm">Visualización del certificado o CV. Puedes descargar el PDF desde el botón o enlace si aplica.</p>
							</motion.div>
						</div>
					)}
				</motion.section>

				{/* Sección Formación */}
				<motion.section
					id="edu"
					variants={fadeIn}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={{ delay: 0.5 }}
					className="mb-10"
				>
					<h3 className="text-2xl font-semibold text-cyan-400 mb-4">Formación Académica</h3>
					<div className="space-y-6">
						{/* Secundaria */}
						<div className="bg-[#181f2a] rounded-xl p-6 shadow-lg border border-cyan-300/30 flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/30 hover:bg-cyan-950">
							<img src="/cruz-saco.png" alt="Cruz Saco" width={40} height={40} className="rounded shadow-md bg-white/10 object-contain" />
							<div>
								<p className="font-bold text-cyan-300">Cruz Saco “Miguel Ángel Asturias”</p>
								<p className="text-gray-400 text-sm">Secundaria Completa</p>
								<p className="text-xs text-cyan-200 mt-1">Marzo 2010 – Setiembre 2015</p>
							</div>
						</div>
						{/* Universidad */}
						<div className="bg-[#181f2a] rounded-xl p-6 shadow-lg border border-cyan-300/30 flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/30 hover:bg-cyan-950">
							<img src="/universidad.png" alt="Universidad Tecnológica Del Perú" width={40} height={40} className="rounded shadow-md bg-white/10 object-contain" />
							<div>
								<p className="font-bold text-cyan-300">Universidad Tecnológica Del Perú</p>
								<p className="text-gray-400 text-sm">Bachiller en Ingeniería de Sistemas e Informática</p>
								<p className="text-xs text-cyan-200 mt-1">Marzo 2020 – Marzo 2026</p>
							</div>
						</div>
					</div>
				</motion.section>



			</main>
		</div>
	);
}
