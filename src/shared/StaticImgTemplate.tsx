import staticimg from '/staticImg.jpg'

function StaticImgTemplate() {
    return (
        <div className='authStaticImage'>
            <img src={staticimg} alt='logo' />
        </div>
    )            
};

export default StaticImgTemplate;