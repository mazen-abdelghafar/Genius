"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("dc015323-3c50-42ce-b28b-6362521914d4");
  }, []);

  return null;
};

export default CrispChat;
