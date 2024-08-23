import React from 'react';
import "./Login.scss"
import toast , {Toaster} from  "react-hot-toast"
import { useNavigate } from "react-router-dom"

function Login({ setCurrentUser, currentUser }) {

    const [values, setValues] = React.useState({
        email: "",
        username: "",
        password: "",
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.email === "" || values.password === "" || values.username === "") {
            toast.error('All fields are required!');
        } else {
            setCurrentUser(values)
            navigate("/")
        }
    }



    React.useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <div className="login">
            <form onSubmit={handleSubmit} action="">
                <h2>login page</h2>
                <div className="form-group">
                    <label htmlFor="">Email :</label>
                    <input reqiured onChange={handleChange} name="email" type="email" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Username :</label>
                    <input reqiured onChange={handleChange} name="username" type="text" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password :</label>
                    <input reqiured onChange={handleChange} name="password" type="password" placeholder="" />
                </div>
                <button type="submit" >Login</button>
                <Toaster/>
            </form>
        </div>
    );
}

export default Login;
