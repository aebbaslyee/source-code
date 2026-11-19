const tokens = [
  ['Ink', '#17212b'], ['Blue', '#075985'], ['Gold', '#d6a84a'], ['Green', '#276749'], ['Sand', '#f6f0e5']
];

export function ColorTokens() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(110px,1fr))', gap: 10 }}>
      {tokens.map(([name, value]) => (
        <div key={name} style={{ border: '1px solid #d7dee5', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ height: 44, background: value }} aria-label={`${name} color swatch`} />
          <div style={{ padding: 8, fontSize: 12 }}><strong>{name}</strong><br />{value}</div>
        </div>
      ))}
    </div>
  );
}
