import usePhotos from '../hooks/use-photos';
import Skeleton from 'react-loading-skeleton';
import Post from './post';
import { useContext } from 'react';
import LoggedInUserContext from '../context/logged-in-user';

const Timeline = () => {
    //we need to get the logged in user's photos
    const { user } = useContext(LoggedInUserContext)
    const { photos } = usePhotos(user);
    // on loading the photos, we need to use react skeletom
    // if we have photos, render them (create a post component)
    // if the user has no photos, tell them to create some photos
    return (
        <div className="container col-span-2">
            {!photos ? (
                <>
                    <Skeleton count={4} width={640} height={500} className="mb-5"/>
                </>
            ):(
                photos.map((content) => <Post key={content.docId} content={content} />)
            )}
        </div>
    )
}

export default Timeline
