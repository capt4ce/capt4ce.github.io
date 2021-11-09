import React from 'react';
import bootstrap from 'bootstrap'; // eslint-disable-line no-unused-vars
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const links = [
    {
      link: 'mailto:ahmad.ali.abdilah@gmail.com',
      label: 'Email',
    },
    {
      link: 'https://www.linkedin.com/in/ahmad-ali-abdilah-32153a112/',
      label: 'LinkedIn',
    },
    {
      link: 'https://github.com/capt4ce',
      label: 'Github',
    },
    {
      link: 'https://medium.com/@ahmad.ali.abdilah',
      label: 'Medium',
    },
  ];

  const skills = [
    {
      title: 'Blockchain',
      values: ['blockchain concepts', 'smart contract', 'dApp integration'],
    },
    {
      title: 'FrontEnd development',
      values: ['React', 'NextJS'],
    },
    {
      title: 'BackEnd development',
      values: ['Go', 'NodeJS/typescript', 'Java', 'Python'],
    },
    {
      title: 'Database',
      values: ['MySQL', 'SQLite', 'MongoDB', 'Firebase'],
    },
    {
      title: 'Cloud service',
      values: ['AWS', 'GCP'],
    },
    {
      title: 'VPS management',
      values: ['Setup and maintenance', 'Firewall', 'SSH', 'SCP', 'NginX'],
    },
    {
      title: 'Other Tools',
      values: [
        'Project management: Jira, Clubhouse',
        'Testing: Jest',
        'Monitoring: Lightstep, Prometheus, Grafana',
        'CI: github actions, CircleCI, Travis',
        'Other: Git, Docker',
      ],
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col"></div>
        {/* <div>
        <div>
          Skills
        </div>
        <div>
          Projects
        </div>
      </div> */}
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center px-5">
            <div className="col-md-6">
              <div>
                <h1 className="my-2">Ahmad Ali Abdilah</h1>
              </div>
              <figure>
                <blockquote class="blockquote">
                  <p>Fullstack web developer + Blockchain Developer.</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  Passionate about innovation and ideas.
                </figcaption>
                <figcaption class="blockquote-footer">
                  Take initiatives.
                </figcaption>
                <figcaption class="blockquote-footer">
                  Great team player or tough solo fighter.
                </figcaption>
              </figure>
              <div className="contacts">
                <div style={{ listStyleType: 'none' }} className="m-0 p-0">
                  {links.map((link) => (
                    <div className="d-inline-block">
                      <a className="btn btn-outline-primary" href={link.link}>
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <img
                src="https://avatars.githubusercontent.com/u/17913266?v=4"
                className="img-thumbnail rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h2>Skills</h2>
        {skills.map((skill) => (
          <div className="my-3">
            <h3>{skill.title}</h3>
            {skill.values.map((item) => (
              <div className="badge bg-primary text-light me-2 my-1 p-2">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* <div>Blog</div> */}
    </div>
  );
};

export default App;
