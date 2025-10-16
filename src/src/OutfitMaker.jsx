import { useState } from "react";
import { motion } from "framer-motion";

export default function OutfitMaker() {
  const [style, setStyle] = useState("");
  const [fabric, setFabric] = useState("");
  const [color, setColor] = useState("");
  const [neckline, setNeckline] = useState("");
  const [sleeves, setSleeves] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");

  const handleGenerate = () => {
    const parts = [];
    if (color) parts.push(color);
    if (fabric) parts.push(fabric);
    if (style) parts.push(style + " dress");

    const prompt = `A ${parts.join(" ")}${
      parts.length ? "" : "dress"
    } with ${neckline || "your choice of"} neckline and ${
      sleeves || "your choice of"
    } sleeves, high-fashion editorial lighting, full body.`;

    setGeneratedPrompt(prompt);
  };

  const label = { display: "block", marginTop: 12, fontWeight: 600 };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 20,
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>AI Outfit Maker ✨</h1>

      <label style={label}>Style</label>
      <select value={style} onChange={(e) => setStyle(e.target.value)}>
        <option value="">Select style</option>
        <option value="mini">Mini</option>
        <option value="ball gown">Ball Gown</option>
        <option value="cocktail">Cocktail</option>
        <option value="slip">Slip</option>
        <option value="haute couture">Haute Couture</option>
      </select>

      <label style={label}>Fabric</label>
      <select value={fabric} onChange={(e) => setFabric(e.target.value)}>
        <option value="">Select fabric</option>
        <option value="silk">Silk</option>
        <option value="velvet">Velvet</option>
        <option value="leather">Leather</option>
        <option value="cotton">Cotton</option>
        <option value="satin">Satin</option>
      </select>

      <label style={label}>Color</label>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Select color</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="gold">Gold</option>
      </select>

      <label style={label}>Neckline</label>
      <select value={neckline} onChange={(e) => setNeckline(e.target.value)}>
        <option value="">Select neckline</option>
        <option value="V-neck">V-neck</option>
        <option value="plunging">Plunging</option>
        <option value="halter">Halter</option>
        <option value="scoop">Scoop</option>
        <option value="off-the-shoulder">Off the Shoulder</option>
      </select>

      <label style={label}>Sleeves</label>
      <select value={sleeves} onChange={(e) => setSleeves(e.target.value)}>
        <option value="">Select sleeves</option>
        <option value="no">No sleeves</option>
        <option value="short">Short</option>
        <option value="long">Long</option>
        <option value="puff">Puff sleeves</option>
        <option value="bell">Bell sleeves</option>
      </select>

      <div style={{ marginTop: 16 }}>
        <button onClick={handleGenerate}>Generate Outfit Prompt</button>
      </div>

      {generatedPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginTop: 16 }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Generated Prompt:</h2>
          <p>{generatedPrompt}</p>
          <p style={{ fontSize: 12, color: "#555" }}>
            (Copy this prompt into an AI image generator like DALL·E or
            Midjourney)
          </p>
        </motion.div>
      )}
    </div>
  );
}
