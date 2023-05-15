import styled from 'styled-components'

export const MainContainer = styled.div`
  margin-bottom: 10px;
`

export const TopContainer = styled.div`
  margin-bottom: 10px;
  background-color: #cbd5e1;
`
export const WebsiteImage = styled.img`
  height: 50px;
  width: 90px;
`

export const SelectInput = styled.select`
  width: 250px;
  height: 30px;
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 15px;
  outline: none;
  color: #000000;
  cursor: pointer;
`
export const OptionInput = styled.option`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`

export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailedHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const FailedNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: Roboto;
  font-size: 15px;
`
