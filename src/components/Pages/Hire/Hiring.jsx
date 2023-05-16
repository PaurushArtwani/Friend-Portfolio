import styled from "styled-components";

const Hiring = () => {
  return (
    <>
      <Hire className="row align-items-center hiring p-4">
        <div className="col offset-md-1 mb-4 mb-md-0">
          <h6 className="title text-light">
            Let's Team up for Professional Excellence!
          </h6>
          <p className="m-0 text-light">
            Feel free to Contact or Block my calendar.
          </p>
        </div>
        <div className="col offset-sm-2 offset-md-2 hire-button">
          <button
            href="www.google.com"
            className="btn btn-lg my-font btn-light rounded custom-button"
          >
            <a target="_blank" href="#">
              Calender
            </a>
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="btn btn-lg my-font btn-light rounded custom-button">
            <a target="_blank" href="#">
              Upwork
            </a>
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="btn btn-lg my-font btn-light rounded custom-button">
            <a target="_blank" href="#">
              Fiver
            </a>
          </button>
        </div>
      </Hire>
    </>
  );
};

const Hire = styled.div`
  .hiring {
    margin: auto;
    text-align: center;
  }
  .hiring p,
  h6 {
    text-align: justify;
  }
  .hire-button {
    text-align: justify;
  }
  .hire-button a {
    color: #000;
    text-decoration: none;
  }
`;
export default Hiring;
