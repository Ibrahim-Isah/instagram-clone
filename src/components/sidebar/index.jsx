import useUser from "../hooks/use-user"

const Sidebar = () => {
    const {user: { fullName, username, userId}} = useUser()
    return (
        <div>
            Side bar
        </div>
    )
}

export default Sidebar
