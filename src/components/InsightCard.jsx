import React from 'react';

// Temporary reusable data (same image and content for now)
const data = [
  {
    title: "How food vlogging shapes today's",
    date: 'November 7, 2022',
    link: '/post/how-food-vlogging-shapes-todays',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: "How food vlogging shapes today's",
    date: 'November 7, 2022',
    link: '/post/how-food-vlogging-shapes-todays',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: "How food vlogging shapes today's",
    date: 'November 7, 2022',
    link: '/post/how-food-vlogging-shapes-todays',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
];

const InsightCard = () => {
  return (
    <div className="insight-card">
      {data.map((card, i) => (
        <article key={i} className="blog-card">
          <a href={card.link} className="blog-card__link">
            <div
              className="blog-card__image"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="blog-card__content">
              <time className="blog-card__date">{card.date}</time>
              <h3 className="blog-card__title">{card.title}</h3>
              <div className="blog-card__action">
                <div className="link-underline">
                  <span className="link-underline__text">Read More</span>
                  <span className="link-underline__line"></span>
                </div>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default InsightCard;
