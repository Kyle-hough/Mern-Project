import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const { id } = useParams()
    const [description, setDescription] = useState()
    const [url, setUrl] = useState()
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/guides`, { "championID": id, url, description })
            .then(response => {
                navigate(`/champions/${id}`)
                console.log(response.data)
            })
            .catch(err => {
                const errArr = []
                const errResData = err.response.data.errors
                console.log(errResData)
                for (const key in errResData) {
                    errArr.push(errResData[key]["message"])
                }
                setErrors(errArr)
            })
    }


    return (
        <div>
            <Link to="/" className="btn btn-primary">Home</Link>
            <h2 className="text-white">New Guide</h2>
            <form onSubmit={handleSubmit}>
                <input type="hidden" value={id} name="championID" />
                <input type="text" name="description" value={description} placeholder="Enter the description for this guide" className="form-control"
                    onChange={e => setDescription(e.target.value)} />
                <input type="text" name="url" value={url} placeholder="Enter the url of the guide" className="form-control"
                    onChange={e => setUrl(e.target.value)} />
                <button type="submit" className="btn btn-success">Create</button>
                <Link to={`/champions/${id}`} className="btn btn-light">Back</Link>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}> {err} </p>
                ))
            }
        </div>
    )
}

export default Create