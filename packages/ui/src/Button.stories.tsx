import React, { useState } from "react";
import { Button } from "./Button";

export default {
  title: "My Button Story",
};

export const MyButton = () => {
  const [state, setstate] = useState(0);

  return <Button onClick={() => setstate(state + 1)}>{state.toString()}</Button>;
};
