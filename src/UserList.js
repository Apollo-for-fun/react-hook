import React from "react";
import {useMyHooks} from './useMyHooks'

export function UserList(pageId) {

    const result = useMyHooks(pageId)
    console.log(result)
    // return users;
    return result.map(item =>
        <li key={item.id}>
            <div>
                <div>email: {item.email}</div>
                <div>name: {item.last_name} {item.first_name}</div>
                <img src={item.avatar}/>
            </div>
        </li>
    );
}
