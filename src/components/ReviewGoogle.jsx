import Viridiani from '../assets/people/Viridiani.png';
import Eliane from '../assets/people/Eliane.png';
import Rosimar from '../assets/people/Rosimar.png';
import Alana from '../assets/people/Alana.png';
import Giovanna from '../assets/people/Giovanna.png';
import Denise from '../assets/people/Denise.png';
import Janete from '../assets/people/Janete.png';
import Carolina from '../assets/people/Carolina.png';
import Google from "../assets/google.svg";
import Star from "../assets/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/ReviewGoogle.module.css";
import { Navigation } from "swiper";
import { useState, useEffect } from 'react';

export default function ReviewGoogle() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [spaceBetween, setSpaceBetween] = useState(-60);  // novo estado para spaceBetween

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {  // para telas muito pequenas
        setSlidesPerView(1);
        setSpaceBetween(20);
      } else if (window.innerWidth < 980) {  // para telas pequenas
        setSlidesPerView(1);
        setSpaceBetween(20);
      } else if (window.innerWidth < 1380) {  // para telas médias
        setSlidesPerView(3);
        setSpaceBetween(-30);
      } else if (window.innerWidth < 1480) {  // para telas médias
        setSlidesPerView(4);
        setSpaceBetween(-60);
      } else { 
        setSlidesPerView(4);
        setSpaceBetween(-60);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {
        window.innerWidth < 980 ? <h1 className={styles.title}>Depoimentos</h1> : <></>
      }
      <section className={styles.container_google} id='review'>
      <Swiper 
            navigation={true} 
            modules={[Navigation]} 
            spaceBetween={spaceBetween} 
            slidesPerView={slidesPerView}
            className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.container_review}>
              <img className={styles.people} src={Viridiani} alt="" />
              <p className={styles.name}>Viridiani Freitas</p>
              <div className={styles.container_star}>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className={styles.comment}>
              Excelente atendimento, excelente qualidade. Tudo perfeito. Simplesmente amei, alta qualidade, além do cuidado na hora da colocação, deixaram tudo limpinho e perfeito. Super recomendo.
              </p>
              <img className={styles.logo_google} src={Google} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container_review}>
              <img className={styles.people} src={Eliane} alt="" />
              <p className={styles.name}>Eliane Rios</p>
              <div className={styles.container_star}>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className={styles.comment}>
              Gostamos muito de trabalhar com Tok Conceito. Desde a escolha até montagem, foram super atenciosos e profissionais. Trabalho entregue no prazo, com dedicação e capricho. Ficamos grato.
              </p>
              <img className={styles.logo_google} src={Google} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container_review}>
              <img className={styles.people} src={Rosimar} alt="" />
              <p className={styles.name}>Rosimar Oldra Pagliosa</p>
              <div className={styles.container_star}>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className={styles.comment}>
                Perfeição, carinho, amor e dedicação! Maravilhada com a delicadeza e os acabamentos das cortinas, colcha e almofadas!
                Parabéns a equipe da Tok Conceito.
              </p>
              <img className={styles.logo_google} src={Google} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container_review}>
              <img className={styles.people} src={Alana} alt="" />
              <p className={styles.name}>Alana Tomasi</p>
              <div className={styles.container_star}>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className={styles.comment}>
              5 estrelas é pouco para essa empresa nota MIL. Eu amei o trabalho deles, tudo perfeito. Atendimento, pontualidade, comprometimento, poduto de qualidade, preço justo e super caprichosos. Obrigada Júlia e Thiago vcs são DEMAISSS.
              </p>
              <img className={styles.logo_google} src={Google} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container_review}>
              <img className={styles.people} src={Giovanna} alt="" />
              <p className={styles.name}>Giovana Souza</p>
              <div className={styles.container_star}>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className={styles.comment}>
              Atendimento excelente, e responsáveis! Entregam no prazo, trabalho perfeito e de altíssima qualidade!! Recomendo muito. 👏🏼
              </p>
              <img className={styles.logo_google} src={Google} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container_review}>
              <img className={styles.people} src={Denise} alt="" />
              <p className={styles.name}>Denise Rigon</p>
              <div className={styles.container_star}>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className={styles.comment}>
              Amei o atendimento e trabalho final, fiz 2 cortinas em diferentes ambientes e estou amando. Com certeza vamos fechar outros serviços.😚            </p>
              <img className={styles.logo_google} src={Google} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container_review}>
              <img className={styles.people} src={Janete} alt="" />
              <p className={styles.name}>Janete Odete de Souza</p>
              <div className={styles.container_star}>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className={styles.comment}>
              Empresa de excelente atendimento e qualidade!!! Super indico!!! Muito obrigada pela competência e dedicação 🙏👏👏
              </p>
              <img className={styles.logo_google} src={Google} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container_review}>
              <img className={styles.people} src={Carolina} alt="" />
              <p className={styles.name}>Carolina Roth</p>
              <div className={styles.container_star}>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className={styles.comment}>
              Atendimento excelente, cortina ficou linda ❤️
              </p>
              <img className={styles.logo_google} src={Google} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className={styles.details_bottom}></div>
    </>
  );
}
