import React from 'react'
import Loader from 'react-loader-spinner'



const LoadingAnimation = () => {
    return (
        <Loader
            type="ThreeDots"
            color="#3f51b5"
            width="120"
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}
        />)
}

export default LoadingAnimation
