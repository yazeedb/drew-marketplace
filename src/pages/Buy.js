import { useEffect, useState } from "react";

export const Buy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/listings")
      .then((res) => res.json())
      .then((json) => {
        setData(json.theListings);
      });
  }, []);

  return (
    <main>
      <section>
        <ul>
          {data.map((item) => {
            return (
              <li>
                <img src={item.image} />
                <h2>${item.priceUsd}</h2>
                <h3>{item.name}</h3>
                <button>Add to cart</button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
