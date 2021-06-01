import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <svg
        class="contact__block"
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#8A9EC7" stroke="#8A9EC7"></path>
      </svg>
      <div className="contact">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__text">
          If you have some questions or want to work together?
        </p>
        <form className="contact__form" action="">
          <label className="contact__label" htmlFor="">
            Name
          </label>
          <input
            placeholder="Full Name"
            className="contact__input"
            type="text"
          />
          <label className="contact__label" htmlFor="">
            Subject
          </label>
          <input placeholder="Subject" className="contact__input" type="text" />
          <label className="contact__label" htmlFor="">
            Message
          </label>
          <textarea
            placeholder="Message..."
            className="contact__input"
            htmlFor=""
          />
          <button className="contact__btn">Send</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  background-color: #36496e;

  .contact {
    padding: 20px;
    display: flex;
    flex-direction: column;
    place-items: center;
    color: white;

    &__title {
      padding-bottom: 20px;
    }

    &__text {
      padding-bottom: 20px;
      color: #ff785a;
      text-align: center;
      font-size: 14px;
      width: 200px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px 0;
    }

    &__label {
      padding-bottom: 5px;
    }

    &__input {
      padding: 10px 5px;
      background-color: #2e3a52;
      border: none;
      border-bottom: 1px solid #fcba04;
      margin-bottom: 10px;

      &[type="text"] {
        color: white;
      }
      &::placeholder {
        color: white;
      }
      &:-ms-input-placeholder {
        color: white;
      }

      &::-ms-input-placeholder {
        color: white;
      }
    }

    &__btn {
      padding: 10px;
      background: none;
      border: 1px solid white;
      color: white;
      text-transform: uppercase;
      &:hover {
        background-color: #ff785a;
        border: 1px solid #ff785a;
      }
    }
  }
`;
