export default function SharingPage() {
  const s = {
    page: { minHeight: "100dvh", background: "#f5f5f7", color: "#0f172a" },
    main: { flex: 1, padding: "24px" },
    title: { fontSize: 22 },
    form: { maxWidth: 760 },
    field: { marginBottom: 14 },
    label: { display: "block", fontSize: 14, fontWeight: 600, marginBottom: 6 },
    input: {
      width: "100%",
      padding: "10px 12px",
      border: "1px solid #fff",
      borderRadius: 8,
      background: "#fff",
      outline: "none",
    },
    textarea: {
      width: "100%",
      padding: "10px 12px",
      border: "1px solid #d1d5db",
      background: "#fff",
    },
  };

  return (
    <div style={s.page} className="ml-16">
      <div style={s.main}>
        <h2 style={s.title}>Detalhes do Arquivo</h2>

        <form style={s.form}>
          <div style={s.field}>
            <label style={s.label}>Nome do arquivo</label>
            <input type="text" style={s.input} />
          </div>

          <div>
            <label style={s.label}>Permissões</label>
            <select style={s.input as React.CSSProperties}>
              <option>Somente eu</option>
              <option>Somente equipe</option>
              <option>Público</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Usuários</label>
            <input type="text" style={s.input} />
          </div>

          <div style={s.field}>
            <label style={s.label}>Grupo(s)</label>
            <input type="text" style={s.input} />
          </div>

          <div style={s.field}>
            <label style={s.label}>Upload</label>
            <input type="file" style={s.input as React.CSSProperties} />
          </div>

          <div style={s.field}>
            <label style={s.label}>Descrição</label>
            <textarea style={s.textarea} />
          </div>

          <div>
            <button type="button">Enviar</button>
            <button type="button">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
