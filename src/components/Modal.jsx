export default function Modal({ children, onClose, title }) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <article className="modal-panel" role="dialog" aria-modal="true" aria-label={title} onClick={(event) => event.stopPropagation()}>
        <div className="modal-header"><h3>{title}</h3><button type="button" onClick={onClose} aria-label="닫기">×</button></div>
        {children}
      </article>
    </div>
  );
}
