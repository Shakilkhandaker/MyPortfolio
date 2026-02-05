import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const name = String(form.get('name') || '').trim();
        const email = String(form.get('email') || '').trim();
        const message = String(form.get('message') || '').trim();

        if (!name || !email || !message) {
            setResult("Please fill in all fields.");
            return;
        }

        const to = "shakilkhandaker006@gmail.com";
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setResult("Opening your email app…");
        event.target.reset();
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Contact</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

            <p className="text-center max-w-2xl mx-auto mt-6 mb-10 font-Ovo text-gray-600 dark:text-white/80">
                Interested in collaborating or hiring? Send me a message — I&apos;ll reply as soon as possible.
            </p>

            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-sm">
                <a className="border border-gray-300 dark:border-white/30 rounded-xl p-4 hover:bg-lightHover dark:hover:bg-darkHover/50 duration-300"
                    href="mailto:shakilkhandaker006@gmail.com">
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600 dark:text-white/80">shakilkhandaker006@gmail.com</p>
                </a>
                <a className="border border-gray-300 dark:border-white/30 rounded-xl p-4 hover:bg-lightHover dark:hover:bg-darkHover/50 duration-300"
                    href="tel:+8801535120716">
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600 dark:text-white/80">+880 1535-120716</p>
                </a>
                <a className="border border-gray-300 dark:border-white/30 rounded-xl p-4 hover:bg-lightHover dark:hover:bg-darkHover/50 duration-300"
                    href="https://www.linkedin.com/in/shakilkhandaker/" target="_blank" rel="noreferrer">
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-gray-600 dark:text-white/80">linkedin.com/in/shakilkhandaker</p>
                </a>
            </div>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/30 bg-white dark:bg-transparent"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/30 bg-white dark:bg-transparent"
                    />
                </div>

                <textarea
                    rows="6"
                    name="message"
                    placeholder="Your message"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/30 bg-white dark:bg-transparent mt-6"
                />

                <button type="submit"
                    className="mt-6 px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 mx-auto dark:border-transparent">
                    Send message <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </button>

                {result && (
                    <p className="text-center mt-4 text-sm text-gray-600 dark:text-white/80">{result}</p>
                )}
            </form>
        </div>
    )
}
