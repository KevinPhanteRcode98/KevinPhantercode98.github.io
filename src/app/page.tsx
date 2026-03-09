export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24 text-center">
      <h1 className="text-6xl font-extrabold text-blue-500 mb-4">Kevin Arny Silva Paredes</h1>
      <p className="text-2xl text-gray-400 mb-8">Ingeniero de Sistemas | AWS & SQL Specialist</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-6 border border-blue-900 rounded-xl bg-gray-900">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">🏆 Logros</h2>
          <p>Beca por Excelencia Académica UTP</p>
          <p className="text-sm text-gray-500">2022 - 2024</p>
        </div>
        <div className="p-6 border border-blue-900 rounded-xl bg-gray-900">
          <h2 className="text-xl font-bold text-blue-400 mb-2">💻 Proyectos Top</h2>
          <p>Data Mart Tai Loy | Clínica Izaguirre</p>
          <p className="text-sm text-gray-500">SQL Server & Java</p>
        </div>
      </div>
    </main>
  );
}