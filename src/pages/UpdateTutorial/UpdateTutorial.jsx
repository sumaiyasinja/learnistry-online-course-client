import { useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Title from "../../components/shared/Title";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const UpdateTutorial = () => {
  const { user } = useContext(AuthContext);
  const tutorial = useLoaderData();
  // validation
  if (user.email !== tutorial.email) {
    return (
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-red-600 text-4xl text-center my-20 lg:my-52 font-bold"
      >
        You are not authorized to update this tutorial.
      </motion.p>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTutorial = {
      image: form.image.value,
      language: form.language.value,
      price: form.price.value,
      description: form.description.value,
    };

    try {
      await axios.patch(
        `https://learnistry-server.vercel.app/tutorials/${tutorial._id}`,
        updatedTutorial
      );
      toast.success("Tutorial updated successfully!");
      history.back();
    } catch (err) {
      console.error("Error updating tutorial:", err);
      toast.error("Failed to update tutorial");
    }
  };

  const languageOptions = [
    "English",
    "Spanish",
    "French",
    "German",
    "Mandarin",
    "Arabic",
    "Hindi",
    "Japanese",
    "Russian",
  ];

  return (
    <div className="max-w-[700px] mx-auto mt-10 p-6 bg-amber-50 shadow-xl rounded-2xl">
      <Title title="Update Tutorial" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="image" className="text-amber-800">
          Image URL :
        </label>
        <input
          type="text"
          name="image"
          defaultValue={tutorial.image}
          className="input input-bordered my-3 w-full border-2 shadow-md border-amber-600 rounded-2xl px-4 py-2"
          required
        />

        <label htmlFor="language" className="text-amber-800">
          Select Language :
        </label>
        <select
          name="language"
          defaultValue={tutorial.language}
          className="select select-bordered my-3 w-full border-2 shadow-md border-amber-600 rounded-2xl px-4 py-2"
          required
        >
          <option value="" disabled>
            Select a language
          </option>
          {languageOptions.map((lang) => (
            <option
              key={lang}
              value={lang}
              defaultValue={tutorial.language}
              className="text-amber-800"
            >
              {lang}
            </option>
          ))}
        </select>

        <label htmlFor="price" className="text-amber-800">
          Price :
        </label>
        <input
          type="number"
          name="price"
          defaultValue={tutorial.price}
          className="input input-bordered my-3 w-full border-2 shadow-md border-amber-600 rounded-2xl px-4 py-2"
          required
        />

        <label htmlFor="description" className="text-amber-800">
          Description :
        </label>
        <textarea
          name="description"
          defaultValue={tutorial.description}
          className="textarea textarea-bordered w-full border-2 shadow-md border-amber-600 rounded-2xl px-4 py-2"
          required
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center rounded-md bg-amber-800 hover:bg-white hover:text-amber-700 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
        >
          Update Tutorial
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default UpdateTutorial;
