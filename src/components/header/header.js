import { Buttion } from "../button/button";
import { Input } from "../input/input";
import Add from "./add";

export function Header() {
    return(
        <div className="header">
            <div>
                <Input type='text' placeholder='Search' />
                <Buttion text='+' />
            </div>
            <Add />
        </div>
    )
}