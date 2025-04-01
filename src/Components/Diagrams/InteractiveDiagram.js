import React from "react";

const CedilGrid = () => {
  return (
    <div className="flex justify-center p-4 bg-gray-100 md:p-8">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
        {/* Header */}
        <div className="p-4 text-lg font-bold text-center text-white bg-blue-900 md:col-span-3">
          CENTER FOR DEVELOPMENT INNOVATIONS AND LEADERSHIP (CEDIL)-GLOBAL
          <div className="text-sm font-normal">
            Enhancing Global South Innovations, Health, Gender and Justice
            Systems and Responsive Development Financing for Sustainable Social
            Change
          </div>
        </div>

        {/* Impact */}
        <div className="p-4 font-bold text-center text-black bg-yellow-400 md:col-span-3">
          Global South Organizations, Coalitions and Institutional Systems
          thrive and build power to advance responsive dev’t innovations,
          health, gender and climate justice agendas that are systemic,
          transformative, and achieving locally-led change.
        </div>

        {/* Longer-term Outcomes */}
        <div className="flex flex-col gap-4 md:col-span-3 md:flex-row">
          <div className="flex-1 p-4 font-bold text-center text-white bg-blue-600">
            Strengthened and resourced nonprofits, Dev’t systems, climate
            coalitions, alliances, universities and leaders championing social
            change in the Global South.
          </div>
          <div className="flex-1 p-4 font-bold text-center text-white bg-blue-600">
            Robust and Global South responsive Dev’t innovations and a funding
            ecosystem that shift among gov’t, bilateral and institutional
            development partners.
          </div>
          <div className="flex-1 p-4 font-bold text-center text-white bg-blue-600">
            A self-Sustaining CEDIL Global that meets its mandate -
            programmatically & operationally.
          </div>
        </div>

        {/* Strategic Areas */}
        <div className="p-4 font-bold text-center text-white bg-green-600 md:col-span-3">
          Strategic Areas
        </div>

        <div className="flex flex-col gap-4 md:col-span-3 md:flex-row">
          <div className="flex-1 p-4 bg-white border">
            <h2 className="font-bold">
              Enhancing Gender & Health Justice for All in Africa
            </h2>
            <ul className="pl-5 text-sm list-disc">
              <li>
                Advancing Gender Equitable Economies, Menstrual Health and
                Gendered Financing for Climate Justice
              </li>
              <li>
                Develop & implement an Afri-Institutional Capacity Dev’t- IQC-
                Platform & Fellowships
              </li>
              <li>
                Re-imagining Innovative response to Anti-corruption & Illicit
                Financial Flows
              </li>
            </ul>
          </div>

          <div className="flex-1 p-4 bg-white border">
            <h2 className="font-bold">Financing Innovations 4 Dev’t</h2>
            <ul className="pl-5 text-sm list-disc">
              <li>
                Africa Cities Innovation & Employment Hub Program Fellowship
              </li>
              <li>Facilitate Locally Led Dev’t Model</li>
              <li>
                Run a Certified Dev’t Media Channel to highlight Private Sector
                Investments
              </li>
              <li>Innovate a Flexible Dev’t Bank for Africa</li>
            </ul>
          </div>

          <div className="flex-1 p-4 bg-white border">
            <h2 className="font-bold">Enhancing Leadership for Global Dev’t</h2>
            <ul className="pl-5 text-sm list-disc">
              <li>Construct a CEDIL Global Center</li>
              <li>Establish & run a Global Leadership Hub</li>
              <li>
                Run a Certified Nonprofit Executive & Board L/Ship Fellowship &
                Technical Assistance
              </li>
            </ul>
          </div>
        </div>

        {/* Shorter-term Outcome */}
        <div className="p-4 font-bold text-center text-black bg-yellow-400 md:col-span-3">
          Enhanced research, development funding access, and Dev’t systems
          leadership capacity and collaboration between nonprofits, public
          leaders, Africa regional bodies, and Dev’t partners
        </div>

        {/* Strategies */}
        <div className="p-4 font-bold text-center text-white bg-green-600 md:col-span-3">
          Strategies
        </div>

        <div className="flex flex-col gap-4 md:col-span-3 md:flex-row">
          <div className="flex-1 p-4 bg-white border">
            <h2 className="font-bold">
              Dev’t Research & Evidence Generation Hub
            </h2>
            <ul className="pl-5 text-sm list-disc">
              <li>
                Develop & Implement a Global South (GS)-Global North(GN)Action
                Research Platform.
              </li>
              <li>
                Facilitate/undertake Learning and Evaluations on Systems
                Responsive Development Systems Leadership.
              </li>
            </ul>
          </div>

          <div className="flex-1 p-4 bg-white border">
            <h2 className="font-bold">
              Re-Imagining Innovations Dev’t Funding & Systems
            </h2>
            <ul className="pl-5 text-sm list-disc">
              <li>Run a Funding Innovation Hub</li>
              <li>Develop Africa Dev’t & Financing Partnerships</li>
            </ul>
          </div>

          <div className="flex-1 p-4 bg-white border">
            <h2 className="font-bold">
              Systems Leadership Strengthening Institute
            </h2>
            <ul className="pl-5 text-sm list-disc">
              <li>
                Co-create & run an Afri-Dev’t Systems Institute for Leadership
                (LDP)
              </li>
              <li>
                Work with Africa CDC to develop and implement an adaptive
                systems Leadership Navigating Strategy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CedilGrid;
