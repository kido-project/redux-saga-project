const styles = () => ({
    cardActions: {
        display: "flex",
        alignItem: "center",
        justifyContent: "flex-end",
    },
    fabEdit: {
        backgroundColor: "#1565c0 !important",
        color: "#FFFFFF !important",
        opacity: "1",
        '&:hover': {
            // backgroundColor: "#42a5f5 !important",
            opacity: "0.8"
        }
    },
    fabDelete: {
        backgroundColor: "#c62828 !important",
        color: "#FFFFFF !important",
        opacity: "1",
        '&:hover': {
            backgroundColor: "#ef5350 !important",
            opacity: "0.8"
        }
    }
})

export default styles;