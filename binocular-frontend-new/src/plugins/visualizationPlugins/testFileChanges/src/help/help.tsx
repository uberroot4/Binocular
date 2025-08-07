import LegendImage from '../../assets/legend.png';

function Help() {
  return (
    <>
      <h2>Test File Changes Help</h2>
      <h3>Data</h3>
      <b>Note: This plugin is only compatible with Java projects that use Maven and Spring Boot.</b>
      <br />
      <br />
      <p>
        This plugin is designed to visualize the number of changes made to each test file in a specified time range. It provides a clear and
        interactive view of how often a file was changed, helping developers track modifications and improvements in testing coverage over
        time.
        <br />
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
