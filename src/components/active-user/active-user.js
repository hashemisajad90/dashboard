import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleted } from "../../redux/users/user.action";
import { Buttion } from "../button/button";

export function ActiveUser() {
    const clients = useSelector(state => state.client.clients);
    const dispatch = useDispatch();
    const [timeOuter, setTimeOuter] = useState(false);

    useEffect(() => {
        try {
            setTimeout(() => {
                setTimeOuter(true);
            }, 3000);
        } catch (e) {
            console.error(e);
        }
    }, []);
    return (
        <div class="table-user w-100">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">نام</th>
                        <th scope="col">نام خانوادگی</th>
                        <th scope="col">تاریخ تولد</th>
                        <th scope="col">سن</th>
                        <th scope="col">قد</th>
                        <th scope="col">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        timeOuter ?
                            clients.map((item, index) => {
                                return (
                                    <tr key={`p${index}_${item.name}`}>
                                        <td>{item.name}</td>
                                        <td>{item.family}</td>
                                        <td>{item.date_of_brith}</td>
                                        <td>{item.age}</td>
                                        <td>{item.size}</td>
                                        <td className=".btn-td">
                                            <Buttion className='btn-table' type='button' text='delete' onClick={() => dispatch(deleted(item.id))} />
                                            <Buttion className='btn-table' type='button' text='edit' />
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            ''
                    }
                </tbody>
            </table>
        </div>
    )
}