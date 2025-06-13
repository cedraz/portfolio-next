import * as React from 'react';

// Images
import TITANLogo from '@/assets/journey/titan-logo.png';
import BlueSaudeLogo from '@/assets/journey/blue-saude-logo.png';
import WarlocksLogo from '@/assets/journey/warlocks-logo.jpeg';

// Components
import { Timeline } from '../molecules/Timeline';

// next intl
import { TITANTimelineData } from '../molecules/titanTimelineData';
import { WarlocksTimelineData } from '../molecules/warlocksTimelineData';
import { BlueSaudeTimelineData } from '../molecules/blueSaudeTimelineData';

export function Experience() {
  const { titanTimelineData, titanTime } = TITANTimelineData();
  const { warlocksTimelineData, warlocksTime } = WarlocksTimelineData();
  const { blueSaudeTimelineData, blueSaudeTime } = BlueSaudeTimelineData();

  return (
    <div className="flex flex-col gap-10">
      <Timeline
        company="Blue Saúde"
        time={blueSaudeTime}
        logo={BlueSaudeLogo}
        data={blueSaudeTimelineData}
      />

      <Timeline
        company="Warlocks Tech"
        time={warlocksTime}
        logo={WarlocksLogo}
        data={warlocksTimelineData}
      />

      <Timeline
        company="TITAN"
        time={titanTime}
        logo={TITANLogo}
        data={titanTimelineData}
      />
    </div>
  );
}
