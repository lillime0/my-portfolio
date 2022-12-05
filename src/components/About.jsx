import lilliAbout from "../assets/about.jpg";

//old
const cvURL = "https://drive.google.com/file/d/16vaj_V85a5qLHjmv_npl507uRe3RA5gD/view?usp=sharing"; 
//new
// const cvURL = "https://drive.google.com/file/d/18Uv1_NxF_eTTnAKUJH5REvDqFQLa9udJ/view?usp=sharing"; 
const About = () => {
  return (
    <section className="section-about" id="about" aria-label="about">
      <article className="about-container">
        <section className="about-img" aria-label="image">
          <img className="secondary-img" src={lilliAbout} alt="lilli" />
        </section>
        <section className="about-content" aria-label="content">
          <h2>
            About <span>me</span>
          </h2>
          <p>
            Here is me again. I'm an engineer, developer, designer, and stories
            writer in my free time.
          </p>
          <p>
            I'm so passionate about creating stuff and anything that's related
            to innovation.
          </p>
          <a
            className="btn btn-cv"
            href={cvURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my CV
          </a>
        </section>
      </article>
    </section>
  );
};

export default About;
