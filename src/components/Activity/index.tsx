import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps } from 'recharts';

import ActivityApi from "../../utils/ActivityApi";
import { mapSessionsToChartData } from '../../utils/DataFormated';
// import ActivityMock from '../../utils/mock/ActivityMock'; // Laissez ce commentaire
// const apiData = ActivityMock(); // Laissez ce commentaire

import './style.css';

/**
 * Composant React représentant l'activité sportive de l'utilisateur.
 * @component
 * @returns {JSX.Element} Élément JSX représentant le composant Activity.
 */
const Activity = (): JSX.Element => {
  /**
   * Fonction de rendu du composant CustomTooltip pour personnaliser l'affichage de la tooltip.
   * @function
   * @param {TooltipProps<string, string>} props - Propriétés de la tooltip.
   * @returns {JSX.Element|null} Élément JSX représentant la tooltip personnalisée.
   */
  const CustomTooltip = ({ active, payload }: TooltipProps<string, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} kCal`}</p>
        </div>
      );
    }

    return null;
  };

  // const apiData = ActivityMock(); 
  const apiData = ActivityApi();
  const data = mapSessionsToChartData(apiData);
  return (
    <section className="user__activity-sport">
      <div className="user__activity-sport-header">
        <span>Activité quotidienne</span>
        <div className="sport-legend">
          <div className="legend-weight"></div>
          <span className="legend-weight-text">Poids (kg)</span>

          <div className="legend-calories"></div>
          <span className="legend-calories-text">Calories brûlées (kCal)</span>
        </div>
      </div>
      <BarChart
          width={700}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
            <CartesianGrid vertical={false} width={550} strokeDasharray="3 1" />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickSize={20}
              tickLine={{ stroke: 'transparent' }}  
              tick={{
              fill: ' #9B9EAC',
              fontWeight: 500,
            }}/>

            <YAxis
              yAxisId="kilogram"
              type="number"
              orientation="right"
              axisLine={false}
              tickLine={false}
              dataKey="kilogram"
              stroke="#9B9EAC"
              domain={["dataMin -5", "dataMax +15"]}
            />

            <YAxis
              yAxisId="calories"
              type="number"
              domain={["dataMin -160", "dataMax +15"]}
              hide
            />

            <Tooltip content={CustomTooltip}/>
        
            <Bar dataKey="pv" fill="#FF0000" radius={[9, 9, 0, 0]} barSize={10} yAxisId="kilogram"/>
            <Bar dataKey="empty" fill="transparent" barSize={5} yAxisId="kilogram"/>
            <Bar dataKey="uv" fill="#000000" radius={[9, 9, 0, 0]} barSize={10} yAxisId="calories"/>
          </BarChart>
    </section>
  );
};

export default Activity;