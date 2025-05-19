import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HistoryPage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        {language === 'en' ? 'History of Repressions' : 'Historie represí'}
      </h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? '1939-1945: Nazi Occupation' : '1939-1945: Nacistická okupace'}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <p className="text-gray-700">
              {language === 'en'
                ? 'During the Nazi occupation of Czechoslovakia, the Catholic Church faced severe persecution. Many priests were arrested for their resistance activities, support of persecuted groups, or refusal to collaborate with the occupation regime. Several hundred clergy members were imprisoned in concentration camps, and dozens were executed.'
                : 'Během nacistické okupace Československa čelila katolická církev tvrdému pronásledování. Mnoho kněží bylo zatčeno za své odbojové aktivity, podporu pronásledovaných skupin nebo odmítnutí spolupráce s okupačním režimem. Několik set duchovních bylo uvězněno v koncentračních táborech a desítky byly popraveny.'}
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? '1948-1960: Stalinism and Show Trials' : '1948-1960: Stalinismus a inscenované procesy'}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <p className="text-gray-700">
              {language === 'en'
                ? 'The Communist takeover in 1948 marked the beginning of systematic persecution of religious organizations. The period was characterized by show trials against church leaders, confiscation of church property, and the establishment of state control over religious activities. Many priests were sentenced to long prison terms or forced labor in uranium mines.'
                : 'Komunistický převrat v roce 1948 znamenal začátek systematického pronásledování náboženských organizací. Období se vyznačovalo inscenovanými procesy proti církevním představitelům, konfiskací církevního majetku a zavedením státní kontroly nad náboženskými aktivitami. Mnoho kněží bylo odsouzeno k dlouholetým trestům vězení nebo nucené práci v uranových dolech.'}
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? '1960-1968: Limited Relaxation' : '1960-1968: Omezené uvolnění'}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <p className="text-gray-700">
              {language === 'en'
                ? 'The 1960s saw a gradual relaxation of the most severe forms of persecution, though the state maintained strict control over religious life. Some imprisoned priests were released, but their activities remained heavily restricted and monitored.'
                : '60. léta přinesla postupné uvolnění nejtvrdších forem pronásledování, i když si stát zachoval přísnou kontrolu nad náboženským životem. Někteří uvěznění kněží byli propuštěni, ale jejich činnost zůstala výrazně omezena a sledována.'}
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? '1968-1989: Normalization' : '1968-1989: Normalizace'}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <p className="text-gray-700">
              {language === 'en'
                ? 'After the Soviet invasion in 1968, the period of "normalization" brought renewed restrictions on religious life. While outright violence decreased, the state employed sophisticated methods of surveillance and control, including infiltration of religious communities and manipulation of church leadership.'
                : 'Po sovětské invazi v roce 1968 přineslo období "normalizace" obnovená omezení náboženského života. I když přímé násilí pokleslo, stát používal sofistikované metody sledování a kontroly, včetně infiltrace náboženských společenství a manipulace s církevním vedením.'}
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? 'Legacy and Impact' : 'Odkaz a dopad'}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700">
              {language === 'en'
                ? 'The decades of persecution had a profound impact on religious life in Czechoslovakia that continues to resonate today. While many priests demonstrated extraordinary courage and maintained their faith despite severe repression, the systematic persecution led to a significant decline in religious practice and institutional strength of churches.'
                : 'Desetiletí pronásledování měla hluboký dopad na náboženský život v Československu, který rezonuje dodnes. Zatímco mnoho kněží prokázalo mimořádnou odvahu a udrželo si víru navzdory tvrdým represím, systematické pronásledování vedlo k významnému poklesu náboženské praxe a institucionální síly církví.'}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryPage;