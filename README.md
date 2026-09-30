# Recovered React Portfolio Source

네 개의 GitHub 정적 배포본을 비교해 복원한 단일 React/Vite 소스 프로젝트입니다. 데이터, 레이아웃, 테마 문구와 CSS는 배포 번들에서 추출했으며, 네 도메인의 기본 테마를 한 코드베이스에서 빌드합니다.

## 실행

```bash
npm install
npm run dev
```

개발 서버에서 `#/basic`, `#/project`, `#/minimal`, `#/gallery`를 열 수 있습니다. `?theme=colorful`, `?theme=pastel`, `?theme=dark`, `?theme=digital`로 테마를 시험할 수 있습니다(쿼리는 `#` 앞에 둡니다: `/?theme=pastel#/basic`).

일반 프로덕션 빌드는 `npm run build`이며 `dist/`에 생성됩니다. 네 배포본은 다음 명령으로 만듭니다.

```bash
npm run build:5ation
npm run build:5ge
npm run build:5ner-store
npm run build:5ner-shop
npm run build:all
```

`build:all`의 결과는 `deploy/5ation-shop`, `deploy/5ge-store`, `deploy/5ner-store`, `deploy/5ner-shop`입니다. 각 폴더에 알맞은 `CNAME`과 `DEPLOYMENT-NOTE.txt`가 들어가며 폴더 단독으로 정적 호스팅할 수 있습니다.

## 내용 수정

- 프로필, 소개, 목표, 기술, 연락처: `src/data/profileData.js`
- 프로젝트 추가/수정: `src/data/projectData.js` 배열의 객체를 복사해 수정
- 자격증 추가/수정: `src/data/certificateData.js`; PDF는 `public/certificates/`에 넣고 `pdfLink`를 `/certificates/파일명.pdf`로 지정
- 이미지: `public/images/`에 넣고 데이터 파일의 `/images/...` 경로 수정
- 테마 메타데이터와 도메인 매핑: `src/data/themeData.js`
- 공통 스타일: `src/themes/shared.css`; 테마별 색·배경·예외 스타일: `src/themes/{colorful,pastel,dark,digital}.css`
- 레이아웃 순서·설명·프로젝트 표시 방식: `src/data/layoutData.js`
- 섹션 마크업: `src/components/`; 공통 조립: `src/layouts/PortfolioLayout.jsx`

## 배포

`npm run build:all` 후 각 `deploy/<repository>/` 폴더의 **내용 전체**를 대응 저장소의 GitHub Pages 배포 브랜치/루트에 배포합니다. 기존 저장소는 복구 자료이므로 먼저 별도 브랜치에서 결과를 확인하고, 승인 전 기존 배포 파일을 삭제하거나 강제 푸시하지 마세요.
