import Head from 'next/head'
import Navbar from '../components/navbar';
import SideMenu from "../components/sidemenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";
import {getMovies} from '../actions'
import {useState, useEffect} from "react";
import {Component} from "react/cjs/react.production.min";

class Home extends Component {

    static async getInitialProps() {
        const movies = await getMovies();
        const images = movies.map((movie) => {
            return {
                id: `image-${movie.id}`,
                url: movie.cover,
                name: movie.name
            }
        })
        return {
            movies,
            images
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="home-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <SideMenu
                                    appName={"Movie DB"}
                                />
                            </div>
                            <div className="col-lg-9">
                                <Carousel images={this.props.images}/>
                                <div className="row">
                                    <MovieList
                                        movies={this.props.movies}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;