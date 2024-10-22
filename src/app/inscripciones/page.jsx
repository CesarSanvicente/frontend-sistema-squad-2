import CourseCard from "@/components/CourseCard";

export default function InscripcionesPage() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center py-10 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Inscripciones Abiertas</h1>
        <p className="mb-10 text-lg text-center max-w-2xl">
          Únete a nuestros cursos de formación técnica y aprovecha las oportunidades de mentoría
          para desarrollar tus habilidades. Selecciona un curso e inscríbete hoy.
        </p>
        <div className="mt-12 w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Formulario de Inscripción</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre Completo
              </label>
              <input
                id="name"
                type="text"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ingresa tu teléfono"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthdate">
                Fecha de Nacimiento
              </label>
              <input
                id="birthdate"
                type="date"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
                Selecciona el Curso
              </label>
              <select
                id="course"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Curso de Desarrollo Web</option>
                <option>Curso de UX/UI</option>
                <option>Curso de Marketing Digital</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Mensaje Adicional
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Añade algún comentario o mensaje adicional"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Inscribirse
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          <CourseCard
            courseTitle="Curso de Desarrollo Web"
            duration="3 meses"
            startDate="01/01/2024"
            endDate="01/04/2024"
            shortDescription="Aprende a crear aplicaciones web con las últimas tecnologías."
          />
          <CourseCard
            courseTitle="Curso de UX/UI"
            duration="2 meses"
            startDate="01/02/2024"
            endDate="01/04/2024"
            shortDescription="Diseña experiencias de usuario intuitivas y atractivas."
          />
          <CourseCard
            courseTitle="Curso de Marketing Digital"
            duration="4 meses"
            startDate="01/03/2024"
            endDate="01/07/2024"
            shortDescription="Domina las estrategias de marketing para el mundo digital."
          />
        </div>
        
      </main>
    </div>
  );
}
