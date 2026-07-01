const student = {
  name: "Ananya Rao",
  squad: "Squad 69",
  classYear: "Class of 2028",
  program: "B.Tech in Computer Science and Engineering",
  specialization: "Software Product Engineering",
  university: "A University",
  initials: "AR",
};

const apps = [
  { title: "Livebooks", icon: "video", notifications: 0 },
  { title: "Dojo", icon: "dojo", notifications: 0 },
  { title: "Mail", icon: "mail", notifications: 0 },
  { title: "Chat", icon: "megaphone", notifications: 0 },
  { title: "Calendar", icon: "calendar", notifications: 0 },
  { title: "Kalvium Support", icon: "support", notifications: 0 },
  { title: "Markers", icon: "book", notifications: 0 },
  { title: "My Internships", icon: "id", notifications: 0 },
  { title: "Placement Drives", icon: "briefcase", notifications: 3 },
  { title: "Showcase", icon: "showcase", notifications: 0 },
  { title: "Attendance Hub", icon: "calculator", notifications: 0 },
  { title: "Attempts Corner", icon: "chart", notifications: 0 },
  { title: "Files", icon: "folder", notifications: 0 },
];

function getStudentDisplayName(profile) {
  return profile.name?.trim() || "Student";
}

function getAppCardClass(app) {
  return "app-card";
}

function getNotificationCount(app) {
  return Number(app.notifications || 0);
}
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="k-logo">K</div>
      <div className="rail-initials">{student.initials}</div>
    </aside>
  );
}

function ProfileCard() {
  const displayName = getStudentDisplayName(student);

  return (
    <section className="profile-card">
      <div className="profile-copy">
        <h1>Hi {displayName}</h1>
        <div className="meta-row">
          <span className="mini-icon user-icon"></span>
          <span>{student.squad}</span>
          <span className="dot-spacer">-</span>
          <span className="mini-icon cap-icon"></span>
          <span>{student.classYear}</span>
        </div>
        <div className="profile-line">
          <span className="mini-icon code-icon"></span>
          <span>
            {student.program}
            <br />({student.specialization})
          </span>
        </div>
        <div className="profile-line">
          <span className="mini-icon building-icon"></span>
          <span>{student.university}</span>
        </div>
      </div>
      <div className="university-card">
        <div className="seal"></div>
        <div className="uni-text">
          A<br />
          <span>UNIVERSITY</span>
        </div>
      </div>
    </section>
  );
}

function DayPanel() {
  return (
    <section className="day-section">
      <div className="section-title-row">
        <h2>My Day</h2>
        <a href="#">
          View Schedule <span>&gt;</span>
        </a>
      </div>
      <div className="empty-day">
        <div className="coffee-cup">
          <div className="steam s1"></div>
          <div className="steam s2"></div>
          <div className="cup-lid"></div>
          <div className="cup-body"></div>
          <div className="cup-sleeve"></div>
        </div>
        <p>Looks like nothing is planned</p>
      </div>
    </section>
  );
}

function AppIcon({ type }) {
  return <span className={`app-icon icon-${type}`}></span>;
}

function AppCard({ app }) {
  const notificationCount = getNotificationCount(app);

  return (
    <div className={getAppCardClass(app)}>
      {notificationCount > 0 && (
        <span className="badge">{notificationCount}</span>
      )}
      <div className="icon-box">
        <AppIcon type={app.icon} />
      </div>
      <div className="app-title">{app.title}</div>
    </div>
  );
}

export default function App() {
  const visibleApps = apps;
  return (
    <div className="shell">
      <Sidebar />
      <main className="content">
        <div className="main-column">
          <ProfileCard />
          <DayPanel />
        </div>
        <aside className="apps-column">
          <h2>My Kalvium Apps</h2>
          <div className="apps-grid">
            {visibleApps.map((app) => (
              <AppCard key={app.title} app={app} />
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
