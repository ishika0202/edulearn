"use client"

import { Button } from "./ui/button";
import React, { useRef } from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FileUpload() {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log("Selected file:", file);
        }
    }
  return (
    <>
          <div>
              
              <Button onClick={handleButtonClick} className="text-lg p-10 px-8 h-14 bg-blue-500 hover:bg-blue-400 cursor-pointer" variant="default">
                  <FontAwesomeIcon icon={faUpload} className="mr-2 text-2xl" />
                  Upload PDF to Start</Button>
              <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
              />
      </div>
    </>
  );
}

