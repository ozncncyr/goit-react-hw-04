import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={css.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
        onClick={() => openModal(image)}
      ></img>
    </div>
  );
};

ImageCard.PropTypes = {
  image: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
