import { useNavigate } from "react-router-dom";

export default function Button({ buttonLink, buttonName }) {
  const navigate = useNavigate();
  return (
    <button
      className="btn"
      onClick={() => {
        navigate(buttonLink);
      }}
    >
      {buttonName}
    </button>
  );
}
