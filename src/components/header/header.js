import { Buttion } from "../button/button";
import { Input } from "../input/input";
import Add from "./add";

export function Header() {
    return(
        <div className="header">
            <Add />
            <div>
                <Buttion icon={<i className="bi bi-search"></i>} />
                <Input type='text' placeholder='جستجو . . . ' />
            </div>
        </div>
    )
}