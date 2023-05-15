import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProjectItem from '../ProjectItem'

import {
  MainContainer,
  TopContainer,
  WebsiteImage,
  SelectInput,
  OptionInput,
  ProjectList,
  LoaderContainer,
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

class Header extends Component {
  state = {
    inputTag: categoriesList[0].id,
    filteredProjects: [],
    apiStatus: apiStatusConstants.inProgress,
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    const {inputTag} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrlPackages = `https://apis.ccbp.in/ps/projects?category=${inputTag}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrlPackages, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))
      this.setState({
        filteredProjects: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeTag = event => {
    this.setState({inputTag: id}, this.renderProjects)
  }

  onRetry = () => {
    this.setState({inputTag: categoriesList[0].id})
    this.getProjects()
  }

  renderFailureView = () => (
    <FailedView>
      <FailedImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailedHeading>Oops! Something Went Wrong</FailedHeading>
      <FailedNote>
        We cannot seem to find the page you are looking for
      </FailedNote>
      <RetryButton type="button" onClick={this.onRetry}>
        Retry
      </RetryButton>
    </FailedView>
  )

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderProjects = () => {
    const {filteredProjects} = this.state
    return (
      <ProjectList>
        {filteredProjects.map(projectDetails => (
          <ProjectItem
            key={projectDetails.id}
            projectDetails={projectDetails}
          />
        ))}
      </ProjectList>
    )
  }

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProjects()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {inputTag} = this.state
    console.log(inputTag)
    return (
      <MainContainer>
        <TopContainer>
          <WebsiteImage
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </TopContainer>
        <SelectInput onChange={this.onChangeTag} value={inputTag}>
          {categoriesList.map(each => (
            <OptionInput value={each.id} key={each.id}>
              {each.displayText}
            </OptionInput>
          ))}
        </SelectInput>
        {this.renderHomeVideos()}
      </MainContainer>
    )
  }
}

export default Header
