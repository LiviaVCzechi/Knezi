import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TimelineEvent {
  id: string;
  year: number;
  month?: number;
  day?: number;
  title: {
    en: string;
    cs: string;
  };
  description: {
    en: string;
    cs: string;
  };
  image?: string;
}

interface TimelineSliderProps {
  events: TimelineEvent[];
  startYear: number;
  endYear: number;
}

const TimelineSlider: React.FC<TimelineSliderProps> = ({ events, startYear, endYear }) => {
  const { language, t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [sliderValue, setSliderValue] = useState(startYear);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    
    // Find events closest to this year
    const currentYearEvents = events.filter(event => event.year === newValue);
    if (currentYearEvents.length > 0) {
      setSelectedEvent(currentYearEvents[0]);
    } else {
      setSelectedEvent(null);
    }
  };
  
  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setSliderValue(event.year);
  };
  
  useEffect(() => {
    // On initial load, set to first significant event if available
    if (events.length > 0 && !selectedEvent) {
      setSelectedEvent(events[0]);
      setSliderValue(events[0].year);
    }
  }, [events, selectedEvent]);

  const getEventPositionStyle = (eventYear: number) => {
    const totalYears = endYear - startYear;
    const position = ((eventYear - startYear) / totalYears) * 100;
    return {
      left: `${position}%`
    };
  };
  
  return (
    <div className="mt-8 mb-16">
      <div className="relative">
        {/* Timeline track */}
        <div 
          ref={timelineRef}
          className="h-1 bg-gray-300 my-6 relative"
        >
          {/* Timeline events markers */}
          {events.map((event) => (
            <button
              key={event.id}
              className={`absolute w-4 h-4 rounded-full -ml-2 -mt-1.5 transition-all duration-300 ease-in-out ${
                selectedEvent?.id === event.id 
                  ? 'bg-burgundy-600 scale-125 z-10' 
                  : 'bg-navy-600 hover:bg-navy-800'
              }`}
              style={getEventPositionStyle(event.year)}
              onClick={() => handleEventClick(event)}
              aria-label={event.title[language]}
            />
          ))}
          
          {/* Year labels */}
          <div className="absolute w-full flex justify-between -mt-8">
            <span className="text-xs text-gray-600">{startYear}</span>
            <span className="text-xs text-gray-600">{Math.floor((startYear + endYear) / 2)}</span>
            <span className="text-xs text-gray-600">{endYear}</span>
          </div>
        </div>
        
        {/* Slider input */}
        <input
          type="range"
          min={startYear}
          max={endYear}
          value={sliderValue}
          onChange={handleSliderChange}
          className="absolute top-6 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-burgundy-500 [&::-webkit-slider-thumb]:cursor-pointer"
          aria-label="Timeline slider"
        />
      </div>
      
      {/* Selected event details */}
      <div className="mt-12">
        {selectedEvent ? (
          <div className="p-6 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row gap-6">
              {selectedEvent.image && (
                <div className="md:w-1/3">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title[language]} 
                    className="w-full h-48 md:h-64 object-cover rounded-md"
                  />
                </div>
              )}
              
              <div className={selectedEvent.image ? "md:w-2/3" : "w-full"}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-navy-800">
                    {selectedEvent.title[language]}
                  </h3>
                  <span className="text-burgundy-600 font-medium">
                    {selectedEvent.year}
                    {selectedEvent.month && selectedEvent.day && 
                      ` - ${selectedEvent.day}.${selectedEvent.month}.`}
                  </span>
                </div>
                <p className="text-gray-700">
                  {selectedEvent.description[language]}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 bg-white rounded-lg shadow border-dashed border-2 border-gray-300 text-center text-gray-500">
            {sliderValue} - No specific events recorded for this year. Move the slider to explore events.
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineSlider;