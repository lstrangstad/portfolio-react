import styled from "styled-components";

const CardSkills = ({ title, description, icon }) => {
  return (
    <Card>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default CardSkills;

const Card = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  place-items: center;
  max-width: 250px;

  img {
    height: 80px;
    width: 80px;
    background-color: #ff785a;
    border-radius: 50%;
    padding: 10px;
  }

  p {
    text-align: center;
    font-size: 14px;
  }
`;
