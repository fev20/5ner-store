import { useState } from 'react';
import ExternalLink from './ExternalLink.jsx';
import Modal from './Modal.jsx';

function ProjectCard({ onOpen, project, variant }) {
  const showImage = variant !== 'minimal';
  return (
    <article className={`project-card ${variant}`}>
      {showImage && <button className="project-image" type="button" onClick={onOpen}><img src={project.image} alt={`${project.title} 미리보기`} /></button>}
      <div className="project-body">
        <h3>{project.title}</h3><p className="summary">{project.summary}</p>
        <ul className="tech-list">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <dl className="project-details">
          <div><dt>역할</dt><dd>{project.role}</dd></div><div><dt>기간</dt><dd>{project.period}</dd></div>
        </dl>
        <div className="card-actions"><button type="button" onClick={onOpen}>자세히 보기</button><a href={project.github} target="_blank" rel="noreferrer">GitHub</a></div>
      </div>
    </article>
  );
}

export default function Projects({ projects, variant }) {
  const [selected, setSelected] = useState(null);
  const heading = variant === 'gallery' ? 'Project Gallery' : '프로젝트';
  const description = variant === 'featured'
    ? '대표 프로젝트를 크게 보여주고, 클릭하면 상세 정보를 확인할 수 있습니다.'
    : '프로젝트 카드 데이터는 src/data/projectData.js에서 수정할 수 있습니다.';
  return (
    <section id="projects" className={`section projects-section ${variant}`}>
      <div className="section-heading"><p className="eyebrow">Projects</p><h2>{heading}</h2><p>{description}</p></div>
      <div className={`project-grid ${variant}`}>{projects.map((project) => <ProjectCard key={project.title} project={project} variant={variant} onOpen={() => setSelected(project)} />)}</div>
      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          <div className="detail-layout">
            <img className="detail-image" src={selected.image} alt={`${selected.title} 상세 이미지`} />
            <div className="detail-content">
              <p>{selected.description}</p>
              <dl className="detail-list">
                <div><dt>기술 스택</dt><dd>{selected.tech.join(', ')}</dd></div>
                <div><dt>담당 역할</dt><dd>{selected.role}</dd></div>
                <div><dt>개발 기간</dt><dd>{selected.period}</dd></div>
                <div><dt>영상</dt><dd>{selected.video || '추후 추가 예정'}</dd></div>
                <div><dt>첨부파일</dt><dd>{selected.attachments?.length ? selected.attachments.join(', ') : '추후 추가 예정'}</dd></div>
              </dl>
              <div className="card-actions"><ExternalLink href={selected.github}>GitHub</ExternalLink><ExternalLink href={selected.demo}>Demo</ExternalLink></div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
