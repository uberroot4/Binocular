'use strict';

import ChartComponent from './chart';
import ConfigComponent from './config';
import HelpComponent from './help';
import saga from './sagas';
import reducer from './reducers';

export default {
  id: 'bugfix',
  label: 'Bugfix Visualization',
  saga,
  reducer,
  ChartComponent,
  ConfigComponent,
  HelpComponent,
  usesUniversalSettings: true,
  universalSettingsConfig: {
    hideMergeCommitSettings: true,
    hideMergeDuplicateAuthorsSettings: true,
    hideSprintSettings: true,
    hideGranularitySettings: true,
    hideExcludeCommitSettings: true,
  },
};
