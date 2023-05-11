import styled from "styled-components";

const Hiring = () => {
  return (
    <>
      <Hire className="row align-items-center hiring p-4">
        <div className="col offset-md-1 mb-4 mb-md-0">
          <h6 className="title text-light">Want to work with me?</h6>
          <p className="m-0 text-light">
            Always feel Free to Contact &amp; Hire me
          </p>
        </div>
        <div className="col offset-sm-2 offset-md-3 hire-button">
          <button className="btn btn-lg my-font btn-light rounded">
            Hire Me at fiver
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="btn btn-lg my-font btn-light rounded">
            Hire Me at Upwork
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
`;
export default Hiring;
