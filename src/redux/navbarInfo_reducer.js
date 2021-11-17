let initialState = {
    friends: [
        { id: 1, name: 'Earth', img: 'https://klike.net/uploads/posts/2020-05/1588575492_4.jpg' },
        { id: 2, name: 'Jupiter', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/240px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg' },
        { id: 3, name: 'Saturn', img: 'https://naked-science.ru/wp-content/uploads/2019/10/field_image_magnitosfera-saturna-i-ego-sputnik-encelad-v2.orig_.jpg' }
    ]
}
const navbarInfoReducer=(state = initialState, action)=>{
    return state;
}

export default navbarInfoReducer;