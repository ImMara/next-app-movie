import MovieCreateForm from "./movieCreateForm";
import {createMovie} from "../actions";
import Modal from "./modal";
import {useRouter} from "next/router";

const SideMenu = (props) => {

    const { categories } = props;
    const router = useRouter()
    let modal = null

    const handleCreateMovie = (movie) =>{
        createMovie(movie).then((movie) => {
            console.log(JSON.stringify(movie))
            modal.closeModal();
            router.push('/')
        })
    }

    return(
        <>
            <Modal ref={ elem => modal = elem} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                { categories.map((category) =>
                    <a
                        onClick={()=>{props.changeCategory(category.name)}}
                        key={category.id}
                        href="#"
                        className={`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}>{category.name}</a>
                )}
            </div>
        </>
    )
}
export default SideMenu;