// Create a gallery that maps over the tours array and renders TourCard for each
import TourCard from "./TourCard";

function Gallery({ tours, removeTour }) {
  // Render all tours inside a section
  return (
    <section>
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
}

export default Gallery;
