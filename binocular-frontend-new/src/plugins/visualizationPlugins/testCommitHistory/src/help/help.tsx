function Help() {
  return (
    <>
      <h2>Test Commit History Help</h2>
      <br />
      <b>Note: This plugin is only compatible with Java projects that use Maven and Spring Boot.</b>
      <br />
      <br />
      <h3>Data</h3>
      <p>
        This plugin is designed to visualize the number of commits that include test classes within a specified time range. The plugin
        identifies test files based on their naming conventions, such as files including &quot;/src/test/&quot; in their path but not
        &quot;/src/test/resources/&quot;.
      </p>
      <h3>Interaction</h3>
      <p>
        Hover over a rectangle to see the contributor&#39;s name and the number of commits they made to test files. Zoom in on time range by
        dragging and dropping the mouse along the x-axis.
      </p>
      <h3>Settings</h3>
      <p>For this visualization plugin there are no additional settings available.</p>
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
