const Hero = () => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded-lg" alt="hero" src="/fiiv.jpg" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-500">
          I'm <span className="text-indigo-600 font-bold">fiiv</span> / <span className="text-violet-600 font-bold">Mike</span> / <span className="text-purple-600 font-bold">Никита</span>
        </h1>
        <p className="mb-8 leading-relaxed">
          I'm a traveller, aspiring writer, father, indie maker, runner, cook, reader of theory, software developer, amateur electricist, open web enthusiast, and a bunch of other stuff.
        </p>
        {/*
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
        */}
      </div>
    </div>
  </section>
)

export default Hero
