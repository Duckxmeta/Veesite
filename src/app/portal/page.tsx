"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WORKBOOKS_DATA, WorkbookItem, WorkbookQuiz, SITE_CONFIG } from "@/data/siteConfig";

const VALID_PASSCODES = ["DOGE", "BOWDAO", "SUBSCRIBER", "VEEMETA", "PACK"];

interface CustomWorkbook {
  id: string;
  slug: string;
  title: string;
  category: "Brand & Authority" | "Environment" | "Execution" | "Storytelling & Narrative";
  version: string;
  fileSize: string;
  pdfUrl: string;
  description: string;
  targetAudience: string;
  isCustom?: boolean;
}

interface NetworkPost {
  id: string;
  name: string;
  handle: string;
  role: string;
  message: string;
  timestamp: string;
}

export default function PortalPage() {
  // Gatekeeping state
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Tab state
  const [activeTab, setActiveTab] = useState<"library" | "networking">("library");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [activeReader, setActiveReader] = useState<WorkbookItem | CustomWorkbook | null>(null);
  const [activeQuizWorkbook, setActiveQuizWorkbook] = useState<WorkbookItem | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Custom Workbooks & Networking state
  const [allWorkbooks, setAllWorkbooks] = useState<(WorkbookItem | CustomWorkbook)[]>(WORKBOOKS_DATA);
  const [networkPosts, setNetworkPosts] = useState<NetworkPost[]>([
    {
      id: "net-1",
      name: "Vee",
      handle: "@veemeta",
      role: "Chief Roar Officer & CSN Host",
      message: "Welcome subscribers and BowDAO members to our central workbook & resource portal! Lock in and let's build together.",
      timestamp: "Oct 6, 2026"
    },
    {
      id: "net-2",
      name: "BowDAO Member #88",
      handle: "@bowdao_official",
      role: "BowDAO Governance",
      message: "Excited to access the updated Authority & Atmosphere workbooks directly on veemeta.xyz!",
      timestamp: "Oct 6, 2026"
    }
  ]);

  // Form for adding new workbook
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<"Brand & Authority" | "Environment" | "Execution" | "Storytelling & Narrative">("Brand & Authority");
  const [newDesc, setNewDesc] = useState("");
  const [newVersion, setNewVersion] = useState("v1.0");
  const [newPdfUrl, setNewPdfUrl] = useState("");
  const [newAudience, setNewAudience] = useState("Subscribers & BowDAO Members");

  // Networking form
  const [postName, setPostName] = useState("");
  const [postHandle, setPostHandle] = useState("");
  const [postRole, setPostRole] = useState("");
  const [postMessage, setPostMessage] = useState("");

  // Load persistence
  useEffect(() => {
    try {
      const storedLock = localStorage.getItem("vee_portal_unlocked");
      if (storedLock === "true") {
        setIsUnlocked(true);
      }

      const storedCustom = localStorage.getItem("vee_custom_workbooks");
      if (storedCustom) {
        const parsed: CustomWorkbook[] = JSON.parse(storedCustom);
        setAllWorkbooks([...WORKBOOKS_DATA, ...parsed]);
      }

      const storedPosts = localStorage.getItem("vee_network_posts");
      if (storedPosts) {
        setNetworkPosts(JSON.parse(storedPosts));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle Passcode Unlock
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = passcode.trim().toUpperCase();
    if (VALID_PASSCODES.includes(cleaned)) {
      setIsUnlocked(true);
      setPasscodeError("");
      try {
        localStorage.setItem("vee_portal_unlocked", "true");
      } catch (e) {
        console.error(e);
      }
    } else {
      setPasscodeError("Invalid passcode. Enter DOGE, BOWDAO, SUBSCRIBER, or VEEMETA.");
    }
  };

  // Handle Lock / Sign Out
  const handleLock = () => {
    setIsUnlocked(false);
    try {
      localStorage.removeItem("vee_portal_unlocked");
    } catch (e) {
      console.error(e);
    }
  };

  // Handle Add Custom Workbook
  const handleAddWorkbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPdfUrl.trim()) return;

    const newItem: CustomWorkbook = {
      id: `custom-${Date.now()}`,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: newTitle.trim(),
      category: newCategory,
      version: newVersion.trim() || "v1.0",
      fileSize: "Custom PDF",
      pdfUrl: newPdfUrl.trim(),
      description: newDesc.trim() || "Custom subscriber workbook.",
      targetAudience: newAudience.trim() || "Subscribers & BowDAO Members",
      isCustom: true
    };

    const updated = [newItem, ...allWorkbooks];
    setAllWorkbooks(updated);

    try {
      const customOnly = updated.filter((item) => (item as CustomWorkbook).isCustom);
      localStorage.setItem("vee_custom_workbooks", JSON.stringify(customOnly));
    } catch (e) {
      console.error(e);
    }

    // Reset form
    setNewTitle("");
    setNewDesc("");
    setNewPdfUrl("");
    setShowAddModal(false);
  };

  // Handle Submit Networking Post
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postName.trim() || !postMessage.trim()) return;

    const newPost: NetworkPost = {
      id: `post-${Date.now()}`,
      name: postName.trim(),
      handle: postHandle.trim().startsWith("@") ? postHandle.trim() : `@${postHandle.trim() || "subscriber"}`,
      role: postRole.trim() || "Subscriber / BowDAO Member",
      message: postMessage.trim(),
      timestamp: "Just now"
    };

    const updated = [newPost, ...networkPosts];
    setNetworkPosts(updated);
    try {
      localStorage.setItem("vee_network_posts", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    setPostName("");
    setPostHandle("");
    setPostRole("");
    setPostMessage("");
  };

  // Filtered workbooks
  const filteredWorkbooks = allWorkbooks.filter((wb) => {
    const matchesCat = selectedCategory === "All" || wb.category === selectedCategory;
    const matchesQuery =
      wb.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wb.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  if (isLoading) {
    return (
      <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
        <p>Loading VIP Portal...</p>
      </div>
    );
  }

  // ==========================================
  // LOCKED GATEKEEPER VIEW
  // ==========================================
  if (!isUnlocked) {
    return (
      <div className="container" style={{ padding: "40px 0 80px", maxWidth: "680px" }}>
        <div
          className="card"
          style={{
            background: "rgba(18, 21, 30, 0.9)",
            border: "1px solid var(--accent-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "40px",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(245, 158, 11, 0.1)"
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              background: "rgba(245, 158, 11, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.8rem"
            }}
          >
            🔒
          </div>

          <h1 style={{ fontSize: "2.1rem", marginBottom: "12px" }}>
            VIP Subscriber &amp; BowDAO Portal
          </h1>

          <p style={{ color: "var(--text-secondary)", marginBottom: "28px", lineHeight: "1.6" }}>
            Welcome! This portal is gatekept for <strong>Subscribers</strong> and <strong>BowDAO Members</strong>. Access all official workbooks, course PDFs, interactive quizzes, and networking features.
          </p>

          <form onSubmit={handleUnlock} style={{ maxWidth: "420px", margin: "0 auto" }}>
            <div style={{ marginBottom: "16px" }}>
              <input
                type="password"
                placeholder="Enter Passcode (e.g. DOGE, BOWDAO)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  fontSize: "1rem",
                  textAlign: "center",
                  letterSpacing: "2px"
                }}
              />
            </div>

            {passcodeError && (
              <p style={{ color: "#f87171", fontSize: "0.9rem", marginBottom: "16px" }}>
                {passcodeError}
              </p>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px 24px",
                borderRadius: "var(--radius-md)",
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                color: "#000",
                fontWeight: 700,
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease"
              }}
            >
              Unlock Access &rarr;
            </button>

            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "20px" }}>
              Passcode hint: <code>DOGE</code>, <code>BOWDAO</code>, <code>SUBSCRIBER</code>, or <code>VEEMETA</code>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // ==========================================
  // UNLOCKED PORTAL MAIN VIEW
  // ==========================================
  return (
    <div className="container" style={{ padding: "30px 0 80px" }}>
      {/* Top Header Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          padding: "20px 24px",
          background: "rgba(18, 21, 30, 0.8)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border-color)",
          marginBottom: "32px"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
            <span
              style={{
                background: "rgba(16, 185, 129, 0.15)",
                color: "#34d399",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                padding: "3px 10px",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.8rem",
                fontWeight: 600
              }}
            >
              🔒 VIP Subscriber Access Active
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              {allWorkbooks.length} Workbooks Loaded
            </span>
          </div>
          <h1 style={{ fontSize: "1.8rem", margin: 0 }}>
            Subscriber &amp; BowDAO Portal
          </h1>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={() => setShowAddModal(true)}
            style={{
              padding: "10px 18px",
              borderRadius: "var(--radius-sm)",
              background: "var(--accent-gold)",
              color: "#000",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem"
            }}
          >
            ➕ Add New Workbook
          </button>
          <button
            onClick={handleLock}
            style={{
              padding: "10px 16px",
              borderRadius: "var(--radius-sm)",
              background: "transparent",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-color)",
              cursor: "pointer",
              fontSize: "0.9rem"
            }}
          >
            🔒 Lock Portal
          </button>
        </div>
      </div>

      {/* Tabs Selection */}
      <div style={{ display: "flex", gap: "16px", borderBottom: "1px solid var(--border-color)", marginBottom: "32px" }}>
        <button
          onClick={() => setActiveTab("library")}
          style={{
            padding: "12px 20px",
            background: "none",
            border: "none",
            borderBottom: activeTab === "library" ? "3px solid var(--accent-gold)" : "3px solid transparent",
            color: activeTab === "library" ? "var(--accent-gold)" : "var(--text-secondary)",
            fontWeight: 700,
            fontSize: "1.05rem",
            cursor: "pointer"
          }}
        >
          📚 Workbooks &amp; Course Library ({allWorkbooks.length})
        </button>

        <button
          onClick={() => setActiveTab("networking")}
          style={{
            padding: "12px 20px",
            background: "none",
            border: "none",
            borderBottom: activeTab === "networking" ? "3px solid var(--accent-gold)" : "3px solid transparent",
            color: activeTab === "networking" ? "var(--accent-gold)" : "var(--text-secondary)",
            fontWeight: 700,
            fontSize: "1.05rem",
            cursor: "pointer"
          }}
        >
          🤝 Subscriber &amp; BowDAO Lounge ({networkPosts.length})
        </button>
      </div>

      {/* ==========================================
          TAB 1: WORKBOOKS LIBRARY
          ========================================== */}
      {activeTab === "library" && (
        <div>
          {/* Controls: Search & Categories */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "28px"
            }}
          >
            {/* Category Pills */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["All", "Brand & Authority", "Environment", "Execution", "Storytelling & Narrative"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "var(--radius-full)",
                    border: selectedCategory === cat ? "1px solid var(--accent-gold)" : "1px solid var(--border-color)",
                    background: selectedCategory === cat ? "rgba(245, 158, 11, 0.15)" : "var(--bg-surface)",
                    color: selectedCategory === cat ? "var(--accent-gold)" : "var(--text-secondary)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search workbooks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: "10px 16px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-color)",
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                minWidth: "240px",
                fontSize: "0.9rem"
              }}
            />
          </div>

          {/* Workbooks Grid */}
          <div className="grid-2" style={{ gap: "24px" }}>
            {filteredWorkbooks.map((wb) => {
              const fullWb = wb as WorkbookItem;
              return (
                <div
                  key={wb.id}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                      <span className="badge">{wb.category}</span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        {wb.version} • {wb.fileSize}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.35rem", marginBottom: "10px" }}>{wb.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "16px" }}>
                      {wb.description}
                    </p>

                    {/* Modules Summary */}
                    {fullWb.modules && fullWb.modules.length > 0 && (
                      <div
                        style={{
                          background: "var(--bg-primary)",
                          padding: "12px 14px",
                          borderRadius: "var(--radius-sm)",
                          marginBottom: "20px",
                          border: "1px solid var(--border-color)"
                        }}
                      >
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", margin: "0 0 6px", textTransform: "uppercase" }}>
                          Course Modules Included ({fullWb.modules.length}):
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                          {fullWb.modules.map((m) => (
                            <li key={m.number} style={{ marginBottom: "4px" }}>
                              <strong>Module {m.number}:</strong> {m.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border-color)"
                    }}
                  >
                    <button
                      onClick={() => setActiveReader(wb)}
                      style={{
                        padding: "8px 14px",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-surface-hover)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border-color)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                    >
                      👁️ Read Online
                    </button>

                    <a
                      href={wb.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "8px 14px",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(16, 185, 129, 0.15)",
                        color: "#34d399",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                    >
                      📥 Direct Download
                    </a>

                    {fullWb.quizzes && fullWb.quizzes.length > 0 && (
                      <button
                        onClick={() => {
                          setActiveQuizWorkbook(fullWb);
                          setQuizAnswers({});
                          setQuizSubmitted(false);
                        }}
                        style={{
                          padding: "8px 14px",
                          borderRadius: "var(--radius-sm)",
                          background: "rgba(245, 158, 11, 0.15)",
                          color: "var(--accent-gold)",
                          border: "1px solid rgba(245, 158, 11, 0.3)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          cursor: "pointer"
                        }}
                      >
                        📝 Take Quiz ({fullWb.quizzes.length})
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SUBSCRIBERS & BOWDAO LOUNGE
          ========================================== */}
      {activeTab === "networking" && (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Intro Box */}
          <div
            className="card"
            style={{
              background: "rgba(18, 21, 30, 0.8)",
              border: "1px solid var(--border-color)",
              marginBottom: "32px"
            }}
          >
            <h2 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>🤝 Subscribers &amp; BowDAO Networking Lounge</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              Share your project updates, Twitter handle, and connect with fellow Doginal Dogs subscribers and BowDAO members.
            </p>
          </div>

          {/* New Post Form */}
          <form
            onSubmit={handleAddPost}
            className="card"
            style={{ marginBottom: "32px", border: "1px solid var(--accent-gold)" }}
          >
            <h3 style={{ fontSize: "1.1rem", marginBottom: "16px" }}>Post an Intro or Network Update</h3>

            <div className="grid-2" style={{ gap: "12px", marginBottom: "12px" }}>
              <input
                type="text"
                placeholder="Your Name (e.g. Vee)"
                value={postName}
                onChange={(e) => setPostName(e.target.value)}
                required
                style={{
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-primary)",
                  color: "var(--text-primary)"
                }}
              />
              <input
                type="text"
                placeholder="X Handle (e.g. @veemeta)"
                value={postHandle}
                onChange={(e) => setPostHandle(e.target.value)}
                style={{
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-primary)",
                  color: "var(--text-primary)"
                }}
              />
            </div>

            <div style={{ marginBottom: "12px" }}>
              <input
                type="text"
                placeholder="Role / Title (e.g. BowDAO Member, CSN Host)"
                value={postRole}
                onChange={(e) => setPostRole(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-primary)",
                  color: "var(--text-primary)"
                }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <textarea
                placeholder="Write your networking message or project update..."
                rows={3}
                value={postMessage}
                onChange={(e) => setPostMessage(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  resize: "vertical"
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "10px 20px",
                borderRadius: "var(--radius-sm)",
                background: "var(--accent-gold)",
                color: "#000",
                fontWeight: 700,
                border: "none",
                cursor: "pointer"
              }}
            >
              Post to Lounge &rarr;
            </button>
          </form>

          {/* Posts Feed */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {networkPosts.map((post) => (
              <div key={post.id} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <div>
                    <strong style={{ color: "var(--text-primary)", fontSize: "1.05rem" }}>{post.name}</strong>{" "}
                    <span style={{ color: "var(--accent-gold)", fontSize: "0.9rem" }}>{post.handle}</span>
                    <p style={{ margin: "2px 0 0", fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.role}</p>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.timestamp}</span>
                </div>
                <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: "1.6" }}>{post.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 1: ONLINE READ WORKBOOK
          ========================================== */}
      {activeReader && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div
            style={{
              background: "var(--bg-surface)",
              width: "100%",
              maxWidth: "900px",
              maxHeight: "90vh",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-color)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid var(--border-color)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <span className="badge">{activeReader.category}</span>
                <h2 style={{ fontSize: "1.3rem", margin: "4px 0 0" }}>{activeReader.title}</h2>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <a
                  href={activeReader.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="descriptive-link"
                  style={{ fontSize: "0.9rem" }}
                >
                  📥 Download PDF
                </a>
                <button
                  onClick={() => setActiveReader(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-secondary)",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    padding: "4px"
                  }}
                >
                  ✖
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "24px", overflowY: "auto", flex: 1 }}>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: "20px" }}>
                {activeReader.description}
              </p>

              {/* Embedded PDF Iframe / Viewer */}
              <div
                style={{
                  width: "100%",
                  height: "450px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--border-color)",
                  marginBottom: "24px",
                  background: "#000"
                }}
              >
                <iframe
                  src={`${activeReader.pdfUrl}#toolbar=0`}
                  title={activeReader.title}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                />
              </div>

              {/* Modules Detail Breakdown */}
              {(activeReader as WorkbookItem).modules && (
                <div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "16px" }}>Detailed Course Modules</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {(activeReader as WorkbookItem).modules.map((m) => (
                      <div
                        key={m.number}
                        style={{
                          background: "var(--bg-primary)",
                          padding: "16px",
                          borderRadius: "var(--radius-md)",
                          border: "1px solid var(--border-color)"
                        }}
                      >
                        <h4 style={{ margin: "0 0 4px", color: "var(--accent-gold)", fontSize: "1rem" }}>
                          Module {m.number}: {m.title}
                        </h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0 0 8px" }}>
                          {m.subtitle}
                        </p>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "8px" }}>
                          {m.summary}
                        </p>
                        <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.85rem", color: "var(--text-primary)" }}>
                          {m.keyTakeaways.map((k, i) => (
                            <li key={i}>{k}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 2: INTERACTIVE QUIZ
          ========================================== */}
      {activeQuizWorkbook && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div
            style={{
              background: "var(--bg-surface)",
              width: "100%",
              maxWidth: "680px",
              maxHeight: "90vh",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-color)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid var(--border-color)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <span className="badge">Interactive Quiz</span>
                <h2 style={{ fontSize: "1.2rem", margin: "4px 0 0" }}>{activeQuizWorkbook.title}</h2>
              </div>
              <button
                onClick={() => setActiveQuizWorkbook(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-secondary)",
                  fontSize: "1.5rem",
                  cursor: "pointer"
                }}
              >
                ✖
              </button>
            </div>

            <div style={{ padding: "24px", overflowY: "auto", flex: 1 }}>
              {activeQuizWorkbook.quizzes.map((quiz, qIdx) => (
                <div
                  key={quiz.id}
                  style={{
                    marginBottom: "24px",
                    padding: "16px",
                    background: "var(--bg-primary)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-color)"
                  }}
                >
                  <p style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "12px" }}>
                    Q{qIdx + 1}: {quiz.question}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {quiz.options.map((opt, oIdx) => {
                      const isSelected = quizAnswers[quiz.id] === oIdx;
                      const isCorrect = quiz.correctIndex === oIdx;

                      let btnStyle: React.CSSProperties = {
                        padding: "10px 14px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-color)",
                        background: "var(--bg-surface)",
                        color: "var(--text-primary)",
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "0.9rem"
                      };

                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle.background = "rgba(16, 185, 129, 0.2)";
                          btnStyle.borderColor = "#34d399";
                        } else if (isSelected && !isCorrect) {
                          btnStyle.background = "rgba(239, 68, 68, 0.2)";
                          btnStyle.borderColor = "#f87171";
                        }
                      } else if (isSelected) {
                        btnStyle.background = "rgba(245, 158, 11, 0.2)";
                        btnStyle.borderColor = "var(--accent-gold)";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={quizSubmitted}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [quiz.id]: oIdx })}
                          style={btnStyle}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div style={{ marginTop: "12px", padding: "10px", background: "rgba(255,255,255,0.05)", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      💡 <strong>Explanation:</strong> {quiz.explanation}
                    </div>
                  )}
                </div>
              ))}

              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < activeQuizWorkbook.quizzes.length}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "var(--radius-sm)",
                    background: Object.keys(quizAnswers).length < activeQuizWorkbook.quizzes.length ? "var(--border-color)" : "var(--accent-gold)",
                    color: Object.keys(quizAnswers).length < activeQuizWorkbook.quizzes.length ? "var(--text-muted)" : "#000",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Submit &amp; View Results
                </button>
              ) : (
                <div style={{ textAlign: "center", padding: "16px", background: "rgba(16, 185, 129, 0.15)", borderRadius: "var(--radius-md)", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                  <h3 style={{ color: "#34d399", margin: "0 0 8px" }}>Quiz Completed! 🎉</h3>
                  <p style={{ margin: 0, color: "var(--text-primary)" }}>
                    You scored {Object.entries(quizAnswers).filter(([qid, ansIdx]) => {
                      const q = activeQuizWorkbook.quizzes.find((qz) => qz.id === qid);
                      return q && q.correctIndex === ansIdx;
                    }).length} out of {activeQuizWorkbook.quizzes.length}!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 3: ADD NEW WORKBOOK (FOR VEE)
          ========================================== */}
      {showAddModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div
            style={{
              background: "var(--bg-surface)",
              width: "100%",
              maxWidth: "580px",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--accent-gold)",
              padding: "24px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.3rem", margin: 0 }}>➕ Add New Workbook / File</h2>
              <button
                onClick={() => setShowAddModal(false)}
                style={{ background: "none", border: "none", color: "var(--text-secondary)", fontSize: "1.4rem", cursor: "pointer" }}
              >
                ✖
              </button>
            </div>

            <form onSubmit={handleAddWorkbook}>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                  Workbook Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Advanced Strategy Workbook"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)"
                  }}
                />
              </div>

              <div className="grid-2" style={{ gap: "12px", marginBottom: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-color)",
                      background: "var(--bg-primary)",
                      color: "var(--text-primary)"
                    }}
                  >
                    <option value="Brand & Authority">Brand &amp; Authority</option>
                    <option value="Environment">Environment</option>
                    <option value="Execution">Execution</option>
                    <option value="Storytelling & Narrative">Storytelling &amp; Narrative</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                    Version
                  </label>
                  <input
                    type="text"
                    value={newVersion}
                    onChange={(e) => setNewVersion(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-color)",
                      background: "var(--bg-primary)",
                      color: "var(--text-primary)"
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                  PDF Document Link / Path *
                </label>
                <input
                  type="text"
                  placeholder="e.g. /workbooks/my-new-file.pdf or https://..."
                  value={newPdfUrl}
                  onChange={(e) => setNewPdfUrl(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)"
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Brief summary of key concepts covered in this workbook..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    resize: "vertical"
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-gold)",
                  color: "#000",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Save &amp; Publish Workbook &rarr;
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
