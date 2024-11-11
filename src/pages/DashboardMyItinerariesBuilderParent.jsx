import React, { useState } from 'react';
import DashboardMyItinerariesBuilder from '../components/dashboard_my_itineraries_builder_parent/DashboardMyItinerariesBuilder';
import DashboardMyitinerariesBuilder2 from '../components/dashboard_my_itineraries_builder_parent/DashboardMyItinerariesBuilder2';

function DashboardMyItinerariesBuilderParent() {
  const [currentItineraryBuilderComp, setCurrentItineraryBuilderComp] = useState(1);

  const [title, setTitle] = useState('');
  const [visibility, setVisibility] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);


  return (
    <>
      {currentItineraryBuilderComp === 1 && (
        <DashboardMyItinerariesBuilder
          setCurrentItineraryBuilderComp={setCurrentItineraryBuilderComp}
          title={title}
          setTitle={setTitle}
          visibility={visibility}
          setVisibility={setVisibility}
          type={type}
          setType={setType}
          duration={duration}
          setDuration={setDuration}
          selectedDestinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          selectedThemes={selectedThemes}
          setSelectedThemes={setSelectedThemes}
        />
      )}

      {currentItineraryBuilderComp === 2 && (
        <DashboardMyitinerariesBuilder2
          setCurrentItineraryBuilderComp={setCurrentItineraryBuilderComp}
          title={title}
          setTitle={setTitle}
          visibility={visibility}
          setVisibility={setVisibility}
          type={type}
          setType={setType}
          duration={duration}
          setDuration={setDuration}
          selectedDestinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          selectedThemes={selectedThemes}
          setSelectedThemes={setSelectedThemes}
        />
      )}
    </>
  );
}

export default DashboardMyItinerariesBuilderParent;
