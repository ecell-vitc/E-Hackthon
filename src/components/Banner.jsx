import styles from '../styles/banner.module.css';

const Banner = () => {
    return (
        <section id="home" style={{ backgroundImage: 'url("Home_banner.jpeg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div id={styles.container}
            className="text-primary w-full p-12 md:px-24 lg:px-48 min-h-screen backdrop-blur flex flex-wrap justify-center content-center">    
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8'>
                    <div className='text-center md:text-start'>
                        <h1 className='text-3xl md:text-6xl text-white coustard-black mb-4'>Welcome to<br />Founder's Forge</h1>
                        <h2 className="text-xl md:text-2xl bruno-regular mt-4 mb-12">Where Visionaries Forge the Future</h2>
                        <p className="text-base md:text-2xl my-4">Opportunity knocks! Join our thrilling entrepreneurial challenge and transform your ideas into reality...</p>

                        <button className="primary my-5 text-bold text-xl"><a href="#about" className='decoration-none'>Learn More</a></button>
                    </div>
                    <div className="flex flex-wrap justify-center content-center">
                        <div id={styles.days_left}
                            className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full flex flex-wrap justify-center content-center'>
                                
                                <h3 className="coustard-black text-black text-center">
                                    <span className="text-8xl md:text-9xl">{Math.floor((new Date(2025, 1, 16) - new Date()) / (1000 * 60 * 60 * 24))}</span><br/>
                                    <span className="text-2xl md:text-4xl">Days Left</span>
                                </h3>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner