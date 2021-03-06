import { useContext, useEffect } from "react"
import Header from "../components/Header"
import Sidebar from "../components/sidebar"
import Timeline from "../components/Timeline"
import useUser from "../hooks/use-user"
import LoggedInUserContext from "../context/logged-in-user"
import PropTypes from 'prop-types'

const Dashboard = ({user: loggedInUser}) => {
    const { user } = useUser(loggedInUser.uid)

    useEffect(() => {
        document.title = 'Instagram'
        
    }, [])
    return (
        <LoggedInUserContext.Provider value={{ user }}>
            <div className="bg-gray-background md:mx-auto mx-5">
                <Header />
                <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 justify-between mx-auto max-w-screen-lg">
                    <Timeline />
                    <Sidebar />
                </div>
            </div>
        </LoggedInUserContext.Provider>
        
    )
}

export default Dashboard

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
}