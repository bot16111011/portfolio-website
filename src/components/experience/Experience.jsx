import { useRef } from "react";
import "./experience.scss";
import {motion, useInView} from"framer-motion";

const variants={
    initial:{
        x:-500,
        opacity:0,
        y:100,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    }
}

const Experience=()=>{

    const ref = useRef();
    const isInView = useInView(ref,{margin:"-100px"});

    return (
        <motion.div className="experience" 
        variants={variants} 
        initial="initial" 
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}><p>
                I enjoy working on engaging projects that not only provide enjoyment but
                <br/> also foster continuous learning and skill development.
                </p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt=""/>
                    <h1>
                        <b>Learning from</b> Experiences
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>And still</b> Learning
                    </h1>
                </div>
            </motion.div>    
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" id ="infy" whileHover={{background:"lightgray",color:"black", scale:1.05}} variants={variants}>
                    <motion.h2>INFOSYS</motion.h2>
                    <p id="time">June 2021 - present </p>
                    <h3>Role: Senior Systems Engineer</h3>
                    <h4>Charter Communications</h4>
                    <ul>
                        <li>Developed Python scripts for properties automation, resulting in a time-saving of over 90% for the team.</li>
                        <li>Utilized various APIs, including JFrog API, to fetch repositories and created dashboards using Datadog Manager for gathering performance metrics of pods.</li>
                        <li>Established pipelines in GitLab for managing Vault secrets, creating secrets, and restarting pods with a single click.</li>
                        <li>Leading the automation of configuration files used in Amazon Elastic Kubernetes Service (EKS), reducing process time by 60%.</li>
                        <li>Assisting the team in deploying new pipelines and nodes in the cluster.</li>
                        <li>Maintaining a code repository and overseeing version control.</li>
                        <li>Implemented robust monitoring solutions using Prometheus and Grafana.</li>
                    </ul>
                    <h4>Northern Trust Bank</h4>
                    <ul>
                        <li>Led migrations, conducted comprehensive code reviews, and facilitated 60+ knowledge transfer sessions.</li>
                        <li>Negotiated with clients, slashing data migration workload by 40% and saving approximately 4 days.</li>
                        <li>Successfully managed JIRA to Azure migrations, onboarding over 60 teams with 200K+ work items.</li>
                        <li>Learnt various tools for connecting and migrationg data from different TFS like nkd agility, solidify etc.</li>
                    </ul>
                </motion.div>
                <motion.div className="box" id="pradan" whileHover={{background:"lightgray",color:"black", scale:1.05}} variants={variants}>
                    <h2>PRADAN (Professional Assistance for Development Action)</h2>
                    <p id="time">Oct 2020 - June 2021 </p>
                    <h3>Role: Development Apprentice</h3>
                    <ul>
                        <li>Worked at an NGO focused on uplifting farmers, with a population impact on the livelihood of more than 20 lakhs households.</li>
                        <li>Focused on regenerative farming and assisting people in leveraging various government schemes.</li>
                        <li>Gained insights into different cultures, survival in forests, and leading a minimalistic life.</li>
                        <li>Developed strong public speaking skills, addressing audiences of over 200 people, and excelled in problem-solving under stressful conditions.</li>
                        <li>Successfully recreated a memorable moment from the movie "Swades" involving a water pump, a personal favorite experience.</li>
                    </ul>
                </motion.div>
                <motion.div className="box" id="ciab" whileHover={{background:"lightgray",color:"black", scale:1.05}} variants={variants}>
                    <h2>CIAB, Mohali</h2>
                    <p id="time">May 2019 - August 2019 </p>
                    <h3> Project Focus for Internship :</h3>
                    <p>Subcloning and achieving soluble expression of a protein encoding a putative sugar epimerase using a Nus-fusion tag in Escherichia coli as the host cell.</p>
                    <h3>Gene Cloning Process:</h3>
                    <p>Prepared competent E. coli cells and lysed them using the alkaline method.</p>
                    <p>Conducted restriction digestion with site-specific enzymes.</p>
                    <p>Ligated the gene into a vector and transformed it into host E. coli cells through cell shocking.</p>
                    <p>Performed PCR amplification and collected competent cells based on antibiotic resistance.</p>
                    <p>Verified protein expression using SDS-PAGE.</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Experience