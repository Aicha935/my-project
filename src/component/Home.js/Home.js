import React, { Fragment } from "react";
import Header from "./Header";
import'./Home.css';
import prideimg from'./../../assets/1.jpg';
import ingredients from'./../../assets/2.png';
import Data from "../../Data";
import{Carousel} from'react-bootstrap' ;
import item1 from './../../assets/item.jpg';
import item2 from './../../assets/item2.jpg';



const Home=()=>{
    const blogitem =Data.map((item)=>{
 return( 
    <div className='col-md-4'>
        <div className='box'>
<img src={item.img}/>
   <h5>{item.title}</h5>
        <span>{item.time}</span>
        <h6>{item.price}</h6>
        </div>
       <button><a href='#'>اطلب الان</a></button>

    </div>
 )
    })

    return(
        <Fragment>
              <Header/>
              <section className='numbers'>
              <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h2>+1500</h2>
                            <h6>زبون سعيد</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>+320</h2>
                            <h6>طبق مقدم يوميا</h6>
                        
                    </div>
                    <div className='col-md-3'>
                        <h2>+25</h2>
                            <h6>شاف محترف</h6>
                        
                    </div>
                    <div className='col-md-3'>
                        <h2>+10</h2>
                            <h6>سنوات من الخبرة</h6>
                        
                    </div>
                </div>
              </div>
              </section>
              <section className='pride'>
           <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={prideimg} title='prideimg'/>
                </div>
                <div className='col-md-6'>
                 <h2>نفخر بصناعة الطعام الحقيقي بستخدام اجود المكونات الطبيعية </h2>
                 <p>نؤمن ان الطعام الجيد يبدا من اختيار المكونات  بعناية  لذلك نحرص على استخدام اجود الخضروات لتحضير وجبات صحية ولذيذة</p>
                
                
                </div>
            </div>

           </div>
              </section>
               <section className='ingredients'>
           <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
              <h2>نحضر كل شئ بايدينا وباجود المكونات الممكنة  </h2>
              <p>نحن نامن ان سر الطعم الحقيقي يبدا من الجودة لذلك نحرص على اختيار مكوناتنا بعناية فائقة  </p>
               <ul>
                <li>نستخدم مكونات طازجة وطبيعية فقط.</li>
                <li>وصفاتنا مبتكرة وغنية بالنكهات. </li>
                <li>نحرص على الجودة في كل مرحلة.</li>

               </ul>
               <button>
                    <a href='#'>اكتشف المزيد</a>
                </button>
                 
                 </div>
                 <div className='col-md-6'>
                    <img src={ingredients}alt="ingredients"/>
                 </div>
                </div> 
                </div>
                </section>
                <section className='paralex'>
                    <div className='contraine'>
                        <div className='row'>
                            <div className='col-lg-12 clo-md-12'>
                                <h2>في عالم الطعام تختفي الفروق</h2>
                                <p>حين نشبع قلوب الناس قبل لابطونهم لايعود للغني او الفقير <br/>اي معنى نحن نؤمن ان اللذة الحقيقية تجمع الجميع على مائدة  واحدة </p>
                                <a href='#'>اكتشف قصتنا وتذوق الفرق معانا</a>
                            </div>
                        </div>
                    </div>

                </section>
                <section className='blogs'>
                    <div className='centraine'>
                      <div className='row'>
                        <div className='col-md-12 col-lg-12 '>
                        <h2>اكتشف أطعمتنا</h2>
                        <p>استمتع بتجربة نكهات فريدة تجمع بين الطعم الأصيل والمكونات الطازجة. نحن نحرص على تقديم أطباق شهية تُحضَّر بحب وشغف، لتأخذك في رحلة لذيذة عبر تقاليد الطهي من مختلف أنحاء العالم. في ركن بعيد من المذاق، حيث تجتمع الجودة والتميز، تبدأ قصتنا مع كل طبق يُقدَّم لك.</p>
                        </div>
            
                    </div>
                          <div className='row'>
                             {blogitem}
                          </div>
                    </div>
                </section>
                <section className="sliderx">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 col-lg-12'>
                                    <h2>الشهادات</h2>
                                    

                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12'>
                                    <Carousel>
                                      <Carousel.Item>
        <img src={item1} />
        <br/>
        <Carousel.Caption>
          <p> ناديا خليل </p>
          <span>أخيرًا وجدت مطعمًا يجمع بين الطعم اللذيذ والتغذية السليمة! كل طبق مليء بالنكهات الطبيعية ومن دون أي إضافات صناعية. أشعر بالخفة والنشاط بعد كل وجبة."</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={item2} />
        <Carousel.Caption>
          <p>ليث الزين</p>
          <span>هذا المطعم غيّر مفهوم الأكل الصحي بالنسبة لي. السلطات الطازجة والخيارات النباتية كلها ممتازة. تجربة راقية ومفيدة للجسم والعقل."</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                                </div>

                            </div>

                        </div>
                        
      
    
                </section>
        </Fragment>
    )
}
export default Home;