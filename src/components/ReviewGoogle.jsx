import { useState } from "react";
import styles from "../styles/ReviewGoogle.module.css";
import People from "../assets/people.png"
import Google from "../assets/google.svg";
import Previous from "../assets/left.svg";
import Next from "../assets/right.svg";
import Star from "../assets/star.svg";

let reviews = [
  {
    name: "Silvia Elaine",
    comment: "Pontualidade, qualidade, educação, simpatia! Trabalho excelente, que pena não ter feito todas as outras com vcs! Parabéns!",
    image: People,
    logo: Google
  },
  {
    name: "Silvia Elaine2",
    comment: "Pontualidade, qualidade, educação, simpatia! Trabalho excelente, que pena não ter feito todas as outras com vcs! Parabéns!",
    image: People,
    logo: Google
  },
  {
    name: "Silvia Elain3",
    comment: "Pontualidade, qualidade, educação, simpatia! Trabalho excelente, que pena não ter feito todas as outras com vcs! Parabéns!",
    image: People,
    logo: Google
  },
  {
    name: "Silvia Elaine4",
    comment: "Pontualidade, qualidade, educação, simpatia! Trabalho excelente, que pena não ter feito todas as outras com vcs! Parabéns!",
    image: People,
    logo: Google
  },
  {
    name: "Silvia Elaine5",
    comment: "Pontualidade, qualidade, educação, simpatia! Trabalho excelente, que pena não ter feito todas as outras com vcs! Parabéns!",
    image: People,
    logo: Google
  },
];

while (reviews.length % 4 !== 0) {
  reviews = [...reviews, ...reviews.slice(0, 4 - reviews.length % 4)];
}

const ReviewGoogle = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    if (index < reviews.length - 4) {
      setIndex(index + 4);
    } else {
      setIndex(0); 
    }
  }

  const prevReview = () => {
    if (index > 0) {
      setIndex(index - 4);
    } else {
      setIndex(reviews.length - 4);
    }
  }

  return (
    <>
      <section className={styles.container_google}>
        <img className={styles.arrow} src={Previous} alt="" onClick={prevReview} />
        {reviews.slice(index, index + 4).map((review, i) => (
          <div key={i} className={styles.container_review}>
            <img className={styles.people} src={review.image} alt="" />
            <p className={styles.name}>{review.name}</p>
            <div className={styles.container_star}>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <p className={styles.comment}>{review.comment}</p>
            <img className={styles.logo_google} src={review.logo} alt="" />
          </div>
        ))}
        <img className={styles.arrow} src={Next} alt="" onClick={nextReview} />
      </section>
      <div className={styles.details_bottom}></div>
    </>
  );
}

export default ReviewGoogle;