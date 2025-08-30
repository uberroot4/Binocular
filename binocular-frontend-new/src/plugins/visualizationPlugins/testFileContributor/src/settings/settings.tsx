export interface TestFileContributorSettings {
  selectedCommitType: string;
}

function Settings(props: { settings: TestFileContributorSettings; setSettings: (newSettings: TestFileContributorSettings) => void }) {
  return (
    <>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Commit type:</span>
          </div>
          <select
            className="select select-bordered select-sm"
            defaultValue={props.settings.selectedCommitType}
            onChange={(event) =>
              props.setSettings({
                selectedCommitType: event.target.value,
              })
            }>
            <option value={'added'}>added</option>
            <option value={'modified'}>modified</option>
            <option value={'deleted'}>deleted</option>
          </select>
        </label>
      </div>
    </>
  );
}

export default Settings;
