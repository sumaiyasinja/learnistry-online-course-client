
import {  FaLanguage } from 'react-icons/fa';
import { GiFrance, GiIndiaGate, GiJapan, GiSpain, GiTeacher } from 'react-icons/gi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { LuReceiptRussianRuble } from "react-icons/lu";
import { TbAlphabetArabic } from "react-icons/tb";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


const iconMap = {
  language: <FaLanguage className="text-3xl text-amber-800" />,
  spain: <GiSpain className="text-3xl text-red-800" />,
  france: <GiFrance className="text-3xl text-blue-800" />,
  germany: <LiaChalkboardTeacherSolid  className="text-3xl text-yellow-700" />,
  china: <GiTeacher className="text-3xl text-green-600" />,
  arabic: <TbAlphabetArabic className="text-3xl text-purple-600" />,
  india: <GiIndiaGate className="text-3xl text-orange-600" />,
  japan: <GiJapan className="text-3xl text-pink-500" />,
  russia: <LuReceiptRussianRuble className="text-3xl text-sky-600" />,
 
}
const Category = ({ icon = "teacher", name, tutors }) => {
  return (
    <Link to={`/find-tutors/${name}`} className="flex bg-amber-50 cursor-pointeritems-center justify-between gap-4 p-4 shadow-md rounded-xl hover:shadow-lg transition">
      <div className='flex items-center gap-4'>
      <div className="shrink-0">
        {iconMap[icon]}
      </div>
      <div>
        <h2 className="text-lg text-amber-600 font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">No of Tutors: {tutors}</p>
      </div>
      </div>
      <div><IoIosArrowDroprightCircle className="text-3xl text-amber-600" /></div>
    </Link>
  );
};

export default Category;
