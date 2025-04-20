import CorePanelLogin from '@modules/auth/components/CorePanelLoginForm';

const LoginPage = () => {
  return (
    <section className="flex h-screen items-center bg-[#f3f3f7] dark:bg-[var(--colorSecondary)]">
      <div className="container">
        <CorePanelLogin />
      </div>
    </section>
  );
};

export default LoginPage;
