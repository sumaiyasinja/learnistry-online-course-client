import Title from "../shared/Title";

const Categorys = () => {
    return (
        <div>
            <Title title="Categories" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {/* <Category></Category> */}
                <div className="">
                    <img src="https://i.ibb.co/4fYx2gD/1.png" alt="" />
                    <h2>English</h2>
                    <p>No of Tutors : 0</p>
                </div>
            </div>
        </div>
    );
};

export default Categorys;