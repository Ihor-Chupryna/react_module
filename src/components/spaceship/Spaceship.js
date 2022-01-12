const Spaceship = ({spaceship}) => {
    return (
        <div className={'wrapper'}>
            <div className={'spaceship-stale'}>
                <h2>{spaceship.mission_name}</h2>
                <p>{spaceship.launch_year}</p>
            </div>
            <img src={spaceship.links.mission_patch_small} alt="ship"/>
        </div>
    );
};

export default Spaceship;