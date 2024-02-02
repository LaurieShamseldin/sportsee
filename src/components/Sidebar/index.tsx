// import './style.css';
import iconYoga from '../../assets/yoga.svg'
import iconSwim from '../../assets/swim.svg'
import iconBike from '../../assets/bike.svg'
import iconBuilding from '../../assets/building.svg'

import './style.css';
/**
 * Composant représentant la barre latérale de l'application.
 * @component
 * @returns {JSX.Element} Élément JSX représentant le composant Sidebar.
 */

const Sidebar = (): JSX.Element => (
  <div className="sidebar">
    <div className="sidebar__icons">
        <div className="sidebar__icon">
          <img src={iconYoga} alt="" />
        </div>
        <div className="sidebar__icon">
          <img src={iconSwim} alt="" />
        </div>
        <div className="sidebar__icon">
          <img src={iconBike} alt="" />
        </div>
        <div className="sidebar__icon">
          <img src={iconBuilding} alt="" />
        </div>
      </div>
      <p className="sidebar__copyright">Copyright, SportSee 2020</p>
  </div>
);

export default Sidebar;