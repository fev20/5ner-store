import { useState } from 'react';
import ExternalLink from './ExternalLink.jsx';
import Modal from './Modal.jsx';

export default function Certificates({ certificates }) {
  const [selected, setSelected] = useState(null);
  return (
    <section id="certificates" className="section">
      <div className="section-heading"><p className="eyebrow">Certificates</p><h2>자격증</h2><p>카드를 클릭하면 발급 기관, 취득일, PDF 보기/다운로드 영역을 확인할 수 있습니다.</p></div>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={`${certificate.name}-${certificate.date}`}>
            <div><h3>{certificate.name}</h3><p>{certificate.organization}</p><span>{certificate.date}</span></div>
            <button type="button" onClick={() => setSelected(certificate)}>상세 보기</button>
          </article>
        ))}
      </div>
      {selected && (
        <Modal title={selected.name} onClose={() => setSelected(null)}>
          <div className="detail-content certificate-detail">
            <dl className="detail-list"><div><dt>발급 기관</dt><dd>{selected.organization}</dd></div><div><dt>취득일</dt><dd>{selected.date}</dd></div></dl>
            {selected.pdfLink ? <iframe className="pdf-viewer" src={selected.pdfLink} title={`${selected.name} PDF`} /> : <div className="pdf-empty">PDF 파일을 public/certificates 폴더에 추가하세요.</div>}
            <div className="card-actions"><ExternalLink href={selected.pdfLink}>PDF 보기</ExternalLink><ExternalLink href={selected.pdfLink}>다운로드</ExternalLink></div>
          </div>
        </Modal>
      )}
    </section>
  );
}
