export default function Services() {
    const services = [
        {
            name: 'Backend (Spring Boot)',
            icon: './assets/web-icon.png',
            description: 'Build REST APIs, authentication-ready backends, and clean layered architecture for scalable apps.',
            link: '#work',
        },
        {
            name: 'Database & SQL',
            icon: './assets/graphics-icon.png',
            description: 'Design tables, write optimized queries (joins, grouping), and integrate databases with applications.',
            link: '#work',
        },
        {
            name: 'Frontend (Web)',
            icon: './assets/ui-icon.png',
            description: 'Responsive UI with HTML, CSS, Bootstrap and JavaScript. Clean pages that look great on mobile.',
            link: '#work',
        },
        {
            name: 'Android (Native Java)',
            icon: './assets/mobile-icon.png',
            description: 'Android apps using native Java with Firebase / local storage as needed.',
            link: '#work',
        },
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I do</h4>
            <h2 className="text-center text-5xl font-Ovo">Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                {services.map((service) => (
                    <a key={service.name} href={service.link}
                        className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-gray-600 text-sm leading-6 dark:text-white/80">{service.description}</p>
                        <div className="flex items-center gap-2 mt-5 text-sm text-gray-700 dark:text-white/80">
                            See work <img src="./assets/right-arrow.png" alt="" className="w-4 dark:invert" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
