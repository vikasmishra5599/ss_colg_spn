import useCounterAnimation from '../hooks/useCounterAnimation';

export default function StatCounter({ target, suffix, label, className = 'stat' }) {
  const { count, ref } = useCounterAnimation(target);

  if (className === 'pl') {
    return (
      <div className="pl-stat" ref={ref}>
        <div className="pl-num">{count.toLocaleString()}</div>
        <span className="pl-suffix">{suffix}</span>
        <p>{label}</p>
      </div>
    );
  }

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-num">{count.toLocaleString()}</span>
      <span className="stat-suffix">{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
