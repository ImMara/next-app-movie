import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import {createMovie} from "../actions";

const SideMenu = (props) => {

    const { categories } = props;

    const handleCreateMovie = (movie) =>{
        createMovie(movie).then((movie) => {
            console.log(JSON.stringify(movie))
        })
    }

    return(
        <>
            <Modal hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                { categories.map((category) =>
                    <a
                        key={category.id}
                        href="#"
                        className="list-group-item">{category.name}</a>
                )}
            </div>
        </>
    )
}
export default SideMenu;