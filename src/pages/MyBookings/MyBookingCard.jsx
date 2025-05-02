const MyBookingCard = ({ item, handleReview, handleDelete }) => {
    return (
      <tr className="border-t hover:bg-amber-50 transition">
        <td className="py-3 px-4">
          <img
            src={item?.image}
            alt={item?.language}
            className="w-20 h-14 object-cover rounded-lg"
          />
        </td>
        <td className="py-3 px-4 dark:text-black">{item?.language}</td>
        <td className="py-3 px-4 dark:text-black">${item?.price}</td>
        <td className="py-3 px-4 dark:text-black">{item?.tutorEmail}</td>
        <td className="py-3 px-4 flex items-center justify-center gap-2">
          <button
            onClick={() => handleReview(item?.tutorId)}
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm"
          >
            Review
          </button>
          <button
            onClick={() => handleDelete(item?._id)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
  
  export default MyBookingCard;
  