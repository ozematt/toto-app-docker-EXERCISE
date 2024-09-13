"use client";
import { App } from "./ui/components/app";
import theme from "./ui/components/mui/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ShowNewTaskProvider } from "./utils/contextAPI";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ShowNewTaskProvider>
          <App />
        </ShowNewTaskProvider>
      </ThemeProvider>
    </>
  );
}
