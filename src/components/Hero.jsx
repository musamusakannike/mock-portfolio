function Hero() {
    return (
            <header id="hero" style={{padding: '42px 24px'}}>
                <div className="row justify-content-space-between">
                    <div className="col-md-6 py-4">
                        <h4 className="subtitle">Branding | Image making</h4>
                        <h1 className="display-2 fw-bold">Visual Designer</h1>
                        <p className="body-text">This is template Figma file, turned into code using Anima. <br />Learn more at AnimaApp.com</p>
                        <a href="#" className="btn btn-dark rounded-0" style={{padding: '24px 64px', fontWeight:'600', fontSize: '20px', lineHeight:'30px'}} >Contact</a>
                    </div>
                    <div className="col-md-6 py-4 text-end">
                        <img src="assets/img/HeaderImage 1.png" alt="" />
                    </div>
                </div>
            </header>
    );
}

export default Hero;