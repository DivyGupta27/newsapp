import React from 'react'

const Newscard = ({image,title,link,description,date}) => {
  return (
<div className="card bg-base-100 w-60 shadow-sm  rounded-t-2xl">
  <figure className='w-full h-48 overflow-hidden'>
    <img className='rounded-t-2xl '
      src={image?image:"https://media.istockphoto.com/id/1219963993/photo/breaking-news-3d-rendering-virtual-set-studio-for-chroma-footage.jpg?s=1024x1024&w=is&k=20&c=OfEnLYYXZyEugsQDlOkmNcxXvBLsqcFPsFmZCpAdAXk="}
      alt="ERROR"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title dark:text-white font-bold">{`${title}`.trim().slice(0,100)}...</h2>
    <p className='dark:text-white'>{`${description}`.trim().slice(0,50)}</p>
    <div className="card-actions justify-end flex gap-[30%] items-center">
      <span className='dark:text-white'>{`${date}`.slice(0,10)}</span>
      <a href={link} target='_blank'  className=" bg-lime-400 rounded dark:text-black px-[5px] py-[2px] my-[10px]">read more</a>
    </div>
  </div>
</div>
  )
}

export default Newscard