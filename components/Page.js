import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useUsers } from '../actions/users';
import Loading from './Loading';

const Page = ({ initUsers, page, limit, search }) => {
    const [data, setData] = useState(initUsers)
    const [isSwr, setIsSWR] = useState(false)
    const { users, isLoading, isError } = useUsers(page, limit, search)

    useEffect(() => {
        if (users) {
            setData(users)
            setIsSWR(true)
        }
    }, [users]);

    if (isSwr && isError) return <h2>{isError}</h2>;

    if (isSwr && isLoading) return <Loading />;

    return (
        <div className='card_container'>
            {
                data?.map(user => (
                    <Card key={user.id} user={user} />
                ))
            }
        </div>
    )
}

export default Page;
