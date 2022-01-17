import {useState} from "react";

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (ev) => {
        const evData = {...form, [ev.target.name]: ev.target.value}
        setForm({...evData})
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        getFilter(form)
    }

    return (
        <div>
            <label>name:<input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
            <label>username:<input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
            <label>email:<input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
            <button onClick={onSubmit}>filter</button>
        </div>
    );
};

export default Form;

