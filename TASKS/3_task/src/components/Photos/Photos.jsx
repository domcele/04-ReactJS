import { useEffect, useState } from "react";
import { fetchPhotos } from "../../api/index";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos()
      .then((response) => setPhotos(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ol>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Photos;
