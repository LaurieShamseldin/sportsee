

type Session = {
  kilogram: number;
  calories: number;
  payload: Array<{ pv: number; uv: number }>;
} 


export const mapSessionsToChartData = (sessions: Session[]) => {
  return sessions.map((session, index) => ({
    name: (index + 1).toString(),
    kilogram: session.kilogram,
    calories: session.calories,
    pv: session.kilogram,
    uv: session.calories,
    payload: [{ pv: session.kilogram, uv: session.calories }],
  }));
};



interface Sessions {
  day: string;
  sessionLength: number;
}

interface UserDataMap {
  [day: string]: string;
}


const dayString: UserDataMap = {
  "1": "L",
  "2": "M",
  "3": "M",
  "4": "J",
  "5": "V",
  "6": "S",
  "7": "D",
};

export const formatSessionData = (sessions: Sessions[]): Sessions[] => {
  return sessions.map((session) => ({
    ...session,
    day: dayString[session.day],
  }));
};





type KindMapping = {
  [key: number]: string;
}

type Datas = {
  value : number,
  kind : number,
} 


type DatasPerformanceUser = {
  value : number,
  kind : number,
  kindText : string,
}


export const mapKindToText = (data: Datas[], kindMapping: KindMapping): DatasPerformanceUser[] => {
  const translateKindText = (kindText: string): string => {
    const frenchTranslationMapping: Record<string, string> = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    };

    return frenchTranslationMapping[kindText] || kindText;
  };

  return data.map(item => ({
    ...item,
    kindText: translateKindText(kindMapping[item.kind]),
  }));
};