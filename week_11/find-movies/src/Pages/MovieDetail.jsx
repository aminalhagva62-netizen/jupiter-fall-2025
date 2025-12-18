import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        async function fetchMovies() {
            try {
                const result = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`)
                const data = await result.json();
                setMovie(data);
            } catch (error) {
                console.error(error);
            }

        }
        fetchMovies();
    }, [id]);

    if (!movie) {
        return <div className='text-white p-6 '>Loading...</div>
    }
    return (
        <div className='min-h-screen text-white'>
            <div className='bg-gradient-to-r from-black via-neutral-900 to-black px-32 py-10  flex justify-between '>
                <div>
                    <span className='text-sm font-seimbold text-yellow-400'>MOVIE</span>
                    <h1 className='mt-2 max-w-5xl text-[40px]'>{movie.short.name}</h1>

                    <div className='mt-3 text-sm text-gray-400'>
                        <span>{movie.main.releaseDate.year}</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src="/images/star.png" alt="" />
                    <span className='text-[32px] font-semibold'>{movie.main.ratingsSummary.aggregateRating}</span>
                    <span className='text-sm text-gray-400'>{movie.main.ratingsSummary.voteCount}</span>
                </div>
            </div>
            <div className='flex px-10 py-10 gap-10'>
                <img src={movie.short.image} width={272} className='rounded-xl' alt="" />
                <div>
                    {
                        movie.main.wins && (
                            <div className='mb-6 flex items-center gap-4 rounded-xl border border-yellow-400  '>
                                <span className='rounded-md bg-yellow-400 px-4 py-1 text-sm font-semibold text-black p-4 '> Award & Nominations</span>
                                <span>{movie.main.nominationsExcludeWins.totl} total nominations</span>
                            </div>
                        )
                    }
                    <div className='mb-5 flex flex-wrap gap-2'>
                        {
                            movie.short.genre.map((g) => (
                                <span key={g} className='rounded-full bg-neutral-800 px-4 py-1 text-sm'>{g} </span>
                            ))
                        }
                    </div>

                    <div className='mb-6 text-gray-300'>{movie.top.plot.plotText.plainText}</div>

                    <div className='space-y-2 text-sm text-gray-400'>
                        <p>
                            <span className='text-gray-500'>Director</span>
                            {
                                movie.top.directorsPageTitle.map(title =>(
                                    title.credits.map(c=>{
                                        return `${c.name.nameText.text},`
                                    })
                                ))
                            }
                        </p>
                        <p>
                            <span className='text-gray-500'>Writers:</span>
                            {
                                movie.top.castPageTitle.edges.map(t=>(
                                    `${t.node.name.nameText.text},`
                                ))
                            }
                            </p>
                            <p>
                                <span className='text-gray-500 '>Countries:</span>
                                {
                                    movie.main.countriesDetails.countries.map(c =>(
                                        `${c.text},`
                                    ))
                                }
                            </p>
                            <p>
                                <span className='text-gray-500'>Release Date:</span>
                                {
                                    movie.main.releaseDate.year +" . " + movie.main.releaseDate.month + " . " +  movie.main.releaseDate.day
                                }
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
