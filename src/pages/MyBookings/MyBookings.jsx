import { useContext, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import Title from "../../components/shared/Title";
import { useLoaderData } from "react-router-dom";
import MyBookingCard from "./MyBookingCard";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const bookings = useLoaderData();
  console.log("Bookings:", bookings);
  const handleReview = async (tutorId) => {
    try {
      await axios.patch(`http://localhost:5000/tutorials/review/${tutorId}`);
      toast.success("Review added!");
    } catch (err) {
      console.error("Review error:", err);
      toast.error("Failed to add review");
    }
  };

  const handleDelete = async (bookingId) => {
    Swal.fire({
      title: "Are you sure you want to delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
    try {
     axios.delete(`http://localhost:5000/bookings/${bookingId}`);
      toast.success("Booking deleted.");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete booking");
    }
      }
    });

  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Toaster />
      <Title title="My Booked Tutors" />
      {bookings.length === 0 ? (
        <p className="text-center mt-6 text-gray-600">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full bg-white shadow rounded-xl overflow-hidden">
            <thead className="bg-amber-100 text-amber-800">
              <tr>
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Language</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Tutor Email</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item) => (
                <MyBookingCard
                  key={item._id}
                  item={item}
                  handleReview={handleReview}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
