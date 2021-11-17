import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let users = [
    {
        id: 1, photoUrl: 'https://klike.net/uploads/posts/2020-05/1588575492_4.jpg',
        fullName: 'Earth', followed: true, status: 'I like people', location: { number: '3', system: 'Solar system' }
    },
    {
        id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/240px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
        fullName: 'Jupiter', followed: true, status: 'I have 79 satellites', location: { number: '5', system: 'Solar system' }
    },
    {
        id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819-02.jpg/1200px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819-02.jpg',
        fullName: 'Sun', followed: false, status: 'I`m the center of everything', location: { number: 'center', system: 'Solar system' }
    },
    {
        id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Planet_Gliese_581_e.png',
        fullName: 'Gliese 581 e', followed: false, status: 'I`m very hot', location: { number: '4', system: 'Gliese 581' }
    }

]

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'my post 1', likesCount: 10 },
                { id: 2, post: 'my post 2', likesCount: 20 },
                { id: 3, post: 'my post 3', likesCount: 35 },
                { id: 4, post: 'my post 4', likesCount: 15 }
            ],
            newPostText: 'space'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Earth' },
                { id: 2, name: 'Jupiter' },
                { id: 3, name: 'Saturn' },
                { id: 4, name: 'Mars' },
                { id: 5, name: 'Sun' },
                { id: 6, name: 'Venus' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'Bye' },
                { id: 4, message: 'Good' },
            ],
            newMessageBody: ""
        },
        navbarInfo: {
            friends: [
                { id: 1, name: 'Earth', img: 'https://klike.net/uploads/posts/2020-05/1588575492_4.jpg' },
                { id: 2, name: 'Jupiter', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/240px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg' },
                { id: 3, name: 'Saturn', img: 'https://naked-science.ru/wp-content/uploads/2019/10/field_image_magnitosfera-saturna-i-ego-sputnik-encelad-v2.orig_.jpg' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; ///observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
}

export default store;
