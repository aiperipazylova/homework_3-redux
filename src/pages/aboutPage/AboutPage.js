import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/actions";
import UserCard from "../../components/UserCard";



export default function AboutPage() {

    const users = useSelector(state => state.titleReducer.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersAction())
    }, [dispatch])

  return (
    <div>
        {users && users.map(item => (
                <UserCard key={item.id} cardInfo={item} /> 
            ))}
    </div>
  )
}