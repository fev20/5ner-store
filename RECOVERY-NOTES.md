# Recovery Notes

## 비교 결과

- 네 저장소 모두 `index.html`, `CNAME`, `DEPLOYMENT-NOTE.txt`, JS/CSS 번들, 동일한 SVG 이미지 4개, `certificates/README.md`로 구성됩니다.
- CSS `index-BwOcq30z.css`는 네 저장소에서 SHA-256까지 동일합니다. 네 테마 스타일이 한 파일에 함께 존재합니다.
- 이미지 4개와 `certificates/README.md`도 바이트 단위로 동일하여 소스 프로젝트에서는 한 번만 관리합니다.
- `index.html`은 참조하는 해시 JS 파일명만 다릅니다. 메타데이터와 CSS 참조는 동일합니다.
- 네 JS 번들의 앱 코드와 데이터는 동일하고, 빌드별 기본 테마 문자열만 `digital`, `colorful`, `pastel`, `dark`로 다릅니다.
- `CNAME`과 배포 안내의 도메인/테마 문구는 저장소별로 다릅니다.

## 번들에서 확실하게 복구한 내용

- 프로필, 소개, 목표, 관심 분야, 강점, 기술 스택, 연락처의 모든 문자열
- 프로젝트 3개와 자격증 3개의 모든 데이터
- 테마 4개의 ID, 이름, 도메인, 설명과 hostname 매핑
- `5ation.store`, `5ateion.store`의 legacy/오타 alias (원본 번들에 존재하므로 유지)
- 레이아웃 4개의 ID, 한국어 이름, 설명, 섹션 순서와 프로젝트 variant
- query theme → hostname → 빌드 기본값 순서. 잘못된 query 값은 hostname/default를 다시 시도하지 않고 `digital`로 fallback
- HashRouter 경로, 헤더/모바일 메뉴, 부드러운 섹션 이동, 프로젝트·자격증 모달, 외부 링크, back-to-top 동작
- 배포 CSS의 색상, 배경, 카드, 버튼, hover, border, shadow, spacing, typography, 반응형 breakpoint

## 재구성 또는 추정한 부분

- 원본 파일명과 컴포넌트 경계는 minified symbol만 남아 있어 역할 기준으로 읽기 좋은 파일로 재구성했습니다.
- 원본 `package.json`은 배포본에 없었습니다. 번들에서 React와 React Router 사용을 확인하고 최소 의존성으로 새 manifest를 작성했습니다.
- 원본은 레이아웃을 단일 조립 컴포넌트에서 데이터로 전환한 것으로 보입니다. 중복 없는 `PortfolioLayout`로 복원했습니다.
- CSS 규칙 내용은 그대로 보존하되 공통 규칙과 `.theme-*` 규칙을 파일로 분리했습니다. 이 분리는 유지보수를 위한 재구성입니다.

## 복구하지 못한 부분과 알려진 차이

- 소스맵, 원래 주석, 정확한 원본 파일명/코딩 스타일, 정확한 package 버전은 배포본에 없어 복구할 수 없습니다.
- 실제 자격증 PDF는 네 저장소에 없고 안내 README만 있습니다.
- 프로필/프로젝트 값은 배포본 자체가 예시 데이터입니다. 사실 정보로 임의 교체하지 않았습니다.
- 새 빌드는 도구 버전과 모듈 분할에 따라 번들 해시와 바이트 배열이 기존과 다르지만, 앱 데이터·DOM 역할·스타일 규칙·상호작용은 복원 대상과 같도록 구성했습니다.
