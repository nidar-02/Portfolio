

function Skills() {
  return (
    
    <div className="skills-container">
      <div className="skills">
        <div style={{ backgroundColor: "#232136", color: "white", padding: "20px", borderRadius: "10px" }}>
          <h2 style={{ textDecoration: "underline", fontWeight: "bold" }}>Skills</h2>
          <div className="skill-container">
            <div className="category">
              <h3>Programming languages:C++, Java, Python</h3>
            </div>
            <div className="category">
              <h3>Databases:MySQL</h3>
            </div>
            <div className="category">
              <h3>Web development:Javascript, React, Django</h3>
            </div>
            <div className="category">
              <h3>Computer Networks</h3>
            </div>
            <div className="category">
              <h3>Data Structures and algorithms</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="related-coursework">
        <div style={{ backgroundColor: "#232136", color: "white", padding: "20px", borderRadius: "10px" }}>
          <h2 style={{ textDecoration: "underline", fontWeight: "bold" }}>Related coursework</h2>
         <h3>Operating Systems</h3>
         <h3>Database Management System</h3>
         <h3>Object Oriented Programming</h3>
         <h3>Cybersecurity</h3>
         <h3>Data-Analysis</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
