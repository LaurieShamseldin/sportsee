import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

import PerformanceApi from "../../utils/PerformanceApi";
import { mapKindToText } from '../../utils/DataFormated';
// import PerformanceMock from '../../utils/mock/PerformanceMock';

import './style.css';

/**
 * Composant représentant les performances de l'utilisateur sous forme de graphique radar.
 * @component
 * @returns {JSX.Element} Élément JSX représentant le composant Performance.
 */

const Performance = () => {
  const apiData = PerformanceApi();
  // const apiData = PerformanceMock();

  // Vérification de la présence de données
  if (!apiData || !apiData.data) {
    return <div>Aucune donnée disponible</div>;
  }

  const rawData = apiData.data.data;
  const rawKind = apiData.data.kind;

  // Formatage des données pour le graphique radar
  const data = mapKindToText(rawData, rawKind);

  return (
    <section className="user__activity-performance">
    <RadarChart outerRadius={90} width={350} height={260} data={data} >
      <PolarGrid />
      <PolarAngleAxis dataKey="kindText" axisLine={{ stroke: "white" }} tick={{ fill: "white" }} fontSize={14} />
      <Radar name="User" dataKey="value" fill="#E60000" fillOpacity={0.7} />
    </RadarChart>
  </section>
  );
};

export default Performance;