import CustomForm from "../components/CustomForm";

export default function login() {
  return (
    <div>
      {" "}
      <div
        style={{
          height: "90vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomForm />
      </div>
    </div>
  );
}
