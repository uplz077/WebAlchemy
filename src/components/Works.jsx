import { useState, useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Carousel from "@itseasy21/react-elastic-carousel";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  // source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* 项目封面 */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* 项目代码演示链接 */}
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>

        {/* 项目名称和描述 */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* 项目标签 */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] rounded-full px-2 ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const WorksWeb = ({ carouselRef, breakPoints, currentSlide }) => {
  const webDevProjects = projects.filter(
    (project) => project.category === "web_development"
  );

  return (
    <>
      <motion.div variants={textVariant()} className="mt-12 mb-4">
        <h3 className={`${styles.sectionHeadText2}`}>网页开发项目:</h3>
      </motion.div>
      <Carousel
        ref={carouselRef}
        isRTL={false}
        pagination={true} // 显示分页点
        transitionMs={12000} // 动画速度
        easing={"ease"} // 过渡的缓动模式
        tiltEasing={"ease"} // 倾斜的过渡缓动模式
        enableTilt={false} // 达到最后一个项目时的“碰撞”动画
        //itemsToShow={3}   // 可见的项目数量
        //itemsToScroll={1} // 滚动时的项目数量
        breakPoints={breakPoints} // 包含宽度、itemsToShow 和 itemsToScroll 的对象集合
        initialActiveIndex={currentSlide} // 组件挂载时的初始激活索引
        showArrows={false} // 显示箭头按钮
        focusOnSelect={true} // 点击时跳转到项目
        itemPadding={[0, 1]} // 每个元素的内边距
        enableAutoPlay={true} // 开启或关闭自动播放
        autoPlaySpeed={
          currentSlide === webDevProjects.length - 1 ? 3000 : 13000
        }
      >
        {webDevProjects.map((project, index) => (
          <div key={`ai-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>
    </>
  );
};
const WorksMobile = ({ carouselRef, breakPoints, currentSlide }) => {
  const mobileAppProjects = projects.filter(
    (project) => project.category === "mobile_app"
  );
  return (
    <>
      <motion.div variants={textVariant()} className="mt-12 mb-4">
        <h3 className={`${styles.sectionHeadText2}`}>移动应用项目:</h3>
      </motion.div>
      <Carousel
        ref={carouselRef}
        isRTL={false}
        pagination={true} // 显示分页点
        transitionMs={12000} // 动画速度
        easing={"ease"} // 过渡的缓动模式
        tiltEasing={"ease"} // 倾斜的过渡缓动模式
        enableTilt={false} // 达到最后一个项目时的“碰撞”动画
        //itemsToShow={3}   // 可见的项目数量
        //itemsToScroll={1} // 滚动时的项目数量
        breakPoints={breakPoints} // 包含宽度、itemsToShow 和 itemsToScroll 的对象集合
        initialActiveIndex={currentSlide} // 组件挂载时的初始激活索引
        showArrows={false} // 显示箭头按钮
        focusOnSelect={true} // 点击时跳转到项目
        itemPadding={[0, 1]} // 每个元素的内边距
        enableAutoPlay={true} // 开启或关闭自动播放
        autoPlaySpeed={
          currentSlide === mobileAppProjects.length - 1 ? 3000 : 13000
        }
      >
        {mobileAppProjects.map((project, index) => (
          <div key={`ai-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

const WorksAI = ({ carouselRef, breakPoints, currentSlide }) => {
  const AIProjects = projects.filter((project) => project.category === "AI");
  return (
    <div className="hidden">
      <motion.div variants={textVariant()} className="mt-12 mb-4">
        <h3 className={`${styles.sectionHeadText2}`}>AIGC项目:</h3>
      </motion.div>
      <Carousel
        ref={carouselRef}
        isRTL={false}
        pagination={true} // 显示分页点
        transitionMs={12000} // 动画速度
        easing={"ease"} // 过渡的缓动模式
        tiltEasing={"ease"} // 倾斜的过渡缓动模式
        enableTilt={false} // 达到最后一个项目时的“碰撞”动画
        //itemsToShow={3}   // 可见的项目数量
        //itemsToScroll={1} // 滚动时的项目数量
        breakPoints={breakPoints} // 包含宽度、itemsToShow 和 itemsToScroll 的对象集合
        initialActiveIndex={currentSlide} // 组件挂载时的初始激活索引
        showArrows={false} // 显示箭头按钮
        focusOnSelect={true} // 点击时跳转到项目
        itemPadding={[0, 1]} // 每个元素的内边距
        enableAutoPlay={true} // 开启或关闭自动播放
        autoPlaySpeed={currentSlide === AIProjects.length - 1 ? 3000 : 13000}
      >
        {AIProjects.map((project, index) => (
          <div key={`ai-project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Works = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 720, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1080, itemsToShow: 3, itemsToScroll: 1 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const totalItems = projects.length;
    const interval = setInterval(() => {
      if (currentSlide === totalItems - 1) {
        setCurrentSlide(0);
        carouselRef.current.goTo(0);
      } else {
        setCurrentSlide((prevSlide) => prevSlide + 1);
        carouselRef.current.goTo(currentSlide + 1);
      }
    }, 13000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

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
            {/* 并附有代码库和实时演示的链接 */}
            以下项目通过我工作的真实世界例子展示了我的技能和经验。每个项目都进行了简短的描述。它反映了我解决复杂问题、使用不同技术以及有效管理项目的能力。
          </motion.p>
        </div>
        {/* 网页开发项目 */}
        <WorksWeb
          carouselRef={carouselRef}
          currentSlide={currentSlide}
          breakPoints={breakPoints}
        />
        {/* 移动应用项目 */}
        <WorksMobile
          carouselRef={carouselRef}
          currentSlide={currentSlide}
          breakPoints={breakPoints}
        />
        {/* AIGC项目，未完成先隐藏 */}
        <WorksAI
          carouselRef={carouselRef}
          currentSlide={currentSlide}
          breakPoints={breakPoints}
        />
      </div>
    </>
  );
};

const WorksSection = SectionWrapper(Works, "works");

export default WorksSection;
