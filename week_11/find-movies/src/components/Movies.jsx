import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MovieCard } from './MovieCard';

export const Movies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const movieIds = [
    "tt2250912",
    "tt1630029",
    "tt9114286",
    "tt11564570",
    "tt14109724",
    "tt13833688",
    "tt15474916",
    "tt8093700",
    "tt10648342",
    "tt1877830",
    "tt3704428",
    "tt1745960",
    "tt1464335",
    "tt6710474",
    "tt10872600",
    "tt10838180",
    "tt1160419",
    "tt11291274",
    "tt12593682",
    "tt15398776"
  ];
  useEffect(() => {

    async function fetchMovies() {
      try {
        const result = [];

        for (let id of movieIds) {
          const fetchedMovies = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);
          const data = await fetchedMovies.json();
          result.push(data);

        }
        console.log(result);
        setMovies(result);
        setSearch(result);

      } catch (err) {
        console.error(err);
      }
    }

    fetchMovies();
  }, []);
  console.log(movies);

  useEffect(() => {
    if (!query.trim()) {
      setSearch(movies);
      return;
    }
    const filtered =movies.filter((movie) =>
    movie.short.name.toLowerCase().includes(query.toLowerCase()));
    setSearch(filtered);
  }, [query, movies]);


  return (
    <div className='px-6 w-[90%] mx-auto'>
      <h2 className='text-white text-xl font-seimbold mb-4'>Movies</h2>
      <div className='flex gap-4 flex-wrap '>
        {
          search.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />
          })
        }
      </div>
      {
        search.length === 0&&(
          <p className=' text-gray-400 mt-6 '>No movies found</p>
        )
      }
    </div>
  )
}
