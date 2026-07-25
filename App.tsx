import React, { useEffect, useState } from 'react'
import './styles.css'

const portfolioConfig = {
  firstName: 'Lakshmi',
  lastName: 'Anchula',
  fullName: 'Lakshmi Neharika Anchula',
  title: 'Data Scientist | AI/ML Engineer',
  location: 'Edison, NJ',
  email: 'lakshmianchula10@gmail.com',
  phone: '+1 848 372 9051',
  linkedinUrl: 'https://www.linkedin.com/in/neharika1020/',
  instagramUrl: 'https://www.instagram.com/harikaanchula',
  resumeUrl: '#resume',
  about: `I'm a Data Scientist and AI/ML Engineer based in Edison, NJ. I build predictive models, intelligent pipelines, and decision-ready insights across financial services and enterprise environments.`,
  aboutExtended: `With 4+ years of experience, I work primarily with Python, SQL, Scikit-learn, Power BI, and AWS — translating complex datasets into clear, actionable outcomes for the people who need them.`,
  careerObjective:
    'Passionate about turning data into actionable insights and building AI/ML solutions that solve real-world business problems.',
  strengths: [
    'Analytical Thinking',
    'Problem Solving',
    'Machine Learning',
    'Communication',
    'Adaptability',
  ],
  skills: [
    'Python',
    'SQL',
    'Scikit-learn',
    'Power BI',
    'AWS',
    'Azure',
    'Pandas',
    'NumPy',
    'NLP',
    'LangChain',
    'LangGraph',
    'Hugging Face',
    'RAG',
    'ETL Pipelines',
    'Tableau',
    'Apache Spark',
    'Airflow',
    'Docker',
    'Git',
  ],
}

const experience = [
  {
    id: 'morgan-stanley',
    company: 'Morgan Stanley',
    role: 'Data Scientist',
    period: 'Feb 2025 – Present',
    location: 'Edison, NJ',
    summary:
      'Building fraud and AML detection models, executive dashboards, and automated ETL pipelines that help compliance teams act faster with greater precision.',
    bullets: [
      'Developed fraud and AML detection models with Python and Scikit-learn to monitor millions of financial transactions daily, improving detection accuracy by 20% and reducing false positives for compliance investigations.',
      'Built interactive Power BI dashboards for flagged transactions, suspicious activity alerts, and case resolution status — cutting investigation turnaround time by 35%.',
      'Engineered automated ETL pipelines with AWS S3, Python, and SQL to ingest and clean large-scale transaction data, reducing manual preparation effort by 40%.',
      'Performed EDA and feature engineering on transaction and behavioral data to surface anomalous patterns and strengthen model precision for high-risk escalation.',
      'Partnered with compliance, risk, and audit teams to translate AML requirements into scalable analytics supporting 15+ weekly case reviews.',
    ],
    tags: ['Python', 'Scikit-learn', 'Power BI', 'AWS S3', 'SQL', 'AML'],
    color: '#1B4F72',
  },
  {
    id: 'yoktha',
    company: 'Yoktha Technologies',
    role: 'Data Scientist',
    period: 'Dec 2020 – Jul 2023',
    location: 'Hyderabad, India',
    summary:
      'Delivered supply chain analytics, demand forecasting, and ETL solutions that improved inventory visibility and operational performance for retail clients.',
    bullets: [
      'Built supply chain and logistics dashboards with Power BI and Azure Synapse Analytics, giving real-time visibility across 10+ distribution locations.',
      'Developed predictive models with Python and Scikit-learn to forecast demand and optimize replenishment, reducing stockouts by 20%.',
      'Designed ETL pipelines with Azure Data Factory and SQL to integrate logistics, warehouse, and sales data, reducing manual reporting effort by ~35%.',
      'Applied EDA and statistical modeling on transportation and warehouse data to identify bottlenecks, improving on-time delivery by 15%.',
      'Worked with supply chain and operations stakeholders to turn logistics KPIs into actionable analytics for inventory and distribution strategy.',
    ],
    tags: ['Power BI', 'Azure Synapse', 'Python', 'Azure Data Factory', 'SQL'],
    color: '#0E6655',
  },
]

const projects = [
  {
    id: 'etl-ecommerce',
    title: 'E-Commerce Sales Analytics ETL',
    subtitle: 'Data Engineering | AWS · Python · SQL',
    description:
      'Designed and deployed an end-to-end ETL pipeline to extract, transform, and load transactional and customer data into a centralized warehouse — reducing manual reporting effort by 30% and enabling faster, more reliable business analytics.',
    tags: ['Python', 'SQL', 'AWS S3', 'ETL', 'Analytics'],
    color: '#5B2C6F',
  },
  {
    id: 'nlp-sentiment',
    title: 'NLP Customer Sentiment Analysis',
    subtitle: 'Machine Learning | Hugging Face · Scikit-learn',
    description:
      'Built an NLP pipeline with Python, Hugging Face Transformers, and Scikit-learn to classify customer feedback by sentiment — improving classification accuracy and surfacing customer pain points with greater speed and clarity.',
    tags: ['NLP', 'Hugging Face', 'Transformers', 'Python', 'Scikit-learn'],
    color: '#1A5276',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Workflow Assistant',
    subtitle: 'Generative AI | LangChain · LangGraph · LLMs',
    description:
      'Designed an agentic AI system using LangChain, LangGraph, and LLMs to autonomously execute multi-step data retrieval and reporting tasks — reducing manual analyst effort by 25% and improving task completion speed.',
    tags: ['LangChain', 'LangGraph', 'LLMs', 'Agentic AI', 'Automation'],
    color: '#7D3C98',
  },
]

const education = [
  {
    id: 'arizona',
    school: 'University of Arizona',
    degree: "Master's in Data Science",
    period: 'Aug 2023 – Dec 2024',
    location: 'Tucson, Arizona, United States',
  },
  {
    id: 'vignan',
    school: 'Vignan Nirula Institute of Technology and Science for Women',
    degree: 'Bachelor of Technology',
    period: 'Jun 2017 – Apr 2021',
    location: 'Guntur, Andhra Pradesh, India',
  },
]

function InitialsAvatar({
  label,
  color,
}: {
  label: string
  color: string
}) {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className="neharika-avatar"
      style={{ background: `linear-gradient(145deg, ${color}, #1a1a1a)` }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function NeharikaPortfolio() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (contactDialogOpen && dialogRef.current) {
      dialogRef.current.showModal()
    } else if (!contactDialogOpen && dialogRef.current) {
      dialogRef.current.close()
    }
  }, [contactDialogOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClose = () => setContactDialogOpen(false)
    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('cancel', handleClose)
    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('cancel', handleClose)
    }
  }, [])

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('from') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`
    setContactDialogOpen(false)
  }

  return (
    <div className="neharika-wrapper">
      <main className="neharika-main">
        <header id="top" className="neharika-header">
          <div>
            <p className="neharika-title-tag">{portfolioConfig.title}</p>
            <h1>
              <div>
                <div className="sr-only">Hi, my name is</div>
                {['H', 'i', ',', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's'].map(
                  (char, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'inline-block',
                        minWidth: char === ' ' ? '0.2em' : undefined,
                      }}
                      aria-hidden="true"
                    >
                      {char}
                    </div>
                  )
                )}
              </div>
            </h1>
            <h1>
              <span>{portfolioConfig.fullName}</span>
            </h1>
            <p className="neharika-intro">{portfolioConfig.about}</p>
            <p className="neharika-intro">{portfolioConfig.aboutExtended}</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--size-5)',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neharika-btn neharika-btn-secondary"
                style={{ flexGrow: 1 }}
              >
                LinkedIn
              </a>
              <button
                className="neharika-btn neharika-btn-primary"
                style={{ flexGrow: 1, position: 'relative', zIndex: 2 }}
                onClick={() => setContactDialogOpen(true)}
              >
                Contact me
              </button>
            </div>
          </div>

          <svg
            width="1149"
            height="921"
            fill="none"
            viewBox="0 0 1149 921"
            xmlns="http://www.w3.org/2000/svg"
            className="neharika-svg"
            aria-hidden="true"
          >
            <g id="PC" style={{ filter: 'brightness(1)' }}>
              <path
                d="m480 742.5-168-54 184-102L631.5 634 480 742.5Z"
                fill="#D9D9D9"
                id="KEYBOARD"
              />
              <path
                d="m427.5 715.5-94-30.5 164-91 65.5 26.5-135.5 95Z"
                fill="#B9B9B9"
                id="KEYS"
              />
              <path
                d="m312 689-86.5-174.5L419 435l76 151.5L312 689Z"
                fill="var(--screen-color)"
                id="SCREEN"
              />
            </g>
            <g id="person" style={{ filter: 'brightness(1)' }}>
              <path
                d="M825 189c-80.8-55.6-163.667-8.667-205 14.5-9.024 9.776-25.784 31.875-27.5 48.736 1.5 21.088 6.8 65.664 16 75.264 11.5 12 23.5 51.5 18 53.5s27 39 32.5 63 31 27.5 55.5 29 135-131.5 138.5-137.5c8-58-8.5-103-28-146.5Z"
                fill="var(--skin-color)"
                id="HEAD"
              />
              <path
                d="M853 322c-2.396 23.5 0 142.5 79.5 116-48.358 23.228-153.001 76.813-180.098 95.193.215 3.752-1.245 6.069-4.902 6.307-3.404.222-1.248-2.136 4.902-6.307-.867-15.124-28.937-53.563-49.902-73.193l9.5-45.5c26.833-96.333 154.669-226.559 141-92.5Z"
                fill="var(--skin-color)"
              />
              <path
                d="M654.5 372c5-6-24.5-43.5-11.5-42 7.45.86 14.661-1.48 19.5-3.856 8 51.644 44.5 84.356 52 132.356s-66 12.5-65 5.5-6.5-51.5-6.5-51.5c12.5-3.5 6.5-34.5 11.5-40.5Z"
                fill="#783C2F"
                id="BEARD"
              />
              <path
                d="M495 581.5c-10 7.2-14.167 23.333-15 30.5-2.8 2.8 1.167 5.5 3.5 6.5 3.833-.833 11.5-1.7 11.5 1.5 0 4-6.5 5 16.5 9.5s11.5-5 34 3.5c18 6.8 51.5-5.833 66-13L856 608.5 800 570l-188.5 11.5c-13.667-6-43.9-17.4-55.5-15-14.5 3-37.5-1-44.5 0s-4 6-16.5 15ZM495.5 789.5c30.8-1.2 87.833-96.167 112.5-143.5l82.5 143.5c-1.833 9.167-15.9 34.8-57.5 64-41.6 29.2-146.333 1.833-193.5-15.5 5.833-15.667 25.2-47.3 56-48.5Z"
                fill="var(--skin-color)"
                id="RIGHT_LOWER_ARM"
                className="neharika-right-lower-arm"
              />
              <path
                d="M618.5 609c-2.8 23.2-39.5 89.333-57.5 119.5 0 45.2 82.5 71.833 120.5 80.5l-19 85 153 2.5 323-75c-76.5-33-71-344.5-120-373-17.42-10.134-88-15-130.5-15-12.5 48-124 84.5-137 84.5-7.5 19-129 62-132.5 91Z"
                fill="var(--gray-9)"
                id="SHIRT"
              />
              <path
                d="M452.5 849c-19.6-2-18.167-81.167-15-120.5-8.5 3.5-41.5-21.5-43-29.5S384 683 376 677.5s8.5-15.5 4-22.5 21-29 28.5-29c6 0 9.833 2.667 11 4 4-4 13.2-10.4 18-4 6 8 49 27.5 55.5 39s12.5 8.5 0 42c-10 26.8 45.167 75.833 74 97-30 15.833-94.9 47-114.5 45Z"
                fill="var(--skin-color)"
                id="LEFT_LOWER_ARM"
                className="neharika-left-lower-arm"
              />
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="neharika-chevron"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </header>

        <section className="neharika-experience" id="experience">
          <div>
            <div className="neharika-section-head-text">
              <span className="neharika-eyebrow">01 · Where I&apos;ve worked</span>
              <h2>Experience</h2>
            </div>
          </div>
          <div>
            {experience.map((job, index) => (
              <div key={job.id} className="neharika-experience-item">
                <div className="neharika-experience-image">
                  {index < experience.length - 1 && (
                    <div className="neharika-timeline-line" />
                  )}
                  <InitialsAvatar label={job.company} color={job.color} />
                </div>
                <div className="neharika-experience-content">
                  <h2>
                    <span>{job.company}</span>
                  </h2>
                  <h3>
                    {job.role} | {job.period}
                  </h3>
                  <p className="neharika-meta">{job.location}</p>
                  <p>{job.summary}</p>
                  <ul className="neharika-bullets">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="neharika-tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="neharika-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div style={{ height: 'var(--size-5)' }} />
          </div>
        </section>

        <section className="neharika-experience" id="projects">
          <div>
            <div className="neharika-section-head-text">
              <span className="neharika-eyebrow">02 · Things I&apos;ve built</span>
              <h2>Selected Projects</h2>
            </div>
          </div>
          <div>
            {projects.map((project, index) => (
              <div key={project.id} className="neharika-experience-item">
                <div className="neharika-experience-image">
                  {index < projects.length - 1 && (
                    <div className="neharika-timeline-line" />
                  )}
                  <InitialsAvatar label={project.title} color={project.color} />
                </div>
                <div className="neharika-experience-content">
                  <h2>
                    <span>{project.title}</span>
                  </h2>
                  <h3>{project.subtitle}</h3>
                  <p>{project.description}</p>
                  <div className="neharika-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="neharika-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div style={{ height: 'var(--size-5)' }} />
          </div>
        </section>

        <section className="neharika-experience" id="education">
          <div>
            <div className="neharika-section-head-text">
              <span className="neharika-eyebrow">03 · Where I studied</span>
              <h2>Education</h2>
            </div>
          </div>
          <div>
            {education.map((edu, index) => (
              <div key={edu.id} className="neharika-experience-item">
                <div className="neharika-experience-image">
                  {index < education.length - 1 && (
                    <div className="neharika-timeline-line" />
                  )}
                  <InitialsAvatar
                    label={edu.school}
                    color={index === 0 ? '#922B21' : '#1B4F72'}
                  />
                </div>
                <div className="neharika-experience-content">
                  <h2>
                    <span>{edu.school}</span>
                  </h2>
                  <h3>
                    {edu.degree} | {edu.period}
                  </h3>
                  <p className="neharika-meta">{edu.location}</p>
                </div>
              </div>
            ))}
            <div style={{ height: 'var(--size-5)' }} />
          </div>
        </section>

        <section className="neharika-about" id="about">
          <div className="neharika-about-inner">
            <div className="neharika-about-head">
              <span className="neharika-eyebrow">04 · A little more about me</span>
              <h2>About me</h2>
              <p className="neharika-about-lead">
                I&apos;m a {portfolioConfig.title} based in{' '}
                {portfolioConfig.location}. I specialize in predictive modeling,
                machine learning pipelines, and business intelligence solutions
                across financial services and banking environments.
              </p>
              <p className="neharika-about-lead">
                My work spans EDA, feature engineering, anomaly detection,
                forecasting, and automated reporting — always with an eye toward
                clarity, reliability, and decisions that matter.
              </p>
            </div>

            <div className="neharika-about-grid">
              <div className="neharika-card neharika-card-highlight">
                <h3 className="neharika-subhead">Career Focus</h3>
                <p className="neharika-card-quote">
                  {portfolioConfig.careerObjective}
                </p>
                <dl className="neharika-facts">
                  <div>
                    <dt>Location</dt>
                    <dd>{portfolioConfig.location}, United States</dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>4+ years in Data Science &amp; AI/ML</dd>
                  </div>
                  <div>
                    <dt>Domains</dt>
                    <dd>Financial Services, Banking, Retail</dd>
                  </div>
                </dl>
              </div>

              <div className="neharika-card">
                <h3 className="neharika-subhead">Key Strengths</h3>
                <div className="neharika-tags">
                  {portfolioConfig.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="neharika-tag neharika-tag-strong"
                    >
                      {strength}
                    </span>
                  ))}
                </div>

                <h3
                  className="neharika-subhead"
                  style={{ marginTop: 'var(--size-6)' }}
                >
                  Core Toolkit
                </h3>
                <div className="neharika-tags">
                  {portfolioConfig.skills.map((skill) => (
                    <span key={skill} className="neharika-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="neharika-subhead neharika-skill-groups-title">
              Skills & Technologies
            </h3>
            <div className="neharika-skill-groups">
              <div className="neharika-card">
                <h4>Programming & Databases</h4>
                <p>
                  Python (Pandas, NumPy, Scikit-learn), SQL, Java, MySQL,
                  Oracle, PostgreSQL, SQL Server, T-SQL, PL/SQL
                </p>
              </div>
              <div className="neharika-card">
                <h4>Machine Learning & AI</h4>
                <p>
                  Supervised & unsupervised learning, NLP, Hugging Face
                  Transformers, FAISS, RAG, Agentic AI (LangChain, LangGraph,
                  LLMs), prompt engineering
                </p>
              </div>
              <div className="neharika-card">
                <h4>Cloud, Big Data & ETL</h4>
                <p>
                  AWS (S3, EC2, Lambda), Azure (Data Factory, Synapse,
                  Databricks), GCP (BigQuery), Spark, Hadoop, Kafka, Airflow,
                  Docker, Git
                </p>
              </div>
              <div className="neharika-card">
                <h4>Visualization & Reporting</h4>
                <p>
                  Power BI, Tableau, Matplotlib, Plotly, Seaborn, Excel,
                  dashboard development, data storytelling
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <a
            href={portfolioConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neharika-btn neharika-btn-ghost"
          >
            LinkedIn
          </a>
          <a
            href={portfolioConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neharika-btn neharika-btn-ghost"
          >
            Instagram
          </a>
          <a
            href={`mailto:${portfolioConfig.email}`}
            className="neharika-btn neharika-btn-ghost"
          >
            {portfolioConfig.email}
          </a>
          <div>
            <button
              className="neharika-btn neharika-btn-ghost"
              style={{ flexGrow: 1, position: 'relative', zIndex: 2 }}
              onClick={() => setContactDialogOpen(true)}
            >
              Send me an email
            </button>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <button
              className="neharika-btn neharika-btn-ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Go to top
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-chevron-down"
                style={{ transformOrigin: 'center center', rotate: '180deg' }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </footer>
      </main>

      <dialog ref={dialogRef} className="neharika-dialog">
        <div>
          <form
            onSubmit={handleContactSubmit}
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: 'var(--size-5)',
            }}
          >
            <h2>Contact me</h2>
            <p style={{ paddingRight: '7rem', color: 'var(--text-4)' }}>
              I&apos;ll get back to you as soon as I can.
            </p>
            <label>
              Name
              <input
                type="text"
                required
                style={{
                  paddingRight: '7rem',
                  fontSize: 'var(--font-size-fluid-1)',
                }}
                name="from"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                style={{
                  paddingRight: '7rem',
                  fontSize: 'var(--font-size-fluid-1)',
                }}
                name="email"
              />
            </label>
            <label>
              Message
              <textarea
                required
                style={{
                  paddingRight: '7rem',
                  fontSize: 'var(--font-size-fluid-1)',
                  minHeight: '170px',
                }}
                name="message"
              />
            </label>
            <button
              type="submit"
              className="neharika-btn neharika-btn-primary neharika-btn-lg"
              style={{ marginTop: 'var(--size-7)' }}
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-send"
                style={{ width: '.75em', height: '.75em' }}
              >
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
        <button
          style={{
            position: 'absolute',
            top: 'var(--size-2)',
            right: 'var(--size-2)',
            fontWeight: 'var(--font-weight-9)',
          }}
          className="neharika-btn neharika-btn-ghost neharika-btn-sm"
          onClick={() => setContactDialogOpen(false)}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-x"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </dialog>
    </div>
  )
}

export default NeharikaPortfolio
