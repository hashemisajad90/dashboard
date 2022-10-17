import { Buttion } from "../button/button";
import { Input } from "../input/input";
import Add from "./add";

export function Header() {
    return(
        <div className="header">
            <Add />
            <div>
                <Buttion text='+' />
                <Input type='text' placeholder='جستجو . . . ' />
            </div>
        </div>
    )
}