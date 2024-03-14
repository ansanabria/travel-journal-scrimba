import PinIcon from "../assets/pin.svg?react";

export default ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => (
  <div className="card">
    <img src={imageUrl} alt={`${title} image.`} className="card-image" />
    <div className="data-section">
      <div className="misc-container">
        <div className="tag-container">
          <PinIcon />
          <p className="location-tag">{location}</p>
        </div>
        <p>
          <a href={googleMapsUrl} className="gmaps-link">
            View on Google Maps
          </a>
        </p>
      </div>
      <h2>{title}</h2>
      <p className="dates">
        {startDate} - {endDate}
      </p>
      <p className="description">{description}</p>
    </div>
  </div>
);
