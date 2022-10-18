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

    const [newInitial, setNewInitial] = useState(inputValues);

    function editHandler(id) {
        setFindClient(id)
    }

    function doneHandler(id) {
        dispatch(edit(id, newInitial));
        setFindClient()
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
                                        <td><Input className='input_change' type='text' defaultValue={item.name} onChange={(e) => setNewInitial({ ...newInitial, name: e.target.value })} /></td>
                                        <td><Input className='input_change' type='text' defaultValue={item.family} onChange={(e) => setNewInitial({ ...newInitial, family: e.target.value })} /></td>
                                        <td><Input className='input_change' type='text' defaultValue={item.date_of_brith} onChange={(e) => setNewInitial({ ...newInitial, date_of_brith: e.target.value })} /></td>
                                        <td><Input className='input_change' type='text' defaultValue={item.age} onChange={(e) => setNewInitial({ ...newInitial, age: e.target.value })} /></td>
                                        <td><Input className='input_change' type='text' defaultValue={item.size} onChange={(e) => setNewInitial({ ...newInitial, size: e.target.value })} /></td>
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
                                                <Buttion className='btn-table' type='button' icon={<i class="bi bi-pencil"></i>} onClick={() => editHandler(item.id)} />
                                            </td>
                                        </tr>
                                    )
                            })
                            :
                            <i class="bi bi-arrow-clockwise"></i>
                    }
                </tbody>
            </table>
        </div >
    )
}