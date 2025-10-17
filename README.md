# React A11y Project – String Calculator

This project was developed as part of the Incubyte Frontend Engineering task.

## 🧩 Overview

A small React + TypeScript application that implements a **String Calculator** using a **Test-Driven Development (TDD)** approach and enhances the UI for **Web Accessibility (a11y)** compliance.

## ⚙️ Features

- **TDD Workflow** – Unit tests written first using Vitest.
- **String Calculator Logic** – Handles comma and newline-separated numbers.
- **Accessibility Improvements**
  - Replaced non-semantic `<div>` elements with semantic `<button>`.
  - Added proper labels for form controls and alt text for images.
  - Announced dynamic calculation results using `aria-live`.
  - Improved color contrast and focus visibility for keyboard users.
- **Verified with Lighthouse** – Accessibility score: **93/100** (WCAG-AA compliant).
- Fully keyboard-navigable and screen-reader-friendly.

## 🚀 Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/gagansinghpreet45/react-a11y-project.git
cd react-a11y-project
npm install
