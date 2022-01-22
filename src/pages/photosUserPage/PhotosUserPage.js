import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {albumsService} from "../../services/albumService";
import style from './PhotosUserPage.module.css'

const PhotosUserPage = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsService.getPhotos(albumId).then(value => setPhotos([...value]))
    }, [albumId])

    return (
        <div>
            <h4>Photos:</h4>
            <div className={style.wrapper}>
                {photos.map(photo => <div key={photo.id}>
                    <h5>{photo.title}</h5>
                    <img src={photo.thumbnailUrl} alt=""/></div>)}
            </div>
        </div>
    );
};

export {PhotosUserPage};