import authlogo from '/auth0.svg'

function HeadTemplate() {
    return (
        <div className='authContainer'>
            <div className='authHeader'>
                <h1>
                    <img src={authlogo} className='authLogo' alt='logo' />
                </h1>
                <div datatype='beacon-container' className="authBeaconContainer"></div>
            </div>
        </div>
    )            
};

export default HeadTemplate;