import React, { useEffect, useState } from 'react'
import Newscard from './Newscard'

const News = ({ category }) => {
  const [api, setapi] = useState([])
  const [language, setlanguage] = useState('en')
 const mykey='pub_76067db03635de1264d354b0b74ed0a85d3fc'
  // const mykey='pub_65470f35338ae194ce5b9c7f1c690463ccbd6'
  const [country, setCountry] = useState('in')
  const [status, setStatus] = useState('')
  const [q, setq] = useState('latest')

  const fetchNews = async () => {
    const response = await fetch(`https://newsdata.io/api/1/latest?category=${category}&country=${country}&language=${language}&apikey=${mykey}`)
    const data = await response.json()
    setapi(data.results)
    setStatus(data.status)
  }

  const search = async () => {
    const myresponse = await fetch(`https://newsdata.io/api/1/latest?q=${q}&country=${country}&language=${language}&apikey=${mykey}`)
    const mydata = await myresponse.json()
    setapi(mydata.results)
    setStatus(mydata.status)
  }

  useEffect(() => {
    fetchNews()
  }, [category, country, language])

  useEffect(() => {
    search()
  }, [q])

  const PickLang = (e) => setlanguage(e.target.value)
  const PickCont = (e) => setCountry(e.target.value)
  const searchButton = (e) => setq(e.target.value)

  return (
    <>
      {/* Filters */}
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center px-4 py-4 dark:bg-black'>
        <span className='text-gray-500'>
          Choose Language:
          <select className='ml-2 text-teal-700 font-semibold' onChange={PickLang}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ar">Arabic</option>
            <option value="de">German</option>
            <option value="hi">Hindi</option>
          </select>
        </span>
        <span className='text-gray-500'>
          Choose Country:
          <select className='ml-2 text-teal-700 font-semibold' onChange={PickCont}>
            <option value="in">India</option>
            <option value="au">Australia</option>
            <option value="br">Brazil</option>
            <option value="de">Germany</option>
            <option value="us">USA</option>
          </select>
        </span>
      </div>

      {/* Heading */}
      <div>
        <h1 className='text-center capitalize font-bold dark:bg-black text-2xl md:text-4xl text-teal-600 pb-4'>
          {category} latest news
        </h1>
      </div>

      {/* Search Bar */}
      <div className='px-4 pb-6 dark:bg-black'>
        <label htmlFor="Search" className="block w-full max-w-md mx-auto relative">
          <input
            type="text"
            onChange={searchButton}
            id="Search"
            placeholder="Search news"
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-900 dark:text-white"
          />
          
        </label>
      </div>

      {/* News Cards */}
      {status === 'success' ? (
        <div className='flex flex-wrap justify-center gap-6 px-4 dark:bg-black'>
          {api.map((news, i) => (
            <Newscard
              key={i}
              title={news.title}
              description={news.description}
              image={news.image_url}
              link={news.link}
              date={news.pubDate}
              category={news.category}
            />
          ))}
        </div>
      ) : (
        <div className='text-center py-8 capitalize dark:bg-black dark:text-white'>
          API not found
        </div>
      )}
    </>
  )
}

export default News
