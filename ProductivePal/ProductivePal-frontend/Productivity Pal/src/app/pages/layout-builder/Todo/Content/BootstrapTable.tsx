// vinit
import React from 'react'
import Table1 from './Table1'


export default function BootstrapTable(){
    return(
       <div className='border border-3 '>
       <ul className="nav nav-tabs " id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div className="tab-content bg-primary" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Content 1<br/>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui eum hic, repellendus placeat, maiores quos aut alias itaque facilis sed provident, accusantium iusto ipsa nisi. Dolores cumque sunt quae.<br/>
   <br/>
    </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Content 2<br/>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio accusantium necessitatibus pariatur exercitationem eaque, autem culpa voluptates itaque fugit aperiam molestiae saepe hic molestias impedit iusto et nobis quos!</div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Content 3 <br/>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatibus mollitia dolore earum ab nobis? Delectus recusandae rerum esse, aut pariatur, magni harum, sit praesentium dolor consequuntur voluptatum. Quidem, voluptas?</div>
</div>
       </div>
    )
    }