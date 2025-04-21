export function Label({ className = "", children, ...props }) {
    return (
      <label {...props} className={`block text-sm ${className}`}>
        {children}
      </label>
    );
  }
  