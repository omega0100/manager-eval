export function Textarea({ className = "", ...props }) {
    return (
      <textarea
        {...props}
        className={`border rounded-md p-2 w-full ${className}`}
      />
    );
  }
  