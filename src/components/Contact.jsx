function Contact() {
    return (
        <footer className="container-fluid py-3 pb-5">
            <div style={{padding:'42px 24px'}}>
                <h2>Let's work together</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p className="mt-2">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                        <div className="mt-5">
                            <div className="d-inline-block mx-2">
                                <img src="assets/img/discord.png" alt="" />
                            </div>
                            <div className="d-inline-block mx-2">
                                <img src="assets/img/facebook.png" alt="" />
                            </div>
                            <div className="d-inline-block mx-2">
                                <img src="assets/img/dribbble.png" alt="" />
                            </div>
                            <div className="d-inline-block mx-2">
                                <img src="assets/img/nstagram.png" alt="" />
                            </div>
                            <div className="d-inline-block mx-2">
                                <img src="assets/img/behance.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <input type="text" className="form-control p-2 my-2 rounded-0 border-0" style={{background: '#f3f3f3'}} placeholder="Name" />
                            <input type="email" className="form-control p-2 my-2 rounded-0 border-0" style={{background: '#f3f3f3'}} placeholder="Email" />
                            <button className="btn btn-lg btn-dark rounded-0">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contact;