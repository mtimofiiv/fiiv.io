import { useState, useEffect } from 'react'

const Post = ({ uri, title, source, summary, posted_at }) => {
  const [ month, setMonth ] = useState('')
  const [ day, setDay ] = useState('')

  useEffect(() => {
    const dto = new Date(posted_at)
    const intl = new Intl.DateTimeFormat('en-GB', { month: 'short', day: 'numeric' })

    for (const part of intl.formatToParts(dto)) {
      if (part.type === 'month') setMonth(part.value)
      else if (part.type === 'day') setDay(part.value)
    }
  }, [])

  return (
    <a className="py-8 px-4 lg:w-1/3 scale-95 hover:scale-100 transition duration-150 ease-in-out hover:bg-gray-100 rounded-lg" href={uri}>
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{month}</span>
          <span className="font-medium text-lg text-gray-800 title-font leading-none">{day}</span>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-violet-500 mb-1">Blog post</h2>
          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{title}</h1>
          <a className="inline-flex items-center">
            <img alt="blog" src={`https://icon.horse/icon?uri=${uri}`} className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col pl-3">
              <span className="title-font text-gray-900">via <span className="font-medium">{source}</span></span>
            </span>
          </a>
          <p className="leading-relaxed mb-5">{summary}</p>
        </div>
      </div>
    </a>
  )
}

const Blogroll = ({ posts = [] }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Blogroll</h1>
          <div className="h-1 w-20 bg-violet-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          I like to write. Some stuff I've written in the past I now find a bit cringy, but it's there...
        </p>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          {posts.map((p, i) => <Post {...p} key={i} />)}
        </div>
      </div>
    </div>
  </section>
)

export default Blogroll
