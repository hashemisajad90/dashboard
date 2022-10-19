import { Buttion } from "../button/button";
import { Input } from "../input/input";
import Add from "./add";
import Fuse from 'fuse.js'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { search } from "../../redux/users/user.action";

export function Header() {
    const clients = useSelector(state => state.client.clients)
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const options = {
        isCaseSenitive: false,
        includeMatches: true,
        // Search in `author` and in `tags` array
        keys: ['name', 'family', 'date_of_brith', 'age', 'size']
    }

    const fuse = new Fuse(clients, options)

    const result = fuse.search(searchValue).map(node=> node.item)
    console.log(result);
    function searchHandeler(e) {
        setSearchValue(e.target.value)
    }

    function searchHandelerBtn() {
        dispatch(search(result))
    }
    return (
        <div className="header">
            <Add />
            <div>
                <Buttion icon={<i className="bi bi-search"></i>} onClick={searchHandelerBtn} />
                <Input type='text' placeholder='جستجو . . . ' onChange={(e) => searchHandeler(e)} />
            </div>
        </div>
    )
}