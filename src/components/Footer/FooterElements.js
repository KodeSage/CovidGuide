import styled from "styled-components";

export const FooterWrapper = styled.div`
background: #010A56;
padding: 1rem 0;
`;
export const FooterHead = styled.h2`
color: #fff;
font-size: 1.5rem;
text-transform: uppercase;
margin-bottom: 1rem;

@media screen and (max-width: 960px) {
    text-align: center
}
`
export const FooterItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const FooterText = styled.p`
color: #fff;
`
export const FooterIcons = styled.div`
padding: 1rem;
display: flex;
`
export const FootLink = styled.a`
  color: white;
  font-size: 2rem;
  padding: 0 1rem;

  &:hover {
    color: #006fd6;
  }
`;
 
export const FooterClose = styled.p`
color: white;
font-size: 0.7rem;
`