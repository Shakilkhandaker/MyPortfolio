export default function Work() {
    const work = [
        {
            name: 'Self Cost Manager',
            icon: './assets/work-3.png',
            description: 'Spring Boot • JPA • PostgreSQL • REST API',
            link: 'https://github.com/Shakilkhandaker',
        },
        {
            name: 'Krishok Bondhu (GNPL App)',
            icon: './assets/work-2.png',
            description: 'Android (Native Java) • Champion — SAD showcase',
            link: 'https://github.com/Shakilkhandaker',
        },
        {
            name: 'Shohoj Thikana',
            icon: './assets/work-1.png',
            description: 'Android (Native Java) • 2nd Runner-up — SE showcase',
            link: 'https://github.com/Shakilkhandaker',
        },
        {
            name: 'Portfolio Website',
            icon: './assets/work-4.png',
            description: 'React + Tailwind • GitHub Pages',
            link: 'https://github.com/Shakilkhandaker',
        },
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">Recent work</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                {work.map((item) => (
                    <a key={item.name} href={item.link} target="_blank" rel="noreferrer"
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group"
                        style={{ backgroundImage: `url(${item.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
