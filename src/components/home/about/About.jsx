import React from 'react'
import './about.css'
import Vector from '../../../assets/about.jpg'
import Resume from '../../../assets/aynaaz.pdf'

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="about_content grid2">
                <div className="about_left">
                  <h4>About me</h4>
                  <h1>Who I am And What I do</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus voluptatum consequuntur obcaecati voluptate laboriosam nisi possimus expedita incidunt laborum repellat vero veritatis magnam, ullam facere quas quo veniam sit velit ab aut dolore soluta necessitatibus!<br/><br/> Possimus distinctio magni nobis odio architecto! Eligendi et, inventore unde molestiae aspernatur modi autem hic quidem omnis commodi neque voluptas fuga vel dignissimos. Pariatur, modi exercitationem quo temporibus aspernatur voluptates itaque alias vitae eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit unde libero, magnam eaque sequi eos dolore suscipit ex dignissimos itaque harum accusantium. Corporis exercitationem placeat esse quos dolor tempora porro aliquam pariatur quo autem perspiciatis neque explicabo ut, odit ullam maiores quisquam sint repellendus atque quibusdam nisi vitae quam?</p>
                  <a href={Resume} className="btn btn-primary" download>Download CV</a>
                </div>
                <div className="about_right">
                  <img src={Vector} alt="callD" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About