// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
// In memory fake indexedDB
import "fake-indexeddb/auto";

// Initialize database for each test
import { initDB } from "react-indexed-db";
import { _DBConfig } from "./history/_DBConfig";
initDB(_DBConfig);
