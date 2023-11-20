import { useNavigate } from "react-router-dom";

export const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>About us</h1>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};
