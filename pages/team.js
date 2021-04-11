import Layout from "../components/Layout";

import Image from "next/image"

const Team=()=>(
<Layout>

<h2>Team</h2>  
<div className="card-deck">
 
    <div className="card">
    <Image
        src="/nesbit.png"
        alt="Picture of the la marco"
        width={500}
        height={500}
      />
      <div className="card-body">
        <h4 className="card-title">Dr La Marco Nesbit</h4>
        <p className="card-text">CEO/Founder</p>
      </div>
      <div className="card-footer">
      Music Director,Anointed Prophet of God
      </div>
    </div>
   
  
  <div className="card">
  <Image
        src="/maria.png"
        alt="Picture of the la marco"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Mariah Nesbit</h4>
  <p className="card-text">President/Co-Founder</p>
</div>
<div className="card-footer">
 Teacher,Author,Anointed Apostle of God
</div>
</div>


<div className="card">
<Image
        src="/sam.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Samson Ongara</h4>
  <p className="card-text">Director</p>
</div>
<div className="card-footer">
  Feature Journalist,Media Consultant
</div>
</div>


<div className="card">
<Image
        src="/jay.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Jackson Juma</h4>
  <p className="card-text">Head of Cooperate Affairs</p>
</div>
<div className="card-footer">
  Fine Arts/Brand Service Director
</div>
</div> 

</div>
<br/>

<div className="card-deck">
<div className="card">
<Image
        src="/davis.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Davis Omondi</h4>
  <p className="card-text">Lead Software Engineer</p>
</div>
<div className="card-footer">
  Senior Software Engineer,IT Consultant
</div>
</div> 

<div className="card">
<Image
        src="/idel.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Edelqueen Achieng</h4>
  <p className="card-text">Fashion Consultant</p>
</div>
<div className="card-footer">
  Fashion and Image Consulting Specialist
</div>
</div> 

<div className="card">
<Image
        src="/gabby.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Gabriel Okomo</h4>
  <p className="card-text">Head of Trade</p>
</div>
<div className="card-footer">
  Financial Advicer,Credit Analyst
</div>
</div> 
</div>

</Layout>
)
export default Team;