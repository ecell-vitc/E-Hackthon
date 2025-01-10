
import { GitHub, Instagram, Link, LinkedIn } from "@mui/icons-material"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const socials = [
    {
        icon: <GitHub size='large' />,
        href: 'https://github.com/ecell-vitc'
    },
    {
        icon: <Instagram size='large' />,
        href: 'https://instagram.com/ecell_vitcc'
    },
    {
        icon: <LinkedIn size='large' />,
        href: 'https://in.linkedin.com/company/e-cell-vitchennai'
    },
]

const About = () => {
    return (
        <section id="about" className='p-12 md:px-24 lg:px-48'>
            <h2 className="coustard-black text-5xl text-white text-center mb-8">About</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-12">
                <div>
                    <h3 className="text-primary bruno-regular text-2xl md:text-3xl mb-5">What is Founder&apos;s Forge?</h3>
                    <p className="text-base md:text-xl my-3">Founder&apos;s Forge is a flagship Business Hackathon, designed to bring together over 500 dynamic student entrepreneurs and provide a platform for them to push the boundaries of innovation and creativity.</p>
                    <p className="text-base md:text-xl mt-3">Founder&apos;s Forge is set to be a game-changer, offering participants the chance to:</p>
                    <ol className='list-decimal text-base md:text-xl ms-8 mb-3'>
                        <li>Develop cutting-edge SaaS products and online business models.</li>
                        <li>Compete with ambitious innovators in an environment designed for growth.</li>
                        <li>Win prizes worth ₹60K and gain access to funding opportunities for their startups.</li>
                    </ol>
                </div>
                <DotLottieReact src='anim/startup.lottie' loop autoplay  />
            </div>

            <hr className='text-white' />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-12">
                <div className='flex flex-wrap justify-center content-center'>
                    <img src='ecell_logo.jpg' className='rounded-full w-1/2 m-auto' />
                </div>
                <div className="md:order-last">
                    <h3 className="text-primary bruno-regular text-2xl md:text-3xl mb-5">E-Cell, VIT Chennai</h3>
                    <p className="text-base md:text-xl my-3">
                        E-Cell, VIT Chennai is a non-profit student organization that strives to foster students&apos; entrepreneurial spirits.
                        The core vision is to develop and implement a variety of initiatives to assist professionals, students and young entrepreneurs in creating a business.
                    </p>
                    <div className="my-3">
                        {socials.map((social, idx) => 
                            <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                                className="inline-flex flex-wrap justify-center content-center me-3 p-3 rounded-full primary">
                                {social.icon}
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About