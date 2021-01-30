import Modal from "./modal";

const SideMenu = (props) => {

    const { categories } = props;
    return(
        <>
            <Modal />
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