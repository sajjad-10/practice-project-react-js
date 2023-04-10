import Link from "next/link";

const UsersPage = () => {
    const users = [
        { id: 1, userName: "Sajjad" },
        { id: 2, userName: "Admin" },
    ];
    return (
        <div>
            <h2>UsersPage</h2>
            <div>
                <ul>
                    {users.map((item) => (
                        <li key={item.id}>
                            <Link href={`/users/${item.id}`}>
                                {item.userName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UsersPage;
