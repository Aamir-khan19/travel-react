import React, { useState } from 'react';
import DashboardMyItinerariesBuilder from '../components/dashboard_my_itineraries_builder_parent/DashboardMyItinerariesBuilder';
import DashboardMyitinerariesBuilder2 from '../components/dashboard_my_itineraries_builder_parent/DashboardMyItinerariesBuilder2';

function DashboardMyItinerariesBuilderParent() {
  const [currentItineraryBuilderComp, setCurrentItineraryBuilderComp] = useState(1);

  return (
    <>
      {currentItineraryBuilderComp === 1 && (
        <DashboardMyItinerariesBuilder
          setCurrentItineraryBuilderComp={setCurrentItineraryBuilderComp}
        />
      )}

      {currentItineraryBuilderComp === 2 && (
        <DashboardMyitinerariesBuilder2
          setCurrentItineraryBuilderComp={setCurrentItineraryBuilderComp}
        />
      )}
    </>
  );
}

export default DashboardMyItinerariesBuilderParent;
