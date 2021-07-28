import User from './user'
import Suggestions from './suggestions'
import { useContext } from 'react'
import LoggedInUserContext from '../../context/logged-in-user'

const Sidebar = () => {
    const {user: { docId = '' , fullName, username, userId , following} = {}} = useContext(LoggedInUserContext)
    return (
        <div className="">
          <User username={username} fullName={fullName} />
          <Suggestions userId={userId} following={following} loggedInUserDocId={docId}/>  
        </div>
    )
}

export default Sidebar
