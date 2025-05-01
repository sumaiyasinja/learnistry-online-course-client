import { useContext, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Title from "../../components/shared/Title";
import { AuthContext } from "../../provider/AuthProvider";

const AddTutorial = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    image: "",
    language: "",
    price: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tutorialData = {
      name: user.displayName,
      email: user.email,
      ...formData,
      review: 0,
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/tutorials", tutorialData);
      toast.success("Tutorial added successfully!");
      setFormData({ image: "", language: "", price: "", description: "" });
    } catch (err) {
      console.error("Error adding tutorial:", err);
      toast.error("Failed to add tutorial");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto mt-10 p-6 bg-amber-50 shadow-xl rounded-2xl">
      <Title title="Add a Tutorial" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="image" className="text-amber-800">Image URL :</label>
        <input
          type="text"
          name="image"
          placeholder="Enter Tutorial Image URL"
          value={formData.image}
          onChange={handleChange}
          className="input input-bordered my-3 w-full border-2 shadow-md border-amber-600 rounded-2xl px-4 py-2"
          required
        />

        <label htmlFor="language" className="text-amber-800">Select Language :</label>
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="select select-bordered my-3 w-full border-2 shadow-md border-amber-600 rounded-2xl px-4 py-2"
          required
        >
          <option value="" disabled>Select a language</option>
          {languageOptions.map((lang) => (
            <option key={lang} value={lang} className="text-amber-800">
              {lang}
            </option>
          ))}
        </select>

        <label htmlFor="price" className="text-amber-800">Price :</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="input input-bordered my-3 w-full border-2 shadow-md border-amber-600 rounded-2xl px-4 py-2"
          required
        />

        <label htmlFor="description" className="text-amber-800">Description :</label>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full border-2 shadow-md border-amber-600 rounded-2xl px-4 py-2"
          required
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center rounded-md bg-amber-800 hover:bg-white hover:text-amber-700 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Tutorial"}
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddTutorial;
