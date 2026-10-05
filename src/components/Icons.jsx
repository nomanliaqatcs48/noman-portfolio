const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Icon = ({ name, ...rest }) => {
  switch (name) {
    case 'monitor':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></svg>;
    case 'phone':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>;
    case 'code':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></svg>;
    case 'db':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>;
    case 'cart':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><path d="M6 6h15l-1.5 9h-12L6 6zm0 0L5 3H2" /><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /></svg>;
    case 'cloud':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 19h10.5z" /></svg>;
    case 'download':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><path d="M12 3v12m0 0l-5-5m5 5l5-5M5 21h14" /></svg>;
    case 'arrowDown':
      return <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" {...rest}><path d="M7 7l10 10M17 8v9H8" /></svg>;
    case 'arrowUp':
      return <svg viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" {...rest}><path d="M7 17L17 7M8 7h9v9" /></svg>;
    case 'external':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>;
    case 'bolt':
      return <svg viewBox="0 0 24 24" fill="currentColor" {...rest}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>;
    case 'check':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>;
    case 'grad':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>;
    case 'mail':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>;
    case 'linkedin':
      return <svg viewBox="0 0 24 24" fill="currentColor" {...rest}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05C21.6 9.05 22 11.6 22 14.9V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21H10V9.5z" /></svg>;
    case 'call':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>;
    case 'pin':
      return <svg viewBox="0 0 24 24" {...stroke} {...rest}><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case 'menu':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...rest}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    default:
      return null;
  }
};
