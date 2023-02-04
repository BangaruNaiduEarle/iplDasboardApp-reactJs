import './index.css'

const MatchCard = props => {
  const {recentMatchDetail} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = recentMatchDetail
  const gameResult = matchStatus === 'Won' ? 'Won' : 'Lost'
  return (
    <li className="listStyle">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingTeamLogo"
      />
      <p className="competingTeamName">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`matchStatus ${gameResult}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
