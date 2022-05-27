import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
    const [id, setId] = useState("")
    const navigate = useNavigate();
    const [champions, setChampions] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/champions/${id}`)
    }
    useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json`)
            .then(response => {
                let temp = response.data.data
                let list = []
                for (let key in temp) {
                    list.push(key)
                }
                setChampions(list)
                console.log(list)
            })
            .catch(err => console.error(err))
    })

    return (
        <div className="container">
            <h2>Choose Your Champion!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" value={id}
                    onChange={e => setId(e.target.value)}
                    className="form-control" placeholder="Choose your champion" />
                <button type="submit" className="btn btn-primary my-3">Search</button>
            </form>
            <div className="row">
                {
                    champions &&
                    champions.map((champion, i) => (
                        <div key={i} className="col text-center">
                            <Link to={`/champions/${champion}`} className="text-decoration-none text-white">
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`} alt="Not Working" style={{ width: 200 }} />
                                <h4>{champion}</h4>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Search