import {useState, useEffect} from "react";
import axios from 'axios';

export function useMyHooks (pageId) {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    return axios({method: 'get', url: `https://reqres.in/api/users?page=${pageId}`})
                .then(response => {
                  setUserList(response.data.data);
                })
  }, [pageId])
  return userList
}