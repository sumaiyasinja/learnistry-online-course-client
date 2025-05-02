import CountUp from "react-countup";
import { FaChalkboardTeacher, FaStar, FaLanguage, FaUsers } from "react-icons/fa";
import Title from "./shared/Title";

const StatsSection = ({ tutorsCount = 0, reviewsCount = 0, languagesCount = 9, usersCount = 0 }) => {
  const stats = [
    {
      label: "Experienced Tutors",
      value: tutorsCount,
      icon: <FaChalkboardTeacher className="text-3xl text-amber-800 dark:text-amber-50 mb-2" />,
    },
    {
      label: "5-Star Reviews",
      value: reviewsCount,
      icon: <FaStar className="text-3xl text-yellow-500 dark:text-white mb-2" />,
    },
    {
      label: "Languages Offered",
      value: languagesCount,
      icon: <FaLanguage className="text-3xl text-blue-600 dark:text-white mb-2" />,
    },
    {
      label: "Registered Users",
      value: usersCount,
      icon: <FaUsers className="text-3xl text-green-600 dark:text-white mb-2" />,
    },
  ];

  return (
    <section className="py-16  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <Title title="Our Impact in Numbers" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-lg  transition duration-200">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                  <CountUp end={stat.value} duration={1.5} />
                </h3>
                <div className="flex gap-4 items-center justify-center">
                  <p className=""> {stat.icon}</p>
                <p className=" text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
