"use client";

import Link from "next/link";

type BreadcrumbProps = {
  items: {
    label: string;
    href?: string;
  }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      style={{
        fontSize: "14px",
        marginBottom: "2rem",
        color: "#555",
      }}
    >
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ fontWeight: 600 }}>{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span style={{ margin: "0 8px" }}>/</span>
          )}
        </span>
      ))}
    </nav>
  );
}
