import ProjectCard from './ProjectCard';

// Datos de los proyectos
const projects = [
  {
    title: "App de Finanzas Personales",
    description: "Aplicación colaborativa para control de finanzas de manera ágil y sencilla.",
    demoLink: "https://front-mint.onrender.com",
    repoLink: "https://github.com",
    tags: ["React Native", "Finanzas"]
  },
  {
    title: "Sistema de Inventario - Topia",
    description: "Sistema desarrollado durante mi estadía universitaria para gestionar inventario.",
    repoLink: "https://github.com",
    tags: ["React Native", "Inventario"]
  },
  {
    title: "Software de Control Forestal",
    description: "Informe de rendimiento y control de inventario para un ejido forestal.",
    repoLink: "https://github.com",
    tags: ["React Native", "Inventario", "Reportes"]
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Proyectos Destacados
        </h3>

        {/* Video principal */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
           {/* Contenedor del Video (para hacerlo responsivo 16:9) */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingTop: '56.25%' }}>
          {/* El padding-top (56.25%) es el truco para el aspect-ratio de 16:9 */}
           <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/lEpwxHhUJMg?si=cywywxz3KKc1Xdvo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
           ></iframe>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Demo de Desarrollo
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Proceso de desarrollo y creación de interfaces modernas.
              </p>
            </div>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;