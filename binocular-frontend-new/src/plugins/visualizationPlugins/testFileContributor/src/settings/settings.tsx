export interface SettingsType {
  selectedCommitType: string;
}

function Settings(props: { settings: SettingsType; setSettings: (newSettings: SettingsType) => void }) {
  return (
    <div className={'text-xs'}>
      <table>
        <tbody>
          <tr>
            <td>Commit type:</td>
            <td>
              <select
                className={'select select-accent select-xs'}
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Settings;
