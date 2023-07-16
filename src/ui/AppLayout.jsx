import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="bg-slate-500">
      <div>Top nav</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
