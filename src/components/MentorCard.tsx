import Image from "next/image";
import { FaUserAlt, FaBriefcase, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

interface mentorData {
  mentorName: string;
  specialization: string;
  experience: number;
  availability: string;
  imageSrc: string;
}

const MentorCard: React.FC<mentorData> = ({
  mentorName,
  specialization,
  experience,
  availability,
  imageSrc,
}) => {
  return (
    <article className="mentorCard border border-blue-500 p-4 rounded-lg">
      <aside className="min-h-max m-3">
        <Image
          className="rounded-full"
          src={imageSrc} // Ruta directa a la imagen del mentor
          height={100}
          width={100}
          alt={`${mentorName} Photo`}
        />
      </aside>
      <div>
        <h4 className="my-2 text-gray-600 font-bold mx-0">{mentorName}</h4>
        <p className="text-gray-700">Especialización: {specialization}</p>
        <div className="flex items-center text-black mt-2">
          <FaBriefcase className="mr-2" />
          <span>{experience} años de experiencia</span>
        </div>
        <div className="flex items-center text-black mt-2">
          <FaCheckCircle className="mr-2" />
          <span>{availability}</span>
        </div>
      </div>
    </article>
  );
};

export default MentorCard;
