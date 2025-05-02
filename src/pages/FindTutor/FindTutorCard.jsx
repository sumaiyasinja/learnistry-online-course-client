import React from 'react';
import { Link } from 'react-router-dom';

const FindTutorCard = ({tutor}) => {
    return (
        <div>
            <div
            key={tutor?._id}
            className="bg-white shadow-md border border-amber-300 rounded-xl p-4"
          >
            <img
              src={tutor?.image}
              alt={tutor?.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-amber-800">{tutor?.name}</h2>
            <p className="text-sm text-gray-600">Language: {tutor?.language}</p>
            <p className="text-sm text-gray-600">Price: {tutor?.price}$</p>
            <p className="text-sm text-gray-600">Reviews: {tutor?.review}</p>
            <p className="text-sm text-gray-600">Description: {tutor?.description}</p>
            <Link
              to={`/tutor-details/${tutor._id}`}
              className="inline-block mt-4 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition"
            >
              View Details
            </Link>
          </div>
        </div>
    );
};

export default FindTutorCard;