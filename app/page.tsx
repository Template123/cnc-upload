"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [file, setFile] = useState(null);
  const [material, setMaterial] = useState('otel');
  const [thickness, setThickness] = useState('2');

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const estimatePrice = () => {
    if (!file) return 'Alege un fișier pentru estimare';
    return `Estimare preț: ${(parseFloat(thickness) * 10 + 20).toFixed(2)} lei (orientativ)`;
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Upload Grafică CNC
      </motion.h1>

      <motion.div
        className="max-w-xl mx-auto bg-zinc-900 rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <label className="block mb-4">
          <span className="block mb-1 font-semibold">Fișier DXF / SVG / PDF</span>
          <input
            type="file"
            accept=".dxf,.svg,.pdf"
            onChange={handleFileUpload}
            className="bg-zinc-800 p-2 rounded w-full"
          />
        </label>

        <label className="block mb-4">
          <span className="block mb-1 font-semibold">Material</span>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="bg-zinc-800 p-2 rounded w-full"
          >
            <option value="otel">Oțel</option>
            <option value="inox">Inox</option>
            <option value="aluminiu">Aluminiu</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="block mb-1 font-semibold">Grosime (mm)</span>
          <input
            type="number"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            className="bg-zinc-800 p-2 rounded w-full"
          />
        </label>

        <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 p-2 rounded">
          Trimite Cerere
        </button>

        <p className="mt-6 text-center text-cyan-400 font-mono">
          {estimatePrice()}
        </p>
      </motion.div>
    </div>
  );
}
