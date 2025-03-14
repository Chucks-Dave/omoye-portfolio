import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["Trello", "Jira", "Notion", "Asana", "Miro"];

  const backendSkills = ["Zoom", "Slack", "googledrive", "googledocs"];

  const experiences = [
    {
      title: "IT Project/product Manager | Agile Strategist",
      company_name: "Rayzer Business and Technologies | Remote",

      iconBg: "#E6DEDD",
      date: "JUNE 2024 - PRESENT",
      points: [
        "Spearheaded the development and management of Rayzer's digital marketing platforms, driving social media engagement and expanding brand awareness.",
        "Led the website development process, ensuring a seamless and optimized user experience for visitors, aligned with business objectives and customer needs.",
        "Managed marketing campaigns for the Business Growth Accelerator book and Wizebook software, using targeted advertisements to drive sales and increase product visibility.",
        "Oversaw modification and enhancement of the Wizebook inventory management software, improving operational efficiency and user functionality.",
        "Conducted due diligence and qualification of business owners for the platform, ensuring high-quality partnerships and long-term success.",
        "Utilized Jira, Notion, Smartsheet, Canva, GitHub, Google docs for tracking project progress, managing resources and risk, and maintaining timelines, enhancing transparency and productivity across teams.",
      ],
    },
    {
      title: "Project/Product Manager",
      company_name: "Graduate Work Force Solution | Hybrid",

      iconBg: "#383E56",
      date: "SEPTEMBER 2023 - PRESENT",
      points: [
        "Managed the end-to-end process of graduate training programs, ensuring smooth onboarding and matching of graduates with business owners.",
        "Developed and executed digital marketing strategies, increasing brand visibility and engagement through social media, targeted ad campaigns, and email marketing.Led the creation of a user-friendly website, improving user experience (UX) and site functionality for both graduates and business owners.",
        "Coordinated the development of training content and resources, ensuring alignment with industry standards and business needs.",
        "Implemented Agile methodologies to streamline project timelines, optimize resource allocation, and improve team collaboration for continuous improvement",
        "Utilized Trello, Jira, zoom and google Doc to track progress, manage resources, and ensure compliance with project timelines, enhancing team productivity.",
        "Led the creation of a user-friendly website, improving user experience (UX) and site functionality for both graduates and business owners.",
      ],
    },
    {
      title: "Project Manager | agile strategist",
      company_name: "Bible Brains | Contract",

      iconBg: "#383E56",
      date: "JUNE 2023 - AUG 2023",
      points: [
        "Managed the annual Bible study program for teens, overseeing online and physical events with participants nationwide.",
        "Led cross-functional teams in Event Coordination, Content Development, Marketing, and Technical Support to ensure seamless event execution.",
        "Coordinated the creation of Bible study materials and quiz content, ensuring educational alignment and clarity.",
        "Oversaw virtual event logistics, facilitating online participation and coordinating the physical location for Lagos participants.",
        "Directed sponsorship acquisition, securing scholarships and prizes to engage participants and enhance event experience.",
        "  Tools Used:Trello, Google Meet, Zoom, Slack, Google Docs, smartsheet",
      ],
    },
    {
      title: "Senior Technical Support Engineer",
      company_name: "Tek Experts Nigeria | Onsite",

      iconBg: "#E6DEDD",
      date: "FEBRUARY 2021 - MAY 2023",
      points: [
        "Provided advanced technical support for enterprise clients, troubleshooting complex issues with Microsoft products and escalating cases as needed.",
        " Collaborated with global support teams to resolve critical issues promptly,maintaining high service delivery standards and customer satisfaction.",
        "Built strong client relationships through clear communication, regular status updates,and proactive insights, leading to repeat business requests from key accounts.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate Project Manager with expertise in orchestrating
              cross-functional teams, managing complex initiatives, and driving
              innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> My Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> My Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - XYZ University
                  (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="h-full">
              <div className="p-6 rounded-xl  w-full h-full  border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-2 text-gray-300">
                  {experiences.map((experience, key) => (
                    <div key={key} className="space-y-2">
                      <h4 className="font-semibold">{experience.title}</h4>
                      <p>{experience.company_name}</p>
                      <p>{experience.date}</p>

                      {/* Render each point as a bullet in a list */}
                      <ul className="list-disc list-inside space-y-1">
                        {experience.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
