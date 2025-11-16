import React, { useContext } from 'react'
import { StockContext, UserContext } from '../App'

// this is now the consumer
const ChildC = () => {

    const stockData = useContext(StockContext)
    const userData = useContext(UserContext)
    return (
        <>

            <h2>Child C - {stockData.stock}</h2>
            <h2>User data - {userData.user.name}</h2>
            <h2>User data - {userData.user.isLoggedIn}</h2>


            {/* <StockContext.Consumer>
                {
                    ({ stock, price }) => {
                        return (
                            <UserContext.Consumer>
                                {
                                    ({ user }) => {
                                        return (
                                            <>
                                                <h2>user : {user.name}</h2>
                                                <h2>LoggedIn : {user.isLoggedIn}</h2>
                                                <hr />
                                                <h2>ChildC -{stock} : {price} </h2>
                                            </>
                                        )
                                    }
                                }
                            </UserContext.Consumer>
                        )
                    }
                }
            </StockContext.Consumer> */}
        </>
    )
}

export default ChildC