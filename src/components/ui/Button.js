export function Button({ className = "", ...props }) {
    return (
      <button
        {...props}
        className={`px-4 py-2 rounded-md font-medium focus:outline-none ${className}`}
      />
    );
  }
  