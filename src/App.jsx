import { Navigate, Route, Routes } from 'react-router-dom';
import PortfolioLayout from './layouts/PortfolioLayout.jsx';
import { layoutOptions } from './data/layoutData.js';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/basic" replace />} />
      {layoutOptions.map((layout) => (
        <Route
          key={layout.id}
          path={`/${layout.id}`}
          element={<PortfolioLayout layoutId={layout.id} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/basic" replace />} />
    </Routes>
  );
}
