import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "45%",
        }}
      >
        <ClipLoader color="#000" size={50} />
      </div>
    </>
  );
};

export default Spinner;
