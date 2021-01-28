import Head from 'next/head'
import Navbar from '../components/navbar';
import SideMenu from "../components/sidemenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";
import {getMovies} from '../actions'
import {useState,useEffect} from "react";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            const resMovies = await getMovies();
            setMovies(resMovies);
        }
        fetchData();
        // getMovies().then((movies) => {
        //     setMovies(movies)
        // })

    },[])


    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossorigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                        crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                        crossOrigin="anonymous"></script>
            </Head>
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
                        <Carousel/>
                        <div className="row">
                            <MovieList
                                movies={movies}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
            <style jsx>{`
            .home-page{
            padding-top:80px;
            }
            `}
            </style>
        </div>
    )
}
