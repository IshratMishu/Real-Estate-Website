

const About = () => {
    return (
        <div data-aos="flip-right" className="flex flex-col md:flex-row mt-20">
            <div className="rounded-xl">
            <img src="/src/assets/house-purchase-1019764_1280.webp" alt="" />
            </div>
            <div className="mt-auto lg:mt-32 md:mt-10 space-y-5 p-4">
                <h3>WHO WE ARE</h3>
                <h1 className="text-3xl lg:text-3xl md:text-xl font-semibold">We help clients buy and sell <br /> houses since 1992</h1>
                <p className="font-medium">With over $2 Billion in sales, due to our unparalleled results, expertise and dedication, we rank amongst the top 6 agencies in Las Vegas. Our agency is the industry’s top luxury producer.</p>
                <button className="btn">More About Us</button>
            </div>
        </div>
    );
};

export default About;