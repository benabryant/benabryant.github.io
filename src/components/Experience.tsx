import "./Experience.css"

interface ExpItemProps {
  title: string
  org: string
  date: string
  description: string
}

const ExpItem = ({ title, org, date, description }: ExpItemProps) => (
  <div className="exp__item">
    <h3 className="exp__title">{title}</h3>
    <p className="exp__meta">{org} | {date}</p>
    <p className="exp__desc">{description}</p>
  </div>
)

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section__inner">
        <h2>Experience</h2>

        <div className="exp__columns">

          <div className="exp__column">
            <p className="section-label">Education</p>
            <ExpItem
              title="BS Computer Science"
              org="University of Washington"
              date="est. Dec 2026"
              description="3.84 GPA"
            />
            <ExpItem
              title="High School Diploma"
              org="Garfield High School"
              date="June 2022"
              description="4.7 GPA"
            />
          </div>

          <div className="exp__column">
            <p className="section-label">Work</p>
            <ExpItem
              title="Beach Manager"
              org="Windermere Corporation"
              date="May - Sep 2023"
              description="Coordinated a team of 15 lifeguards"
            />
            <ExpItem
              title="Lifeguard"
              org="Windermere Corporation"
              date="June - Sep 2022"
              description="Responsible for patron safety"
            />
            <ExpItem
              title="Classified Tutor"
              org="Seattle Public Schools"
              date="June - Sep 2021"
              description="Educated groups of 5-15 students in mathematics"
            />
          </div>
        </div>
      </div>
    </section>
  )
}