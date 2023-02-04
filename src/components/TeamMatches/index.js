import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesList: {}, isLoading: true}

  componentDidMount() {
    this.teamMatchesList()
  }

  teamMatchesList = async () => {
    const {match} = this.props

    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()

    const latestMatchData = data.latest_match_details
    const recentMatches = data.recent_matches

    const latestMatchDetails = {
      umpires: latestMatchData.umpires,
      result: latestMatchData.result,
      manOfTheMatch: latestMatchData.man_of_the_match,
      id: latestMatchData.id,
      date: latestMatchData.date,
      venue: latestMatchData.venue,
      competingTeam: latestMatchData.competing_team,
      competingTeamLogo: latestMatchData.competing_team_logo,
      firstInnings: latestMatchData.first_innings,
      secondInnings: latestMatchData.second_innings,
      matchStatus: latestMatchData.match_status,
    }

    const recentMatchDetails = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetail: latestMatchDetails,
      recentMatchDetail: recentMatchDetails,
    }
    console.log(formattedData)

    this.setState({teamMatchesList: formattedData, isLoading: false})
  }

  render() {
    const {teamMatchesList, isLoading} = this.state
    console.log(teamMatchesList)
    const {match} = this.props

    const {params} = match
    const {id} = params
    return (
      <>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className={`team-matches-main-container ${id}`}>
              <img
                src={teamMatchesList.teamBannerUrl}
                alt="team banner"
                className="team-banner"
              />
              <div>
                <h1 className="latestMatch">Latest Matches</h1>
                <div className="latest-match-bg-container">
                  <LatestMatch
                    key={teamMatchesList.latestMatchDetail.id}
                    matchDetails={teamMatchesList}
                  />
                </div>
              </div>

              <ul className="unOrderMatchCard">
                {teamMatchesList.recentMatchDetail.map(each => (
                  <MatchCard recentMatchDetail={each} key={each.id} />
                ))}
              </ul>
            </div>
          </>
        )}
      </>
    )
  }
}

export default TeamMatches
