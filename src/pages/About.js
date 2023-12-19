import React from 'react';
export default function About() {
  //   Personal Story:
  // Share your background, interests, and passion.
  // Skills:
  // Highlight key skills and expertise.
  // Education and Work Experience:
  // Brief overview of your academic and professional journey.
  // Achievements:
  // Mention any notable achievements or awards.
  const skills = [{ title: 'js' }, { title: 'css' }, { title: 'html' }, { title: 'react' },
  { title: 'angular' },
  { title: 'nodejs' }, { title: 'php' },
  { title: 'wordpress' }, { title: 'mongodb' }, { title: 'graphql' }, { title: 'mysql' },
  { title: 'ai' }, { title: 'jest' }, { title: 'webpack' }, { title: 'gulp' }, { title: 'github' },
  { title: 'tailwind' },
  { title: 'azure' }, { title: 'aws' }, { title: 'vercel' },
  { title: 'vscode' }, { title: 'aws' }, { title: 'jest' },
  { title: 'redux' }, { title: 'saga' }, { title: 'mdx' },
  { title: 'mdx' }, { title: 'jquery' }, { title: 'linkedin' },
  { title: 'netlify' }, { title: 'nextjs' }, { title: 'nginx' }, 
  { title: 'figma'},{title:'express'},{title:'bootstrap'},{title:'materialui'},
  {title:'babel'},
  {title:'docker'} ]
  const newskills = [{title:'gatsby'},{title:'nuxtjs'},{title:'kubernetes'},{title:'styledcomponents'}]
  return (
    <div>
      <h3>About Me</h3>
      <h4>12+ years of experience in architecting highly responsive presentation tier for high traffic, consumer facing applications. Possess deep understanding of modern JavaScript frameworks and front-end architecture patterns. Expert knowledge of browser behavior, performance, compatibility and cross-browser issues and solutions.
      </h4>
      <h3>Technologies I've worked over the years</h3>
      <div className='cards'>
        {skills && skills.map((item, index) => {
          return <div key={index}>
            {item.title && <img src={`https://skillicons.dev/icons?i=${item.title.toString()}`} />}
            <div>{item.title}</div>
          </div>
        })}</div>
      <h3>What I'm focusing at the moment</h3>
      <div className='cards'>
        {newskills && newskills.map((item, index) => {
          return <div key={index}>
            {item.title && <img src={`https://skillicons.dev/icons?i=${item.title.toString()}`} />}
            <div>{item.title}</div>
          </div>
        })}</div>

      <p>

        <h3>48 Successful Marketing Strategies and 12 Facebook Assets.</h3>
        <h3>
          Expert in Leading team of UI/UX and 3 times Star Award at HTS
          Bangalore.
        </h3>
        <h3>
          Educated in Computer Science and Engineering and Hold Bachelor and
          Diploma Degrees.
        </h3>
        <h4>
          <i>
            My academic journey was mixture of success failure. Means struggled
            in earning and learning my meals to complete my graduation.
          </i>
        </h4>
        <h4>Love Yogo and Dance Fitness classes.</h4>
      </p>
    </div>
  );
}
