import CourseCard from '@/components/CourseCard'
import { rocketSVG } from '@/utils/images'

const CoursesView: React.FC = () => {
  return (
    <>
      <section className='min-w-max text-center'>
        <h2 className='text-pltt_light_blue font-bold'>Nuestros Cursos</h2>
        <h3 className='text-black font-bold'>
          Elige tu curso y explora un nuevo camino profesional
        </h3>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-max px-20 py-10 gap-10 justify-items-center'>
        <CourseCard
          courseTitle='Programación en Desarrollo WEB'
          duration='6 meses'
          startDate='01/05/2024'
          endDate='01/11/2024'
          shortDescription='Aprende las bases de la programación y el desarrollo de aplicaciones web.'
        />
        <CourseCard
          courseTitle='Full Stack'
          duration='8 meses'
          startDate='15/06/2024'
          endDate='15/02/2025'
          shortDescription='Desarrolla habilidades tanto en el frontend como en el backend con tecnologías modernas.'
        />
        <CourseCard
          courseTitle='QA y Testing'
          duration='4 meses'
          startDate='10/04/2024'
          endDate='10/08/2024'
          shortDescription='Asegura la calidad del software con las mejores prácticas en pruebas y automatización.'
        />
        <CourseCard
          courseTitle='UX/UI'
          duration='5 meses'
          startDate='20/07/2024'
          endDate='20/12/2024'
          shortDescription='Aprende a diseñar interfaces de usuario intuitivas y enfocadas en la experiencia.'
        />
        <CourseCard
          courseTitle='Marketing Digital'
          duration='3 meses'
          startDate='01/09/2024'
          endDate='01/12/2024'
          shortDescription='Fundamentos de SEO, SEM, Redes Sociales, Email Marketing y Analítica Digital.'
        />
      </section>
    </>
  )
}

export default CoursesView
