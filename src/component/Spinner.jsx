import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ size }) => {
  return (
    <>
      <div>
        <ClipLoader color="#000" size={size} />
      </div>
    </>
  );
};

export default Spinner;
