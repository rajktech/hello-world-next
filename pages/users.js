function Users({ users }) {
    return <>
    <h3>List of users</h3>
    {users.map((user) => {
        return (
            <div key={user.id}>{user.id}. {user.name} / {user.email}</div>
        );
    })}
    </>
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }
}
export default Users;