import { LineChart, Line, XAxis, Tooltip, TooltipProps } from "recharts";

import SessionsApi from "../../utils/SessionsApi";
import { formatSessionData } from '../../utils/DataFormated';
//import SessionMock from '../../utils/mock/SessionMock';

import './style.css';

/**
 * Composant représentant les sessions de l'utilisateur sous forme de graphique en ligne.
 * @component
 * @returns {JSX.Element} Élément JSX représentant le composant Session.
 */


const Session = (): JSX.Element => {
  const apiData = SessionsApi();
  // const apiData = SessionMock();
  const data = formatSessionData(apiData);
  
  type CustomTooltipProps = TooltipProps<string, string>;

  /**
   * Composant de rendu de tooltip personnalisé.
   * @param {CustomTooltipProps} param0 - Propriétés de la fonction de rendu du tooltip personnalisé.
   * @returns {JSX.Element} Élément JSX représentant le tooltip personnalisé.
   */

  const CustomTooltip  = ({ active, payload  } : CustomTooltipProps ) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-session">
           <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };
  return (
    <section className="user__activity-session">
      <h3>Durée moyenne des sessions</h3>
      <LineChart width={240} height={160} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

        <XAxis dataKey="day" 
        axisLine={false} 
        tickLine={{ stroke: "transparent", height: 30 }} 
        tickSize={20}  
        tick={{ fill: "rgba(255, 255, 255, 0.5)" }}/>

        <Tooltip content={CustomTooltip}  cursor={{ stroke: "transparent", strokeWidth: 0 }}/>
        
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2}  activeDot={{ r: 3 }} dot={{ r: 0 }}/>

      </LineChart>  
    </section>
  );
};

export default Session;