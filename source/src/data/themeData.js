export const themes = {
  colorful: {
    id: 'theme-colorful', key: 'colorful', label: 'Colorful Pop', domain: '5ge.store',
    description: '원색, 여름, 예술, 창의성을 강조한 팝아트 포트폴리오',
  },
  pastel: {
    id: 'theme-pastel', key: 'pastel', label: 'Soft Pastel', domain: '5ner.store',
    description: '민트, 하늘색, 라벤더, 연분홍 중심의 따뜻한 감성 포트폴리오',
  },
  dark: {
    id: 'theme-dark', key: 'dark', label: 'Dark Tone', domain: '5ner.shop',
    description: '차분하고 전문적인 다크 톤 포트폴리오',
  },
  digital: {
    id: 'theme-digital', key: 'digital', label: 'Digital Cyber', domain: '5ation.shop',
    description: '터미널, 해커, 디지털 미래감을 살린 포트폴리오',
  },
};

export const hostnameThemes = {
  '5ge.store': 'colorful',
  '5ner.store': 'pastel',
  '5ner.shop': 'dark',
  '5ation.shop': 'digital',
  // These misspelled/legacy aliases are present in every recovered bundle.
  '5ation.store': 'digital',
  '5ateion.store': 'digital',
};
