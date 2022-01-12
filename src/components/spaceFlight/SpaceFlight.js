import './SpaceFlight.css'

const SpaceFlight = ({flight}) => {
    return (
        <div className={'wrapper'}>
            <div>
                <h2>{flight.mission_name}</h2>
                <p>{flight.launch_year}</p>
            </div>
            <img src={flight.links.mission_patch_small} alt="logo"/>
        </div>
    );
};

export default SpaceFlight;