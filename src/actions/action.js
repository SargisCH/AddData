export const redVisibilityAction = (visibility) => {
    return {
        type: "CHANGE_RED_VISIBILITY",
        redVisibility: visibility
    }
}
export const greenVisibilityAction = (visibility) => {
    return {
        type: "CHANGE_GREEN_VISIBILITY",
        greenVisibility: visibility
    }
}
export const blueVisibilityAction = (visibility) => {
    return {
        type: "CHANGE_BLUE_VISIBILITY",
        blueVisibility: visibility
    }
}