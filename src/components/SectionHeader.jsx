export default function SectionHeader({ tag, tagLight, title, titleHighlight, desc, dark }) {
  return (
    <div className="section-header">
      <span className={`section-tag ${tagLight ? 'tag-light' : ''}`}>{tag}</span>
      <h2 className={`section-title ${dark ? 'title-light' : ''}`}>
        {title} <span>{titleHighlight}</span>
      </h2>
      {desc && (
        <p className={`section-desc ${dark ? 'desc-light' : ''}`}>{desc}</p>
      )}
    </div>
  );
}
