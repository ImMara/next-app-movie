import Head from 'next/head'
import Navbar from '../components/navbar';
import SideMenu from "../components/sidemenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";
import {getMovies} from '../actions'
import {useState,useEffect} from "react";
import {Component} from "react/cjs/react.production.min";

class Home extends Component {

    static async getInitialProps() {
        const movies = await getMovies();
        const images = movies.map((movie) => {
            return {
                id:`image-${movie.id}`,
                image: movie.image
            }
        })
        return{
            movies,
            images
        }
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         movies: [],
    //     }
    // }
    // state = {
    //     movies: []
    // }

    // called only on client browser
    //called only once when component did mounted
    // componentDidMount() {
    //     getMovies()
    //         .then((movies) => {
    //             this.setState({movies})
    //         })
    //         .catch((error) => {
    //              this.setState({errorMessage: error})
    //         })

    // }

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
                                    {/*{ this.props.errorMessage  &&*/}
                                    {/*    <div className="alert alert-danger" role="alert">*/}
                                    {/*    { this.props.errorMessage  }*/}
                                    {/*    </div>*/}
                                    {/*}*/}
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