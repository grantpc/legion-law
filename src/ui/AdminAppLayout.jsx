import { Outlet } from 'react-router-dom';

function AdminAppLayout() {
  return (
    <div className="bg-slate-500">
      <div>Side nav</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminAppLayout;
