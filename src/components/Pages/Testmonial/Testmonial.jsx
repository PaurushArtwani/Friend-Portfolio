import styled from "styled-components";
import "../../Maincontainer.css";
import SectionHeading from "../../BuildingBlocks/SectionHeading";
const Testmonial = () => {
  return (
    <>
      <SectionHeading title={"Projects"}></SectionHeading>

      <Testimonial className="row testmonial-section">
        <div className="col-md-4 ">
          <div className="testimonial-card">
            <div className="testimonial-card-body">
              <p className="testimonial-card-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                doloribus autem aperiam earum nostrum omnis blanditiis corporis
                perspiciatis adipisci nihil.
              </p>
              <h6 className="testimonial-card-title">Emily Reb</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial-card">
            <div className="testimonial-card-body">
              <p className="testimonial-card-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                doloribus autem aperiam earum nostrum omnis blanditiis corporis
                perspiciatis adipisci nihil.
              </p>
              <h6 className="testimonial-card-title">Emily Reb</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial-card">
            <div className="testimonial-card-body">
              <p className="testimonial-card-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                doloribus autem aperiam earum nostrum omnis blanditiis corporis
                perspiciatis adipisci nihil.
              </p>
              <h6 className="testimonial-card-title">Emily Reb</h6>
            </div>
          </div>
        </div>
      </Testimonial>
    </>
  );
};
const Testimonial = styled.div`
  .testimonial-card-img-holder {
    min-width: 45px;
    max-width: 45px;
    z-index: 999;
  }
  .testimonial-card-body {
    text-align: left;
    border: 1px solid #dee2e6;
    background: #fff;
    padding: 20px;
    border-radius: 0;
  }
  .testimonial-card-img {
    background: #fff;
    padding: 4px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  .testimonial-card {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
`;
export default Testmonial;
