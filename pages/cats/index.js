import axios from "axios";
import React from "react";

function CatsList(props) {
  console.log(props);
  return (
    <div>
      <h1>CAT&apos; Gallery</h1>
      <p>All about cats</p>
      <hr />
      {/* {cats.length > 0 ? (
        cats.map((cat) => (
          <div key={cat.id}>
            <div>
              {cat.image && (
                <img
                  src={cat.image.url}
                  alt={cat.name}
                  width="200"
                  height="200"
                />
              )}
            </div>
            <div>
              <h2>{cat.name}</h2>
              <h2>{cat.temperament}</h2>
              <h2>{cat.description}</h2>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await axios.get("https://api.thecatapi.com/v1/breeds");
  console.log(data);
  return {
    props: 10,
  };
};

export default CatsList;

// Static Site Generation (SSG)
// Incremental Site Regeneration (ISR)
// Server Side Rendering (SSR)

// Client Side Rendering (CSR)
