import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="team-decoration">
      <li className="team-list">
        <div className="team-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <div className="team-name-container">
            <p className="team-name">{name}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
