import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderSection from './HeaderSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import Loader from './../Loader';
import SocialSection from './SocialSection';
import style from './Resume.module.scss';
import jsonData from './../../../content/data.json'

const Resume = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { url } = jsonData;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(url);
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);
  if (isLoading) return (
    <Loader/>
  );

  return (
    <div className={style.root}>
      <HeaderSection
        className={style.section}
        data={data.header}
      />
      <EducationSection
        className={style.section}
        data={data.education}
      />
      <ExperienceSection
        className={style.section}
        data={data.experience}
      />
      <SkillsSection
        className={style.section}
        data={data.skills}
      />
      <SocialSection
        className={style.section}
        data={data.social}
      />
    </div>
  );
}

export default Resume;
