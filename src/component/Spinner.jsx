import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <ClipLoader
        style={{
          width: "50px",
          height: "50px",
        }}
        animation="border"
        variant="light"
        color="#000"
      ></ClipLoader>
    </div>
  );
}
