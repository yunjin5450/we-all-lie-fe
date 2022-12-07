import styled from 'styled-components';

const Camera = ({ nickname }) => {
  return (
    <>
      <Wrap>
        <NickName>{nickname}</NickName>
      </Wrap>
    </>
  );
};

export default Camera;

const Wrap = styled.div`
  width: 24%;
  height: 45%;
  background-color: #e8e8e8;
  border-radius: 5px;
  display: flex;
  flex-direction: row-reverse;
  border-color: ${(props) => props.borderColor || '#2b2b2b'};
  cursor: pointer;
  pointer-events: ${(props) => (props.asker === true ? 'none' : '')};
  position: relative;
`;

const NickName = styled.div`
  width: 100%;
  height: 28px;
  background-color: #dfdfdf;
  color: #2b2b2b;
  font-weight: 600;
  align-self: flex-end;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
`;
