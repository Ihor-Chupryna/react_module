import {Link, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {albumsService} from "../../services/albumService";
import style from '../../style/DetailsStyle.module.css'

const UserAlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAlbumsUser(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div className={style.wrapper}>
            <h4>Albums:</h4>
            {albums.map(album => <div key={album.id}><Link to={`${album.id}/photos`}>-{album.title}</Link></div>)}
            <div><Outlet/></div>
        </div>
    );
};

export {UserAlbumsPage};