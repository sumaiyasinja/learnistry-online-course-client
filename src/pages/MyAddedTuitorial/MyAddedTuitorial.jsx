import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import Title from './../../components/shared/Title';
import MyAddedTuitorialCard from './MyAddedTuitorialCard';
import Swal from 'sweetalert2';

const MyAddedTutorial = () => {
  const tuitorials = useLoaderData();
  const [tutorialList, setTutorialList] = useState(tuitorials);
  
  
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this tutorial?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://learnistry-server.vercel.app/tutorials/${id}`);
          setTutorialList(tutorialList.filter(item => item._id !== id));
          toast.success("Tutorial deleted successfully!");
        } catch (error) {
          console.error("Delete failed", error);
          toast.error("Failed to delete tutorial");
        }
      }
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="max-w-6xl mx-auto px-4 py-10"
    >
      <Toaster />
      <Title title="My Tutorials" />

      {tutorialList.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No tutorials found.</p>
      ) : (
        <div className="grid gap-6 mt-8">
          <AnimatePresence>
            {tutorialList.map((item) => (
              <MyAddedTuitorialCard item={item} key={item._id} handleDelete={handleDelete} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

export default MyAddedTutorial;
