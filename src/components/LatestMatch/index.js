import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails.latestMatchDetail
  console.log(matchDetails)
  return (
    <div className="textStyles">
      <div>
        <p className="competeTeamStyle">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeamLogo"
        />
      </div>
      <div className="textAlignStyles">
        <h1 className="date">First Innings</h1>
        <p>{firstInnings}</p>
        <h1 className="date">Second Innings</h1>
        <p>{secondInnings}</p>
        <h1 className="date">Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1 className="date">Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
