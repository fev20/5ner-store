export const layoutOptions = [
  {
    id: 'basic',
    label: 'Basic',
    koreanLabel: '기본형',
    description: '처음 포트폴리오를 만드는 사람에게 좋은 표준 구성',
    sections: ['home', 'about', 'skills', 'projects', 'certificates', 'contact'],
    projectVariant: 'standard',
  },
  {
    id: 'project',
    label: 'Project',
    koreanLabel: '프로젝트 중심형',
    description: '대표 프로젝트와 개발 경험을 먼저 보여주는 구성',
    sections: ['home', 'projects', 'skills', 'about', 'certificates', 'contact'],
    projectVariant: 'featured',
  },
  {
    id: 'minimal',
    label: 'Minimal',
    koreanLabel: '미니멀형',
    description: '짧은 자기소개와 핵심 정보에 집중하는 단순 구성',
    sections: ['home', 'about', 'projects', 'certificates', 'contact'],
    projectVariant: 'minimal',
  },
  {
    id: 'gallery',
    label: 'Gallery',
    koreanLabel: '카드/갤러리형',
    description: '이미지와 hover 효과로 활동을 풍부하게 보여주는 구성',
    sections: ['home', 'about', 'skills', 'projects', 'certificates', 'contact'],
    projectVariant: 'gallery',
  },
];

export const sectionLabels = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  certificates: 'Certificates',
  contact: 'Contact',
};
