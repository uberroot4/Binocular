import LegendImage from '../../assets/legend.png';

function Help() {
  return (
    <>
      <h2>Test File Changes Help</h2>
      <br />
      <b>Note: This plugin is only compatible with Java projects that use Maven and Spring Boot.</b>
      <br />
      <br />
      <h3>Data</h3>
      <p>
        This plugin is used to visualize the amount of changes of each test file in a project. Every commit that adds, modifies, or deletes
        lines of a test file is considered a change. The plugin identifies test files based on their naming conventions, such as files
        including &quot;/src/test/&quot; in their path but not &quot;/src/test/resources/&quot;.
      </p>
      <h3>Interaction</h3>
      <p>
        Hover over a rectangle to reveal the full class path of the corresponding test file, along with a detailed breakdown of how many
        commits each contributor has made. Hovering over the legend displays the exact number of changes each color represents.
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
      <h3>Tips</h3>
      <p>
        The rectangle size in the visualization represents the file size of each test file, with larger rectangles indicating larger files.
        The color of the rectangles indicates the number of changes made to each file, with darker colors representing more changes. This
        allows for quick identification of files that have undergone significant modifications.
      </p>
      <h4 style={{ textDecoration: 'underline' }}>Legend:</h4>
      <img src={LegendImage} alt={'Test File Changes Legend'} />
      <p>Percentage of file changes in relation to the file with the most changes.</p>
      <p>≤20% - compared to highest number of changes</p>
      <p>≤40% - compared to highest number of changes</p>
      <p>≤60% - compared to highest number of changes</p>
      <p>≤80% - compared to highest number of changes</p>
      <p>≤100% - compared to highest number of changes</p>
    </>
  );
}

export default Help;
