import React from 'react'
import PageNotFound from './PageNotFound'
import { useUserStore } from '../store/UserStore'
const AdminPanel = () => {
    const usertype = useUserStore((state) => state.usertype)

    if (usertype === 'admin') {
        return (
            <div>AdminPanel</div>
        )
    }
    else {
        return (
            <PageNotFound />
        )
    }
}

export default AdminPanel