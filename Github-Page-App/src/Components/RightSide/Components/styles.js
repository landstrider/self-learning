import styled from 'styled-components';

 const LanguageCircle = styled.span`
  display: inline-block;
  height: 1rem;
  width: 1rem;
  background-color: ${props => {
	if(props.lang === "JavaScript") return 'yellow';
	else if(props.lang === "HTML") return 'red';
	else return 'purple';
	}
  };
  border-radius: 50%;
  margin-right: 0.72rem;
`
export default LanguageCircle;
