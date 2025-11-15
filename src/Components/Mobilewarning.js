import './MobileWarning.css';

const MobileWarning = () => {
  return (
    <div className="mobile-warning">
      <div className="warning-content">
        <h2>📱 Desktop Only</h2>
        <p>This weather app is optimized for desktop browsers.</p>
        <p>Please access it from a computer for the full experience.</p>
      </div>
    </div>
  );
};

export default MobileWarning;