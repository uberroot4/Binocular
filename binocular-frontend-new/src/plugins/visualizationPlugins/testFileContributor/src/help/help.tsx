function Help() {
  return (
    <>
      <h2>Test File Contributor Help</h2>
      <br />
      <b>Note: This plugin is only compatible with Java projects that use Maven and Spring Boot.</b>
      <br />
      <br />
      <h3>Data</h3>
      <p>
        This plugin is used to visualize the contributors of test files in a project. Every commit that adds, modifies, or deletes lines of
        a test file is considered a contribution. The plugin identifies test files based on their naming conventions, such as files
        including &quot;/src/test/&quot; in their path but not &quot;/src/test/resources/&quot;.
      </p>
      <h3>Interaction</h3>
      <p>Hover over a slice to see the contributor&#39;s name and the number of contributions they made to test files.</p>
      <h3>Settings</h3>
      <p>
        Use the settings to change the type of commits that are considered contributions.
        <ul>
          <li>
            <b>added</b>: Only commits that add lines to test files are considered contributions.
          </li>
          <li>
            <b>modified</b>: Only commits that modify lines in test files are considered contributions.
          </li>
          <li>
            <b>deleted</b>: Only commits that delete lines from test files are considered contributions.
          </li>
        </ul>
      </p>
      <h3>Parameters</h3>
      Parameters that affect the data shown in this plugin:
      <p>
        <ul>
          <li>
            <b>Date Range</b>: Only commits within the selected date range are considered.
          </li>
          <li>
            <b>General</b>: Exclude merge commits.
          </li>
          <li>
            <b>Authors</b>: Only commits from selected authors are considered.
          </li>
          <li>
            <b>File Tree</b>: Only commits that affect selected files or directories are considered.
          </li>
        </ul>
      </p>
    </>
  );
}

export default Help;
