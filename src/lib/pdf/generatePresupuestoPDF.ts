import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type Partida = { concepto: string; unidad: string; cantidad: number; precio_unitario: number; total: number };
type Capitulo = { nombre: string; partidas: Partida[] };

interface PresupuestoPDFData {
  numero: string;
  fecha: string;
  empresa: { nombre: string; cif?: string; direccion?: string; telefono?: string; email?: string; iban?: string };
  cliente: { nombre: string; direccion?: string; nif_cif?: string };
  capitulos: Capitulo[];
  subtotal: number;
  iva_porcentaje: number;
  iva_importe: number;
  total: number;
  notas_cliente?: string;
}

export function generatePresupuestoPDF(data: PresupuestoPDFData) {
  const doc = new jsPDF();
  const orange = [249, 115, 22];
  const dark = [30, 58, 95];

  doc.setFillColor(orange[0], orange[1], orange[2]);
  doc.rect(0, 0, 210, 8, "F");

  doc.setFontSize(22);
  doc.setTextColor(dark[0], dark[1], dark[2]);
  doc.text(data.empresa.nombre, 14, 25);

  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  let y = 32;
  if (data.empresa.cif) { doc.text(`CIF: ${data.empresa.cif}`, 14, y); y += 5; }
  if (data.empresa.direccion) { doc.text(data.empresa.direccion, 14, y); y += 5; }
  if (data.empresa.telefono) { doc.text(`Tel: ${data.empresa.telefono}`, 14, y); y += 5; }
  if (data.empresa.email) { doc.text(data.empresa.email, 14, y); }

  doc.setFontSize(16);
  doc.setTextColor(orange[0], orange[1], orange[2]);
  doc.text(`PRESUPUESTO ${data.numero}`, 196, 20, { align: "right" });

  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(`Fecha: ${new Date(data.fecha).toLocaleDateString("es-ES")}`, 196, 28, { align: "right" });

  const clienteY = 55;
  doc.setFillColor(249, 250, 251);
  doc.rect(14, clienteY - 5, 182, 22, "F");
  doc.setFontSize(10);
  doc.setTextColor(dark[0], dark[1], dark[2]);
  doc.text("CLIENTE", 18, clienteY + 1);
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text(data.cliente.nombre, 18, clienteY + 7);
  if (data.cliente.direccion) doc.text(data.cliente.direccion, 18, clienteY + 12);
  if (data.cliente.nif_cif) doc.text(`NIF/CIF: ${data.cliente.nif_cif}`, 130, clienteY + 7);

  let tableY = clienteY + 28;

  for (const cap of data.capitulos) {
    doc.setFontSize(11);
    doc.setTextColor(dark[0], dark[1], dark[2]);
    doc.text(cap.nombre, 14, tableY);
    tableY += 3;

    const rows = cap.partidas.map((p) => [
      p.concepto,
      p.unidad,
      p.cantidad.toLocaleString("es-ES"),
      p.precio_unitario.toLocaleString("es-ES", { minimumFractionDigits: 2 }) + "€",
      p.total.toLocaleString("es-ES", { minimumFractionDigits: 2 }) + "€",
    ]);

    autoTable(doc, {
      startY: tableY,
      head: [["Concepto", "Ud.", "Cant.", "Precio", "Total"]],
      body: rows,
      theme: "plain",
      headStyles: { fillColor: [249, 250, 251], textColor: [100, 100, 100], fontSize: 8, fontStyle: "bold" },
      bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
      columnStyles: {
        0: { cellWidth: 80 },
        1: { cellWidth: 15, halign: "center" },
        2: { cellWidth: 20, halign: "right" },
        3: { cellWidth: 30, halign: "right" },
        4: { cellWidth: 30, halign: "right", fontStyle: "bold" },
      },
      margin: { left: 14, right: 14 },
    });

    tableY = (doc as any).lastAutoTable.finalY + 8;
  }

  const totalsY = tableY + 5;
  doc.setDrawColor(229, 231, 235);
  doc.line(120, totalsY - 3, 196, totalsY - 3);

  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("Subtotal:", 130, totalsY + 2);
  doc.setTextColor(dark[0], dark[1], dark[2]);
  doc.text(data.subtotal.toLocaleString("es-ES", { minimumFractionDigits: 2 }) + "€", 196, totalsY + 2, { align: "right" });

  doc.setTextColor(100, 100, 100);
  doc.text(`IVA (${data.iva_porcentaje}%):`, 130, totalsY + 8);
  doc.setTextColor(dark[0], dark[1], dark[2]);
  doc.text(data.iva_importe.toLocaleString("es-ES", { minimumFractionDigits: 2 }) + "€", 196, totalsY + 8, { align: "right" });

  doc.line(120, totalsY + 11, 196, totalsY + 11);
  doc.setFontSize(12);
  doc.setTextColor(orange[0], orange[1], orange[2]);
  doc.text("TOTAL:", 130, totalsY + 18);
  doc.text(data.total.toLocaleString("es-ES", { minimumFractionDigits: 2 }) + "€", 196, totalsY + 18, { align: "right" });

  if (data.notas_cliente) {
    const notasY = totalsY + 30;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text("Notas y condiciones:", 14, notasY);
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    const lines = doc.splitTextToSize(data.notas_cliente, 180);
    doc.text(lines, 14, notasY + 5);
  }

  if (data.empresa.iban) {
    const ibanY = 275;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Datos bancarios: ${data.empresa.iban}`, 14, ibanY);
  }

  doc.setFontSize(7);
  doc.setTextColor(180, 180, 180);
  doc.text("Generado con ObraBox — obrabox.es", 105, 290, { align: "center" });

  return doc;
}
