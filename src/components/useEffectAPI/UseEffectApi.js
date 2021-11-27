/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users')
        setUsers(await response.json());
    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
            <h2>👉List of Github Users👈</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        users.map((curElem) => {
                            return (
                                <>
                                    <div className="col-10 col-md-4 mt-5">
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image">
                                                    <img src={curElem.avatar_url} className="rounded" width="155" />
                                                </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4>
                                                    <span className="textLeft">{curElem.title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UseEffectApi
