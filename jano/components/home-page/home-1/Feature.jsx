import Image from "next/image";

const Feature = () => {
  const features = [
    {
      background: "#fffee7",
      title: (
        <>
          100 trillion
        </>
      ),
      description: "Backlinks",
      icon: "images/icon/icon_100.svg",
      width: "169",
      height: "165",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: (
        <>
          500 million
        </>
      ),
      width: "202",
      height: "170",
      description: "Indexed Domains",
      icon: "images/icon/icon_101.svg",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          5 billion
        </>
      ),
      width: "175",
      height: "175",
      description: "Keywords",
      icon: "images/icon/icon_102.svg",
      delay: "300",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          200
        </>
      ),
      width: "175",
      height: "175",
      description: "Countries",
      icon: "images/icon/icon_102.svg",
      delay: "300",
    },
  ];

  return (
    <>
      <section className="header-section">
        <h2 className="header-heading hero-heading fw-400 tx-dark">Transform Your <br /> Agency</h2>
        <p className="header-para">
          Transform your agency with Search Atlas. Improve strategy, accelerate workflows,
          and deliver quicker wins in your organic marketing campaigns. Start scaling your
          agency revenue with the most powerful enterprise SEO software suite on the market.
        </p>
      </section>

      {features.map((feature, index) => (
        <div
          className="col-lg-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <Image
              width={feature.width}
              height={feature.height}
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
