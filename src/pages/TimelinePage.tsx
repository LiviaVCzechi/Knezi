import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import TimelineSlider from '../components/TimelineSlider';

// Sample timeline data
const timelineEvents = [
  {
    id: 'munich-agreement',
    year: 1939,
    month: 3,
    day: 15,
    title: {
      en: 'Nazi Occupation',
      cs: 'Nacistická okupace',
    },
    description: {
      en: 'Nazi Germany occupies Czech lands, establishing the Protectorate of Bohemia and Moravia. Religious persecution intensifies, with a focus on Catholic clergy who opposed the regime.',
      cs: 'Nacistické Německo okupuje české země a zřizuje Protektorát Čechy a Morava. Náboženské pronásledování se stupňuje, se zaměřením na katolické duchovní, kteří se stavěli proti režimu.',
    },
    image: 'https://images.pexels.com/photos/60639/prague-historical-city-czech-republic-60639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'communist-takeover',
    year: 1948,
    month: 2,
    day: 25,
    title: {
      en: 'Communist Coup',
      cs: 'Komunistický převrat',
    },
    description: {
      en: 'Communist party seizes power in Czechoslovakia. Immediate restrictions on religious organizations begin, with church property confiscated and religious activities monitored.',
      cs: 'Komunistická strana se ujímá moci v Československu. Okamžitě začínají omezení náboženských organizací, konfiskace církevního majetku a sledování náboženských aktivit.',
    },
    image: 'https://images.pexels.com/photos/8059890/pexels-photo-8059890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'church-laws',
    year: 1949,
    month: 10,
    day: 14,
    title: {
      en: 'Church Control Laws',
      cs: 'Zákony o kontrole církví',
    },
    description: {
      en: 'New legislation establishes state control over churches. Priests require state approval to practice, and religious education becomes severely restricted.',
      cs: 'Nová legislativa zavádí státní kontrolu nad církvemi. Kněží potřebují státní souhlas k výkonu povolání a náboženská výchova je výrazně omezena.',
    },
  },
  {
    id: 'show-trials',
    year: 1950,
    month: 4,
    day: 31,
    title: {
      en: 'Show Trials Begin',
      cs: 'Začátek inscenovaných procesů',
    },
    description: {
      en: 'Major show trials against religious leaders begin, with fabricated charges of espionage, treason, and Vatican collaboration. Many priests are sentenced to long prison terms or execution.',
      cs: 'Začínají velké inscenované procesy proti náboženským vůdcům s vykonstruovanými obviněními ze špionáže, zrady a spolupráce s Vatikánem. Mnoho kněží je odsouzeno k dlouholetým trestům vězení nebo k popravě.',
    },
    image: 'https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'internment-camps',
    year: 1950,
    month: 9,
    day: 1,
    title: {
      en: 'Internment Camps Established',
      cs: 'Zřízení internačních táborů',
    },
    description: {
      en: 'Special concentration camps for priests and religious leaders are established where they are forced to work in harsh conditions while undergoing ideological "re-education".',
      cs: 'Jsou zřízeny speciální koncentrační tábory pro kněze a náboženské vůdce, kde jsou nuceni pracovat v těžkých podmínkách a podstupovat ideologickou "převýchovu".',
    },
    image: 'https://images.pexels.com/photos/911529/pexels-photo-911529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'prague-spring',
    year: 1968,
    month: 1,
    day: 5,
    title: {
      en: 'Prague Spring',
      cs: 'Pražské jaro',
    },
    description: {
      en: 'Brief period of liberalization allows for some religious freedoms to be restored. Many imprisoned priests are released and allowed to return to limited ministry.',
      cs: 'Krátké období liberalizace umožňuje obnovení některých náboženských svobod. Mnoho uvězněných kněží je propuštěno a je jim umožněn návrat k omezené službě.',
    },
    image: 'https://images.pexels.com/photos/922967/pexels-photo-922967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'soviet-invasion',
    year: 1968,
    month: 8,
    day: 21,
    title: {
      en: 'Soviet Invasion',
      cs: 'Sovětská invaze',
    },
    description: {
      en: 'Warsaw Pact forces invade Czechoslovakia, ending the Prague Spring. Religious persecution is renewed with increased surveillance and restrictions.',
      cs: 'Vojska Varšavské smlouvy invadují do Československa, čímž končí Pražské jaro. Náboženské pronásledování je obnoveno se zvýšeným dohledem a omezeními.',
    },
    image: 'https://images.pexels.com/photos/2664062/pexels-photo-2664062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'charter-77',
    year: 1977,
    month: 1,
    day: 1,
    title: {
      en: 'Charter 77',
      cs: 'Charta 77',
    },
    description: {
      en: 'Human rights declaration is published with many religious figures among its signatories. This increases pressure on the regime to address religious freedom violations.',
      cs: 'Je zveřejněna deklarace lidských práv, mezi jejímiž signatáři je mnoho náboženských osobností. To zvyšuje tlak na režim, aby se zabýval porušováním náboženské svobody.',
    },
    image: 'https://images.pexels.com/photos/6175267/pexels-photo-6175267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'velvet-revolution',
    year: 1989,
    month: 11,
    day: 17,
    title: {
      en: 'Velvet Revolution',
      cs: 'Sametová revoluce',
    },
    description: {
      en: 'Non-violent revolution leads to the collapse of the Communist regime. Religious freedom is restored, and persecuted priests are officially rehabilitated.',
      cs: 'Nenásilná revoluce vede ke kolapsu komunistického režimu. Náboženská svoboda je obnovena a pronásledovaní kněží jsou oficiálně rehabilitováni.',
    },
    image: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const TimelinePage: React.FC = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [initialYear, setInitialYear] = useState<number | null>(null);
  
  useEffect(() => {
    // Check if there's a year parameter in the URL
    const params = new URLSearchParams(location.search);
    const yearParam = params.get('year');
    
    if (yearParam) {
      const year = parseInt(yearParam);
      if (!isNaN(year) && year >= 1939 && year <= 1989) {
        setInitialYear(year);
      }
    }
  }, [location]);
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">
          {t('timeline.title')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('timeline.subtitle')} (1939-1989)
        </p>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-md mb-8">
        <p className="text-gray-700">
          {language === 'en' 
            ? 'Explore the key events in the history of priest persecution in Czechoslovakia from the Nazi occupation through the Communist era until the Velvet Revolution. Use the interactive timeline below to navigate through this dark period of history.'
            : 'Prozkoumejte klíčové události v historii pronásledování kněží v Československu od nacistické okupace přes komunistickou éru až po Sametovou revoluci. Použijte interaktivní časovou osu níže k navigaci tímto temným obdobím historie.'
          }
        </p>
      </div>
      
      {/* Timeline Component */}
      <TimelineSlider 
        events={timelineEvents}
        startYear={1939}
        endYear={1989}
      />
      
      {/* Additional Information */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            {language === 'en' ? 'About This Timeline' : 'O této časové ose'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'en'
              ? 'This interactive timeline presents key moments in the persecution of priests in Czechoslovakia from 1939 to 1989. Each highlighted event includes details about the historical context, specific incidents, and the impact on religious freedom.'
              : 'Tato interaktivní časová osa představuje klíčové momenty v pronásledování kněží v Československu od roku 1939 do roku 1989. Každá zvýrazněná událost obsahuje podrobnosti o historickém kontextu, konkrétních incidentech a dopadu na náboženskou svobodu.'
            }
          </p>
          <p className="text-gray-700">
            {language === 'en'
              ? 'For more detailed information about specific periods, please visit our History of Repressions section.'
              : 'Pro podrobnější informace o konkrétních obdobích navštivte prosím naši sekci Historie represí.'
            }
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            {language === 'en' ? 'Historical Context' : 'Historický kontext'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'en'
              ? 'The persecution of priests in Czechoslovakia took place within the broader context of Communist suppression of religion as an "opiate of the masses" and perceived threat to state authority. The regime specifically targeted the Catholic Church due to its connections with the Vatican, considered a hostile foreign power.'
              : 'Pronásledování kněží v Československu probíhalo v širším kontextu komunistického potlačování náboženství jako "opia lidstva" a vnímaní hrozby pro státní autoritu. Režim se specificky zaměřoval na katolickou církev kvůli jejím spojením s Vatikánem, který byl považován za nepřátelskou zahraniční mocnost.'
            }
          </p>
          <p className="text-gray-700">
            {language === 'en'
              ? 'The methods of persecution evolved over time, from violent show trials in the 1950s to more subtle forms of suppression in later decades.'
              : 'Metody pronásledování se v průběhu času vyvíjely, od násilných inscenovaných procesů v 50. letech až po jemnější formy potlačování v pozdějších desetiletích.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;