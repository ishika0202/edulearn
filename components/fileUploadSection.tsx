"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";

export default function UploadedFile() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) setUploadedFile(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };
  const handleRemoveFile = () => {
    setUploadedFile(null);
    // if (fileInputRef.current) {
    //   fileInputRef.current.value = "";
    // }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={openFileDialog}
      className={` mx-auto my-8 w-200 cursor-pointer p-6 flex flex-col items-center justify-center border-4 transition-all duration-300 text-center space-y-4 rounded-lg
        ${uploadedFile ? "bg-green-100 border-dotted" : "bg-gray-100 border-black hover:border-dotted"}`}
    >
      <FontAwesomeIcon
        icon={uploadedFile ? faCheck : faCloudArrowUp}
        className={`text-6xl`}
      />

      <p className="text-gray-600 text-2xl font-semibold">Upload your PDF</p>
      <p className="text-gray-400 font-medium">
        Drag and drop or click to browse
      </p>

      <button
        onClick={openFileDialog}
        className="cursor-pointer px-4 py-2 text-black bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white transition-colors"
      >
        Select File
      </button>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileSelect}
        ref={fileInputRef}
        className="hidden"
      />

      {uploadedFile && (
        <div className="m-4 flex items-center gap-2 text-green-600 font-medium">
          <span>{uploadedFile.name}</span>
          <FontAwesomeIcon
            onClick={handleRemoveFile}
            className="text-red-500"
            icon={faTrash}
          />
        </div>
      )}
    </div>
  );
}
