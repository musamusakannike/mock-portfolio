

const DynamicCard = ({ imgSrc, title, subtitle }) => {
  return (
    <div className="col-md-4">
        <div className="card border-0 p-0">
            <div className="card-img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="card-body text-start">
                <h5 className="card-title">{title}</h5>
                <p className="card-subtitle">{subtitle}</p>
            </div>
        </div>
    </div>
  );
}

function Gallery() {
    return (
        <section id="Gallery" className="container-fluid py-5 px-4">
            <div className="text-center">
                <h2>Latest Work</h2>
                <div className="gallery-card">
                    <div className="row">
                        <DynamicCard imgSrc={'assets/img/Blood Orage image.png'} title={'Project title'} subtitle={'UI, Art direction'} />
                        <DynamicCard imgSrc={'assets/img/Abstract drink image.png'} title={'Project title'} subtitle={'UI, Art direction'} />
                        <DynamicCard imgSrc={'assets/img/Paper image.png'} title={'Project title'} subtitle={'UI, Art direction'} />
                        <DynamicCard imgSrc={'assets/img/Isaiah image.png'} title={'Project title'} subtitle={'UI, Art direction'} />
                        <DynamicCard imgSrc={'assets/img/mexico image.png'} title={'Project title'} subtitle={'UI, Art direction'} />
                        <DynamicCard imgSrc={'assets/img/Get A job image.png'} title={'Project title'} subtitle={'UI, Art direction'} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;


