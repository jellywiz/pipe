import React from 'react';
import logo from '../img/pipe.jpg';
import './About.css';

function About() {
  return (
    <div id="about-us" className="About-container">
      <div className="background"></div>
      <div className="aboutus-header-text">
        <h1>الأمان بلاست</h1>
        <div className="about">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="about-paragraph">
            <p>
              شركة الأمان بلاست لصناعة المواسير وتصنيع مواسير ووصلات PVCU بجميع
              المقاسات المطلوبة. تصنع منتجات شركة الأمان بلاست من مواد خام نقية
              ، وتقوم شركة الأمان بلاست بتصنيع الأنابيب والتجهيزات (PP-R) بجودة
              عالية مع تقنية متقدمة ، وتشتهر هذه المادة بقوتها واستقرارها
              ومقاومتها لدرجات الحرارة المرتفعة. الخصائص الفيزيائية والكيميائية
              للمادة تلبي المتطلبات الخاصة لإمدادات مياه الشرب والصرف الصحي. نحن
              مصممون على إحداث فرق حقيقي من خلال تقديم حلول أنابيب عالية التقنية
              تمثل طفرة في الصناعة لبناء أكثر المشاريع شهرة في العالم
            </p>
          </div>
        </div>
        <div id="gallery"></div>
        <hr className="down-hr" />
      </div>
    </div>
  );
}

export default About;
