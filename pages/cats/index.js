import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// SSG
export const getStaticProps = async () => {
  const { data } = await axios("https://api.thecatapi.com/v1/breeds");
  return {
    props: { catsData: data },
  };
};

// SSR
// export const getServerSideProps = async () => {
//   const { data } = await axios("https://api.thecatapi.com/v1/breeds");
//   return {
//     props: { catsData: data },
//   };
// };

// ISR
// export const getStaticProps = async () => {
//   const { data } = await axios("https://api.thecatapi.com/v1/breeds");
//   return {
//     props: { catsData: data },
//     revalidate: 20,
//   };
// };

function CatsList({ catsData }) {
  // CSR
  //   const [catsData, setCatsData] = useState(null);
  //   useEffect(() => {
  //     async function fetchCatch() {
  //       const { data } = await axios("https://api.thecatapi.com/v1/breeds");
  //       setCatsData(data);
  //     }
  //     fetchCatch();
  //   });

  return (
    <div>
      <h1>CAT&apos; Gallery</h1>
      <p>All about cats</p>
      <hr />
      {catsData?.length > 0 ? (
        catsData.map((cat) => (
          <div key={cat.id}>
            <div>
              {cat.image && (
                // <img
                //   src={cat.image.url}
                //   alt={cat.name}
                //   width="200"
                //   height="200"
                // />
                <Image
                  src={cat.image?.url}
                  alt={cat.name}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              )}
            </div>
            <div>
              <h1>{cat.name}</h1>
              <h3>{cat.temperament}</h3>
              <p>{cat.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CatsList;

// Static Site Generation (SSG)
// Incremental Site Regeneration (ISR)
// Server Side Rendering (SSR)

// Client Side Rendering (CSR)
