// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked
function TourCard({ id, name, info, image, price, removeTour }) {
    // Render a single tour card
    return (
      <article style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
        <img src={image} alt={name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div>
          <h2>{name}</h2>
          <h4>${price}</h4>
          <p>{info}</p>
          <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
      </article>
    );
  }
  
  export default TourCard;
  