import Title from "../shared/Title";
import Category from './Category';

const Categorys = () => {
  const categories = [
        {
          "icon": "language",
          "name": "English",
          "tutors": 0
        },
        {
          "icon": "spain",
          "name": "Spanish",
          "tutors": 0
        },
        {
          "icon": "france",
          "name": "French",
          "tutors": 0
        },
        {
          "icon": "germany",
          "name": "German",
          "tutors": 0
        },
        {
          "icon": "china",
          "name": "Mandarin",
          "tutors": 0
        },
        {
          "icon": "arabic",
          "name": "Arabic",
          "tutors": 0
        },
        {
          "icon": "india",
          "name": "Hindi",
          "tutors": 0
        },
        {
          "icon": "japan",
          "name": "Japanese",
          "tutors": 0
        },
        {
          "icon": "russia",
          "name": "Russian",
          "tutors": 0
        }
      ];
      
      


  return (
    <div>
      <Title title="Categories" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {categories.map((cat, index) => (
          <Category key={index} icon={cat.icon} name={cat.name} tutors={cat.tutors} />
        ))}
      </div>
    </div>
  );
};

export default Categorys;
