import React from "react";
import AdvancedTouches from "./src/components/AdvancedTouches";
import FeedBackButtons from "./src/components/FeedBackButtons";
import SimpleButtons from "./src/components/SimpleButtons";


export default function App() {
  return (
    <>
      <AdvancedTouches />
      <FeedBackButtons />
      <SimpleButtons />
    </>
  )
}