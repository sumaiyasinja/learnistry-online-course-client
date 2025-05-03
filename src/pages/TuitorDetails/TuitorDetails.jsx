import { useLoaderData } from "react-router-dom";
import Title from "../../components/shared/Title";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const TuitorDetails = () => {
  const tutor = useLoaderData();
  const {user}= useContext(AuthContext)
    console.log(user.email);
    
  const handleBookTutor = () => {
    const bookedTutor = { 
         tutorialId: tutor._id,
         image: tutor?.image,
         language: tutor?.language,
         price: tutor?.price,
         tutorEmail: tutor?.email,
         email: user?.email
         };

        //  console.log(bookedTutor);
         
    axios.post("https://learnistry-server.vercel.app/bookings", bookedTutor) 
    .then(res=> {
        if(res.data.insertedId){
            toast.success("Tutor booked successfully")
        }
    })
    .catch((err) => {
        if (err.response?.status === 409) {
          toast.error("You have already booked this tutorial.");
        } else {
          toast.error("Failed to book tutor.");
        }
      });
      
  };

  return (
    <div className="container bg-white rounded-4xl mx-auto py-7 px-6">
    <Toaster></Toaster>
      <div className="  shadow-lg rounded-2xl p-6 flex flex-col py-2  gap-6 ">
        <img
          src={tutor?.image}
          alt={tutor?.name}
          className=" object-cover rounded-xl max-h-[450px] mb-4"
        />
        <div className="flex-1 space-y-4 ">
          <h2 className="text-2xl font-bold text-amber-800">Tutor: {tutor?.name}</h2>
          <p className="text-gray-700">
          <span className="font-semibold text-amber-700">Tutor Email:</span> {tutor?.email}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-amber-700">Language offered:</span> {tutor?.language}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-amber-700">Price:</span> ${tutor?.price}
          </p>
          <p className="text-gray-700">
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-amber-700">Total Reviews:</span> {tutor?.review}
          </p>
          <div>
            <h3 className="font-semibold text-amber-800 text-lg mb-1">Course Description</h3>
            <p className="text-gray-600 leading-relaxed">{tutor?.description}</p>
          </div>
        </div>
        <button onClick={handleBookTutor} className=" flex gap-2 items-center justify-center bg-amber-600 cursor-pointer w-52 text-white  px-4 py-2 rounded-lg hover:bg-amber-700 transition">
        <FaCartArrowDown className=""></FaCartArrowDown>
      <div  className="">Book Tutor</div>
        </button>
      </div>
    </div>
  );
};

export default TuitorDetails;
