import React from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../actions/users';
import Loading from '../../components/Loading';
import Card from '../../components/Card';


const User = () => {
    const router = useRouter();
    const { id } = router.query
    const { user, isLoading, isError } = useUser(id);

    if (isError) return <h2>{isError}</h2>;

    if (isLoading) return <Loading />; return (
        <div>
            {user && <Card user={user} />}
        </div>
    )
}

export default User;