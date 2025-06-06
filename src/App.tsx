
import { useState } from "react";
import { HalamanUtama } from "./HalamanUtama";
import { HalamanTambah } from "./HalamanTambah";
import { HalamanRekap } from "./HalamanRekap";

export default function App() {
  const [page, setPage] = useState("utama");
  return (
    <div style={{ padding: 20 }}>
      <h1>📦 Inventaris Sekolah</h1>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setPage("utama")}>📋 Daftar</button>{" "}
        <button onClick={() => setPage("tambah")}>➕ Tambah</button>{" "}
        <button onClick={() => setPage("rekap")}>📊 Rekap</button>
      </div>
      {page === "utama" && <HalamanUtama />}
      {page === "tambah" && <HalamanTambah />}
      {page === "rekap" && <HalamanRekap />}
    </div>
  );
}
