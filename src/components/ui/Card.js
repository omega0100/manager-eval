export function Card({ className = "", children }) {
    return <div className={`rounded-2xl shadow ${className}`}>{children}</div>;
  }
  export function CardHeader({ className = "", children }) {
    return <div className={`p-6 rounded-t-2xl ${className}`}>{children}</div>;
  }
  export function CardContent({ className = "", children }) {
    return <div className={`p-6 ${className}`}>{children}</div>;
  }
  export function CardTitle({ className = "", children }) {
    return <h2 className={`font-bold ${className}`}>{children}</h2>;
  }
  