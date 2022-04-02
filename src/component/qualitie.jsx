export const getClassesQualities = qualities => {
    let classes = 'badge m-1 bg-'
    classes += qualities.color
    return classes
}
