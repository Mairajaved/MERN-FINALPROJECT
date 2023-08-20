import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation

function GuestCard({ name, image }) {
  const formattedName = name.split(" ").join("-");

  return (
    <div className="col-md-3">
      <Link to={`/${formattedName}`} className="text-decoration-none">
        <div className="card">
          <img
            src={image}
            className="card-img-top p-5"
            alt={name}
            style={{ height: "20vh", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

GuestCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GuestCard;
