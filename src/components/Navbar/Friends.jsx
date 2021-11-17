import React from 'react';

const Friends = (props) => {

    let FriendsElements = props.friends
        .map(f => <span >
            <img src={f.img} />
            <figcaption>{f.name}</figcaption>
        </span>);

    return <div>
        {FriendsElements}
    </div>
}
export default Friends;