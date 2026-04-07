"use client";
import { useState } from "react";

export default function Newsletter() {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");

  return (
    <section style={{ background: "var(--c-purple)", padding: "22px 0" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap items-center gap-5">
          {/* Label */}
          <div
            className="text-white/70 shrink-0 mr-2"
            style={{ fontSize: "8px", letterSpacing: "0.18em", lineHeight: 1.7, fontWeight: 500 }}
          >
            SIGN UP NOW FOR<br />EXCLUSIVE SPECIAL OFFERS:
          </div>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-white/40 focus:outline-none"
            style={{
              minWidth: "140px",
              fontSize: "13px",
              borderBottom: "0.5px solid rgba(255,255,255,0.30)",
              padding: "8px 4px",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) =>
              (e.target.style.borderBottomColor = "rgba(255,255,255,0.75)")
            }
            onBlur={(e) =>
              (e.target.style.borderBottomColor = "rgba(255,255,255,0.30)")
            }
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-white/40 focus:outline-none"
            style={{
              minWidth: "180px",
              fontSize: "13px",
              borderBottom: "0.5px solid rgba(255,255,255,0.30)",
              padding: "8px 4px",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) =>
              (e.target.style.borderBottomColor = "rgba(255,255,255,0.75)")
            }
            onBlur={(e) =>
              (e.target.style.borderBottomColor = "rgba(255,255,255,0.30)")
            }
          />

          {/* CTA */}
          <button
            className="bg-white hover:bg-white/90 transition-colors shrink-0"
            style={{
              color: "var(--c-purple)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              padding: "10px 24px",
            }}
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
