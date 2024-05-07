import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const WorksTitle = () => {
  return (
    <>
      <div id="work">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>项目经历.</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            以下项目通过我工作的真实世界例子展示了我的技能和经验。每个项目都进行了简短的描述，并附有代码库和实时演示的链接。它反映了我解决复杂问题、使用不同技术以及有效管理项目的能力。
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(WorksTitle, "");
