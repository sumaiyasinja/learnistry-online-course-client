import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MyAddedTuitorialCard = ({ item , handleDelete,openModal, setOpenModal}) => {
    return (
        <motion.div
        key={item._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className=" rounded-xl shadow-md p-5 hover:shadow-lg transition border border-amber-700"
      >
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img src={item.image} alt={item.language} className="w-32 h-32 rounded-lg object-cover" />
          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-bold text-amber-800">{item.name}</h2>
            <p><span className="font-semibold">Language:</span> {item.language}</p>
            <p><span className="font-semibold">Price:</span> ${item.price}</p>
            <p><span className="font-semibold">Description:</span> {item.description.slice(0, 100)}...</p>
            <p><span className="font-semibold">Review:</span> {item.review}</p>
          </div>
          <div className="flex gap-3">
            <button
            //   onClick={() => navigate(`/update-tutorial/${item._id}`)}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <FaEdit /> Update
            </button>
            <button
              onClick={() => handleDelete(item._id)}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      </motion.div>
    );
};

export default MyAddedTuitorialCard;