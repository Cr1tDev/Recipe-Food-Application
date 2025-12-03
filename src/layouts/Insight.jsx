import React from 'react';
import TextSpark from '../components/common/TextSpark';
import Button from '../components/common/Button';
import InsightCard from '../components/InsightCard';

const Insight = () => {
  return (
    <section className="insight">
      <div className="container-wrapper">
        <div className="recipes-container">
          <h2 className="recipes-header">
            My<TextSpark>insight.</TextSpark>
          </h2>
          <Button color="green" href="#">
            All Posts
          </Button>
        </div>
        <div className="insight-content">
          {/* <!-- Render card dynamicly --> */}
          <InsightCard />
        </div>
      </div>
    </section>
  );
};

export default Insight;
