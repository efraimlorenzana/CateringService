import React, { FC } from 'react'

const Home: FC<{ title: string }> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Home;