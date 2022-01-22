import {
    CommentsPage,
    HomePage,
    NotFoundPage, PhotosUserPage,
    PostDetailsPage,
    PostsPage, UserAlbumsPage,
    UserDetailsPage,
    UserPostPage,
    UsersPage
} from "./pages";
import {Routes, Route} from 'react-router-dom'
import {Main} from "./components";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':userId'} element={<UserDetailsPage/>}>
                            <Route path={'postsUser'} element={<UserPostPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<UserAlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosUserPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
