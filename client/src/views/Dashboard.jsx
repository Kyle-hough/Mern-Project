import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const { id } = useParams()
    const [champion, setChampion] = useState()
    const [guides, setGuides] = useState([])

    useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/${id}.json`)
            .then(response => {
                let temp = response.data.data
                console.log(temp)
                for (let key in temp) {
                    console.log(key)
                    setChampion(temp[key])
                }

            })
            .catch(err => console.error(err))
        axios.get(`http://localhost:8000/api/guides/${id}`)
            .then(response => {
                console.log(response.data)
                setGuides(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    // let text = `${champion}`
    // text = text.replace("\\s", "")

    return (
        <div>
            <Link to='/' className='btn btn-primary'>Pick a new Champ</Link>
            {
                champion ?
                    <div >
                        <div className="text-center text-white text-content-bold">
                            <h2>{champion.name}</h2>
                            <p>{champion.title}</p>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt="Not Working" className="container rounded mx-auto d-block" />
                        </div>
                        <Link to={`/new/${champion.name}`} className='btn btn-primary my-3'>Create a new guide</Link>
                    </div> :
                    <h1>Champion does not exist</h1>
            }

            {
                guides.map((guide, i) => (
                    <div key={i} className="text-white border p-2 ">
                        <p className="m-0">Description: {guide.description}</p>
                        <a href={guide.url} className="btn btn-success">Link</a>

                    </div>
                ))
            }
        </div>
    )
}
export default Dashboard