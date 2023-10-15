import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import github from "../assets/contacticons/github.png";
import linkedin from "../assets/contacticons/linkedin.png";
import phone from "../assets/contacticons/phone.jpg";
import gmail from "../assets/contacticons/gmail.jpg";
import contact from "../assets/contacticons/contact.png";

const Contact = () => {
 
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex items-center ml-[20px]">

        <div className="flex flex-col gap-2">
        <p className="flex items-center"><img src={phone} alt="phone" className="w-12 h-12 rounded-[5px] mr-2" /> <span className="ml-2 font-bold">09304667138</span></p>
        <p className="flex items-center"><img src={gmail} alt="gmail" className="w-12 h-12 rounded-[5px] mr-2" /> <span className="ml-2 font-bold">panteakheiri60@gmail.com</span></p>
        <p className="flex items-center"><a href="https://www.linkedin.com/in/pantea-kheiri/"><img src={linkedin} alt="linkedin" className="w-12 h-12 rounded-[5px] mr-2" /></a> <span className="ml-2 font-bold">pantea-kheiri</span> </p>
        <p className="flex items-center"><a href="https://github.com/Panteakheiri"><img src={github} alt="github" className="w-12 h-12 rounded-[5px] mr-2" /> </a> <span className="ml-2 font-bold"> Panteakheiri</span></p>
        </div>

        <div>
          <img src={contact} className="w-[450px] h-[450px] ml-[300px] mt-[-140px]"/>
        </div>

        </div>
        
        </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");