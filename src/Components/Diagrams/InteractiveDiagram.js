import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './InteractiveDiagram.css'; // Custom styles for hover, colors

// InteractiveDiagram Component
const InteractiveDiagram = () => {
  // Define blank pages for each section of the diagram
  const ImpactPage = () => <div className="page">Impact Detail Page</div>;
  const LongerTermOutcomesPage = () => <div className="page">Longer-Term Outcomes Detail Page</div>;
  const StrategicAreasPage = () => <div className="page">Strategic Areas Detail Page</div>;
  const StrategiesPage = () => <div className="page">Strategies Detail Page</div>;
  const ShorterTermOutcomePage = () => <div className="page">Shorter-Term Outcome Detail Page</div>;

  return (
    <>
      <div className="interactive-diagram grid">
        {/* Diagram clickable sections */}
        <Link to="/impact">
          <svg className="section impact" width="200" height="100">
            <rect width="200" height="100" fill="#84c5c9" />
            <text x="50" y="50" fill="#ffffff" fontSize="16">Impact</text>
          </svg>
        </Link>

        <Link to="/longer-term-outcomes">
          <svg className="section outcomes" width="250" height="100">
            <rect width="250" height="100" fill="#ffffff" stroke="#84c5c9" strokeWidth="2" />
            <text x="20" y="50" fill="#009e43" fontSize="16">Longer-term Outcomes</text>
          </svg>
        </Link>

        <Link to="/strategic-areas">
          <svg className="section strategic-areas" width="200" height="100">
            <rect width="200" height="100" fill="#84c5c9" />
            <text x="50" y="50" fill="#ffffff" fontSize="16">Strategic Areas</text>
          </svg>
        </Link>

        <Link to="/strategies">
          <svg className="section strategies" width="250" height="100">
            <rect width="250" height="100" fill="#ffffff" stroke="#84c5c9" strokeWidth="2" />
            <text x="20" y="50" fill="#009e43" fontSize="16">Strategies</text>
          </svg>
        </Link>

        <Link to="/shorter-term-outcome">
          <svg className="section short-term-outcome" width="300" height="100">
            <rect width="300" height="100" fill="#84c5c9" />
            <text x="50" y="50" fill="#ffffff" fontSize="16">Shorter-Term Outcome</text>
          </svg>
        </Link>
      </div>

      {/* Routes for each section */}
      <Routes>
        <Route path="/impact" component={ImpactPage} />
        <Route path="/longer-term-outcomes" component={LongerTermOutcomesPage} />
        <Route path="/strategic-areas" component={StrategicAreasPage} />
        <Route path="/strategies" component={StrategiesPage} />
        <Route path="/shorter-term-outcome" component={ShorterTermOutcomePage} />
      </Routes>
    </>
  );
}

export default InteractiveDiagram;
