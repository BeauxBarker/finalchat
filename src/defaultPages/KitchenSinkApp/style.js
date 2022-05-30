

export const wrapperStyle = () => {

    return {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#74bdfe",
    }
}

export const errorStyle = () => {

    return {
        fontSize: "12px",
        color: "red",
        width: "100%",
        textAlign: "center",
    }
}
export const videoComponent = () => {

    return {
     display: "flex",
     width: "100%",
     align: "center",
     marginTop: "100px",
     marginLeft: "100px",
    }
}

export const titleStyle = () => {

    return {
        flex: "1",
        fontSize: "30px",
        color: "#2da7ff",
        height: "100vh",
        textAlign: "center",
        
        background: "rgba(  255, 255, 255, 50)",
boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
backdropFilter: "blur( 1.5px )",
webkitBackdropFilter: "blur( 1.5px )",
borderRadius: "0%",
border: "1px solid rgba( 255, 255, 255, 0.18 )",
    }
}

export const subtitleStyle = () => {

    return {
        width: "100%",
        fontSize: "14px",
        textAlign: "center",
        margin: "0px",
        backgroundColor: "transparent",
    }
}

export const userContainerStyle = () => {

    const mq = [`@media (min-width : 320px) and (max-width: 767px)`];

    return {
        flex: "1",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "rgbrgb(63,246,125)",
        background: "linear-gradient(0deg, rgba(63,246,125,1) 0%, rgba(97,185,147,1) 19%, rgba(93,183,145,1) 35%, rgba(243,250,246,1) 52%, rgba(63,246,125,1) 94%)",
        [mq[0]]: {
            flexDirection: "column",
            alignItems: "center",
        }
    }
}

export const userWrapperStyle = () => {

    return {
        display: "flex",
        width: "150px",
        margin: "10px",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#333",
        borderRadius: "10px",
        color: "green",
        padding: "6px 10px",
        cursor: "pointer",
        "p": {
            margin: "0"
        }
    }
}

export const thumbnailWrapperStyle = () => {

    return {
        width: "36px",
        height: "36px",
    }
}

export const uidWrapperStyle = () => {

    return {
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
        "div": {
            width: "100%"
        }
    }
}

export const inputWrapperStyle = () => {

    return {
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "input": {
            outline: "none",
            margin: "10px 30px",
            padding: "8px 10px",
            borderRadius: "5px",
            border: "1px solid #bbb"
        }
    }
}

export const loginBtn = () => {

    return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "button": {
            outline: "none",
            backgroundColor: "#3ca87b",
            borderRadius: "10px",
            color: "white",
            padding: "10px 25px",
            "&:hover": {
                cursor: "pointer",
                backgroundColor: "#EDC951"
            }
        },

    }
}