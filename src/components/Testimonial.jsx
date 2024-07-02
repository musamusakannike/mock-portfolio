function TestimonialCard() {
    return (
        <div className="col-md-4 my-3">
            <div className="card border-0 rounded-0 px-3 py-4" style={{ background: '#f3f3f3' }}>
                <div className="card-body">
                    <p className="mb-5 subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet reiciendis temporibus.</p>
                    <div className="row">
                        <div className="col-3">
                            <img src="assets/img/Client Image.png" alt="Client Image" />
                        </div>
                        <div className="col-9">
                            <div className="stars">
                                <div className="d-inline-block"><img src="assets/img/Star.png" className="d-inline-block" alt="" /></div>
                                <div className="d-inline-block"><img src="assets/img/Star.png" className="d-inline-block" alt="" /></div>
                                <div className="d-inline-block"><img src="assets/img/Star.png" className="d-inline-block" alt="" /></div>
                                <div className="d-inline-block"><img src="assets/img/Star.png" className="d-inline-block" alt="" /></div>
                                <div className="d-inline-block"><img src="assets/img/Star.png" className="d-inline-block" alt="" /></div>
                            </div>
                            <h6>Emma Nolen</h6>
                            <p className="text-muted">Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Testimonial() {
    return (
        <section id="testimonial" style={{padding:'42px 24px'}}>
            <div className="row">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </section>
    );
}

export default Testimonial;