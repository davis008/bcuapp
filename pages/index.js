import Layout from "../components/Layout"
import Slider from "../components/Slider"
import Image from "next/image"

const Index=()=>(
    <Layout>  
        <br/>
        <Slider/>
    <a href="https://www.facebook.com/BCU-Broadcasting-Network-105131875023032" target="_blank">
    <Image
        src="/facebook.png"
        alt="us working"
        width={30}
        height={30}
       
      />
        </a>
    </Layout>
);
export default Index;