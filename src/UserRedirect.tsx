import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function UserRedirect() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      window.location.href = `https://api.1secstory.com/user?id=${id}`;
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-gray-600">Redirecting...</div>
    </div>
  );
}
