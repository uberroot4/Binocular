import { ChangeEvent } from 'react';

export interface JacocoSettings {
  selectedReport: string;
}

function Settings(props: { settings: JacocoSettings; setSettings: (newSettings: JacocoSettings) => void }) {
  return (
    <>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Report:</span>
          </div>
          <select
            className="select select-bordered select-sm"
            defaultValue={props.settings.selectedReport}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              props.setSettings({
                selectedReport: event.target.value,
              })
            }>
            <option value={'last'}>last</option>
            <option value={'first'}>first</option>
          </select>
        </label>
      </div>
    </>
  );
}

export default Settings;
