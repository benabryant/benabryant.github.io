import './About.css'

export default function About() {
  return (
    <section className="about section">
      <div className="section__inner">
        {/* replace below with one sentence summary<span className="section-label">About me</span>*/}
        <h2>About Me</h2> 
        <div className="about__body">
          <p className="about__lead">
            I'm currently studying at the University of Washington majoring in Computer Science.
            I grew up in Seattle which explains most(but not all) of my quirks. 
          </p>
          <p>
            In my free time you can often find me outdoors. I enjoy skiing, backpacking, and scuba diving.
            If the weather isn't behaving, and sometimes when it is, I'm likely reading or playing a board game.
            I can talk at great length about manatees stemming from childhood obsession.
          </p>
          <p>
            I have a passion for learning about a wide array of subjects. This includes taking advantage of the full breadth of UW courses.
            My upper level electives include: Data Management, Functional Programming, Compilers, Algorithms,
            Computer Networks, Operating Systems, Security, Computational Biology, Datacenters, Artificial Intelligence,
            Embedded Systems, and Modern Algorithms. I enjoy computer science for the process more than the topic,
            nothing beats solving a complex problem especially in a clever way.
          </p>
        </div>
      </div>
    </section>
  )
}