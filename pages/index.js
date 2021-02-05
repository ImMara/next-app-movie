import Head from 'next/head'
import Navbar from '../components/navbar';
import SideMenu from "../components/sidemenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import {getMovies, getCategories} from '../actions'
import {useState, useEffect} from "react";
import {Component} from "react/cjs/react.production.min";

const Home = (props) => {

        const { images , categories , movies } = props
        const [filter , setFilter] = useState('all')

        const changeCategory = category =>{
            setFilter(category)
        }

        const filterMovies = movies =>{

            if( filter === 'all'){
                return movies
            }

            return movies.filter(m =>{
                return m.genre && m.genre.includes(filter)
            })
        }

        return (
            <div>
                <Navbar/>
                <div className="home-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <SideMenu
                                    changeCategory = {changeCategory}
                                    activeCategory = {filter}
                                    categories={categories}
                                    appName={"Movie DB"}
                                />
                            </div>
                            <div className="col-lg-9">
                                <Carousel images={images}/>
                                <h1>Displaying {filter} movies</h1>
                                <div className="row">
                                    <MovieList
                                        movies={filterMovies(movies)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
}
Home.getInitialProps = async () => {
    const movies = await getMovies()
    const categories = await getCategories()
    const images = movies.map(movie => ({
        id: `image-${movie.id}`,
        url: movie.cover,
        name: movie.name
    }))

    return {
        movies,
        images,
        categories
    }
}
export default Home;