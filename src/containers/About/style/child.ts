import styled from 'styled-components';

const Child = styled.div`
  text-align: center;
  margin-right: 10px;
  position: relative;
  .name {
    color: red;
    font-size: 25px;
    margin: unset;
    position: absolute;
    right: 35%;
    top: 50%;
  }
  .image {
    border-radius: 20px;
  }
`;

export default Child;
