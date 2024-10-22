import Image from "next/image";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

interface courseData {
  courseTitle: string;
  duration: string;
  startDate: string;
  endDate: string;
  shortDescription: string;
}

const CourseCard: React.FC<courseData> = ({
  courseTitle,
  duration,
  startDate,
  endDate,
  shortDescription,
}) => {
  return (
    <article className="courseCard border border-blue-500 p-4 rounded-lg">
      <aside className="min-h-max m-3">
        <Image
          className="m-0"
          src="/assets/epidata-logo.webp"
          height={40}
          width={120}
          alt="Epidata Logo"
        />
      </aside>
      <div>
        <h4 className="my-2 text-gray-600 font-bold mx-0">{courseTitle}</h4>
        <p className="text-gray-700">{shortDescription}</p>
        <div className="flex justify-between items-center text-black mt-2">
          <div className="flex items-center text-sm">
            <FaClock className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm">
            <FaCalendarAlt className="ml-3 mr-1" />
            <span>Inicio {startDate}</span>
            <span className="ml-2">Cierre {endDate}</span>
          </div>
        </div>
        <div className="text-right mt-4">
          <Link href="/courses/marketing" className="text-blue-500 hover:text-blue-700 font-bold">
            ver más{" "}
            <span className="inline-block mx-2 p-2 text-white border rounded-full bg-gray-700 hover:bg-gray-800 transform rotate-90">
              ▶
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
