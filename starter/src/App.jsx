import { useState, useEffect } from "react";

const API_URL = "https://jobs-api-l3e2.onrender.com/api/jobs";
// TODO: Replace this with your hosted API URL when ready
function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Fetch jobs data from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
      
        setJobs(Array.isArray(data) ? data : data.jobs || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

   // TODO: Write your filter logic here
  // Hint: Only show a job if ALL active filters appear in its tags
  // A job's tags = [...job.languages, ...job.tools, job.role, job.level]
  const visibleJobs = jobs.filter((job) => {
    // Check if job matches ALL active filters
    const tags = [
      job.role,
      job.level,
      ...(job.languages || []),
      ...(job.tools || []),
    ].filter(Boolean);
    // If no filters are active, show all jobs
    const matchFilters =
      filters.length === 0 || filters.every((f) => tags.includes(f));

    const matchSearch =
      (job.position || "").toLowerCase().includes(search.toLowerCase()) ||
      (job.company || "").toLowerCase().includes(search.toLowerCase());

    return matchFilters && matchSearch;
  });
    // TODO: Write handlers for adding and removing filter tags
  function addFilter(tag) {
    if (!filters.includes(tag)) setFilters([...filters, tag]);
  }

  function removeFilter(tag) {
    setFilters(filters.filter((f) => f !== tag));
  }

  function clearFilters() {
    setFilters([]);
  }

  if (error) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Connection Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <header className="hero">
        <h1>
          Find Your <span className="accent">Next Role In The Tech Space</span>
        </h1>
        <p style={{ marginTop: 12, color: "rgba(250,247,242,.6)" }}>
          Discover top developer opportunities
        </p>
      </header>

      <main style={{ maxWidth: "1200px", margin: "auto", padding: "48px 16px 100px" }}>
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginBottom: 20,
            padding: 10,
            borderRadius: 8,
            border: "1px solid var(--sand-light)",
            width: "100%",
          }}
        />

        {filters.length > 0 && (
          <div className="filter-bar">
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {filters.map((f) => (
                <div key={f} className="filter-chip">
                  <span style={{ padding: "6px 10px" }}>{f}</span>
                  <button className="filter-remove" onClick={() => removeFilter(f)}>
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={clearFilters}
              style={{ marginTop: 10, fontWeight: 600, color: "var(--terra)" }}
            >
              Clear
            </button>
          </div>
        )}

        {loading ? (
          <p>Loading jobs...</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {visibleJobs.map((job) => (
              <div
                key={job.id}
                className="job-card"
                style={{
                  borderLeft: job.featured
                    ? "3px solid var(--terra)"
                    : "1px solid var(--sand-light)",
                }}
              >
                <div style={{ display: "flex", justifySelf: "space-between", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ color: "var(--brown-light)", fontSize: 12, fontWeight: 600 }}>
                      {job.company}
                    </p>
                    <h2
                      style={{
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        fontSize: 19,
                        color: "var(--espresso)",
                      }}
                    >
                      {job.position}
                    </h2>
                    <p style={{ color: "var(--sand)", fontSize: 12 }}>
                      {job.postedAt} • {job.contract} • {job.location}
                    </p>
                  </div>
                  <button className="apply-btn">Apply </button>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                  {[job.role, job.level, ...(job.languages || []), ...(job.tools || [])]
                    .filter(Boolean)
                    .map((tag) => (
                      <button key={tag} onClick={() => addFilter(tag)} className="tag t-lang">
                        {tag}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;