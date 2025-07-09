# Excel Technologies Web Hosting Site

A modern, responsive web application for Excel Technologies, offering reliable and affordable web hosting, domain, and digital services. Built with React, TypeScript, Vite, and Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Services](#services)
- [About Excel Technologies](#about-excel-technologies)
- [Policies](#policies)

---

## Overview

Excel Technologies provides cloud shared web hosting with PHP 8.2, MySQL 8.0, free domain and email, and 24/7 support.
The site showcases hosting plans, services, company background, FAQs, and legal policies.

## Features

- **Cloud Shared Hosting** with 99.99% uptime
- Free domain registration and business email
- PHP 8.2 & MySQL 8.0 support
- SSL certificate included
- 24/7 phone & email support
- Responsive, modern UI (Tailwind CSS)
- Easy navigation and contact forms
- Legal pages: Privacy Policy, Refund Policy, Terms & Conditions

## Services

- **Domain Services**: Registration, parking, transfers
- **Web Design & Development**: Responsive, modern websites
- **Business Email & Google Workspace**: Professional email solutions

## Policies

- [Privacy Policy](src/pages/PrivacyPolicy.tsx)
- [Refund Policy](src/pages/RefundPolicy.tsx)
- [Terms & Conditions](src/pages/TermsConditions.tsx)

## Ports

| Frontend | 3000 | .env → VITE_PORT=3000|
| Backend | 3001 | .env → PORT=3001 |

docker-compose up --build
