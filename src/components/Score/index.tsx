
import { PieChart, Pie } from "recharts"

import UserApi from "../../utils/UserApi";

import './style.css';

interface DataScore {
  name: string;
  value: number;
}

interface RenderCustomizedLabelProps {
  cx: number,
  cy: number
}


/**
 * Composant représentant le score de l'utilisateur sous forme de graphique en secteurs (pie chart).
 * @component
 * @returns {JSX.Element} Élément JSX représentant le composant Score.
 */

export default function Score(): JSX.Element {
  const userData = UserApi();

  const scoreData = userData ?  (userData.data.todayScore) * 100 || (userData.data.score) * 100 : 0;

  const data: DataScore[] = [
    { name: "Today Score", value: scoreData },
  ];
  console.log(userData);

  /**
   * Fonction de rendu du label personnalisé.
   * @param {RenderCustomizedLabelProps} param0 - Propriétés de la fonction de rendu du label personnalisé.
   * @returns {JSX.Element} Élément JSX représentant le label personnalisé.
   */
  
    const renderCustomizedLabel = ({
      cx,
      cy,
    }: RenderCustomizedLabelProps): JSX.Element => {
    return (
      <g>
        <circle cx={cx} cy={cy} r={90} fill="white" />
        <text x={cx} y={cy - 30} fill="black" fontSize="large" fontWeight="bold">
          <tspan x={cx} dy="0" textAnchor="middle">
            {scoreData}%
          </tspan>
        </text>
        <text
          x={cx + 10}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="large"
          fontWeight={500}
          fill="#74798C"
        >
          de votre
        </text>
        <text
          x={cx + 10}
          y={cy + 35}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="large"
          fontWeight={500}
          fill="#74798C"
        >
          objectif
        </text>
        <text x={cx - 90} y={cy - 120} fontSize="large" fill="black" fontWeight={500}>
          Score
        </text>
      </g>
    );
  };
  const startAngle = 90;
  const endAngle = 90 + (scoreData / 100) * 360;

  return (
    <div className="user__activity-score">
      <PieChart width={240} height={250}> 
        <Pie
          data={data}
          cx={95}
          cy={150}
          innerRadius={90}
          outerRadius={100}
          fill="red"
          dataKey="value"
          label={renderCustomizedLabel}
          startAngle={startAngle}
          endAngle={endAngle}
          isAnimationActive={false}
          animationDuration={0}
          cornerRadius={10}
          labelLine={false}
        />
      </PieChart>
    </div>
  );
}