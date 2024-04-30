
import React from "react";
import Grid from "./Components/Grid";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
      }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>My Grid App</h1>
      <Grid>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
        <Card>Item 4</Card>
        <Card>Item 5</Card>
        <Card>Item 6</Card>
        <Card>Item 7</Card>
        <Card>Item 8</Card>
        <Card>Item 9</Card>
        <Card>Item 10</Card>
        <Card>Item 11</Card>
        <Card>Item 12</Card>
      </Grid>
    </div>
  );
};

export default App;
