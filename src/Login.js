import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary">
            <div className="p-3 bg-white w-25">
                <form action="">
                    <div className="mb-3">
                        <label typeof="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" />
                    </div>
                    <div>
                        <label typeof="password">password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" />
                    </div>
                    <button className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )
}