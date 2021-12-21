const Projects = ({ projects = [] } = {}) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            My projects
          </h2>
          <div className="h-1 w-20 bg-violet-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          These are my personal (active) projects. I work on them when I'm not working on contract work, writing, working out or otherwise engaged with living my life.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((p, i) => (
          <a className="xl:w-1/4 md:w-1/2 block p-4 scale-95 hover:scale-100 transition duration-150 ease-in-out" href={p.uri} key={i}>
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-60 rounded w-full object-cover object-center mb-6" src={p.icon} alt={`${p.title} logo`} />
              <h4 className="tracking-widest text-violet-500 text-xs font-medium title-font">{p.subtitle}</h4>
              <h3 className="text-lg text-gray-900 font-medium title-font mb-4">{p.title}</h3>
              <p className="leading-relaxed text-base">
                {p.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
