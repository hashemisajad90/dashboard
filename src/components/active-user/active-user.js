import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialContext } from "../../contexts/initialContext";
import { deleted, edit } from "../../redux/users/user.action";
import { Buttion } from "../button/button";
import { Input } from "../input/input";

export function ActiveUser() {
    const clients = useSelector(state => state.client.clients);
    const state = useSelector(state => state.client);
    const dispatch = useDispatch();
    const [timeOuter, setTimeOuter] = useState(false);

    const { inputValues, setInputValues } = useContext(InitialContext);
    const [findClient, setFindClient] = useState();

    const [newInitial, setNewInitial] = useState();
    console.log(newInitial);
    function editHandler(item) {
        setFindClient(item.id)
        setNewInitial(item)
    }

    function doneHandler(id) {
        dispatch(edit(id, newInitial));
        setFindClient()
    }
    function handleOnChange(obj) {
        setNewInitial((prev) => { return { ...prev, ...obj } });
    }
    function cancelHandler() {
        setFindClient()
    }
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
                                return item.id === findClient ? (
                                    <tr key={`p${index}_${item.name}`}>
                                        <td><Input className='input_change' type='text' value={newInitial.name} onChange={(e) => handleOnChange({ name: e.target.value })} /></td>
                                        <td><Input className='input_change' type='text' value={newInitial.family} onChange={(e) => handleOnChange({ family: e.target.value })} /></td>
                                        <td><Input className='input_change' type='text' value={newInitial.date_of_brith} onChange={(e) => handleOnChange({ date_of_brith: e.target.value })} /></td>
                                        <td><Input className='input_change' type='text' value={newInitial.age} onChange={(e) => handleOnChange({ age: e.target.value })} /></td>
                                        <td><Input className='input_change' type='text' value={newInitial.size} onChange={(e) => handleOnChange({ size: e.target.value })} /></td>
                                        <td className="btn-td">
                                            <Buttion className='btn-table' type='button' icon={<i class="bi bi-x-lg"></i>} onClick={() => cancelHandler()} />
                                            <Buttion className='btn-table' type='button' icon={<i class="bi bi-check-lg"></i>} onClick={() => doneHandler(item.id)} />
                                        </td>
                                    </tr>)
                                    :
                                    (
                                        <tr key={`p${index}_${item.name}`}>
                                            <td>{item.name}</td>
                                            <td>{item.family}</td>
                                            <td>{item.date_of_brith}</td>
                                            <td>{item.age}</td>
                                            <td>{item.size}</td>
                                            <td className="btn-td">
                                                <Buttion className='btn-table' type='button' icon={<i class="bi bi-trash3"></i>} onClick={() => dispatch(deleted(item.id))} />
                                                <Buttion className='btn-table' type='button' icon={<i class="bi bi-pencil"></i>} onClick={() => editHandler(item)} />
                                            </td>
                                        </tr>
                                    )
                            })
                            :
                            <tr>
                                <td colSpan={6}><i class="bi bi-arrow-clockwise"></i></td>
                            </tr>
                    }
                </tbody>
            </table>
        </div >
    )
}