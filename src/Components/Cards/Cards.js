import React from "react";
import "tachyons";
import { useQuery, gql } from "@apollo/client";
const FILMS_QUERY = gql`
  {
    characters(filter: { village: "leaf" }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        _id
        name
        avatarSrc
        description
        rank
        village
      }
    }
  }
`;

const Cards = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) {
    console.log(loading);
    return "loading...";
  }
  if (error) {
    console.log(error);
    return <pre>{error.message}</pre>;
  }
  return (
    <div>
      <article class="">
        {data.characters.results.map((chara) => (
          <div key={chara._id} className="cards">
            <img
              src={chara.avatarSrc}
              alt={chara.name}
              className="br-100 h3 w3 dib"
            />
          </div>
        ))}
      </article>
    </div>
  );
};

export default Cards;
