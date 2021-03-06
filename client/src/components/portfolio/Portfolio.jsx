import PortfolioItem from './PortfolioItem'
import './portfolio.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {SERVER_URL} from '../../constants'

const Portfolio = () => {
  const [PortfolioList, setPortfolioList] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try{
      const response = await axios.get(`${SERVER_URL}/api/portfolio`).then(({ data }) => data)
      return setPortfolioList(response)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <section className='portfolio' id='portfolio'>
      <div className="container">
        <div className="portfolio__inner">
          <h3 className="portfolio__subtitle global-subtitle">Мои последние работы</h3>
          <h2 className="portfolio__title global-title">Портфолио</h2>
          <ul className="portfolio__list">
            {PortfolioList.map(({ src, title, gitLink, webLink, _id }) => {
              return(
              <div className="portfolio__list-anim" data-aos="zoom-in-up" data-aos-duration="1000" key={_id}>
                <PortfolioItem src={src} title={title} gitLink={gitLink} webLink={webLink} />
              </div>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Portfolio