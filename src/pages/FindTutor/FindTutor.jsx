import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Title from "../../components/shared/Title";
import "../../assets/css/Pagination.css"
import FindTutorCard from "./FindTutorCard";

const FindTutor = () => {
  const tutors = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;
  const offset = currentPage * itemsPerPage;
  const currentTutors = tutors.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(tutors.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <Title title="Tutors" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {currentTutors.map((tutor) => (
            <FindTutorCard key={tutor._id} tutor={tutor} />
          
        ))}
      </div>

      {/* React Paginate */}
      <ReactPaginate
        previousLabel={"← Prev"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        activeClassName={"active"}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default FindTutor;
