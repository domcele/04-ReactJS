import { useEffect, useState } from "react";
import { fetchNews } from "../../api";
import "../Services/Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((response) => setServices(response.slice(0, 10)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ol className="servOl">
        {services.map((service) => (
          <li className="servLi" key={service.id}>
            {service.title}
            <ul className="servUl">{service.body}</ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Services;
